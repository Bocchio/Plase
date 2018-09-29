import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient }    from '@angular/common/http';

import {ElementRef, Renderer2} from '@angular/core';

import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

import { webglUtils } from '../webgl_utils';


@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {

  gl : WebGLRenderingContext;
  program : WebGLProgram;

  positionLocation : any;
  offsetLocation : any;
  resolutionLocation : any;
  focusLocation : any;
  positionBuffer : any;

  @ViewChild('canvas') canvas : ElementRef;

  constructor(private http: HttpClient,
              private rd: Renderer2) { }

  ngOnInit() {
    this.gl = (<HTMLCanvasElement> this.canvas.nativeElement).getContext("webgl");
    if (!this.gl) {
      // Things went wrong
      return;
    }

    this.insertProgram();

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
    this.drawScreen();

  }

  loadProgram() {
    this.positionLocation = this.gl.getAttribLocation(this.program, "a_position");
    this.offsetLocation = this.gl.getUniformLocation(this.program, "u_offset");
    this.resolutionLocation = this.gl.getUniformLocation(this.program, "u_resolution");
    this.focusLocation = this.gl.getUniformLocation(this.program, "focus");
    // Create a buffer and put three 2d clip space points in it
    this.positionBuffer = this.gl.createBuffer();
  }

  drawScreen() {
    //var prevHeight = gl.canvas.height;
    var vertex = [0.0, 0.0];
    webglUtils.resizeCanvasToDisplaySize(this.gl.canvas);
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    //width = width*(prevCanvasWidth/this.gl.canvas.width);
    var width = 10.0;
    var height = width*(this.gl.canvas.height/this.gl.canvas.width);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.gl.useProgram(this.program);

    this.gl.enableVertexAttribArray(this.positionLocation);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
    webglUtils.setScreen(this.gl, width/2.0, height/2.0);

    var size = 2;          // 2 components per iteration
    var type = this.gl.FLOAT;   // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0;        // start at the beginning of the buffer
    this.gl.vertexAttribPointer(this.positionLocation, size, type, normalize, stride, offset);
    this.gl.uniform2f(this.resolutionLocation, width/2.0, height/2.0);
    this.gl.uniform2fv(this.offsetLocation, vertex);
    this.gl.uniform2f(this.focusLocation, -1.0, 1.0);
    //this.gl.uniform4fv(colorLocation, color);
    var primitiveType = this.gl.TRIANGLES;
    var offset = 0;
    var count = 6;
    this.gl.drawArrays(primitiveType, offset, count);
  }


}
