export class Matrix {

  private _mat : any;
  private _inv : any;
  private _angle : number;

  constructor(mat: any, inv: any) {
    this._mat = mat;
    this._inv = inv || Matrix3.inverse(mat);
    this._angle = 0.0;
  }

  get mat() {
    return this._mat;
  }

  get inv() {
    return this._inv;
  }

  translate(x, y) {
    this._mat = Matrix3.multiply(this._mat, Matrix3.translation(x, y));
    this._inv = Matrix3.multiply(Matrix3.translation(x, y), this._inv);
    //this._inv = Matrix3.multiply(this._inv, Matrix3.translation(-x, -y));
  }

  rotate(angle) {
    this._mat = Matrix3.multiply(this._mat, Matrix3.rotation(angle));
    this._inv = Matrix3.multiply(Matrix3.rotation(angle), this._inv);
    //this._inv = Matrix3.multiply(this._inv, Matrix3.rotation(-angle));
  }

  scale(fx, fy) {
    this._mat = Matrix3.multiply(this._mat, Matrix3.scaling(fx, fy));
    this._inv = Matrix3.multiply(Matrix3.scaling(fx, fy), this._inv);
    //this._inv = Matrix3.multiply(this._inv, Matrix3.scaling(1.0/fx, 1.0/fy));
  }

  scaleC(fx, fy, cx, cy) {
    this.translate(cx, cy);
    this.scale(fx, fy);
    this.translate(-cx, -cy);
  }

  rotateC(angle, cx, cy){
    this.translate(cx, cy);
    this.rotate(angle);
    this.translate(-cx, -cy);
  }

  invert(vector) {
    return Matrix3.multiplyVector(this._inv, vector);
  }

  project(vector) {
    return Matrix3.multiplyVector(this._mat, vector);
  }

};

export class Matrix3 {

  // identity
  static identity() {
    // returns the identity matrix
    return [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1,
    ];
  }

  // 2D matrix function helpers
  static translation(tx, ty) {
    // tx and ty translations => translation matrix
    return [
      1, 0, 0,
      0, 1, 0,
      tx, ty, 1,
    ];
  }

  static rotation(angle) {
    // angle in radians => rotation matrix
    var c = Math.cos(angle);
    var s = Math.sin(angle);
    return [
      c,-s, 0,
      s, c, 0,
      0, 0, 1,
    ];
  }

  static scaling(sx, sy) {
    // sx and sy resize factors => scaling matrix
    return [
      sx, 0, 0,
      0, sy, 0,
      0, 0, 1,
    ];
  }

  static multiply(a, b) {
    // multiplies two matrices
    var a00 = a[0 * 3 + 0];
    var a01 = a[0 * 3 + 1];
    var a02 = a[0 * 3 + 2];
    var a10 = a[1 * 3 + 0];
    var a11 = a[1 * 3 + 1];
    var a12 = a[1 * 3 + 2];
    var a20 = a[2 * 3 + 0];
    var a21 = a[2 * 3 + 1];
    var a22 = a[2 * 3 + 2];
    var b00 = b[0 * 3 + 0];
    var b01 = b[0 * 3 + 1];
    var b02 = b[0 * 3 + 2];
    var b10 = b[1 * 3 + 0];
    var b11 = b[1 * 3 + 1];
    var b12 = b[1 * 3 + 2];
    var b20 = b[2 * 3 + 0];
    var b21 = b[2 * 3 + 1];
    var b22 = b[2 * 3 + 2];
    return [
      b00 * a00 + b01 * a10 + b02 * a20,
      b00 * a01 + b01 * a11 + b02 * a21,
      b00 * a02 + b01 * a12 + b02 * a22,
      b10 * a00 + b11 * a10 + b12 * a20,
      b10 * a01 + b11 * a11 + b12 * a21,
      b10 * a02 + b11 * a12 + b12 * a22,
      b20 * a00 + b21 * a10 + b22 * a20,
      b20 * a01 + b21 * a11 + b22 * a21,
      b20 * a02 + b21 * a12 + b22 * a22,
    ];
  }

  static multiplyVector(a, b) {
    // multiplies a matrix by a vector
    var a00 = a[0 * 3 + 0];
    var a01 = a[0 * 3 + 1];
    var a02 = a[0 * 3 + 2];
    var a10 = a[1 * 3 + 0];
    var a11 = a[1 * 3 + 1];
    var a12 = a[1 * 3 + 2];
    var a20 = a[2 * 3 + 0];
    var a21 = a[2 * 3 + 1];
    var a22 = a[2 * 3 + 2];
    var x = b[0];
    var y = b[1];
    var e = b[2];
    return [
      x * a00 + y * a10 + e * a20,
      x * a01 + y * a11 + e * a21,
      x * a02 + y * a12 + e * a22,
    ];
  }

  static inverse(a) {
      // I use Guassian Elimination to calculate the inverse:
      // (1) 'augment' the matrix (left) by the identity (on the right)
      // (2) Turn the matrix on the left into the identity by elemetry row ops
      // (3) The matrix on the right is the inverse (was the identity matrix)
      // There are 3 elemtary row ops: (I combine b and c in my code)
      // (a) Swap 2 rows
      // (b) Multiply a row by a scalar
      // (c) Add 2 rows

      //create the identity matrix (I), and a copy (C) of the original
      var i=0, ii=0, j=0, e=0, t=0;
      var I = [1.0, 0.0, 0.0,
               0.0, 1.0, 0.0,
               0.0, 0.0, 1.0]
      var C = [a[0], a[1], a[2],
               a[3], a[4], a[5],
               a[6], a[7], a[8]];

      // Perform elementary row operations
      for(i=0; i<3; i+=1){
          // get the element e on the diagonal
          e = C[i*3+i];

          // if we have a 0 on the diagonal (we'll need to swap with a lower row)
          if(e==0){
              //look through every row below the i'th row
              for(ii=i+1; ii<3; ii+=1){
                  //if the ii'th row has a non-0 in the i'th col
                  if(C[ii*3 + i] != 0){
                      //it would make the diagonal have a non-0 so swap it
                      for(j=0; j<3; j++){
                          e = C[i*3 + j];       //temp store i'th row
                          C[i*3 + j] = C[ii*3 + j];//replace i'th row by ii'th
                          C[ii*3 + j] = e;      //repace ii'th by temp
                          e = I[i*3 + j];       //temp store i'th row
                          I[i*3 + j] = I[ii*3 + j];//replace i'th row by ii'th
                          I[ii*3 + j] = e;      //repace ii'th by temp
                      }
                      //don't bother checking other rows since we've swapped
                      break;
                  }
              }
              //get the new diagonal
              e = C[i*3 + i];
              //if it's still 0, not invertable (error)
              if(e==0){return}
          }
          // Scale this row down by e (so we have a 1 on the diagonal)
          for(j=0; j<3; j++){
              C[i*3 + j] = C[i*3 + j]/e; //apply to original matrix
              I[i*3 + j] = I[i*3 + j]/e; //apply to identity
          }

          // Subtract this row (scaled appropriately for each row) from ALL of
          // the other rows so that there will be 0's in this column in the
          // rows above and below this one
          for(ii=0; ii<3; ii++){
              // Only apply to other rows (we want a 1 on the diagonal)
              if(ii==i){continue;}

              // We want to change this element to 0
              e = C[ii*3 + i];

              // Subtract (the row above(or below) scaled by e) from (the
              // current row) but start at the i'th column and assume all the
              // stuff left of diagonal is 0 (which it should be if we made this
              // algorithm correctly)
              for(j=0; j<3; j++){
                  C[ii*3 + j] -= e*C[i*3 + j]; //apply to original matrix
                  I[ii*3 + j] -= e*I[i*3 + j]; //apply to identity
              }
          }
      }

      //we've done all operations, C should be the identity
      //matrix I should be the inverse:
      return I;
  }

};

export function dotprod(a, b) {
  var sum = 0.0;
  for(var i=0; i<a.length; i++)
    sum += a[i]*b[i];
  return sum;
};

export function norm(a) {
  return Math.sqrt(dotprod(a, a));
};

export function unit(a) {
  var abs_a = norm(a);
  var temp = [];
  for(var i=0; i<a.length; i++)
    temp.push(a[i]/abs_a);
  return temp;
}

export function angle2D(a, b) {
  var cos = dotprod(unit(a), unit(b));
  if(cos <= 1.0)
    return Math.acos(cos);
  return 0.0;
};

export function orientation(a, b) {
  // given by the sign of the z magnitud of the cross product axb
  // or the determinant of the transformation matrix i->a j->b
  return Math.sign(a[0]*b[1]-b[0]*a[1]);
}
