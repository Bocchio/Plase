function createShader(gl, type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }

  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

function createProgram(gl, vertexShader, fragmentShader) {
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }

  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}

function main() {
  // Get A WebGL context
  var canvas = document.getElementById("c");
  var gl = canvas.getContext("webgl");
  if (!gl) {
    // Things went wrong
    return;
  }

  var complexFunc = document.getElementById('function');

  var positionLocation;
  var offsetLocation;
  var resolutionLocation;
  // Create a buffer and put three 2d clip space points in it
  var positionBuffer;

  var program = loadFunction(gl);
  loadProgram();

  function loadProgram() {
    positionLocation = gl.getAttribLocation(program, "a_position");
    offsetLocation = gl.getUniformLocation(program, "u_offset");
    resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    focusLocation = gl.getUniformLocation(program, "focus");
    // Create a buffer and put three 2d clip space points in it
    positionBuffer = gl.createBuffer();
  }

  function drawScreen(focus) {
    //var prevHeight = gl.canvas.height;
    webglUtils.resizeCanvasToDisplaySize(gl.canvas);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    //width = width*(prevCanvasWidth/gl.canvas.width);
    height = width*(gl.canvas.height/gl.canvas.width);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);

    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    setScreen(gl, width/2.0, height/2.0);

    var size = 2;          // 2 components per iteration
    var type = gl.FLOAT;   // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(positionLocation, size, type, normalize, stride, offset);
    gl.uniform2f(resolutionLocation, width/2.0, height/2.0);
    gl.uniform2fv(offsetLocation, vertex);
    gl.uniform2f(focusLocation, -1.0, 1.0);
    //gl.uniform4fv(colorLocation, color);
    var primitiveType = gl.TRIANGLES;
    var offset = 0;
    var count = 6;
    gl.drawArrays(primitiveType, offset, count);
  }

  gl.canvas.onmousedown = onmousedown;
  gl.canvas.onmouseup = onmouseup;
  gl.canvas.onmousemove = onmousemove;

  var flagTouch = false;
  var timerID = null;
  var p1 = {x: 0.0,
            y: 0.0};
  var p2 = {x: 0.0,
            y: 0.0};

  gl.canvas.ontouchstart = function (event) {
    switch (event.touches.length) {
      case 1: singleTouchStart(event); break;
      case 2: doubleTouchStart(event); break;
      default: gesture_not_supported(ev); break;
    }
  };

  function gesture_not_supported(event) {
    document.getElementById('calcular').innerHTML = "no soportado";
  }

  function singleTouchStart(event) {
    if(timerID == null) {
      timerID = setTimeout(function () {timerID = null;}, 400);
      //if(event.touches.length == 2)
      //  document.getElementById('calcular').innerHTML = "not plot";
      flagTouch = true;
      event.x = event.touches[0].clientX;
      event.y = event.touches[0].clientY;
      var x =  (event.x/gl.canvas.clientWidth -0.5)*width;
      var y = -(event.y/gl.canvas.clientHeight-0.5)*height;
      // if((y >= vertex[1]) && (x >= vertex[0]) &&
      //    (y <= (vertex[1]+height + vertex[0]*height/width - x*height/width))){
      flag = true;
      currX = event.x;
      currY = event.y;
    }
    else {
      clearTimeout(timerID);
      timerID = null;
      document.getElementById('calcular').innerHTML = "not plot";

      var ev = {x : event.touches[0].clientX,
                y : event.touches[0].clientY,
                deltaY: -1.0};
      zoomCanvas(ev);
    }
  }

  function distance(vec1, vec2) {
    // Helper function to calculate the distance between two vectors on canvas
    return Math.sqrt(Math.pow(vec1.x-vec2.x, 2) + Math.pow(vec1.y-vec2.y, 2));
  };

  function doubleTouchStart(event) {
    p1 = {x: (event.touches[0].clientX/gl.canvas.width - 0.5)*width,
          y: (event.touches[0].clientY/gl.canvas.height - 0.5)*height};
    p2 = {x: (event.touches[1].clientX/gl.canvas.width - 0.5)*width,
          y: (event.touches[1].clientY/gl.canvas.height - 0.5)*height};
  }

  //gl.canvas.ontouchend = onmouseup;
  gl.canvas.ontouchmove = function (event) {
    switch (event.touches.length) {
      case 1: singleTouchMove(event); break;
      case 2: doubleTouchMove(event); break;
      default: gesture_not_supported(ev); break;
    }
  };

  function singleTouchMove(event) {
    if(flagTouch){
      event.x = event.touches[0].clientX;
      event.y = event.touches[0].clientY;
      vertex[0] -= (currX-event.x)*width/gl.canvas.clientWidth;
      vertex[1] += (currY-event.y)*height/gl.canvas.clientHeight;
      currX = event.x;
      currY = event.y;
      drawScreen();
    }
  };

  function doubleTouchMove(event) {
    var p3 = {x: event.touches[0].clientX,
              y: event.touches[0].clientY};
    var p4 = {x: event.touches[1].clientX,
              y: event.touches[1].clientY};

    width = Math.abs(p1.x-p2.x)*gl.canvas.width/Math.abs(p3.x-p4.x);
    height = width*(gl.canvas.height/gl.canvas.width);

    vertex[0] = (p3.x/gl.canvas.width-0.5)*width-p1.x;
    vertex[1] = (p3.y/gl.canvas.height-0.5)*height-p1.y;

    drawScreen();
  };

  gl.canvas.ontouchend = function (event) {
    flagTouch = false;
  };


  var flag = false;
  var currX;
  var currY;
  var width = 10.0;
  var height = width*(gl.canvas.height/gl.canvas.width);

  webglUtils.resizeCanvasToDisplaySize(gl.canvas);
  var prevCanvasWidth = gl.canvas.width;
  var prevCanvasHeight = gl.canvas.height;

  var vertex = [0.0, 0.0];


  function onmousedown(event) {
    var x =  (event.x/gl.canvas.clientWidth -0.5)*width;
    var y = -(event.y/gl.canvas.clientHeight-0.5)*height;
    // if((y >= vertex[1]) && (x >= vertex[0]) &&
    //    (y <= (vertex[1]+height + vertex[0]*height/width - x*height/width))){
    flag = true;
    currX = event.x;
    currY = event.y;
    // }
  }

  function onmouseup(event) {
    flag = false;
  }

  function onmousemove(event) {
    if(flag){
      vertex[0] -= (currX-event.x)*width/gl.canvas.clientWidth;
      vertex[1] += (currY-event.y)*height/gl.canvas.clientHeight;
      currX = event.x;
      currY = event.y;
      drawScreen();
    }
  }

  window.onresize = function (event) {
    //prevCanvasWidth = gl.canvas.width;
    //prevCanvasHeight = gl.canvas.height;
    drawScreen();
  }

  gl.canvas.onwheel = zoomCanvas;
  complexFunc.onchange = changedFunction;

  function zoomCanvas(event, factor) {
    var propX = event.x/gl.canvas.clientWidth;
    var propY = event.y/gl.canvas.clientHeight;
    var currX =   (propX-0.5)*width - vertex[0];
    var currY =  -(propY-0.5)*height - vertex[1];
    var factor = Math.sign(event.deltaY) * 0.15;
    width *= (1.0 + factor);
    height = width*(gl.canvas.height/gl.canvas.width);
    vertex[0] += (propX-0.5)*width*factor;
    vertex[1] -= (propY-0.5)*height*factor;

    drawScreen();
  }

  function changedFunction() {
    var myfun;
    try{
      myfun = parser.parse(complexFunc.value);
      console.log(myfun);
      program = loadFunction(gl, myfun);
      loadProgram();
      drawScreen();
    }
    catch(err){

      console.log("can't parse "+complexFunc.value);
    }

  }


  drawScreen();
}

function setScreen(gl, width, height) {
  var positions = [
    -width, -height,
    -width, height,
    width, -height,
    width, -height,
    -width, height,
    width, height
  ];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
}

var parserSource = document.getElementById("parsing_rules").text;
var parser = eval(peg.generate(parserSource));

main();

function loadFunction(gl, myfun) {
  var funofz = "\nvec2 funofz(vec2 z) {\nreturn "+ (myfun || "z")+";\n}";
  var funsSource = document.getElementById("usefulFunctions").text + funofz;
  var vertexShaderSource =  document.getElementById("2d-vertex-shader").text;
  var fragmentShaderSource = funsSource + document.getElementById("2d-fragment-shader").text;

  var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  return createProgram(gl, vertexShader, fragmentShader);
}
