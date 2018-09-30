// an attribute will receive data from a buffer
precision highp float;
attribute vec2 position;

uniform mat3 u_projection;
uniform vec2 u_aspect_ratio;
varying vec2 pos;
void main() {
    pos = position*u_aspect_ratio;
    gl_Position = vec4(position, 0.0, 1.0);
}
