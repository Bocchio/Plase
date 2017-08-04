document.addEventListener("DOMContentLoaded", function(){
  var calcular = document.getElementById('calcular');
  var canvas = document.getElementById('plot');
  var slider = document.getElementById('quality');
  slider.value = 0.5;
  var density = document.getElementById('density');
  var complexFunc = document.getElementById('function');
  var context = canvas.getContext("2d");
  var quality = Number(slider.value);
  canvas.width  = Math.round(window.innerWidth*quality);
  canvas.height = Math.round(canvas.width*(window.innerHeight/window.innerWidth));
  var imgData = context.createImageData(canvas.width, canvas.height);
  var resp = math.compile("z");

  var x = {};
  x.min = -15.0;
  x.max = 15.0;
  x.range = x.max - x.min;

  var y = {};
  y.min = -canvas.height/(2*(canvas.width/x.range));
  y.max = canvas.height/(2*(canvas.width/x.range));
  y.range= y.max - y.min;

  var scope = {z: math.complex(x.min, x.max)};

  var timerID;

  calcular.onclick = fillCanvas;
  slider.onchange = function () {quality = Number(slider.value); resizeCanvas(undefined);};
  complexFunc.onchange = changedFunction;
  window.onresize = resizeCanvas;

  var moving = false;
  canvas.onmousemove = moveCanvas;
  canvas.onmousedown = startMoveCanvas;
  canvas.onmouseup = endMoveCanvas;
  canvas.onmouseout = endMoveCanvas;
  canvas.onwheel = zoomCanvas;

  function fillCanvas()
  {
    // console.log(canvas.width);
    // console.log(canvas.height);
    for (var i=0; i < imgData.data.length; i+=4){
      resp.eval(scope);
      var pixel = i/4;
      var xa = (pixel%imgData.width)*x.range/imgData.width + x.min;
      var ya = Math.floor(pixel/imgData.width)*y.range/imgData.height + y.min;
      scope.z = math.complex(xa, ya);
      var w = resp.eval(scope);
      var angle = w.arg()/(math.tau) + 0.5;
      var rgb = hslToRgb(angle, 1.0, lum(w.abs()));
      //console.log(rgb);
      imgData.data[i+0] = rgb[0]; //255*Math.floor(i/imgData.width)/imgData.height;
      imgData.data[i+1] = rgb[1]; //0;
      imgData.data[i+2] = rgb[2]; //0;
      imgData.data[i+3] = 255;
    }


    // square for scale
    var row = imgData.width;
    var offset_x = Math.round(canvas.width/10)*4;
    var offset_y = Math.round(2*canvas.width/10)*4*row;
    var sx = Math.round(canvas.width/10);
    var sy = Math.round(canvas.width/10);
    for (var i=0; i < sx*sy; i++){
      imgData.data[offset_x + offset_y + 4*(i%sx) + 4*row*Math.floor(i/sy) + 0] = 0;
      imgData.data[offset_x + offset_y + 4*(i%sx) + 4*row*Math.floor(i/sy) + 1] = 0;
      imgData.data[offset_x + offset_y + 4*(i%sx) + 4*row*Math.floor(i/sy) + 2] = 0;
      imgData.data[offset_x + offset_y + 4*(i%sx) + 4*row*Math.floor(i/sy) + 3] = 255;
    }
    context.putImageData(imgData, 0, 0);
  }

  function clamp(num, min, max) {
    if(num < min)
      return min
    else if(num > max)
      return max
    return num;
  }

  function lum(num) {
    //var d = 1-Number(density.value);
    return 0.5-(Math.log2(num)%1)/3.0;
    //return math.atan(math.log(num))/math.pi+0.5
  }

  function moveCanvas(event) {
    if(moving){
      var movX = -(event.clientX - prevX)*quality*x.range/(canvas.width);
      var movY = -(event.clientY - prevY)*quality*y.range/(canvas.height);
      prevX = event.clientX;
      prevY = event.clientY;

      x.min += movX
      x.max += movX;

      y.min += movY;
      y.max += movY;
      fillCanvas();
    }
  }

  function startMoveCanvas(event) {
    moving = true;
    quality = 0.1;
    prevX = event.clientX;
    prevY = event.clientY;
    resizeCanvas(undefined);
  }

  function endMoveCanvas(event) {
    moving = false;
    quality = Number(slider.value);
    resizeCanvas(undefined);
  }

  function zoomCanvas(event) {
    var propX = event.clientX*quality/(canvas.width);
    var propY = event.clientY*quality/(canvas.height);
    var currX =  propX*x.range + x.min;
    var currY =  propY*y.range + y.min;
    var factor = Math.sign(event.deltaY) * 0.15;
    x.range /= 1.0 - factor;
    x.min = currX - propX*x.range;
    x.max = currX + (1-propX)*x.range;

    y.range /= 1.0 - factor;
    y.min = currY - propY*y.range;
    y.max = currY + (1-propY)*y.range;
    quality = 0.1;
    if(quality != Number(slider.value))
      resizeCanvas(undefined);
    else
      fillCanvas();
    window.clearTimeout(timerID);
    timerID = window.setTimeout(function () {
                      quality = Number(slider.value);
                      console.log("hola");
                      resizeCanvas(undefined);}, 60);
    //console.log(event.deltaY, currX, currY);
  }

  function changedFunction() {
    try{
      resp = math.compile(complexFunc.value.toLowerCase());
      fillCanvas();
    }
    catch(err){
        console.log("no dice!");
    }
  }

  function resizeCanvas(event) {
    // var img = new Image();
    // img.src = canvas;
    // img.onload = function (){

    imgData = undefined;

    canvas.width  = Math.round(window.innerWidth*quality);
    canvas.height = Math.round(canvas.width*(window.innerHeight/window.innerWidth));

    // x.min = -15.0;
    // x.max = 15.0;
    // x.range = x.max - x.min;

    var center = (y.min + y.max)/2;
    y.min = center - canvas.height/(2*(canvas.width/x.range));
    y.max = center + canvas.height/(2*(canvas.width/x.range));
    y.range = y.max - y.min;

    //  context.drawImage(img, 0, 0, canvas.width, canvas.height);
    //  imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    // }
    // Ineficiente, retocar para calcular solamente lo extra
    imgData = context.createImageData(canvas.width, canvas.height);
    fillCanvas();
  };
});


function hslToRgb(h, s, l){
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
