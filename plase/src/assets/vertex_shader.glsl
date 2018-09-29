// an attribute will receive data from a buffer
  precision mediump float;
  attribute vec2 a_position;

  uniform vec2 u_offset;
  uniform vec2 u_resolution;
  varying vec2 coords;
  // all shaders have a main function
  void main() {
    // gl_Position is a special variable a vertex shader
    // is responsible for setting
    coords = a_position-u_offset;
    gl_Position = vec4(a_position/u_resolution, 0, 1);
  }
