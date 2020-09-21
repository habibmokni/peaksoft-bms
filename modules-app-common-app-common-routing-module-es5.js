function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-app-common-app-common-routing-module"], {
  /***/
  "./src/modules/app-common/app-common-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/modules/app-common/app-common-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ROUTES, AppCommonRoutingModule */

  /***/
  function srcModulesAppCommonAppCommonRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppCommonRoutingModule", function () {
      return AppCommonRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-common.module */
    "./src/modules/app-common/app-common.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/app-common/containers/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Module */

    /* Containers */

    /* Routes */


    var ROUTES = [{
      path: '',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["VersionComponent"]
    }];

    var AppCommonRoutingModule = function AppCommonRoutingModule() {
      _classCallCheck(this, AppCommonRoutingModule);
    };

    AppCommonRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_app_common_module__WEBPACK_IMPORTED_MODULE_3__["AppCommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppCommonRoutingModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-app-common-app-common-routing-module-es5.js.map