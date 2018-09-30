import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient }    from '@angular/common/http';

import {ElementRef, Renderer2} from '@angular/core';

import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

import { Matrix, Matrix3, norm, angle2D, dotprod, orientation } from '../matrix';

import { webglUtils } from '../webgl_utils';


@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class PlotComponent implements OnInit {

  gl : WebGLRenderingContext;
  program : WebGLProgram;

  positionLocation: any;
  projectionLocation: any;
  aspectRatioLocation: any;
  densityLocation: any;
  gridDensityLocation: any;
  gridSeparationLocation: any;
  positionBuffer: any;

  vertex : Array<number>;

  currX : number;
  currY : number;

  width : number;
  height : number;

  timerID : number;

  mensaje : string;

  p1 : any;
  p2 : any;

  touches : Array<any>;

  mouseState : any;
  movingScreen : any;
  projection_matrix : any;
  flipScreen : any;
  aspectRatio : any;
  adjustScreen : any;

  quality: number = 1.0;
  density: number = 15.0;
  gridDensity: number = 15.0;
  gridSeparation: number = 1.0;

  @ViewChild('canvas') canvas : ElementRef;

  constructor(private http: HttpClient,
              private rd: Renderer2) { }

  ngOnInit() {
    this.gl = (<HTMLCanvasElement> this.canvas.nativeElement).getContext("webgl");
    if (!this.gl) {
      // Things went wrong
      return;
    }

    this.vertex = [0.0, 0.0];
    this.width = 10.0;

    webglUtils.setUpRendering(this.gl, this.quality);

    this.insertProgram();

    this.mensaje = 'Hola';

    this.mouseState = Object.create(null);
    this.movingScreen = false;
    this.projection_matrix = new Matrix(Matrix3.identity(), Matrix3.identity());
    this.flipScreen = Matrix3.scaling(2.0, -2.0);
    this.flipScreen = Matrix3.multiply(this.flipScreen,
                                       Matrix3.translation(-this.gl.canvas.clientWidth/2.0,
                                                           -this.gl.canvas.clientHeight/2.0));
    this.aspectRatio = this.gl.canvas.clientHeight/this.gl.canvas.clientWidth;
    this.adjustScreen = Matrix3.scaling(1.0/this.gl.canvas.clientWidth, this.aspectRatio/this.gl.canvas.clientHeight);
    this.touches = [];

  }

  ontouchstart(event) {
    this.mensaje = 'Touch start';
    for(var i=0; i<event.changedTouches.length; i++)
      this.touches.push(event.changedTouches[i]);
    this.touches.sort(function(a,b) {return a.identifier-b.identifier;});
  }

  onResize(event) {
    webglUtils.setUpRendering(this.gl, this.quality);
    this.flipScreen = Matrix3.scaling(2.0, -2.0);
    this.flipScreen = Matrix3.multiply(this.flipScreen,
                                       Matrix3.translation(-this.gl.canvas.clientWidth/2.0,
                                                           -this.gl.canvas.clientHeight/2.0));
    this.aspectRatio = this.gl.canvas.clientHeight/this.gl.canvas.clientWidth;
    this.adjustScreen = Matrix3.scaling(1.0/this.gl.canvas.clientWidth,
                                        this.aspectRatio/this.gl.canvas.clientHeight);
    this.draw();
  }

  ontouchend(event) {
    for(var i=0; i < event.changedTouches.length; i++){
      this.touches = this.touches.filter(
        (touch) => {
          return touch.identifier != event.changedTouches[i].identifier;
        });
    }
  }

  ontouchmove(event) {
    if(event.touches.length == 2) {
      var d1 = [this.touches[0].clientX, this.touches[0].clientY, 1.0];
      var d2 = [this.touches[1].clientX, this.touches[1].clientY, 1.0];
      d1 = Matrix3.multiplyVector(this.flipScreen, d1);
      d2 = Matrix3.multiplyVector(this.flipScreen, d2);

      var d3 = [event.touches[0].clientX, event.touches[0].clientY, 1.0];
      var d4 = [event.touches[1].clientX, event.touches[1].clientY, 1.0];
      d3 = Matrix3.multiplyVector(this.flipScreen, d3);
      d4 = Matrix3.multiplyVector(this.flipScreen, d4);

      var v1 = [d1[0]-d2[0], d1[1]-d2[1]];
      var v2 = [d3[0]-d4[0], d3[1]-d4[1]];

      var angle = angle2D(v1, v2)*orientation(v1, v2);
      var dist_factor = norm(v1)/norm(v2);

      var pivot = [(d1[0]+d2[0])/2.0, (d1[1]+d2[1])/2.0, 1.0];
      pivot = Matrix3.multiplyVector(this.adjustScreen, pivot);

      if(!isNaN(dist_factor))
        this.projection_matrix.scaleC(dist_factor, dist_factor, pivot[0], pivot[1]);

      if(!isNaN(angle))
        this.projection_matrix.rotateC(angle, pivot[0], pivot[1]);
    }

    if(event.touches.length >= 1){
      var displacement = [0.0, 0.0, 1.0];
      for(var i=0; i < event.touches.length; i++){
        displacement[0] += event.touches[i].clientX - this.touches[i].clientX;
        displacement[1] -= event.touches[i].clientY - this.touches[i].clientY;
      }
      displacement[0] /= -event.touches.length/2.0;
      displacement[1] /= -event.touches.length/2.0;
      displacement = Matrix3.multiply(this.adjustScreen, displacement);

      this.projection_matrix.translate(displacement[0], displacement[1]);
    }

    for(var i=0; i < event.changedTouches.length; i++){
    for(var k=0; k < this.touches.length; k++)
      if(this.touches[k].identifier == event.changedTouches[i].identifier){
        this.touches[k] = event.changedTouches[i];
        break;
      }
    }

    this.draw();
  }

  async insertProgram() {
    let vertexRequest = this.http.get('assets/vertex_shader.glsl',
                                     { responseType: 'text' });
    let fragmentRequest = this.http.get('assets/fragment_shader.glsl',
                                       { responseType: 'text' });
    var responses = forkJoin([vertexRequest, fragmentRequest]).toPromise();

    var vertexSource = (await responses)[0];
    var fragmentSource = (await responses)[1];

    var vertexShader = webglUtils.createShader(this.gl,
                                               this.gl.VERTEX_SHADER,
                                               vertexSource);
    var fragmentShader = webglUtils.createShader(this.gl,
                                                 this.gl.FRAGMENT_SHADER,
                                                 fragmentSource);

    this.program = webglUtils.createProgram(this.gl, vertexShader, fragmentShader);

    this.loadProgram();
    this.draw();

  }

  loadProgram() {
    this.positionLocation = this.gl.getAttribLocation(this.program, "position");
    this.projectionLocation = this.gl.getUniformLocation(this.program, "u_projection");
    this.aspectRatioLocation = this.gl.getUniformLocation(this.program, "u_aspect_ratio");
    this.densityLocation = this.gl.getUniformLocation(this.program, "u_density");
    this.gridDensityLocation = this.gl.getUniformLocation(this.program, "u_gridDensity");
    this.gridSeparationLocation = this.gl.getUniformLocation(this.program, "u_gridSeparation");
    this.positionBuffer = this.gl.createBuffer();

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
    var positions = [ -1.0, -1.0,
                      -1.0,  1.0,
                       1.0,  1.0,
                       1.0,  1.0,
                      -1.0, -1.0,
                       1.0, -1.0];

    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW);
    this.gl.useProgram(this.program);
    this.gl.enableVertexAttribArray(this.positionLocation);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
    this.gl.vertexAttribPointer(this.positionLocation, 2, this.gl.FLOAT, false, 0, 0);
  }

  draw() {
    this.gl.uniformMatrix3fv(this.projectionLocation, false, this.projection_matrix.mat);
    this.mensaje = '' + this.gl.canvas.clientWidth/this.gl.canvas.clientHeight;
    this.gl.uniform2f(this.aspectRatioLocation, this.gl.canvas.clientWidth/this.gl.canvas.clientHeight,
                                                1.0);
    this.gl.uniform1f(this.densityLocation, 20.0-this.density);
    this.gl.uniform1f(this.gridDensityLocation, 20.0-this.gridDensity);
    this.gl.uniform1f(this.gridSeparationLocation, this.gridSeparation);
    //gl.uniform3fv(colorLocation, background_color);
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
  }


}
