#define PI 3.1415926535897932384626433832795
#define E  2.71828182845904523536
precision highp float;
const float inf = 1.0/0.0;

uniform mat3 u_projection;
uniform float u_density;
uniform float u_gridDensity;
uniform float u_gridSeparation;
varying vec2 pos;

vec4 randomColor(vec2 co) {
    return vec4(fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453),
        fract(sin(dot(co.xy, vec2(78.9898,12.233))) * 43758.5453),
        fract(sin(dot(co.xy, vec2(2.9898,8.233))) * 43758.5453),
        1.0);
}

float cAbs(vec2 z){
    return sqrt(z.x * z.x + z.y * z.y);
}

float cArg(vec2 z){
    return atan(z.y, z.x);
}

vec2 cPow(vec2 z, float a){
    float rho = pow(cAbs(z), a);
    float theta = a*cArg(z);
    return vec2(rho*cos(theta),rho*sin(theta));
}

vec2 cPow(float a, vec2 z) {
    return vec2(0.0, 0.0);
}

vec2 cPow(vec2 z, vec2 w){
    if(w.y == 0.0)
    return cPow(z, w.x);
    return vec2(0.0, 0.0);
}

vec2 cMul(vec2 z1, vec2 z2){
    return vec2(z1.x * z2.x - z1.y * z2.y, z1.x * z2.y + z1.y * z2.x);
}

vec2 cDiv(vec2 z, vec2 w) {
    if (w.y == 0.0) {
        return vec2(z.x / w.x, z.y / w.x);
    }
    if (w.x == 0.0) {
        return vec2(z.y / w.y, -(z.x / w.y));
    }

    float r = w.x * w.x + w.y * w.y;
    return vec2((z.x * w.x + z.y * w.y) / r,
        (z.y * w.x - z.x * w.y) / r);
}

float cosh(float x){
    return (pow(E,x)+pow(E,-x))*0.5;
}

float sinh(float x){
    return (pow(E,x)-pow(E,-x))*0.5;
}

vec2 cSin(vec2 z) {
    return vec2(sin(z.x) * cosh(z.y), cos(z.x) * sinh(z.y));
}

vec2 cCos(vec2 z) {
    return vec2(cos(z.x) * cosh(z.y), sin(z.x) * sinh(z.y));
}

vec2 cExp(vec2 z) {
    return exp(z.x) * vec2(cos(z.y), sin(z.y));
}

vec2 cExp(float x) {
    return vec2(exp(x), 0.0);
}

float hue2rgb(vec3 pqt) {
    if(pqt.z < 0.0) pqt.z += 1.0;
    if(pqt.z > 1.0) pqt.z -= 1.0;
    if(pqt.z < 1.0/6.0) return pqt.x + (pqt.y - pqt.x) * 6.0 * pqt.z;
    if(pqt.z < 1.0/2.0) return pqt.y;
    if(pqt.z < 2.0/3.0) return pqt.x + (pqt.y - pqt.x) * (2.0/3.0 - pqt.z) * 6.0;
    return pqt.x;
}

vec3 hslToRgb(vec3 hsl) {
    vec3 rgb;
    vec2 pq;

    if(hsl.y == 0.0)
    rgb = vec3(hsl.z, hsl.z, hsl.z); // achromatic

    pq.y = hsl.z < 0.5 ? hsl.z * (1.0 + hsl.y) : hsl.z + hsl.y - hsl.z * hsl.y;
    pq.x = 2.0 * hsl.z - pq.y;
    rgb = vec3(hue2rgb(vec3(pq, hsl.x + 1.0/3.0)),
        hue2rgb(vec3(pq, hsl.x)),
        hue2rgb(vec3(pq, hsl.x - 1.0/3.0)));
    return rgb;
}

float lum(vec2 z) {
    float num = cAbs(z);
    if(num >= inf)
    return 1.0;
    float near2n = fract(log2(cAbs(z)));
    //return pow(abs(1.0-near2n), u_density)/2.0 + 0.5;
    return pow(abs(2.0*(near2n-0.5)), u_density);
    //return atan(log(cAbs(z)))/PI+0.5;
}

float gridLum(vec2 z) {
    float x = 1.0-pow(2.0*(fract(z.x/u_gridSeparation)-0.5),2.0);
    float y = 1.0-pow(2.0*(fract(z.y/u_gridSeparation)-0.5),2.0);
    return pow(1.0-x*y, u_gridDensity);
}

vec2 funofz(vec2 z) {
    return z;
}

// fragment shaders don't have a default precision so we need
// to pick one. mediump is a good default
void main() {
    vec2 z = (u_projection*vec3(pos, 1.0)).xy;
    vec2 w = funofz(z);
    float hue = (cArg(w)+PI)/(2.0*PI);
    vec3 rgb = hslToRgb(vec3(hue, 0.5, 0.5 - 0.25*gridLum(w)));
    rgb *= 1.0 - lum(w);
    rgb += lum(w)*vec3(1.0);
    gl_FragColor = vec4(rgb, 1.0);
}
