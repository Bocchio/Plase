(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-plot></app-plot>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'plase';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _plot_plot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plot/plot.component */ "./src/app/plot/plot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _plot_plot_component__WEBPACK_IMPORTED_MODULE_4__["PlotComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/matrix.ts":
/*!***************************!*\
  !*** ./src/app/matrix.ts ***!
  \***************************/
/*! exports provided: Matrix, Matrix3, dotprod, norm, unit, angle2D, orientation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return Matrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix3", function() { return Matrix3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dotprod", function() { return dotprod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "norm", function() { return norm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit", function() { return unit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle2D", function() { return angle2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orientation", function() { return orientation; });
var Matrix = /** @class */ (function () {
    function Matrix(mat, inv) {
        this._mat = mat;
        this._inv = inv || Matrix3.inverse(mat);
        this._angle = 0.0;
    }
    Object.defineProperty(Matrix.prototype, "mat", {
        get: function () {
            return this._mat;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "inv", {
        get: function () {
            return this._inv;
        },
        enumerable: true,
        configurable: true
    });
    Matrix.prototype.translate = function (x, y) {
        this._mat = Matrix3.multiply(this._mat, Matrix3.translation(x, y));
        this._inv = Matrix3.multiply(Matrix3.translation(x, y), this._inv);
        //this._inv = Matrix3.multiply(this._inv, Matrix3.translation(-x, -y));
    };
    Matrix.prototype.rotate = function (angle) {
        this._mat = Matrix3.multiply(this._mat, Matrix3.rotation(angle));
        this._inv = Matrix3.multiply(Matrix3.rotation(angle), this._inv);
        //this._inv = Matrix3.multiply(this._inv, Matrix3.rotation(-angle));
    };
    Matrix.prototype.scale = function (fx, fy) {
        this._mat = Matrix3.multiply(this._mat, Matrix3.scaling(fx, fy));
        this._inv = Matrix3.multiply(Matrix3.scaling(fx, fy), this._inv);
        //this._inv = Matrix3.multiply(this._inv, Matrix3.scaling(1.0/fx, 1.0/fy));
    };
    Matrix.prototype.scaleC = function (fx, fy, cx, cy) {
        this.translate(cx, cy);
        this.scale(fx, fy);
        this.translate(-cx, -cy);
    };
    Matrix.prototype.rotateC = function (angle, cx, cy) {
        this.translate(cx, cy);
        this.rotate(angle);
        this.translate(-cx, -cy);
    };
    Matrix.prototype.invert = function (vector) {
        return Matrix3.multiplyVector(this._inv, vector);
    };
    Matrix.prototype.project = function (vector) {
        return Matrix3.multiplyVector(this._mat, vector);
    };
    return Matrix;
}());

;
var Matrix3 = /** @class */ (function () {
    function Matrix3() {
    }
    // identity
    Matrix3.identity = function () {
        // returns the identity matrix
        return [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1,
        ];
    };
    // 2D matrix function helpers
    Matrix3.translation = function (tx, ty) {
        // tx and ty translations => translation matrix
        return [
            1, 0, 0,
            0, 1, 0,
            tx, ty, 1,
        ];
    };
    Matrix3.rotation = function (angle) {
        // angle in radians => rotation matrix
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        return [
            c, -s, 0,
            s, c, 0,
            0, 0, 1,
        ];
    };
    Matrix3.scaling = function (sx, sy) {
        // sx and sy resize factors => scaling matrix
        return [
            sx, 0, 0,
            0, sy, 0,
            0, 0, 1,
        ];
    };
    Matrix3.multiply = function (a, b) {
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
    };
    Matrix3.multiplyVector = function (a, b) {
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
    };
    Matrix3.inverse = function (a) {
        // I use Guassian Elimination to calculate the inverse:
        // (1) 'augment' the matrix (left) by the identity (on the right)
        // (2) Turn the matrix on the left into the identity by elemetry row ops
        // (3) The matrix on the right is the inverse (was the identity matrix)
        // There are 3 elemtary row ops: (I combine b and c in my code)
        // (a) Swap 2 rows
        // (b) Multiply a row by a scalar
        // (c) Add 2 rows
        //create the identity matrix (I), and a copy (C) of the original
        var i = 0, ii = 0, j = 0, e = 0, t = 0;
        var I = [1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0];
        var C = [a[0], a[1], a[2],
            a[3], a[4], a[5],
            a[6], a[7], a[8]];
        // Perform elementary row operations
        for (i = 0; i < 3; i += 1) {
            // get the element e on the diagonal
            e = C[i * 3 + i];
            // if we have a 0 on the diagonal (we'll need to swap with a lower row)
            if (e == 0) {
                //look through every row below the i'th row
                for (ii = i + 1; ii < 3; ii += 1) {
                    //if the ii'th row has a non-0 in the i'th col
                    if (C[ii * 3 + i] != 0) {
                        //it would make the diagonal have a non-0 so swap it
                        for (j = 0; j < 3; j++) {
                            e = C[i * 3 + j]; //temp store i'th row
                            C[i * 3 + j] = C[ii * 3 + j]; //replace i'th row by ii'th
                            C[ii * 3 + j] = e; //repace ii'th by temp
                            e = I[i * 3 + j]; //temp store i'th row
                            I[i * 3 + j] = I[ii * 3 + j]; //replace i'th row by ii'th
                            I[ii * 3 + j] = e; //repace ii'th by temp
                        }
                        //don't bother checking other rows since we've swapped
                        break;
                    }
                }
                //get the new diagonal
                e = C[i * 3 + i];
                //if it's still 0, not invertable (error)
                if (e == 0) {
                    return;
                }
            }
            // Scale this row down by e (so we have a 1 on the diagonal)
            for (j = 0; j < 3; j++) {
                C[i * 3 + j] = C[i * 3 + j] / e; //apply to original matrix
                I[i * 3 + j] = I[i * 3 + j] / e; //apply to identity
            }
            // Subtract this row (scaled appropriately for each row) from ALL of
            // the other rows so that there will be 0's in this column in the
            // rows above and below this one
            for (ii = 0; ii < 3; ii++) {
                // Only apply to other rows (we want a 1 on the diagonal)
                if (ii == i) {
                    continue;
                }
                // We want to change this element to 0
                e = C[ii * 3 + i];
                // Subtract (the row above(or below) scaled by e) from (the
                // current row) but start at the i'th column and assume all the
                // stuff left of diagonal is 0 (which it should be if we made this
                // algorithm correctly)
                for (j = 0; j < 3; j++) {
                    C[ii * 3 + j] -= e * C[i * 3 + j]; //apply to original matrix
                    I[ii * 3 + j] -= e * I[i * 3 + j]; //apply to identity
                }
            }
        }
        //we've done all operations, C should be the identity
        //matrix I should be the inverse:
        return I;
    };
    return Matrix3;
}());

;
function dotprod(a, b) {
    var sum = 0.0;
    for (var i = 0; i < a.length; i++)
        sum += a[i] * b[i];
    return sum;
}
;
function norm(a) {
    return Math.sqrt(dotprod(a, a));
}
;
function unit(a) {
    var abs_a = norm(a);
    var temp = [];
    for (var i = 0; i < a.length; i++)
        temp.push(a[i] / abs_a);
    return temp;
}
function angle2D(a, b) {
    var cos = dotprod(unit(a), unit(b));
    if (cos <= 1.0)
        return Math.acos(cos);
    return 0.0;
}
;
function orientation(a, b) {
    // given by the sign of the z magnitud of the cross product axb
    // or the determinant of the transformation matrix i->a j->b
    return Math.sign(a[0] * b[1] - b[0] * a[1]);
}


/***/ }),

/***/ "./src/app/plot/plot.component.css":
/*!*****************************************!*\
  !*** ./src/app/plot/plot.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#canvas {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 90%;\n  background-color: red;\n  touch-action: none;\n}\n\n#importante {\n  position: fixed;\n  bottom: 0;\n}\n"

/***/ }),

/***/ "./src/app/plot/plot.component.html":
/*!******************************************!*\
  !*** ./src/app/plot/plot.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #canvas id=\"canvas\"\n  (touchstart)=\"ontouchstart($event)\"\n  (touchmove)=\"ontouchmove($event)\"\n  (touchend)=\"ontouchend($event)\">\n  fallback\n</canvas>\n<p id=\"importante\" > {{mensaje}} </p>\n"

/***/ }),

/***/ "./src/app/plot/plot.component.ts":
/*!****************************************!*\
  !*** ./src/app/plot/plot.component.ts ***!
  \****************************************/
/*! exports provided: PlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotComponent", function() { return PlotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../matrix */ "./src/app/matrix.ts");
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webgl_utils */ "./src/app/webgl_utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var PlotComponent = /** @class */ (function () {
    function PlotComponent(http, rd) {
        this.http = http;
        this.rd = rd;
        this.quality = 1.0;
        this.density = 15.0;
        this.gridDensity = 15.0;
        this.gridSeparation = 1.0;
    }
    PlotComponent.prototype.ngOnInit = function () {
        this.gl = this.canvas.nativeElement.getContext("webgl");
        if (!this.gl) {
            // Things went wrong
            return;
        }
        this.vertex = [0.0, 0.0];
        this.width = 10.0;
        _webgl_utils__WEBPACK_IMPORTED_MODULE_4__["webglUtils"].setUpRendering(this.gl, this.quality);
        this.insertProgram();
        this.mensaje = 'Hola';
        this.mouseState = Object.create(null);
        this.movingScreen = false;
        this.projection_matrix = new _matrix__WEBPACK_IMPORTED_MODULE_3__["Matrix"](_matrix__WEBPACK_IMPORTED_MODULE_3__["Matrix3"].identity(), _matrix__WEBPACK_IMPORTED_MODULE_3__["Matrix3"].identity());
        this.flipScreen = _matrix__WEBPACK_IMPORTED_MODULE_3__["Matrix3"].scaling(2.0, -2.0);
        this.flipScreen = _matrix__WEBPACK_IMPORTED_MODULE_3__["Matrix3"].multiply(this.flipScreen, _matrix__WEBPACK_IMPORTED_MODULE_3__["Matrix3"].translation(-this.gl.canvas.clientWidth / 2.0, -this.gl.canvas.clientHeight / 2.0));
        this.aspectRatio = this.gl.canvas.clientHeight / this.gl.canvas.clientWidth;
        this.adjustScreen = _matrix__WEBPACK_IMPORTED_MODULE_3__["Matrix3"].scaling(1.0 / this.gl.canvas.clientWidth, this.aspectRatio / this.gl.canvas.clientHeight);
        this.touches = [];
    };
    PlotComponent.prototype.ontouchstart = function (event) {
        this.mensaje = 'Touch start';
        for (var i = 0; i < event.changedTouches.length; i++)
            this.touches.push(event.changedTouches[i]);
        this.touches.sort(function (a, b) { return a.identifier - b.identifier; });
    };
    PlotComponent.prototype.onResize = function (event) {
        _webgl_utils__WEBPACK_IMPORTED_MODULE_4__["webglUtils"].setUpRendering(this.gl, this.quality);
        this.flipScreen = _matrix__WEBPACK_IMPORTED_MODULE_3__["Matrix3"].scaling(2.0, -2.0);
        this.flipScreen = _matrix__WEBPACK_IMPORTED_MODULE_3__["Matrix3"].multiply(this.flipScreen, _matrix__WEBPACK_IMPORTED_MODULE_3__["Matrix3"].translation(-this.gl.canvas.clientWidth / 2.0, -this.gl.canvas.clientHeight / 2.0));
        this.aspectRatio = this.gl.canvas.clientHeight / this.gl.canvas.clientWidth;
        this.adjustScreen = _matrix__WEBPACK_IMPORTED_MODULE_3__["Matrix3"].scaling(1.0 / this.gl.canvas.clientWidth, this.aspectRatio / this.gl.canvas.clientHeight);
        this.draw();
    };
    PlotComponent.prototype.ontouchend = function (event) {
        for (var i = 0; i < event.changedTouches.length; i++) {
            this.touches = this.touches.filter(function (touch) {
                return touch.identifier != event.changedTouches[i].identifier;
            });
        }
    };
    PlotComponent.prototype.ontouchmove = function (event) {
        if (event.touches.length == 2) {
            var d1 = [this.touches[0].clientX, this.touches[0].clientY, 1.0];
            var d2 = [this.touches[1].clientX, this.touches[1].clientY, 1.0];
            d1 = _matrix__WEBPACK_IMPORTED_MODULE_3__["Matrix3"].multiplyVector(this.flipScreen, d1);
            d2 = _matrix__WEBPACK_IMPORTED_MODULE_3__["Matrix3"].multiplyVector(this.flipScreen, d2);
            var d3 = [event.touches[0].clientX, event.touches[0].clientY, 1.0];
            var d4 = [event.touches[1].clientX, event.touches[1].clientY, 1.0];
            d3 = _matrix__WEBPACK_IMPORTED_MODULE_3__["Matrix3"].multiplyVector(this.flipScreen, d3);
            d4 = _matrix__WEBPACK_IMPORTED_MODULE_3__["Matrix3"].multiplyVector(this.flipScreen, d4);
            var v1 = [d1[0] - d2[0], d1[1] - d2[1]];
            var v2 = [d3[0] - d4[0], d3[1] - d4[1]];
            var angle = Object(_matrix__WEBPACK_IMPORTED_MODULE_3__["angle2D"])(v1, v2) * Object(_matrix__WEBPACK_IMPORTED_MODULE_3__["orientation"])(v1, v2);
            var dist_factor = Object(_matrix__WEBPACK_IMPORTED_MODULE_3__["norm"])(v1) / Object(_matrix__WEBPACK_IMPORTED_MODULE_3__["norm"])(v2);
            var pivot = [(d1[0] + d2[0]) / 2.0, (d1[1] + d2[1]) / 2.0, 1.0];
            pivot = _matrix__WEBPACK_IMPORTED_MODULE_3__["Matrix3"].multiplyVector(this.adjustScreen, pivot);
            if (!isNaN(dist_factor))
                this.projection_matrix.scaleC(dist_factor, dist_factor, pivot[0], pivot[1]);
            if (!isNaN(angle))
                this.projection_matrix.rotateC(angle, pivot[0], pivot[1]);
        }
        if (event.touches.length >= 1) {
            var displacement = [0.0, 0.0, 1.0];
            for (var i = 0; i < event.touches.length; i++) {
                displacement[0] += event.touches[i].clientX - this.touches[i].clientX;
                displacement[1] -= event.touches[i].clientY - this.touches[i].clientY;
            }
            displacement[0] /= -event.touches.length / 2.0;
            displacement[1] /= -event.touches.length / 2.0;
            displacement = _matrix__WEBPACK_IMPORTED_MODULE_3__["Matrix3"].multiply(this.adjustScreen, displacement);
            this.projection_matrix.translate(displacement[0], displacement[1]);
        }
        for (var i = 0; i < event.changedTouches.length; i++) {
            for (var k = 0; k < this.touches.length; k++)
                if (this.touches[k].identifier == event.changedTouches[i].identifier) {
                    this.touches[k] = event.changedTouches[i];
                    break;
                }
        }
        this.draw();
    };
    PlotComponent.prototype.insertProgram = function () {
        return __awaiter(this, void 0, void 0, function () {
            var vertexRequest, fragmentRequest, responses, vertexSource, fragmentSource, vertexShader, fragmentShader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vertexRequest = this.http.get('./assets/vertex_shader.glsl', { responseType: 'text' });
                        fragmentRequest = this.http.get('./assets/fragment_shader.glsl', { responseType: 'text' });
                        responses = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([vertexRequest, fragmentRequest]).toPromise();
                        return [4 /*yield*/, responses];
                    case 1:
                        vertexSource = (_a.sent())[0];
                        return [4 /*yield*/, responses];
                    case 2:
                        fragmentSource = (_a.sent())[1];
                        vertexShader = _webgl_utils__WEBPACK_IMPORTED_MODULE_4__["webglUtils"].createShader(this.gl, this.gl.VERTEX_SHADER, vertexSource);
                        fragmentShader = _webgl_utils__WEBPACK_IMPORTED_MODULE_4__["webglUtils"].createShader(this.gl, this.gl.FRAGMENT_SHADER, fragmentSource);
                        this.program = _webgl_utils__WEBPACK_IMPORTED_MODULE_4__["webglUtils"].createProgram(this.gl, vertexShader, fragmentShader);
                        this.loadProgram();
                        this.draw();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlotComponent.prototype.loadProgram = function () {
        this.positionLocation = this.gl.getAttribLocation(this.program, "position");
        this.projectionLocation = this.gl.getUniformLocation(this.program, "u_projection");
        this.aspectRatioLocation = this.gl.getUniformLocation(this.program, "u_aspect_ratio");
        this.densityLocation = this.gl.getUniformLocation(this.program, "u_density");
        this.gridDensityLocation = this.gl.getUniformLocation(this.program, "u_gridDensity");
        this.gridSeparationLocation = this.gl.getUniformLocation(this.program, "u_gridSeparation");
        this.positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        var positions = [-1.0, -1.0,
            -1.0, 1.0,
            1.0, 1.0,
            1.0, 1.0,
            -1.0, -1.0,
            1.0, -1.0];
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW);
        this.gl.useProgram(this.program);
        this.gl.enableVertexAttribArray(this.positionLocation);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.vertexAttribPointer(this.positionLocation, 2, this.gl.FLOAT, false, 0, 0);
    };
    PlotComponent.prototype.draw = function () {
        this.gl.uniformMatrix3fv(this.projectionLocation, false, this.projection_matrix.mat);
        this.mensaje = '' + this.gl.canvas.clientWidth / this.gl.canvas.clientHeight;
        this.gl.uniform2f(this.aspectRatioLocation, this.gl.canvas.clientWidth / this.gl.canvas.clientHeight, 1.0);
        this.gl.uniform1f(this.densityLocation, 20.0 - this.density);
        this.gl.uniform1f(this.gridDensityLocation, 20.0 - this.gridDensity);
        this.gl.uniform1f(this.gridSeparationLocation, this.gridSeparation);
        //gl.uniform3fv(colorLocation, background_color);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PlotComponent.prototype, "canvas", void 0);
    PlotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plot',
            template: __webpack_require__(/*! ./plot.component.html */ "./src/app/plot/plot.component.html"),
            styles: [__webpack_require__(/*! ./plot.component.css */ "./src/app/plot/plot.component.css")],
            host: {
                '(window:resize)': 'onResize($event)'
            }
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], PlotComponent);
    return PlotComponent;
}());



/***/ }),

/***/ "./src/app/webgl_utils.ts":
/*!********************************!*\
  !*** ./src/app/webgl_utils.ts ***!
  \********************************/
/*! exports provided: webglUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webglUtils", function() { return webglUtils; });
var webglUtils = /** @class */ (function () {
    function webglUtils() {
    }
    webglUtils.createShader = function (gl, type, source) {
        console.log('Creating shader');
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (success) {
            return shader;
        }
        console.log(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
    };
    webglUtils.createProgram = function (gl, vertexShader, fragmentShader) {
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
    };
    webglUtils.resizeCanvasToDisplaySize = function (canvas, multiplier) {
        if (multiplier === void 0) { multiplier = 1.0; }
        multiplier = multiplier || 1;
        var width = canvas.clientWidth * multiplier | 0;
        var height = canvas.clientHeight * multiplier | 0;
        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
            return true;
        }
        return false;
    };
    webglUtils.setScreen = function (gl, width, height) {
        var positions = [
            -width, -height,
            -width, height,
            width, -height,
            width, -height,
            -width, height,
            width, height
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    };
    webglUtils.setUpRendering = function (gl, quality) {
        webglUtils.resizeCanvasToDisplaySize(gl.canvas, quality);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    };
    return webglUtils;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/guido/GitHub/Plase/plase/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map