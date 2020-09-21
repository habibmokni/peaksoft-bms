function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/alert/alert.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/alert/alert.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppCommonComponentsAlertAlertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"icon; else withoutIcon\"\n    ><div class=\"alert sb-alert-icon\" *ngIf=\"!dismissed\" [ngClass]=\"classes\" role=\"alert\">\n        <button class=\"close\" *ngIf=\"dismissable\" type=\"button\" aria-label=\"Close\" (click)=\"closeAlert()\"><span aria-hidden=\"true\">×</span></button><ng-content select=\".sb-alert-icon-aside\"></ng-content>\n        <div class=\"sb-alert-icon-content\">\n            <h5 class=\"alert-heading\" *ngIf=\"heading\">{{heading}}</h5>\n            <ng-container *ngTemplateOutlet=\"defaultContent\"></ng-container>\n        </div></div></ng-container\n><ng-template #withoutIcon\n    ><div class=\"alert\" *ngIf=\"!dismissed\" [ngClass]=\"classes\" role=\"alert\">\n        <button class=\"close\" *ngIf=\"dismissable\" type=\"button\" aria-label=\"Close\" (click)=\"closeAlert()\"><span aria-hidden=\"true\">×</span></button>\n        <h5 class=\"alert-heading\" *ngIf=\"heading\">{{heading}}</h5>\n        <ng-container *ngTemplateOutlet=\"defaultContent\"></ng-container></div></ng-template\n><ng-template #defaultContent><ng-content></ng-content></ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-collapsable/card-collapsable.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-collapsable/card-collapsable.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppCommonComponentsCardCollapsableCardCollapsableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card sb-card-collapsable mb-4\" [ngClass]=\"cardClasses\">\n    <a class=\"card-header\" [ngClass]=\"{collapsed: collapsed}\" (click)=\"toggle()\" data-toggle=\"collapse\" role=\"button\" [attr.aria-expanded]=\"!collapsed\"\n        >{{headerText}}\n        <div class=\"sb-card-collapsable-arrow\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"chevron-down\"]'></fa-icon></div\n    ></a>\n    <div class=\"collapse show\" #collapsibleSection><ng-content select=\".card-body\"></ng-content><ng-content select=\".card-footer\"></ng-content></div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-icon/card-icon.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-icon/card-icon.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppCommonComponentsCardIconCardIconComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card sb-card-icon mb-4\">\n    <div class=\"row no-gutters\">\n        <div class=\"col-auto sb-card-icon-aside\" [ngClass]=\"iconBackground\"><ng-content select=\".card-icon\"></ng-content></div>\n        <div class=\"col\"><ng-content select=\".card-body\"></ng-content></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-image/card-image.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-image/card-image.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppCommonComponentsCardImageCardImageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mb-4\" [ngClass]=\"cardClasses\">\n    <ng-container *ngIf='placement === \"top\"'><img class=\"card-img-top\" [src]=\"src\" alt=\"alt\"/><ng-container *ngTemplateOutlet=\"cardBody\"></ng-container></ng-container><ng-container *ngIf='placement === \"bottom\"'><ng-container *ngTemplateOutlet=\"cardBody\"></ng-container><img class=\"card-img-bottom\" [src]=\"src\" alt=\"alt\"/></ng-container\n    ><ng-container *ngIf='placement === \"left\"'\n        ><div class=\"row no-gutters\">\n            <div class=\"col-md-4\"><img class=\"img-fluid\" [src]=\"src\" alt=\"alt\" /></div>\n            <div class=\"col-md-8\"><ng-container *ngTemplateOutlet=\"cardBody\"></ng-container></div></div></ng-container\n    ><ng-container *ngIf='placement === \"right\"'\n        ><div class=\"row no-gutters\">\n            <div class=\"col-md-8\"><ng-container *ngTemplateOutlet=\"cardBody\"></ng-container></div>\n            <div class=\"col-md-4\"><img class=\"img-fluid\" [src]=\"src\" alt=\"alt\" /></div></div></ng-container\n    ><ng-container *ngIf='placement === \"overlay\"'><img class=\"card-img\" [src]=\"src\" alt=\"alt\"/><ng-content select=\".card-img-overlay\"></ng-content></ng-container><ng-content select=\".card-footer\"></ng-content>\n</div>\n<ng-template #cardBody><ng-content select=\".card-body\"></ng-content></ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-navigation/card-navigation.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-navigation/card-navigation.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppCommonComponentsCardNavigationCardNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mb-4\" [ngClass]=\"cardClasses\">\n    <ng-container *ngIf='navType !== \"vertical\"'\n        ><div class=\"card-header border-bottom\">\n            <ng-container *ngIf='navType === \"tabbed\"'\n                ><ul class=\"nav nav-tabs card-header-tabs\" role=\"tablist\">\n                    <li class=\"nav-item\" *ngFor=\"let name of navNames; let i = index\"><a class=\"nav-link\" [ngClass]=\"{active: selectedIndex === i}\" (click)=\"setSelectedIndex(i)\" data-toggle=\"tab\" role=\"tab\" [attr.aria-selected]=\"selectedIndex === i\">{{name}}</a></li>\n                </ul></ng-container\n            ><ng-container *ngIf='navType === \"pill\"'\n                ><ul class=\"nav nav-pills card-header-pills\" role=\"tablist\">\n                    <li class=\"nav-item\" *ngFor=\"let name of navNames; let i = index\"><a class=\"nav-link\" [ngClass]=\"{active: selectedIndex === i}\" (click)=\"setSelectedIndex(i)\" data-toggle=\"tab\" role=\"tab\" [attr.aria-selected]=\"selectedIndex === i\">{{name}}</a></li>\n                </ul></ng-container\n            >\n        </div>\n        <div class=\"card-body\">\n            <div class=\"tab-content\">\n                <div class=\"tab-pane fade show active\" #fadeableSection role=\"tabpanel\" aria-labelledby=\"overview-tab\"><ng-container *ngTemplateOutlet=\"templates[selectedIndexForFade]\"></ng-container></div>\n            </div></div></ng-container\n    ><ng-container *ngIf='navType === \"vertical\"'\n        ><ng-content select=\".card-header\"></ng-content>\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <ul class=\"nav nav-pills flex-column\" role=\"tablist\">\n                        <li class=\"nav-item\" *ngFor=\"let name of navNames; let i = index\"><a class=\"nav-link\" [ngClass]=\"{active: selectedIndex === i}\" (click)=\"setSelectedIndex(i)\" data-toggle=\"tab\" role=\"tab\" [attr.aria-selected]=\"selectedIndex === i\">{{name}}</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-md-9\">\n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane fade show active\" #fadeableSection role=\"tabpanel\" aria-labelledby=\"overview-tab\"><ng-container *ngTemplateOutlet=\"templates[selectedIndexForFade]\"></ng-container></div>\n                    </div>\n                </div>\n            </div></div></ng-container\n    ><ng-content select=\".card-footer\"></ng-content>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-view-details/card-view-details.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-view-details/card-view-details.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppCommonComponentsCardViewDetailsCardViewDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card text-white mb-4\" [ngClass]=\"cardClasses\">\n    <ng-content select=\".card-body\"></ng-content>\n    <div class=\"card-footer d-flex align-items-center justify-content-between\">\n        <a class=\"small text-white stretched-link\" [routerLink]=\"link\">View Details</a>\n        <div class=\"small text-white\"><fa-icon [icon]='[\"fas\", \"angle-right\"]'></fa-icon></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card/card.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card/card.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppCommonComponentsCardCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mb-4\" [ngClass]=\"cardClasses\"><ng-content select=\".card-header\"></ng-content><ng-content select=\".card-body\"></ng-content><ng-content select=\".card-footer\"></ng-content></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/dropdown/dropdown.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/dropdown/dropdown.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppCommonComponentsDropdownDropdownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dropdown mr-3\" [ngClass]=\"customClasses\" ngbDropdown [placement]=\"placement\" display=\"dynamic\">\n    <button class=\"btn dropdown-toggle\" [ngClass]=\"dropdownButtonClasses\" ngbDropdownToggle data-cy=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><ng-content select=\".dropdown-trigger\"></ng-content></button>\n    <div class=\"dropdown-menu dropdown-menu-right border-0 shadow\" [ngClass]=\"dropdownMenuClasses\" ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\"><ng-content select=\".dropdown-items\"></ng-content></div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/lorem-ipsum/lorem-ipsum.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/lorem-ipsum/lorem-ipsum.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppCommonComponentsLoremIpsumLoremIpsumComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/progressbar/progressbar.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/progressbar/progressbar.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppCommonComponentsProgressbarProgressbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"progress\">\n    <div class=\"progress-bar\" [ngClass]=\"progressBarClasses\" role=\"progressbar\" [ngStyle]='{width: value + \"%\"}' aria-valuenow=\"value/100\" aria-valuemin=\"0\" aria-valuemax=\"100\"><ng-content></ng-content></div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/progresscard/progresscard.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/progresscard/progresscard.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppCommonComponentsProgresscardProgresscardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card sb-card-progress mb-4\" [ngClass]=\"cardClasses\">\n    <ng-content select=\".card-header\"></ng-content><ng-content select=\".card-body\"></ng-content>\n    <div class=\"progress rounded-0\"><div class=\"progress-bar\" [ngClass]=\"progressBarClasses\" role=\"progressbar\" [ngStyle]='{width: value + \"%\"}' aria-valuenow=\"value/100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div></div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/toast/toast.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/toast/toast.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppCommonComponentsToastToastComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"toast show mb-1\" [ngClass]=\"classes\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-delay=\"5000\">\n    <div class=\"toast-header\" [ngClass]=\"headerClasses\">\n        <ng-container *ngIf=\"headerIsTemplate\"><ng-template *ngTemplateOutlet=\"header; context:toastContext\"></ng-template></ng-container><ng-container *ngIf=\"!headerIsTemplate &amp;&amp; header\">{{header}}</ng-container>\n    </div>\n    <div class=\"toast-body\" [ngClass]=\"bodyClasses\">\n        <ng-container *ngIf=\"bodyIsTemplate\"><ng-template *ngTemplateOutlet=\"body; context:toastContext\"></ng-template></ng-container><ng-container *ngIf=\"!bodyIsTemplate &amp;&amp; body\">{{body}}</ng-container>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/containers/toast-view/toast-view.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/containers/toast-view/toast-view.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppCommonContainersToastViewToastViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-toast *ngFor=\"let toast of toastService.toasts\" [header]=\"toast.header\" [body]=\"toast.body\" [autohide]=\"toast.options.autohide\" [delay]=\"toast.options?.delay || 5000\" [classes]=\"toast.options?.classes\" [headerClasses]=\"toast.options?.headerClasses\" [bodyClasses]=\"toast.options?.bodyClasses\" [toastID]=\"toast.uuid\"></sbpro-toast>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/containers/version/version.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/containers/version/version.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesAppCommonContainersVersionVersionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span>{{version}}</span>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/breadcrumbs/breadcrumbs.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/breadcrumbs/breadcrumbs.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesNavigationComponentsBreadcrumbsBreadcrumbsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ol class=\"breadcrumb mt-4 mb-0\">\n    <li class=\"breadcrumb-item\" *ngFor=\"let breadcrumb of breadcrumbs\" [ngClass]=\"{active: breadcrumb.active}\"><a *ngIf=\"breadcrumb.link\" [routerLink]=\"breadcrumb.link\">{{breadcrumb.text}}</a><span *ngIf=\"!breadcrumb.link\">{{breadcrumb.text}}</span></li>\n</ol>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/dashboard-head/dashboard-head.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/dashboard-head/dashboard-head.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesNavigationComponentsDashboardHeadDashboardHeadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"sb-page-header sb-page-header-dark bg-gradient-primary-to-secondary\" [ngClass]='{\"pb-10\":!simplified, \"sb-page-header-dark bg-gradient-primary-to-secondary\": !light, \"sb-page-header-light bg-white shadow\": light}'>\n    <div class=\"container-fluid\">\n        <div class=\"sb-page-header-content py-5\">\n            <h1 class=\"sb-page-header-title\">\n                <div class=\"sb-page-header-icon\"><i-feather *ngIf=\"icon\" [name]=\"icon\"></i-feather></div>\n                <span>{{title}}</span>\n            </h1>\n            <div class=\"sb-page-header-subtitle\">{{description}}</div>\n            <sb-breadcrumbs *ngIf=\"breadcrumbs\"></sb-breadcrumbs>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/side-nav-item-pro/side-nav-item-pro.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/side-nav-item-pro/side-nav-item-pro.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesNavigationComponentsSideNavItemProSideNavItemProComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a class=\"nav-link\" (click)=\"toggle()\" [ngClass]=\"{active: isActive, collapsed: collapsed}\"\n    ><div class=\"sb-nav-link-icon\" *ngIf=\"sideNavItem.icon\"><i-feather [name]=\"sideNavItem.icon\"></i-feather></div>\n    {{sideNavItem.text}}\n    <div class=\"sb-sidenav-collapse-arrow\"><fa-icon class=\"ml-auto\" *ngIf=\"sideNavItem.submenu\" [icon]=\"['fas', 'angle-down']\"></fa-icon></div\n></a>\n<nav class=\"sb-sidenav-menu-nested nav\" #collapsibleSection [ngClass]=\"{collapsed: collapsed}\"><sbpro-side-nav-item class=\"submenu\" *ngFor=\"let submenuItem of sideNavItem.submenu\" [sideNavItem]=\"submenuItem\" [ngClass]=\"{collapsed: collapsed}\" [hierarchy]=\"hierarchyExtension\"></sbpro-side-nav-item></nav>\n<!-- [routerLink]='sideNavItem.link', -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/top-nav-alerts-item/top-nav-alerts-item.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/top-nav-alerts-item/top-nav-alerts-item.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesNavigationComponentsTopNavAlertsItemTopNavAlertsItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a class=\"dropdown-item sb-dropdown-notifications-item\" href=\"javascript:void(0);\"\n    ><div class=\"sb-dropdown-notifications-item-icon bg-warning\"><i-feather [name]=\"alert.icon\"></i-feather></div>\n    <div class=\"sb-dropdown-notifications-item-content\">\n        <div class=\"sb-dropdown-notifications-item-content-details\">{{alert.date}}</div>\n        <div class=\"sb-dropdown-notifications-item-content-text\">{{alert.text}}</div>\n    </div></a\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/top-nav-alerts/top-nav-alerts.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/top-nav-alerts/top-nav-alerts.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesNavigationComponentsTopNavAlertsTopNavAlertsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<li class=\"nav-item dropdown no-caret mr-3 sb-dropdown-notifications\" *ngIf=\"alertsService.alerts$ | async as alerts\" ngbDropdown [placement]=\"placement\" display=\"dynamic\">\n    <a class=\"btn sb-btn-icon sb-btn-transparent-dark dropdown-toggle\" id=\"navbarDropdownAlerts\" ngbDropdownToggle data-cy=\"alertsMenu\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i-feather name=\"bell\"></i-feather></a>\n    <div class=\"dropdown-menu border-0 shadow animated--fade-in-up\" ngbDropdownMenu aria-labelledby=\"navbarDropdownAlerts\">\n        <h6 class=\"dropdown-header sb-dropdown-notifications-header\"><i-feather class=\"mr-2\" name=\"bell\"></i-feather>Alerts Center</h6>\n        <sbpro-top-nav-alerts-item *ngFor=\"let alert of alerts\" [alert]=\"alert\"></sbpro-top-nav-alerts-item>\n    </div>\n</li>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/top-nav-messages-item/top-nav-messages-item.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/top-nav-messages-item/top-nav-messages-item.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesNavigationComponentsTopNavMessagesItemTopNavMessagesItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a class=\"dropdown-item sb-dropdown-notifications-item\" href=\"javascript:void(0);\"\n    ><img class=\"sb-dropdown-notifications-item-img\" [src]=\"message.image\" />\n    <div class=\"sb-dropdown-notifications-item-content\">\n        <div class=\"sb-dropdown-notifications-item-content-text\">{{message.text}}</div>\n        <div class=\"sb-dropdown-notifications-item-content-details\">{{message.details}}</div>\n    </div></a\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/top-nav-messages/top-nav-messages.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/top-nav-messages/top-nav-messages.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesNavigationComponentsTopNavMessagesTopNavMessagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<li class=\"nav-item dropdown no-caret mr-3 sb-dropdown-notifications\" *ngIf=\"messagesService.messages$ | async as messages\" ngbDropdown [placement]=\"placement\" display=\"dynamic\">\n    <a class=\"btn sb-btn-icon sb-btn-transparent-dark dropdown-toggle\" id=\"navbarDropdownMessages\" ngbDropdownToggle data-cy=\"messagesMenu\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i-feather name=\"mail\"></i-feather></a>\n    <div class=\"dropdown-menu border-0 shadow animated--fade-in-up\" ngbDropdownMenu aria-labelledby=\"navbarDropdownMessages\">\n        <h6 class=\"dropdown-header sb-dropdown-notifications-header\"><i-feather class=\"mr-2\" name=\"mail\"></i-feather>Message Center</h6>\n        <sbpro-top-nav-messages-item *ngFor=\"let message of messages\" [message]=\"message\"></sbpro-top-nav-messages-item>\n    </div>\n</li>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/top-nav-search/top-nav-search.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/top-nav-search/top-nav-search.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesNavigationComponentsTopNavSearchTopNavSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"form-inline mr-auto d-none d-lg-block\"><input class=\"form-control sb-form-control-solid mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" /></form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/top-nav-user/top-nav-user.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/top-nav-user/top-nav-user.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesNavigationComponentsTopNavUserTopNavUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<li class=\"nav-item dropdown no-caret mr-3 sb-dropdown-user\" *ngIf=\"userService.user$ | async as user\" ngbDropdown [placement]=\"placement\" display=\"dynamic\">\n    <a class=\"btn sb-btn-icon sb-btn-transparent-dark dropdown-toggle\" id=\"navbarDropdownUserImage\" ngbDropdownToggle data-cy=\"userMenu\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><img class=\"img-fluid\" [src]=\"user.image\"/></a>\n    <div class=\"dropdown-menu border-0 shadow animated--fade-in-up\" ngbDropdownMenu aria-labelledby=\"dropdownUser\">\n        <h6 class=\"dropdown-header d-flex align-items-center\">\n            <img class=\"sb-dropdown-user-img\" [src]=\"user.image\" />\n            <div class=\"sb-dropdown-user-details\">\n                <div class=\"sb-dropdown-user-details-name\">{{ user.firstName }} {{ user.lastName }}</div>\n                <div class=\"sb-dropdown-user-details-email\">{{ user.email }}</div>\n            </div>\n        </h6>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" routerLink=\"/dashboard\"\n            ><div class=\"sb-dropdown-item-icon\"><i-feather name=\"settings\"></i-feather></div>\n            Account</a\n        ><a class=\"dropdown-item\" routerLink=\"/dashboard\"\n            ><div class=\"sb-dropdown-item-icon\"><i-feather name=\"log-out\"></i-feather></div>\n            Logout</a\n        >\n    </div>\n</li>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/containers/footer/footer.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/containers/footer/footer.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesNavigationContainersFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"sb-footer py-4 mt-auto\" [ngClass]='{\"sb-footer-light\": !dark, \"sb-footer-dark\": dark}'>\n    <div class=\"container-fluid\">\n        <div class=\"d-flex align-items-center justify-content-between small\">\n            <div>Copyright &copy; PeakSoft 2020</div>\n            <div>\n                <a href=\"#\">Privacy Policy</a>\n                &middot;\n                <a href=\"#\">Terms &amp; Conditions</a>\n            </div>\n        </div>\n    </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/containers/side-nav/side-nav.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/containers/side-nav/side-nav.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesNavigationContainersSideNavSideNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"sb-sidenav sb-shadow-right\" id=\"sidenavAccordion\" [ngClass]=\"sidenavStyle\" data-cy=\"sideNav\">\n    <div class=\"sb-sidenav-menu\">\n        <div class=\"nav\">\n            <ng-container *ngFor=\"let section of sideNavSections\"\n                ><div class=\"sb-sidenav-menu-heading\" *ngIf=\"section.text\">{{ section.text }}</div>\n                <ng-container *ngFor=\"let item of section.items\"><sbpro-side-nav-item [sideNavItem]=\"sideNavItems[item]\"></sbpro-side-nav-item></ng-container\n            ></ng-container>\n        </div>\n    </div>\n    <div class=\"sb-sidenav-footer\">\n        <div>\n            <div class=\"small\">Logged in as:</div>\n            <div *ngIf=\"userService.user$ | async as user\">{{user.firstName}} {{user.lastName}}</div>\n        </div>\n    </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/containers/top-nav/top-nav.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/containers/top-nav/top-nav.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesNavigationContainersTopNavTopNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"!rtl\"\r\n   >\r\n   <nav class=\"sb-topnav navbar navbar-expand shadow navbar-light bg-white\">\r\n      <a class=\"navbar-brand d-none d-sm-block\" routerLink=\"/dashboard\"><img src=\"assets/img/PeakSoftGmbH_Logo.svg\"/></a>\r\n      <button class=\"btn sb-btn-icon sb-btn-transparent-dark order-1 order-lg-0 mr-lg-2\" id=\"sidebarToggle\" data-cy=\"topNavToggleSideNav\" (click)=\"toggleSideNav()\">\r\n         <i-feather name=\"menu\"></i-feather>\r\n      </button>\r\n      <sbpro-top-nav-search></sbpro-top-nav-search>\r\n      <form class=\"form-inline mr-3 ml-auto\">\r\n         <a class=\"btn btn-outline-primary btn-sm\" href=\"https://docs.startbootstrap.com/sb-admin-pro-angular\" target=\"_blank\"\r\n            >\r\n            <div class=\"d-none d-sm-inline-flex align-items-center\">\r\n               <i-feather class=\"mr-1\" name=\"book\"></i-feather>\r\n               Documentation\r\n            </div>\r\n            <div class=\"d-inline-flex d-sm-none\">Docs</div>\r\n         </a\r\n            >\r\n      </form>\r\n      <ul class=\"navbar-nav\">\r\n         <sbpro-top-nav-alerts></sbpro-top-nav-alerts\r\n            >\r\n         <sbpro-top-nav-messages></sbpro-top-nav-messages\r\n            >\r\n         <sbpro-top-nav-user></sbpro-top-nav-user>\r\n         <button *ngIf=\"isAuthenticated\" class=\"btn btn-danger\" type=\"button\" (click)=\"onLogout()\">Logout</button>\r\n      </ul>\r\n   </nav>\r\n</ng-container\r\n   >\r\n<ng-container *ngIf=\"rtl\"\r\n   >\r\n   <nav class=\"pr-3 pr-sm-0 pl-3 sb-topnav navbar navbar-expand shadow navbar-light bg-white\">\r\n      <ul class=\"navbar-nav align-items-center\">\r\n         <sbpro-top-nav-user placement=\"bottom-left\"></sbpro-top-nav-user\r\n            >\r\n         <sbpro-top-nav-messages placement=\"bottom-left\"></sbpro-top-nav-messages\r\n            >\r\n         <sbpro-top-nav-alerts placement=\"bottom-left\"></sbpro-top-nav-alerts>\r\n      </ul>\r\n      <form class=\"form-inline ml-3 mr-auto\">\r\n         <a class=\"btn btn-outline-primary btn-sm\" href=\"https://docs.startbootstrap.com/sb-admin-pro-angular\" target=\"_blank\"\r\n            >\r\n            <div class=\"d-none d-sm-inline-flex align-items-center\">\r\n               <i-feather class=\"mr-1\" name=\"book\"></i-feather>\r\n               Documentation\r\n            </div>\r\n            <div class=\"d-inline d-sm-none\">Docs</div>\r\n         </a\r\n            >\r\n      </form>\r\n      <sbpro-top-nav-search class=\"ml-auto d-none d-lg-block\"></sbpro-top-nav-search>\r\n      <button class=\"btn sb-btn-icon sb-btn-transparent-dark order-1 order-lg-0 ml-lg-2 ml-2\" id=\"sidebarToggle\" data-cy=\"topNavToggleSideNav\" (click)=\"toggleSideNav()\">\r\n         <i-feather name=\"menu\"></i-feather>\r\n      </button>\r\n      <a class=\"navbar-brand text-right d-none d-sm-block\" routerLink=\"/dashboard\"><img src=\"assets/img/PeakSoftGmbH_Logo.svg\"/></a>\r\n   </nav\r\n      >\r\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-auth/layout-auth.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-auth/layout-auth.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesNavigationLayoutsLayoutAuthLayoutAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg-primary\" id=\"layoutAuthentication\">\n    <div id=\"layoutAuthentication_content\">\n        <main><ng-content></ng-content></main>\n    </div>\n    <div id=\"layoutAuthentication_footer\"><sb-footer [dark]=\"true\"></sb-footer></div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-dashboard/layout-dashboard.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-dashboard/layout-dashboard.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesNavigationLayoutsLayoutDashboardLayoutDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"!rtl\"\n    ><span [ngClass]='{\"sb-nav-fixed\": !static}'\n        ><sb-top-nav></sb-top-nav>\n        <div id=\"layoutSidenav\">\n            <div id=\"layoutSidenav_nav\"><sb-side-nav [sidenavStyle]=\"sidenavStyle\" [sideNavItems]=\"sideNavItems\" [sideNavSections]=\"sideNavSections\"></sb-side-nav></div>\n            <div id=\"layoutSidenav_content\" [ngClass]='{\"scrollable\": !static}' (click)=\"closeSideNavIfOpen()\">\n                <main><ng-container *ngTemplateOutlet=\"defaultContent\"></ng-container></main>\n                <sb-footer></sb-footer>\n            </div></div></span></ng-container\n><ng-container *ngIf=\"rtl\"\n    ><span class=\"sb-layout-rtl\" [ngClass]='{\"sb-nav-fixed\": !static}'\n        ><sb-top-nav [rtl]=\"true\"></sb-top-nav>\n        <div id=\"layoutSidenav\">\n            <div id=\"layoutSidenav_content\" [ngClass]='{\"scrollable\": !static}' (click)=\"closeSideNavIfOpen()\">\n                <main><ng-container *ngTemplateOutlet=\"defaultContent\"></ng-container></main>\n                <sb-footer></sb-footer>\n            </div>\n            <div id=\"layoutSidenav_nav\"><sb-side-nav [sidenavStyle]=\"sidenavStyle\" [sideNavItems]=\"sideNavItems\" [sideNavSections]=\"sideNavSections\"></sb-side-nav></div></div></span></ng-container\n><ng-template #defaultContent><ng-content></ng-content></ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-error/layout-error.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-error/layout-error.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesNavigationLayoutsLayoutErrorLayoutErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"layoutError\">\n    <div id=\"layoutError_content\">\n        <main><ng-content></ng-content></main>\n    </div>\n    <div id=\"layoutError_footer\"><sb-footer></sb-footer></div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-talents/layout-talents.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-talents/layout-talents.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesNavigationLayoutsLayoutTalentsLayoutTalentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"!rtl\"\n    ><span [ngClass]='{\"sb-nav-fixed\": !static}'\n        ><sb-top-nav></sb-top-nav>\n        <div id=\"layoutSidenav\">\n            <div id=\"layoutSidenav_nav\"><sb-side-nav [sidenavStyle]=\"sidenavStyle\" [sideNavItems]=\"sideNavItems\" [sideNavSections]=\"sideNavSections\"></sb-side-nav></div>\n            <div id=\"layoutSidenav_content\" [ngClass]='{\"scrollable\": !static}' (click)=\"closeSideNavIfOpen()\">\n                <main><ng-container *ngTemplateOutlet=\"defaultContent\"></ng-container></main>\n                <sb-footer></sb-footer>\n            </div></div></span></ng-container\n><ng-container *ngIf=\"rtl\"\n    ><span class=\"sb-layout-rtl\" [ngClass]='{\"sb-nav-fixed\": !static}'\n        ><sb-top-nav [rtl]=\"true\"></sb-top-nav>\n        <div id=\"layoutSidenav\">\n            <div id=\"layoutSidenav_content\" [ngClass]='{\"scrollable\": !static}' (click)=\"closeSideNavIfOpen()\">\n                <main><ng-container *ngTemplateOutlet=\"defaultContent\"></ng-container></main>\n                <sb-footer></sb-footer>\n            </div>\n            <div id=\"layoutSidenav_nav\"><sb-side-nav [sidenavStyle]=\"sidenavStyle\" [sideNavItems]=\"sideNavItems\" [sideNavSections]=\"sideNavSections\"></sb-side-nav></div></div></span></ng-container\n><ng-template #defaultContent><ng-content></ng-content></ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: '/auth/login'
    }, {
      path: 'talents',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-talents-talents-routing-module */
        "modules-talents-talents-routing-module").then(__webpack_require__.bind(null,
        /*! modules/talents/talents-routing.module */
        "./src/modules/talents/talents-routing.module.ts")).then(function (m) {
          return m.TalentsRoutingModule;
        });
      }
    }, {
      path: 'charts',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modules-charts-charts-routing-module */
        [__webpack_require__.e("default~modules-charts-charts-routing-module~modules-dashboard-dashboard-routing-module"), __webpack_require__.e("modules-charts-charts-routing-module")]).then(__webpack_require__.bind(null,
        /*! modules/charts/charts-routing.module */
        "./src/modules/charts/charts-routing.module.ts")).then(function (m) {
          return m.ChartsRoutingModule;
        });
      }
    }, {
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modules-dashboard-dashboard-routing-module */
        [__webpack_require__.e("default~modules-charts-charts-routing-module~modules-dashboard-dashboard-routing-module"), __webpack_require__.e("default~modules-dashboard-dashboard-routing-module~modules-tables-tables-routing-module"), __webpack_require__.e("modules-dashboard-dashboard-routing-module")]).then(__webpack_require__.bind(null,
        /*! modules/dashboard/dashboard-routing.module */
        "./src/modules/dashboard/dashboard-routing.module.ts")).then(function (m) {
          return m.DashboardRoutingModule;
        });
      }
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-auth-auth-routing-module */
        "modules-auth-auth-routing-module").then(__webpack_require__.bind(null,
        /*! modules/auth/auth-routing.module */
        "./src/modules/auth/auth-routing.module.ts")).then(function (m) {
          return m.AuthRoutingModule;
        });
      }
    }, {
      path: 'error',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-error-error-routing-module */
        "modules-error-error-routing-module").then(__webpack_require__.bind(null,
        /*! modules/error/error-routing.module */
        "./src/modules/error/error-routing.module.ts")).then(function (m) {
          return m.ErrorRoutingModule;
        });
      }
    }, {
      path: 'tables',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modules-tables-tables-routing-module */
        [__webpack_require__.e("default~modules-dashboard-dashboard-routing-module~modules-tables-tables-routing-module"), __webpack_require__.e("modules-tables-tables-routing-module")]).then(__webpack_require__.bind(null,
        /*! modules/tables/tables-routing.module */
        "./src/modules/tables/tables-routing.module.ts")).then(function (m) {
          return m.TablesRoutingModule;
        });
      }
    }, {
      path: 'version',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-app-common-app-common-routing-module */
        "modules-app-common-app-common-routing-module").then(__webpack_require__.bind(null,
        /*! modules/app-common/app-common-routing.module */
        "./src/modules/app-common/app-common-routing.module.ts")).then(function (m) {
          return m.AppCommonRoutingModule;
        });
      }
    }, {
      path: '**',
      pathMatch: 'full',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-error-error-routing-module */
        "modules-error-error-routing-module").then(__webpack_require__.bind(null,
        /*! modules/error/error-routing.module */
        "./src/modules/error/error-routing.module.ts")).then(function (m) {
          return m.ErrorRoutingModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AppComponent = function AppComponent(router, titleService) {
      var _this = this;

      _classCallCheck(this, AppComponent);

      this.router = router;
      this.titleService = titleService;
      this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ChildActivationEnd"];
      })).subscribe(function (event) {
        var snapshot = event.snapshot;

        while (snapshot.firstChild !== null) {
          snapshot = snapshot.firstChild;
        }

        _this.titleService.setTitle(snapshot.data.title || 'SB Admin Pro Angular');
      });
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: "\n        <sbpro-toast-view class=\"ngb-toasts\" aria-live=\"polite\" aria-atomic=\"true\">\n        </sbpro-toast-view\n        ><router-outlet></router-outlet>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _common_app_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @common/app-common.module */
    "./src/modules/app-common/app-common.module.ts");
    /* harmony import */


    var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @modules/navigation/navigation.module */
    "./src/modules/navigation/navigation.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_3__["AppCommonModule"].forRoot(), _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"].forRoot()],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/modules/alerts/services/alerts.service.ts":
  /*!*******************************************************!*\
    !*** ./src/modules/alerts/services/alerts.service.ts ***!
    \*******************************************************/

  /*! exports provided: AlertsService */

  /***/
  function srcModulesAlertsServicesAlertsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertsService", function () {
      return AlertsService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var alerts = [{
      icon: 'activity',
      date: 'December 29, 2019',
      text: "This is an alert message. It's nothing serious, but it requires your attention."
    }, {
      icon: 'bar-chart',
      date: 'December 22, 2019',
      text: "A new monthly report is ready. Click here to view!"
    }, {
      icon: 'alert-triangle',
      date: 'December 8, 2019',
      text: "Critical system failure, systems shutting down."
    }, {
      icon: 'user-plus',
      date: 'December 2, 2019',
      text: "New user request. Woody has requested access to the organization."
    }];

    var AlertsService =
    /*#__PURE__*/
    function () {
      function AlertsService() {
        _classCallCheck(this, AlertsService);
      }

      _createClass(AlertsService, [{
        key: "alerts$",
        get: function get() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(alerts);
        }
      }]);

      return AlertsService;
    }();

    AlertsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AlertsService);
    /***/
  },

  /***/
  "./src/modules/alerts/services/index.ts":
  /*!**********************************************!*\
    !*** ./src/modules/alerts/services/index.ts ***!
    \**********************************************/

  /*! exports provided: services, AlertsService */

  /***/
  function srcModulesAlertsServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "services", function () {
      return services;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _alerts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./alerts.service */
    "./src/modules/alerts/services/alerts.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertsService", function () {
      return _alerts_service__WEBPACK_IMPORTED_MODULE_1__["AlertsService"];
    });

    var services = [_alerts_service__WEBPACK_IMPORTED_MODULE_1__["AlertsService"]];
    /***/
  },

  /***/
  "./src/modules/app-common/app-common.module.ts":
  /*!*****************************************************!*\
    !*** ./src/modules/app-common/app-common.module.ts ***!
    \*****************************************************/

  /*! exports provided: AppCommonModule */

  /***/
  function srcModulesAppCommonAppCommonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppCommonModule", function () {
      return AppCommonModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _modules_icons_icons_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @modules/icons/icons.module */
    "./src/modules/icons/icons.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/app-common/containers/index.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components */
    "./src/modules/app-common/components/index.ts");
    /* harmony import */


    var _directives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./directives */
    "./src/modules/app-common/directives/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./guards */
    "./src/modules/app-common/guards/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services */
    "./src/modules/app-common/services/index.ts");
    /* harmony import */


    var _modules_auth_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @modules/auth/services */
    "./src/modules/auth/services/index.ts");

    var AppCommonModule_1;
    /* tslint:disable: ordered-imports*/

    /* Modules */

    var modules = [_modules_icons_icons_module__WEBPACK_IMPORTED_MODULE_6__["IconsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]];
    /* Containers */

    /* Components */

    /* Directives */

    /* Guards */

    /* Services */

    var AppCommonModule = AppCommonModule_1 =
    /*#__PURE__*/
    function () {
      function AppCommonModule() {
        _classCallCheck(this, AppCommonModule);
      }

      _createClass(AppCommonModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: AppCommonModule_1,
            providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_11__["services"]), _toConsumableArray(_modules_auth_services__WEBPACK_IMPORTED_MODULE_12__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_10__["guards"]), [{
              provide: 'window',
              useValue: window
            }])
          };
        }
      }]);

      return AppCommonModule;
    }();

    AppCommonModule = AppCommonModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]].concat(modules),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_7__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_8__["components"]), _toConsumableArray(_directives__WEBPACK_IMPORTED_MODULE_9__["directives"])),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_7__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_8__["components"]), _toConsumableArray(_directives__WEBPACK_IMPORTED_MODULE_9__["directives"]), modules)
    })], AppCommonModule);
    /***/
  },

  /***/
  "./src/modules/app-common/classes/card-base.class.ts":
  /*!***********************************************************!*\
    !*** ./src/modules/app-common/classes/card-base.class.ts ***!
    \***********************************************************/

  /*! exports provided: CardBase */

  /***/
  function srcModulesAppCommonClassesCardBaseClassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardBase", function () {
      return CardBase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CardBase =
    /*#__PURE__*/
    function () {
      function CardBase() {
        _classCallCheck(this, CardBase);

        this.cardClasses = [];
      }

      _createClass(CardBase, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.background) {
            this.cardClasses.push(this.background);
          }

          if (this.color) {
            this.cardClasses.push(this.color);
          }

          if (this.classes) {
            var _this$cardClasses;

            (_this$cardClasses = this.cardClasses).push.apply(_this$cardClasses, _toConsumableArray(this.classes));
          }
        }
      }]);

      return CardBase;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CardBase.prototype, "background", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CardBase.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CardBase.prototype, "classes", void 0);
    /***/
  },

  /***/
  "./src/modules/app-common/classes/index.ts":
  /*!*************************************************!*\
    !*** ./src/modules/app-common/classes/index.ts ***!
    \*************************************************/

  /*! exports provided: CardBase */

  /***/
  function srcModulesAppCommonClassesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _card_base_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./card-base.class */
    "./src/modules/app-common/classes/card-base.class.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardBase", function () {
      return _card_base_class__WEBPACK_IMPORTED_MODULE_1__["CardBase"];
    });
    /***/

  },

  /***/
  "./src/modules/app-common/components/alert/alert.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/modules/app-common/components/alert/alert.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppCommonComponentsAlertAlertComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hcHAtY29tbW9uL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/app-common/components/alert/alert.component.ts":
  /*!********************************************************************!*\
    !*** ./src/modules/app-common/components/alert/alert.component.ts ***!
    \********************************************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcModulesAppCommonComponentsAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlertComponent =
    /*#__PURE__*/
    function () {
      function AlertComponent() {
        _classCallCheck(this, AlertComponent);

        this.dismissable = false;
        this.icon = false;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dismissed = false;
      }

      _createClass(AlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeAlert",
        value: function closeAlert() {
          this.dismissed = true;
          this.closed.emit();
        }
      }]);

      return AlertComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AlertComponent.prototype, "classes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AlertComponent.prototype, "dismissable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AlertComponent.prototype, "heading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AlertComponent.prototype, "icon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AlertComponent.prototype, "closed", void 0);
    AlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-alert',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./alert.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/alert/alert.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./alert.component.scss */
      "./src/modules/app-common/components/alert/alert.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AlertComponent);
    /***/
  },

  /***/
  "./src/modules/app-common/components/card-collapsable/card-collapsable.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/modules/app-common/components/card-collapsable/card-collapsable.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppCommonComponentsCardCollapsableCardCollapsableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n}\n\n.sb-card-collapsable-arrow {\n  cursor: pointer;\n}\n\n.collapse {\n  overflow: hidden;\n  -webkit-transition: height 0.2s ease-out;\n  transition: height 0.2s ease-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC1jb21tb24vY29tcG9uZW50cy9jYXJkLWNvbGxhcHNhYmxlL0M6XFxVc2Vyc1xcSGFiaWJNb2tuaVxcRG9jdW1lbnRzXFxHaXRIdWJcXHBzLWJtcy9zcmNcXG1vZHVsZXNcXGFwcC1jb21tb25cXGNvbXBvbmVudHNcXGNhcmQtY29sbGFwc2FibGVcXGNhcmQtY29sbGFwc2FibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy9hcHAtY29tbW9uL2NvbXBvbmVudHMvY2FyZC1jb2xsYXBzYWJsZS9jYXJkLWNvbGxhcHNhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSx3Q0FBQTtFQUFBLGdDQUFBO0FDREoiLCJmaWxlIjoic3JjL21vZHVsZXMvYXBwLWNvbW1vbi9jb21wb25lbnRzL2NhcmQtY29sbGFwc2FibGUvY2FyZC1jb2xsYXBzYWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNiLWNhcmQtY29sbGFwc2FibGUtYXJyb3cge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29sbGFwc2Uge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2Utb3V0O1xyXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNiLWNhcmQtY29sbGFwc2FibGUtYXJyb3cge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb2xsYXBzZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2Utb3V0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/app-common/components/card-collapsable/card-collapsable.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/modules/app-common/components/card-collapsable/card-collapsable.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: CardCollapsableComponent */

  /***/
  function srcModulesAppCommonComponentsCardCollapsableCardCollapsableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardCollapsableComponent", function () {
      return CardCollapsableComponent;
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


    var _common_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @common/classes */
    "./src/modules/app-common/classes/index.ts");

    var CardCollapsableComponent =
    /*#__PURE__*/
    function (_common_classes__WEBP) {
      _inherits(CardCollapsableComponent, _common_classes__WEBP);

      function CardCollapsableComponent(changeDetectorRef) {
        var _this2;

        _classCallCheck(this, CardCollapsableComponent);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CardCollapsableComponent).call(this));
        _this2.changeDetectorRef = changeDetectorRef;
        _this2.headerText = '';
        _this2.collapsed = false;
        return _this2;
      }

      _createClass(CardCollapsableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(CardCollapsableComponent.prototype), "ngOnInit", this).call(this);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          this.divElement = this.collapsibleSection.nativeElement;
          this.divElement.addEventListener('transitionend', function (event) {
            if (!_this3.collapsed) {
              _this3.divElement.style.height = '';
            }
          });
        }
      }, {
        key: "toggle",
        value: function toggle() {
          if (this.collapsed) {
            return this.expand();
          }

          return this.collapse();
        }
      }, {
        key: "collapse",
        value: function collapse() {
          var _this4 = this;

          var navHeight = this.divElement.scrollHeight;
          var elementTransition = this.divElement.style.transition;
          this.divElement.style.transition = '';
          requestAnimationFrame(function () {
            _this4.divElement.style.height = navHeight + 'px';
            _this4.divElement.style.transition = elementTransition;
            requestAnimationFrame(function () {
              _this4.divElement.style.height = 0 + 'px';
              _this4.collapsed = true;

              _this4.changeDetectorRef.markForCheck();
            });
          });
        }
      }, {
        key: "expand",
        value: function expand() {
          this.divElement.style.height = this.divElement.scrollHeight + 'px';
          this.collapsed = false;
        }
      }]);

      return CardCollapsableComponent;
    }(_common_classes__WEBPACK_IMPORTED_MODULE_2__["CardBase"]);

    CardCollapsableComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('collapsibleSection'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], CardCollapsableComponent.prototype, "collapsibleSection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CardCollapsableComponent.prototype, "headerText", void 0);
    CardCollapsableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-card-collapsable',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./card-collapsable.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-collapsable/card-collapsable.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./card-collapsable.component.scss */
      "./src/modules/app-common/components/card-collapsable/card-collapsable.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], CardCollapsableComponent);
    /***/
  },

  /***/
  "./src/modules/app-common/components/card-icon/card-icon.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/modules/app-common/components/card-icon/card-icon.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppCommonComponentsCardIconCardIconComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n}\n\n:host ::ng-deep .card-body {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC1jb21tb24vY29tcG9uZW50cy9jYXJkLWljb24vQzpcXFVzZXJzXFxIYWJpYk1va25pXFxEb2N1bWVudHNcXEdpdEh1YlxccHMtYm1zL3NyY1xcbW9kdWxlc1xcYXBwLWNvbW1vblxcY29tcG9uZW50c1xcY2FyZC1pY29uXFxjYXJkLWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy9hcHAtY29tbW9uL2NvbXBvbmVudHMvY2FyZC1pY29uL2NhcmQtaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7QUNESjs7QURJQTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7QUNESiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hcHAtY29tbW9uL2NvbXBvbmVudHMvY2FyZC1pY29uL2NhcmQtaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/modules/app-common/components/card-icon/card-icon.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/modules/app-common/components/card-icon/card-icon.component.ts ***!
    \****************************************************************************/

  /*! exports provided: CardIconComponent */

  /***/
  function srcModulesAppCommonComponentsCardIconCardIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardIconComponent", function () {
      return CardIconComponent;
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


    var _common_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @common/classes */
    "./src/modules/app-common/classes/index.ts");

    var CardIconComponent =
    /*#__PURE__*/
    function (_common_classes__WEBP2) {
      _inherits(CardIconComponent, _common_classes__WEBP2);

      function CardIconComponent() {
        var _this5;

        _classCallCheck(this, CardIconComponent);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(CardIconComponent).call(this));
        _this5.iconBackground = 'bg-primary';
        return _this5;
      }

      _createClass(CardIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(CardIconComponent.prototype), "ngOnInit", this).call(this);
        }
      }]);

      return CardIconComponent;
    }(_common_classes__WEBPACK_IMPORTED_MODULE_2__["CardBase"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CardIconComponent.prototype, "iconBackground", void 0);
    CardIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-card-icon',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./card-icon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-icon/card-icon.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./card-icon.component.scss */
      "./src/modules/app-common/components/card-icon/card-icon.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardIconComponent);
    /***/
  },

  /***/
  "./src/modules/app-common/components/card-image/card-image.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/modules/app-common/components/card-image/card-image.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppCommonComponentsCardImageCardImageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC1jb21tb24vY29tcG9uZW50cy9jYXJkLWltYWdlL0M6XFxVc2Vyc1xcSGFiaWJNb2tuaVxcRG9jdW1lbnRzXFxHaXRIdWJcXHBzLWJtcy9zcmNcXG1vZHVsZXNcXGFwcC1jb21tb25cXGNvbXBvbmVudHNcXGNhcmQtaW1hZ2VcXGNhcmQtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy9hcHAtY29tbW9uL2NvbXBvbmVudHMvY2FyZC1pbWFnZS9jYXJkLWltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9tb2R1bGVzL2FwcC1jb21tb24vY29tcG9uZW50cy9jYXJkLWltYWdlL2NhcmQtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/app-common/components/card-image/card-image.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/modules/app-common/components/card-image/card-image.component.ts ***!
    \******************************************************************************/

  /*! exports provided: CardImageComponent */

  /***/
  function srcModulesAppCommonComponentsCardImageCardImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardImageComponent", function () {
      return CardImageComponent;
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


    var _common_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @common/classes */
    "./src/modules/app-common/classes/index.ts");

    var CardImageComponent =
    /*#__PURE__*/
    function (_common_classes__WEBP3) {
      _inherits(CardImageComponent, _common_classes__WEBP3);

      function CardImageComponent() {
        _classCallCheck(this, CardImageComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(CardImageComponent).call(this));
      }

      _createClass(CardImageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(CardImageComponent.prototype), "ngOnInit", this).call(this);
        }
      }]);

      return CardImageComponent;
    }(_common_classes__WEBPACK_IMPORTED_MODULE_2__["CardBase"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CardImageComponent.prototype, "placement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CardImageComponent.prototype, "src", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CardImageComponent.prototype, "alt", void 0);
    CardImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-card-image',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./card-image.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-image/card-image.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./card-image.component.scss */
      "./src/modules/app-common/components/card-image/card-image.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardImageComponent);
    /***/
  },

  /***/
  "./src/modules/app-common/components/card-navigation/card-navigation.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/modules/app-common/components/card-navigation/card-navigation.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppCommonComponentsCardNavigationCardNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n}\n\na.nav-link {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC1jb21tb24vY29tcG9uZW50cy9jYXJkLW5hdmlnYXRpb24vQzpcXFVzZXJzXFxIYWJpYk1va25pXFxEb2N1bWVudHNcXEdpdEh1YlxccHMtYm1zL3NyY1xcbW9kdWxlc1xcYXBwLWNvbW1vblxcY29tcG9uZW50c1xcY2FyZC1uYXZpZ2F0aW9uXFxjYXJkLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy9hcHAtY29tbW9uL2NvbXBvbmVudHMvY2FyZC1uYXZpZ2F0aW9uL2NhcmQtbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7QUNESiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hcHAtY29tbW9uL2NvbXBvbmVudHMvY2FyZC1uYXZpZ2F0aW9uL2NhcmQtbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYS5uYXYtbGluayB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5hLm5hdi1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/app-common/components/card-navigation/card-navigation.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/modules/app-common/components/card-navigation/card-navigation.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: CardNavigationComponent */

  /***/
  function srcModulesAppCommonComponentsCardNavigationCardNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardNavigationComponent", function () {
      return CardNavigationComponent;
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


    var _common_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @common/classes */
    "./src/modules/app-common/classes/index.ts");

    var CardNavigationComponent =
    /*#__PURE__*/
    function (_common_classes__WEBP4) {
      _inherits(CardNavigationComponent, _common_classes__WEBP4);

      function CardNavigationComponent(changeDetectorRef) {
        var _this6;

        _classCallCheck(this, CardNavigationComponent);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(CardNavigationComponent).call(this));
        _this6.changeDetectorRef = changeDetectorRef;
        _this6.navType = 'tabbed';
        _this6.selectedIndex = 0;
        _this6.selectedIndexForFade = 0;
        return _this6;
      }

      _createClass(CardNavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(CardNavigationComponent.prototype), "ngOnInit", this).call(this);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this7 = this;

          this.fadeableElement = this.fadeableSection.nativeElement;
          this.fadeableElement.addEventListener('transitionend', function (event) {
            _this7.selectedIndexForFade = _this7.selectedIndex;
            _this7.fadeableElement.style.opacity = '100';

            _this7.changeDetectorRef.detectChanges();
          });
        }
      }, {
        key: "setSelectedIndex",
        value: function setSelectedIndex(index) {
          this.fadeableElement.style.opacity = '0';
          this.selectedIndex = index;
        }
      }]);

      return CardNavigationComponent;
    }(_common_classes__WEBPACK_IMPORTED_MODULE_2__["CardBase"]);

    CardNavigationComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fadeableSection'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], CardNavigationComponent.prototype, "fadeableSection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CardNavigationComponent.prototype, "navNames", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CardNavigationComponent.prototype, "templates", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CardNavigationComponent.prototype, "navType", void 0);
    CardNavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-card-navigation',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./card-navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-navigation/card-navigation.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./card-navigation.component.scss */
      "./src/modules/app-common/components/card-navigation/card-navigation.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], CardNavigationComponent);
    /***/
  },

  /***/
  "./src/modules/app-common/components/card-view-details/card-view-details.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/modules/app-common/components/card-view-details/card-view-details.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppCommonComponentsCardViewDetailsCardViewDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC1jb21tb24vY29tcG9uZW50cy9jYXJkLXZpZXctZGV0YWlscy9DOlxcVXNlcnNcXEhhYmliTW9rbmlcXERvY3VtZW50c1xcR2l0SHViXFxwcy1ibXMvc3JjXFxtb2R1bGVzXFxhcHAtY29tbW9uXFxjb21wb25lbnRzXFxjYXJkLXZpZXctZGV0YWlsc1xcY2FyZC12aWV3LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy9hcHAtY29tbW9uL2NvbXBvbmVudHMvY2FyZC12aWV3LWRldGFpbHMvY2FyZC12aWV3LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0FDREoiLCJmaWxlIjoic3JjL21vZHVsZXMvYXBwLWNvbW1vbi9jb21wb25lbnRzL2NhcmQtdmlldy1kZXRhaWxzL2NhcmQtdmlldy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/modules/app-common/components/card-view-details/card-view-details.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/modules/app-common/components/card-view-details/card-view-details.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: CardViewDetailsComponent */

  /***/
  function srcModulesAppCommonComponentsCardViewDetailsCardViewDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardViewDetailsComponent", function () {
      return CardViewDetailsComponent;
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


    var _common_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @common/classes */
    "./src/modules/app-common/classes/index.ts");

    var CardViewDetailsComponent =
    /*#__PURE__*/
    function (_common_classes__WEBP5) {
      _inherits(CardViewDetailsComponent, _common_classes__WEBP5);

      function CardViewDetailsComponent() {
        var _this8;

        _classCallCheck(this, CardViewDetailsComponent);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(CardViewDetailsComponent).call(this));
        _this8.link = '';
        return _this8;
      }

      _createClass(CardViewDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(CardViewDetailsComponent.prototype), "ngOnInit", this).call(this);
        }
      }]);

      return CardViewDetailsComponent;
    }(_common_classes__WEBPACK_IMPORTED_MODULE_2__["CardBase"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CardViewDetailsComponent.prototype, "background", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CardViewDetailsComponent.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CardViewDetailsComponent.prototype, "link", void 0);
    CardViewDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-card-view-details',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./card-view-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card-view-details/card-view-details.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./card-view-details.component.scss */
      "./src/modules/app-common/components/card-view-details/card-view-details.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardViewDetailsComponent);
    /***/
  },

  /***/
  "./src/modules/app-common/components/card/card.component.scss":
  /*!********************************************************************!*\
    !*** ./src/modules/app-common/components/card/card.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppCommonComponentsCardCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC1jb21tb24vY29tcG9uZW50cy9jYXJkL0M6XFxVc2Vyc1xcSGFiaWJNb2tuaVxcRG9jdW1lbnRzXFxHaXRIdWJcXHBzLWJtcy9zcmNcXG1vZHVsZXNcXGFwcC1jb21tb25cXGNvbXBvbmVudHNcXGNhcmRcXGNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy9hcHAtY29tbW9uL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9tb2R1bGVzL2FwcC1jb21tb24vY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/app-common/components/card/card.component.ts":
  /*!******************************************************************!*\
    !*** ./src/modules/app-common/components/card/card.component.ts ***!
    \******************************************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcModulesAppCommonComponentsCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
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


    var _common_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @common/classes */
    "./src/modules/app-common/classes/index.ts");

    var CardComponent =
    /*#__PURE__*/
    function (_common_classes__WEBP6) {
      _inherits(CardComponent, _common_classes__WEBP6);

      function CardComponent() {
        var _this9;

        _classCallCheck(this, CardComponent);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(CardComponent).call(this));
        _this9.scrollable = false;
        return _this9;
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(CardComponent.prototype), "ngOnInit", this).call(this);

          if (this.headerActions) {
            this.cardClasses.push('sb-card-header-actions');
          }

          if (this.scrollable) {
            this.cardClasses.push('sb-card-scrollable');
          }
        }
      }]);

      return CardComponent;
    }(_common_classes__WEBPACK_IMPORTED_MODULE_2__["CardBase"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CardComponent.prototype, "headerActions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CardComponent.prototype, "scrollable", void 0);
    CardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-card',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/card/card.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./card.component.scss */
      "./src/modules/app-common/components/card/card.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardComponent);
    /***/
  },

  /***/
  "./src/modules/app-common/components/dropdown/dropdown.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/modules/app-common/components/dropdown/dropdown.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppCommonComponentsDropdownDropdownComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hcHAtY29tbW9uL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/app-common/components/dropdown/dropdown.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/modules/app-common/components/dropdown/dropdown.component.ts ***!
    \**************************************************************************/

  /*! exports provided: DropdownComponent */

  /***/
  function srcModulesAppCommonComponentsDropdownDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () {
      return DropdownComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DropdownComponent =
    /*#__PURE__*/
    function () {
      function DropdownComponent() {
        _classCallCheck(this, DropdownComponent);

        this.dropdownStyle = 'icon';
        this.placement = 'bottom-left';
        this.customClasses = [];
        this.dropdownButtonClasses = [];
        this.dropdownMenuClasses = [];
      }

      _createClass(DropdownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.dropdownStyle === 'icon') {
            var _this$dropdownButtonC;

            (_this$dropdownButtonC = this.dropdownButtonClasses).push.apply(_this$dropdownButtonC, ['sb-btn-icon', 'sb-btn-transparent-dark']);

            this.customClasses.push('no-caret');
          }

          if (this.background) {
            this.dropdownButtonClasses.push(this.background);
          }

          if (this.color) {
            this.dropdownButtonClasses.push(this.color);
          }

          if (this.classes) {
            var _this$customClasses;

            (_this$customClasses = this.customClasses).push.apply(_this$customClasses, _toConsumableArray(this.classes));
          }

          if (this.animation) {
            this.dropdownMenuClasses.push(this.animation);
          }
        }
      }]);

      return DropdownComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DropdownComponent.prototype, "dropdownStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DropdownComponent.prototype, "background", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DropdownComponent.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DropdownComponent.prototype, "placement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], DropdownComponent.prototype, "classes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DropdownComponent.prototype, "animation", void 0);
    DropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-dropdown',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dropdown.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/dropdown/dropdown.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dropdown.component.scss */
      "./src/modules/app-common/components/dropdown/dropdown.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DropdownComponent);
    /***/
  },

  /***/
  "./src/modules/app-common/components/index.ts":
  /*!****************************************************!*\
    !*** ./src/modules/app-common/components/index.ts ***!
    \****************************************************/

  /*! exports provided: components, AlertComponent, CardCollapsableComponent, CardIconComponent, CardImageComponent, CardNavigationComponent, CardViewDetailsComponent, CardComponent, DropdownComponent, LoremIpsumComponent, ProgressbarComponent, ProgresscardComponent, ToastComponent */

  /***/
  function srcModulesAppCommonComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "components", function () {
      return components;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./alert/alert.component */
    "./src/modules/app-common/components/alert/alert.component.ts");
    /* harmony import */


    var _card_collapsable_card_collapsable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./card-collapsable/card-collapsable.component */
    "./src/modules/app-common/components/card-collapsable/card-collapsable.component.ts");
    /* harmony import */


    var _card_icon_card_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./card-icon/card-icon.component */
    "./src/modules/app-common/components/card-icon/card-icon.component.ts");
    /* harmony import */


    var _card_image_card_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./card-image/card-image.component */
    "./src/modules/app-common/components/card-image/card-image.component.ts");
    /* harmony import */


    var _card_navigation_card_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./card-navigation/card-navigation.component */
    "./src/modules/app-common/components/card-navigation/card-navigation.component.ts");
    /* harmony import */


    var _card_view_details_card_view_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./card-view-details/card-view-details.component */
    "./src/modules/app-common/components/card-view-details/card-view-details.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/modules/app-common/components/card/card.component.ts");
    /* harmony import */


    var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dropdown/dropdown.component */
    "./src/modules/app-common/components/dropdown/dropdown.component.ts");
    /* harmony import */


    var _lorem_ipsum_lorem_ipsum_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./lorem-ipsum/lorem-ipsum.component */
    "./src/modules/app-common/components/lorem-ipsum/lorem-ipsum.component.ts");
    /* harmony import */


    var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./progressbar/progressbar.component */
    "./src/modules/app-common/components/progressbar/progressbar.component.ts");
    /* harmony import */


    var _progresscard_progresscard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./progresscard/progresscard.component */
    "./src/modules/app-common/components/progresscard/progresscard.component.ts");
    /* harmony import */


    var _toast_toast_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./toast/toast.component */
    "./src/modules/app-common/components/toast/toast.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardCollapsableComponent", function () {
      return _card_collapsable_card_collapsable_component__WEBPACK_IMPORTED_MODULE_2__["CardCollapsableComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardIconComponent", function () {
      return _card_icon_card_icon_component__WEBPACK_IMPORTED_MODULE_3__["CardIconComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardImageComponent", function () {
      return _card_image_card_image_component__WEBPACK_IMPORTED_MODULE_4__["CardImageComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardNavigationComponent", function () {
      return _card_navigation_card_navigation_component__WEBPACK_IMPORTED_MODULE_5__["CardNavigationComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardViewDetailsComponent", function () {
      return _card_view_details_card_view_details_component__WEBPACK_IMPORTED_MODULE_6__["CardViewDetailsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () {
      return _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["DropdownComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoremIpsumComponent", function () {
      return _lorem_ipsum_lorem_ipsum_component__WEBPACK_IMPORTED_MODULE_9__["LoremIpsumComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function () {
      return _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_10__["ProgressbarComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProgresscardComponent", function () {
      return _progresscard_progresscard_component__WEBPACK_IMPORTED_MODULE_11__["ProgresscardComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
      return _toast_toast_component__WEBPACK_IMPORTED_MODULE_12__["ToastComponent"];
    });

    var components = [_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"], _card_collapsable_card_collapsable_component__WEBPACK_IMPORTED_MODULE_2__["CardCollapsableComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _card_icon_card_icon_component__WEBPACK_IMPORTED_MODULE_3__["CardIconComponent"], _card_image_card_image_component__WEBPACK_IMPORTED_MODULE_4__["CardImageComponent"], _card_navigation_card_navigation_component__WEBPACK_IMPORTED_MODULE_5__["CardNavigationComponent"], _card_view_details_card_view_details_component__WEBPACK_IMPORTED_MODULE_6__["CardViewDetailsComponent"], _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["DropdownComponent"], _lorem_ipsum_lorem_ipsum_component__WEBPACK_IMPORTED_MODULE_9__["LoremIpsumComponent"], _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_10__["ProgressbarComponent"], _progresscard_progresscard_component__WEBPACK_IMPORTED_MODULE_11__["ProgresscardComponent"], _toast_toast_component__WEBPACK_IMPORTED_MODULE_12__["ToastComponent"]];
    /***/
  },

  /***/
  "./src/modules/app-common/components/lorem-ipsum/lorem-ipsum.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/modules/app-common/components/lorem-ipsum/lorem-ipsum.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppCommonComponentsLoremIpsumLoremIpsumComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hcHAtY29tbW9uL2NvbXBvbmVudHMvbG9yZW0taXBzdW0vbG9yZW0taXBzdW0uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/app-common/components/lorem-ipsum/lorem-ipsum.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/modules/app-common/components/lorem-ipsum/lorem-ipsum.component.ts ***!
    \********************************************************************************/

  /*! exports provided: LoremIpsumComponent */

  /***/
  function srcModulesAppCommonComponentsLoremIpsumLoremIpsumComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoremIpsumComponent", function () {
      return LoremIpsumComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoremIpsumComponent =
    /*#__PURE__*/
    function () {
      function LoremIpsumComponent() {
        _classCallCheck(this, LoremIpsumComponent);
      }

      _createClass(LoremIpsumComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoremIpsumComponent;
    }();

    LoremIpsumComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-lorem-ipsum',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./lorem-ipsum.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/lorem-ipsum/lorem-ipsum.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./lorem-ipsum.component.scss */
      "./src/modules/app-common/components/lorem-ipsum/lorem-ipsum.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LoremIpsumComponent);
    /***/
  },

  /***/
  "./src/modules/app-common/components/progressbar/progressbar.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/modules/app-common/components/progressbar/progressbar.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppCommonComponentsProgressbarProgressbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC1jb21tb24vY29tcG9uZW50cy9wcm9ncmVzc2Jhci9DOlxcVXNlcnNcXEhhYmliTW9rbmlcXERvY3VtZW50c1xcR2l0SHViXFxwcy1ibXMvc3JjXFxtb2R1bGVzXFxhcHAtY29tbW9uXFxjb21wb25lbnRzXFxwcm9ncmVzc2JhclxccHJvZ3Jlc3NiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy9hcHAtY29tbW9uL2NvbXBvbmVudHMvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0FDREoiLCJmaWxlIjoic3JjL21vZHVsZXMvYXBwLWNvbW1vbi9jb21wb25lbnRzL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/modules/app-common/components/progressbar/progressbar.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/modules/app-common/components/progressbar/progressbar.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ProgressbarComponent */

  /***/
  function srcModulesAppCommonComponentsProgressbarProgressbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function () {
      return ProgressbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProgressbarComponent =
    /*#__PURE__*/
    function () {
      function ProgressbarComponent() {
        _classCallCheck(this, ProgressbarComponent);

        this.bgColor = 'bg-primary';
        this.striped = false;
        this.animated = false;
        this.progressBarClasses = [];
      }

      _createClass(ProgressbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.progressBarClasses.push(this.bgColor);

          if (this.striped) {
            this.progressBarClasses.push('progress-bar-striped');
          }

          if (this.animated) {
            this.progressBarClasses.push('progress-bar-animated');
          }
        }
      }]);

      return ProgressbarComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], ProgressbarComponent.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProgressbarComponent.prototype, "bgColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProgressbarComponent.prototype, "striped", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProgressbarComponent.prototype, "animated", void 0);
    ProgressbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-progress-bar',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./progressbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/progressbar/progressbar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./progressbar.component.scss */
      "./src/modules/app-common/components/progressbar/progressbar.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProgressbarComponent);
    /***/
  },

  /***/
  "./src/modules/app-common/components/progresscard/progresscard.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/modules/app-common/components/progresscard/progresscard.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppCommonComponentsProgresscardProgresscardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hcHAtY29tbW9uL2NvbXBvbmVudHMvcHJvZ3Jlc3NjYXJkL3Byb2dyZXNzY2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/app-common/components/progresscard/progresscard.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/modules/app-common/components/progresscard/progresscard.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ProgresscardComponent */

  /***/
  function srcModulesAppCommonComponentsProgresscardProgresscardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgresscardComponent", function () {
      return ProgresscardComponent;
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


    var _common_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @common/classes */
    "./src/modules/app-common/classes/index.ts");

    var ProgresscardComponent =
    /*#__PURE__*/
    function (_common_classes__WEBP7) {
      _inherits(ProgresscardComponent, _common_classes__WEBP7);

      function ProgresscardComponent() {
        var _this10;

        _classCallCheck(this, ProgresscardComponent);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(ProgresscardComponent).call(this));
        _this10.progressBarColor = 'bg-primary';
        _this10.striped = false;
        _this10.animated = false;
        _this10.progressBarClasses = [];
        return _this10;
      }

      _createClass(ProgresscardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.progressBarClasses.push(this.progressBarColor);

          if (this.striped) {
            this.progressBarClasses.push('progress-bar-striped');
          }

          if (this.animated) {
            this.progressBarClasses.push('progress-bar-animated');
          }
        }
      }]);

      return ProgresscardComponent;
    }(_common_classes__WEBPACK_IMPORTED_MODULE_2__["CardBase"]);

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], ProgresscardComponent.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProgresscardComponent.prototype, "progressBarColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProgresscardComponent.prototype, "striped", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ProgresscardComponent.prototype, "animated", void 0);
    ProgresscardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-progress-card',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./progresscard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/progresscard/progresscard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./progresscard.component.scss */
      "./src/modules/app-common/components/progresscard/progresscard.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProgresscardComponent);
    /***/
  },

  /***/
  "./src/modules/app-common/components/toast/toast.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/modules/app-common/components/toast/toast.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppCommonComponentsToastToastComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hcHAtY29tbW9uL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/app-common/components/toast/toast.component.ts":
  /*!********************************************************************!*\
    !*** ./src/modules/app-common/components/toast/toast.component.ts ***!
    \********************************************************************/

  /*! exports provided: ToastComponent */

  /***/
  function srcModulesAppCommonComponentsToastToastComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
      return ToastComponent;
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


    var _common_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @common/services/toast.service */
    "./src/modules/app-common/services/toast.service.ts");

    var ToastComponent =
    /*#__PURE__*/
    function () {
      function ToastComponent(toastService) {
        _classCallCheck(this, ToastComponent);

        this.toastService = toastService;
        this.autohide = false;
        this.toastContext = this;
      }

      _createClass(ToastComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.headerIsTemplate = this.header instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"];
          this.bodyIsTemplate = this.body instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"];

          if (this.autohide) {
            this.timeoutID = window.setTimeout(function () {
              _this11.toastService.remove(_this11.toastID);
            }, this.delay || 5000);
          }
        }
      }]);

      return ToastComponent;
    }();

    ToastComponent.ctorParameters = function () {
      return [{
        type: _common_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ToastComponent.prototype, "header", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ToastComponent.prototype, "body", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ToastComponent.prototype, "autohide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], ToastComponent.prototype, "delay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ToastComponent.prototype, "classes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ToastComponent.prototype, "headerClasses", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ToastComponent.prototype, "bodyClasses", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], ToastComponent.prototype, "toastID", void 0);
    ToastComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-toast',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./toast.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/components/toast/toast.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./toast.component.scss */
      "./src/modules/app-common/components/toast/toast.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_common_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]])], ToastComponent);
    /***/
  },

  /***/
  "./src/modules/app-common/containers/index.ts":
  /*!****************************************************!*\
    !*** ./src/modules/app-common/containers/index.ts ***!
    \****************************************************/

  /*! exports provided: containers, VersionComponent, ToastViewComponent */

  /***/
  function srcModulesAppCommonContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "containers", function () {
      return containers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _toast_view_toast_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toast-view/toast-view.component */
    "./src/modules/app-common/containers/toast-view/toast-view.component.ts");
    /* harmony import */


    var _version_version_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./version/version.component */
    "./src/modules/app-common/containers/version/version.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VersionComponent", function () {
      return _version_version_component__WEBPACK_IMPORTED_MODULE_2__["VersionComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToastViewComponent", function () {
      return _toast_view_toast_view_component__WEBPACK_IMPORTED_MODULE_1__["ToastViewComponent"];
    });

    var containers = [_version_version_component__WEBPACK_IMPORTED_MODULE_2__["VersionComponent"], _toast_view_toast_view_component__WEBPACK_IMPORTED_MODULE_1__["ToastViewComponent"]];
    /***/
  },

  /***/
  "./src/modules/app-common/containers/toast-view/toast-view.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/modules/app-common/containers/toast-view/toast-view.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppCommonContainersToastViewToastViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  position: fixed;\n  top: 0;\n  right: 0;\n  margin: 0.5em;\n  z-index: 1200;\n  width: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2FwcC1jb21tb24vY29udGFpbmVycy90b2FzdC12aWV3L0M6XFxVc2Vyc1xcSGFiaWJNb2tuaVxcRG9jdW1lbnRzXFxHaXRIdWJcXHBzLWJtcy9zcmNcXG1vZHVsZXNcXGFwcC1jb21tb25cXGNvbnRhaW5lcnNcXHRvYXN0LXZpZXdcXHRvYXN0LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy9hcHAtY29tbW9uL2NvbnRhaW5lcnMvdG9hc3Qtdmlldy90b2FzdC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL21vZHVsZXMvYXBwLWNvbW1vbi9jb250YWluZXJzL3RvYXN0LXZpZXcvdG9hc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICB6LWluZGV4OiAxMjAwO1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG59XHJcbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAuNWVtO1xuICB6LWluZGV4OiAxMjAwO1xuICB3aWR0aDogMzUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/modules/app-common/containers/toast-view/toast-view.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/modules/app-common/containers/toast-view/toast-view.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ToastViewComponent */

  /***/
  function srcModulesAppCommonContainersToastViewToastViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastViewComponent", function () {
      return ToastViewComponent;
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


    var _common_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @common/services/toast.service */
    "./src/modules/app-common/services/toast.service.ts");

    var ToastViewComponent =
    /*#__PURE__*/
    function () {
      function ToastViewComponent(toastService) {
        _classCallCheck(this, ToastViewComponent);

        this.toastService = toastService;
      }

      _createClass(ToastViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToastViewComponent;
    }();

    ToastViewComponent.ctorParameters = function () {
      return [{
        type: _common_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]
      }];
    };

    ToastViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-toast-view',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./toast-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/containers/toast-view/toast-view.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./toast-view.component.scss */
      "./src/modules/app-common/containers/toast-view/toast-view.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_common_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]])], ToastViewComponent);
    /***/
  },

  /***/
  "./src/modules/app-common/containers/version/version.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/modules/app-common/containers/version/version.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesAppCommonContainersVersionVersionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hcHAtY29tbW9uL2NvbnRhaW5lcnMvdmVyc2lvbi92ZXJzaW9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/app-common/containers/version/version.component.ts":
  /*!************************************************************************!*\
    !*** ./src/modules/app-common/containers/version/version.component.ts ***!
    \************************************************************************/

  /*! exports provided: VersionComponent */

  /***/
  function srcModulesAppCommonContainersVersionVersionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VersionComponent", function () {
      return VersionComponent;
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


    var _modules_app_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @modules/app-common/services */
    "./src/modules/app-common/services/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var VersionComponent =
    /*#__PURE__*/
    function () {
      function VersionComponent(utilityService) {
        _classCallCheck(this, VersionComponent);

        this.utilityService = utilityService;
      }

      _createClass(VersionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.utilityService.version$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (v) {
            return _this12.version = v;
          });
        }
      }]);

      return VersionComponent;
    }();

    VersionComponent.ctorParameters = function () {
      return [{
        type: _modules_app_common_services__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }];
    };

    VersionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-version',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./version.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/app-common/containers/version/version.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./version.component.scss */
      "./src/modules/app-common/containers/version/version.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_app_common_services__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])], VersionComponent);
    /***/
  },

  /***/
  "./src/modules/app-common/directives/index.ts":
  /*!****************************************************!*\
    !*** ./src/modules/app-common/directives/index.ts ***!
    \****************************************************/

  /*! exports provided: directives */

  /***/
  function srcModulesAppCommonDirectivesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "directives", function () {
      return directives;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var directives = [];
    /***/
  },

  /***/
  "./src/modules/app-common/guards/app-common.guard.ts":
  /*!***********************************************************!*\
    !*** ./src/modules/app-common/guards/app-common.guard.ts ***!
    \***********************************************************/

  /*! exports provided: AppCommonGuard */

  /***/
  function srcModulesAppCommonGuardsAppCommonGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppCommonGuard", function () {
      return AppCommonGuard;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AppCommonGuard =
    /*#__PURE__*/
    function () {
      function AppCommonGuard() {
        _classCallCheck(this, AppCommonGuard);
      }

      _createClass(AppCommonGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
      }]);

      return AppCommonGuard;
    }();

    AppCommonGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AppCommonGuard);
    /***/
  },

  /***/
  "./src/modules/app-common/guards/index.ts":
  /*!************************************************!*\
    !*** ./src/modules/app-common/guards/index.ts ***!
    \************************************************/

  /*! exports provided: guards, AppCommonGuard */

  /***/
  function srcModulesAppCommonGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "guards", function () {
      return guards;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_common_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app-common.guard */
    "./src/modules/app-common/guards/app-common.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppCommonGuard", function () {
      return _app_common_guard__WEBPACK_IMPORTED_MODULE_1__["AppCommonGuard"];
    });

    var guards = [_app_common_guard__WEBPACK_IMPORTED_MODULE_1__["AppCommonGuard"]];
    /***/
  },

  /***/
  "./src/modules/app-common/services/index.ts":
  /*!**************************************************!*\
    !*** ./src/modules/app-common/services/index.ts ***!
    \**************************************************/

  /*! exports provided: services, UtilityService, ToastService */

  /***/
  function srcModulesAppCommonServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "services", function () {
      return services;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toast.service */
    "./src/modules/app-common/services/toast.service.ts");
    /* harmony import */


    var _utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./utility.service */
    "./src/modules/app-common/services/utility.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
      return _utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return _toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"];
    });

    var services = [_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], _toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]];
    /***/
  },

  /***/
  "./src/modules/app-common/services/toast.service.ts":
  /*!**********************************************************!*\
    !*** ./src/modules/app-common/services/toast.service.ts ***!
    \**********************************************************/

  /*! exports provided: ToastService */

  /***/
  function srcModulesAppCommonServicesToastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
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


    var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/index.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);

    var ToastService =
    /*#__PURE__*/
    function () {
      function ToastService() {
        _classCallCheck(this, ToastService);

        this.toasts = [];
      }

      _createClass(ToastService, [{
        key: "show",
        value: function show(header, body, options) {
          this.toasts.push({
            header: header,
            body: body,
            uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
            options: options
          });
        }
      }, {
        key: "remove",
        value: function remove(toastID) {
          this.toasts = this.toasts.filter(function (toast) {
            return toast.uuid !== toastID;
          });
        }
      }]);

      return ToastService;
    }();

    ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ToastService);
    /***/
  },

  /***/
  "./src/modules/app-common/services/utility.service.ts":
  /*!************************************************************!*\
    !*** ./src/modules/app-common/services/utility.service.ts ***!
    \************************************************************/

  /*! exports provided: UtilityService */

  /***/
  function srcModulesAppCommonServicesUtilityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
      return UtilityService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! copy-to-clipboard */
    "./node_modules/copy-to-clipboard/index.js");
    /* harmony import */


    var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);

    var UtilityService =
    /*#__PURE__*/
    function () {
      function UtilityService(http) {
        _classCallCheck(this, UtilityService);

        this.http = http;
        this._window = window;
        this.parse = JSON.parse;
        this.stringify = JSON.stringify;
        this.localStorage = localStorage;
        this._copyToClipboard = copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default.a;
      }

      _createClass(UtilityService, [{
        key: "getStoredObject",
        value: function getStoredObject(objectName) {
          var objectString = this.localStorage.getItem(objectName);

          if (!objectString) {
            return undefined;
          }

          return this.parse(objectString);
        }
      }, {
        key: "storeObject",
        value: function storeObject(objectName, objectToStore) {
          this.localStorage.setItem(objectName, this.stringify(objectToStore));
        }
      }, {
        key: "copyToClipboard",
        value: function copyToClipboard(text, options) {
          this._copyToClipboard(text, options);
        }
      }, {
        key: "window",
        get: function get() {
          return this._window;
        }
      }, {
        key: "version$",
        get: function get() {
          return this.http.get('/assets/version', {
            responseType: 'text'
          });
        }
      }]);

      return UtilityService;
    }();

    UtilityService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    UtilityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], UtilityService);
    /***/
  },

  /***/
  "./src/modules/auth/models/user.model.ts":
  /*!***********************************************!*\
    !*** ./src/modules/auth/models/user.model.ts ***!
    \***********************************************/

  /*! exports provided: User */

  /***/
  function srcModulesAuthModelsUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // tslint:disable: prettier


    var User =
    /*#__PURE__*/
    function () {
      function User(email, id, _token, _tokenExpirationDate) {
        _classCallCheck(this, User);

        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
      }

      _createClass(User, [{
        key: "token",
        get: function get() {
          if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
          }

          return this._token;
        }
      }]);

      return User;
    }();
    /***/

  },

  /***/
  "./src/modules/auth/services/auth.service.ts":
  /*!***************************************************!*\
    !*** ./src/modules/auth/services/auth.service.ts ***!
    \***************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcModulesAuthServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/user.model */
    "./src/modules/auth/models/user.model.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.isLogged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](true);
        this.isLogged2 = false;
      }

      _createClass(AuthService, [{
        key: "autoLogin",
        value: function autoLogin() {
          var userData = JSON.parse(localStorage.getItem('userData'));

          if (!userData) {
            return;
          }

          var loadedUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"](userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

          if (loadedUser.token) {
            this.user.next(loadedUser);
            var expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
          }
        }
      }, {
        key: "autoLogout",
        value: function autoLogout(expirationDuration) {
          var _this13 = this;

          this.tokenExpirationTimer = setTimeout(function () {
            _this13.logout();
          }, expirationDuration);
        }
      }, {
        key: "signup",
        value: function signup(email, password) {
          var _this14 = this;

          return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAoSgOQ7EgXy1lTu679fBfgxIwHeGL9YfQ', {
            email: email,
            password: password,
            returnSecureToken: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (resData) {
            _this14.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
          }));
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var _this15 = this;

          return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAoSgOQ7EgXy1lTu679fBfgxIwHeGL9YfQ', {
            email: email,
            password: password,
            returnSecureToken: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (resData) {
            // this.isAuth.next(resData.idToken);
            _this15.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          /*
          this.user.next(null);
          this.router.navigate(['/auth/login']);
          window.localStorage.removeItem('access-token'); */
          this.user.next(null);
          this.router.navigate(['/auth/login']);
          localStorage.removeItem('userData');
          localStorage.removeItem('access-token');

          if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
          }

          this.tokenExpirationTimer = null;
        }
      }, {
        key: "handleAuth",
        value: function handleAuth(email, userId, token, expiresIn) {
          console.log('handleAuth');
          var expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
          var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"](email, userId, token, expirationDate);
          this.user.next(user);
          localStorage.setItem('userData', JSON.stringify(user));
        }
      }, {
        key: "handleError",
        value: function handleError(errorRes) {
          var errorMessage = 'An unknown error occured';

          if (!errorRes.error || !errorRes.error.error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
          }

          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'This email exists already!';
              alert(errorMessage);
              location.reload();
              break;

            case 'EMAIL_NOT_FOUND':
              alert('Login failed: Invalid username or password.');
              errorMessage = 'This email does ont exist';
              location.reload();
              break;

            case 'INVALID_PASSWORD':
              alert('Login failed: Invalid username or password.');
              errorMessage = 'Password not correct';
              location.reload();
              break;
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AuthService);
    /***/
  },

  /***/
  "./src/modules/auth/services/index.ts":
  /*!********************************************!*\
    !*** ./src/modules/auth/services/index.ts ***!
    \********************************************/

  /*! exports provided: services, AuthService, UserService */

  /***/
  function srcModulesAuthServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "services", function () {
      return services;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/modules/auth/services/auth.service.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user.service */
    "./src/modules/auth/services/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"];
    });

    var services = [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]];
    /***/
  },

  /***/
  "./src/modules/auth/services/user.service.ts":
  /*!***************************************************!*\
    !*** ./src/modules/auth/services/user.service.ts ***!
    \***************************************************/

  /*! exports provided: UserService */

  /***/
  function srcModulesAuthServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService() {
        _classCallCheck(this, UserService);

        this.user = {
          id: '123',
          firstName: 'Valerie',
          lastName: 'Luna',
          email: 'vluna@aol.com',
          image: 'https://source.unsplash.com/QAB-WJcbgJk/60x60'
        };
      }

      _createClass(UserService, [{
        key: "user",
        set: function set(user) {
          userSubject.next(user);
        }
      }, {
        key: "user$",
        get: function get() {
          return userSubject.asObservable();
        }
      }]);

      return UserService;
    }();

    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], UserService);
    /***/
  },

  /***/
  "./src/modules/icons/icons.feather.ts":
  /*!********************************************!*\
    !*** ./src/modules/icons/icons.feather.ts ***!
    \********************************************/

  /*! exports provided: featherIcons */

  /***/
  function srcModulesIconsIconsFeatherTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "featherIcons", function () {
      return featherIcons;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-feather/icons */
    "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather-icons.js");
    /* All feather icons -> https://github.com/michaelbazos/angular-feather#available-icons */


    var featherIcons = {
      Activity: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Activity"],
      AlertTriangle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["AlertTriangle"],
      Archive: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Archive"],
      ArrowUpLeft: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["ArrowUpLeft"],
      BarChart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["BarChart"],
      Award: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Award"],
      ArrowRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["ArrowRight"],
      Bell: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Bell"],
      Book: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Book"],
      Bookmark: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Bookmark"],
      BookOpen: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["BookOpen"],
      Check: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Check"],
      CheckCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["CheckCircle"],
      ChevronUp: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["ChevronUp"],
      ChevronDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["ChevronDown"],
      ChevronRight: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["ChevronRight"],
      Circle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Circle"],
      Clipboard: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Clipboard"],
      CloudRain: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["CloudRain"],
      Code: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Code"],
      Copy: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Copy"],
      CornerRightDown: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["CornerRightDown"],
      Download: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Download"],
      Droplet: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Droplet"],
      Edit: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Edit"],
      Edit3: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Edit3"],
      ExternalLink: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["ExternalLink"],
      Eye: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Eye"],
      Feather: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Feather"],
      File: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["File"],
      FileText: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["FileText"],
      Film: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Film"],
      Filter: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Filter"],
      Flag: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Flag"],
      Globe: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Globe"],
      Heart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Heart"],
      HelpCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["HelpCircle"],
      Home: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Home"],
      Info: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Info"],
      Layers: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Layers"],
      Layout: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Layout"],
      Link: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Link"],
      Lock: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Lock"],
      LogOut: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["LogOut"],
      Mail: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Mail"],
      Maximize: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Maximize"],
      Menu: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Menu"],
      Moon: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Moon"],
      MoreVertical: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["MoreVertical"],
      MousePointer: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["MousePointer"],
      Package: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Package"],
      PieChart: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["PieChart"],
      PlusCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["PlusCircle"],
      Repeat: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Repeat"],
      Search: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Search"],
      Settings: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Settings"],
      Share: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Share"],
      Sidebar: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Sidebar"],
      Sliders: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Sliders"],
      Sun: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Sun"],
      Sunset: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Sunset"],
      Tool: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Tool"],
      Trash2: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Trash2"],
      Type: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Type"],
      User: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["User"],
      UserPlus: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["UserPlus"],
      Users: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Users"],
      XCircle: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["XCircle"],
      Zap: angular_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Zap"]
    };
    /***/
  },

  /***/
  "./src/modules/icons/icons.font-awesome-brands.ts":
  /*!********************************************************!*\
    !*** ./src/modules/icons/icons.font-awesome-brands.ts ***!
    \********************************************************/

  /*! exports provided: fontAwesomeBrandsIcons */

  /***/
  function srcModulesIconsIconsFontAwesomeBrandsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fontAwesomeBrandsIcons", function () {
      return fontAwesomeBrandsIcons;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* All free solid fontawesome icons -> https://fontawesome.com/icons?d=gallery&s=brands&m=free */


    var fontAwesomeBrandsIcons = {
      faBootstrap: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBootstrap"],
      faFacebook: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebook"],
      faFacebookF: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebookF"],
      faGithub: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"],
      faGoogle: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGoogle"],
      faHtml5: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHtml5"],
      faTwitter: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"]
    };
    /***/
  },

  /***/
  "./src/modules/icons/icons.font-awesome-regular.ts":
  /*!*********************************************************!*\
    !*** ./src/modules/icons/icons.font-awesome-regular.ts ***!
    \*********************************************************/

  /*! exports provided: fontAwesomeRegularIcons */

  /***/
  function srcModulesIconsIconsFontAwesomeRegularTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fontAwesomeRegularIcons", function () {
      return fontAwesomeRegularIcons;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-regular-svg-icons */
    "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
    /* All free solid fontawesome icons -> https://fontawesome.com/icons?d=gallery&s=regular&m=free */


    var fontAwesomeRegularIcons = {
      faArrowAltCircleDown: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowAltCircleDown"],
      faBell: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBell"],
      faCheckCircle: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckCircle"],
      faFlag: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFlag"]
    };
    /***/
  },

  /***/
  "./src/modules/icons/icons.font-awesome-solid.ts":
  /*!*******************************************************!*\
    !*** ./src/modules/icons/icons.font-awesome-solid.ts ***!
    \*******************************************************/

  /*! exports provided: fontAwesomeSolidIcons */

  /***/
  function srcModulesIconsIconsFontAwesomeSolidTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fontAwesomeSolidIcons", function () {
      return fontAwesomeSolidIcons;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* All free solid fontawesome icons -> https://fontawesome.com/icons?d=gallery&s=solid&m=free */


    var fontAwesomeSolidIcons = {
      faAngleDown: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleDown"],
      faAngleRight: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleRight"],
      faArrowLeft: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowLeft"],
      faBars: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"],
      faBookOpen: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBookOpen"],
      faChartArea: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChartArea"],
      faChartBar: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChartBar"],
      faChartPie: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChartPie"],
      faChevronDown: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronDown"],
      faChevronUp: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronUp"],
      faColumns: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faColumns"],
      faExclamation: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faExclamation"],
      faExclamationTriangle: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faExclamationTriangle"],
      faFlag: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFlag"],
      faLongArrowAltRight: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLongArrowAltRight"],
      faPlus: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"],
      faPlusCircle: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlusCircle"],
      faSearch: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"],
      faTable: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTable"],
      faTachometerAlt: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTachometerAlt"],
      faUser: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUser"]
    };
    /***/
  },

  /***/
  "./src/modules/icons/icons.module.ts":
  /*!*******************************************!*\
    !*** ./src/modules/icons/icons.module.ts ***!
    \*******************************************/

  /*! exports provided: IconsModule */

  /***/
  function srcModulesIconsIconsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconsModule", function () {
      return IconsModule;
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


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-feather */
    "./node_modules/angular-feather/__ivy_ngcc__/fesm2015/angular-feather.js");
    /* harmony import */


    var _icons_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./icons.feather */
    "./src/modules/icons/icons.feather.ts");
    /* harmony import */


    var _icons_font_awesome_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./icons.font-awesome-solid */
    "./src/modules/icons/icons.font-awesome-solid.ts");
    /* harmony import */


    var _icons_font_awesome_regular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./icons.font-awesome-regular */
    "./src/modules/icons/icons.font-awesome-regular.ts");
    /* harmony import */


    var _icons_font_awesome_brands__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./icons.font-awesome-brands */
    "./src/modules/icons/icons.font-awesome-brands.ts");
    /* tslint:disable: ordered-imports*/


    var IconsModule = function IconsModule(library) {
      _classCallCheck(this, IconsModule);

      library.addIconPacks(_icons_font_awesome_solid__WEBPACK_IMPORTED_MODULE_5__["fontAwesomeSolidIcons"], _icons_font_awesome_regular__WEBPACK_IMPORTED_MODULE_6__["fontAwesomeRegularIcons"], _icons_font_awesome_brands__WEBPACK_IMPORTED_MODULE_7__["fontAwesomeBrandsIcons"]);
    };

    IconsModule.ctorParameters = function () {
      return [{
        type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"]
      }];
    };

    IconsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [angular_feather__WEBPACK_IMPORTED_MODULE_3__["FeatherModule"].pick(_icons_feather__WEBPACK_IMPORTED_MODULE_4__["featherIcons"])],
      exports: [angular_feather__WEBPACK_IMPORTED_MODULE_3__["FeatherModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"]])], IconsModule);
    /***/
  },

  /***/
  "./src/modules/messages/services/index.ts":
  /*!************************************************!*\
    !*** ./src/modules/messages/services/index.ts ***!
    \************************************************/

  /*! exports provided: services, MessagesService */

  /***/
  function srcModulesMessagesServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "services", function () {
      return services;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./messages.service */
    "./src/modules/messages/services/messages.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MessagesService", function () {
      return _messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"];
    });

    var services = [_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"]];
    /***/
  },

  /***/
  "./src/modules/messages/services/messages.service.ts":
  /*!***********************************************************!*\
    !*** ./src/modules/messages/services/messages.service.ts ***!
    \***********************************************************/

  /*! exports provided: MessagesService */

  /***/
  function srcModulesMessagesServicesMessagesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesService", function () {
      return MessagesService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var messages = [{
      image: 'https://source.unsplash.com/vTL_qy03D1I/60x60',
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      details: 'Emily Fowler · 58m'
    }, {
      image: 'https://source.unsplash.com/4ytMf8MgJlY/60x60',
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      details: 'Diane Chambers · 2d'
    }];

    var MessagesService =
    /*#__PURE__*/
    function () {
      function MessagesService() {
        _classCallCheck(this, MessagesService);
      }

      _createClass(MessagesService, [{
        key: "messages$",
        get: function get() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(messages);
        }
      }]);

      return MessagesService;
    }();

    MessagesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MessagesService);
    /***/
  },

  /***/
  "./src/modules/navigation/classes/index.ts":
  /*!*************************************************!*\
    !*** ./src/modules/navigation/classes/index.ts ***!
    \*************************************************/

  /*! exports provided: LayoutSidenav */

  /***/
  function srcModulesNavigationClassesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _layout_sidenav_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layout-sidenav.class */
    "./src/modules/navigation/classes/layout-sidenav.class.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutSidenav", function () {
      return _layout_sidenav_class__WEBPACK_IMPORTED_MODULE_1__["LayoutSidenav"];
    });
    /***/

  },

  /***/
  "./src/modules/navigation/classes/layout-sidenav.class.ts":
  /*!****************************************************************!*\
    !*** ./src/modules/navigation/classes/layout-sidenav.class.ts ***!
    \****************************************************************/

  /*! exports provided: LayoutSidenav */

  /***/
  function srcModulesNavigationClassesLayoutSidenavClassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutSidenav", function () {
      return LayoutSidenav;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LayoutSidenav =
    /*#__PURE__*/
    function () {
      function LayoutSidenav(utilityService, navigationService, changeDetectorRef) {
        _classCallCheck(this, LayoutSidenav);

        this.sideNavHidden = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.utilityService = utilityService;
        this.navigationService = navigationService;
        this.changeDetectorRef = changeDetectorRef;
      }

      _createClass(LayoutSidenav, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.subscription.add(this.navigationService.sideNavVisible$().subscribe(function (isVisible) {
            _this16.sideNavHidden = !isVisible;

            _this16.changeDetectorRef.markForCheck();
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "closeSideNavIfOpen",
        value: function closeSideNavIfOpen() {
          var BOOTSTRAP_LG_WIDTH = 992;

          if (this.utilityService.window.innerWidth >= 992) {
            return;
          } // After the lg breakpoint, hidden is actually visible.
          // So the toggleSideNav below only will fire if the screen is < 992px
          // and the sideNav is open.


          if (this.sideNavHidden) {
            this.navigationService.toggleSideNav(true);
          }
        }
      }]);

      return LayoutSidenav;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sb-sidenav-toggled'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LayoutSidenav.prototype, "sideNavHidden", void 0);
    /***/
  },

  /***/
  "./src/modules/navigation/components/breadcrumbs/breadcrumbs.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/modules/navigation/components/breadcrumbs/breadcrumbs.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesNavigationComponentsBreadcrumbsBreadcrumbsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".breadcrumb-item {\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL25hdmlnYXRpb24vY29tcG9uZW50cy9icmVhZGNydW1icy9DOlxcVXNlcnNcXEhhYmliTW9rbmlcXERvY3VtZW50c1xcR2l0SHViXFxwcy1ibXMvc3JjXFxtb2R1bGVzXFxuYXZpZ2F0aW9uXFxjb21wb25lbnRzXFxicmVhZGNydW1ic1xcYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL21vZHVsZXMvbmF2aWdhdGlvbi9jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5icmVhZGNydW1iLWl0ZW0ge1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59IiwiLmJyZWFkY3J1bWItaXRlbSB7XG4gIHotaW5kZXg6IDEwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/modules/navigation/components/breadcrumbs/breadcrumbs.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/modules/navigation/components/breadcrumbs/breadcrumbs.component.ts ***!
    \********************************************************************************/

  /*! exports provided: BreadcrumbsComponent */

  /***/
  function srcModulesNavigationComponentsBreadcrumbsBreadcrumbsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function () {
      return BreadcrumbsComponent;
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


    var _modules_navigation_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @modules/navigation/services */
    "./src/modules/navigation/services/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var BreadcrumbsComponent =
    /*#__PURE__*/
    function () {
      function BreadcrumbsComponent(navigationService) {
        _classCallCheck(this, BreadcrumbsComponent);

        this.navigationService = navigationService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.breadcrumbs = [];
      }

      _createClass(BreadcrumbsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.subscription.add(this.navigationService.routeData$().subscribe(function (routeData) {
            _this17.breadcrumbs = routeData.breadcrumbs;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return BreadcrumbsComponent;
    }();

    BreadcrumbsComponent.ctorParameters = function () {
      return [{
        type: _modules_navigation_services__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]
      }];
    };

    BreadcrumbsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-breadcrumbs',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./breadcrumbs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/breadcrumbs/breadcrumbs.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./breadcrumbs.component.scss */
      "./src/modules/navigation/components/breadcrumbs/breadcrumbs.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_navigation_services__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])], BreadcrumbsComponent);
    /***/
  },

  /***/
  "./src/modules/navigation/components/dashboard-head/dashboard-head.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/modules/navigation/components/dashboard-head/dashboard-head.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesNavigationComponentsDashboardHeadDashboardHeadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvZGFzaGJvYXJkLWhlYWQvZGFzaGJvYXJkLWhlYWQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/navigation/components/dashboard-head/dashboard-head.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/modules/navigation/components/dashboard-head/dashboard-head.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: DashboardHeadComponent */

  /***/
  function srcModulesNavigationComponentsDashboardHeadDashboardHeadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardHeadComponent", function () {
      return DashboardHeadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardHeadComponent =
    /*#__PURE__*/
    function () {
      function DashboardHeadComponent() {
        _classCallCheck(this, DashboardHeadComponent);

        this.breadcrumbs = false;
        this.simplified = false;
        this.light = false;
        this.darkClasses = ['page-header-dark', 'bg-gradient-primary-to-secondary'];
        this.lightClasses = ['page-header-light', 'bg-white', 'shadow'];
      }

      _createClass(DashboardHeadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardHeadComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DashboardHeadComponent.prototype, "icon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DashboardHeadComponent.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DashboardHeadComponent.prototype, "description", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DashboardHeadComponent.prototype, "breadcrumbs", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DashboardHeadComponent.prototype, "simplified", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DashboardHeadComponent.prototype, "light", void 0);
    DashboardHeadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-dashboard-head',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard-head.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/dashboard-head/dashboard-head.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard-head.component.scss */
      "./src/modules/navigation/components/dashboard-head/dashboard-head.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardHeadComponent);
    /***/
  },

  /***/
  "./src/modules/navigation/components/index.ts":
  /*!****************************************************!*\
    !*** ./src/modules/navigation/components/index.ts ***!
    \****************************************************/

  /*! exports provided: components, SideNavItemProComponent, BreadcrumbsComponent, DashboardHeadComponent, TopNavUserComponent, TopNavAlertsComponent, TopNavMessagesComponent, TopNavSearchComponent, TopNavMessagesItemComponent, TopNavAlertsItemComponent */

  /***/
  function srcModulesNavigationComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "components", function () {
      return components;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./breadcrumbs/breadcrumbs.component */
    "./src/modules/navigation/components/breadcrumbs/breadcrumbs.component.ts");
    /* harmony import */


    var _dashboard_head_dashboard_head_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard-head/dashboard-head.component */
    "./src/modules/navigation/components/dashboard-head/dashboard-head.component.ts");
    /* harmony import */


    var _side_nav_item_pro_side_nav_item_pro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./side-nav-item-pro/side-nav-item-pro.component */
    "./src/modules/navigation/components/side-nav-item-pro/side-nav-item-pro.component.ts");
    /* harmony import */


    var _top_nav_alerts_item_top_nav_alerts_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./top-nav-alerts-item/top-nav-alerts-item.component */
    "./src/modules/navigation/components/top-nav-alerts-item/top-nav-alerts-item.component.ts");
    /* harmony import */


    var _top_nav_alerts_top_nav_alerts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./top-nav-alerts/top-nav-alerts.component */
    "./src/modules/navigation/components/top-nav-alerts/top-nav-alerts.component.ts");
    /* harmony import */


    var _top_nav_messages_item_top_nav_messages_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./top-nav-messages-item/top-nav-messages-item.component */
    "./src/modules/navigation/components/top-nav-messages-item/top-nav-messages-item.component.ts");
    /* harmony import */


    var _top_nav_messages_top_nav_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./top-nav-messages/top-nav-messages.component */
    "./src/modules/navigation/components/top-nav-messages/top-nav-messages.component.ts");
    /* harmony import */


    var _top_nav_search_top_nav_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./top-nav-search/top-nav-search.component */
    "./src/modules/navigation/components/top-nav-search/top-nav-search.component.ts");
    /* harmony import */


    var _top_nav_user_top_nav_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./top-nav-user/top-nav-user.component */
    "./src/modules/navigation/components/top-nav-user/top-nav-user.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SideNavItemProComponent", function () {
      return _side_nav_item_pro_side_nav_item_pro_component__WEBPACK_IMPORTED_MODULE_3__["SideNavItemProComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function () {
      return _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardHeadComponent", function () {
      return _dashboard_head_dashboard_head_component__WEBPACK_IMPORTED_MODULE_2__["DashboardHeadComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TopNavUserComponent", function () {
      return _top_nav_user_top_nav_user_component__WEBPACK_IMPORTED_MODULE_9__["TopNavUserComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TopNavAlertsComponent", function () {
      return _top_nav_alerts_top_nav_alerts_component__WEBPACK_IMPORTED_MODULE_5__["TopNavAlertsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TopNavMessagesComponent", function () {
      return _top_nav_messages_top_nav_messages_component__WEBPACK_IMPORTED_MODULE_7__["TopNavMessagesComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TopNavSearchComponent", function () {
      return _top_nav_search_top_nav_search_component__WEBPACK_IMPORTED_MODULE_8__["TopNavSearchComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TopNavMessagesItemComponent", function () {
      return _top_nav_messages_item_top_nav_messages_item_component__WEBPACK_IMPORTED_MODULE_6__["TopNavMessagesItemComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TopNavAlertsItemComponent", function () {
      return _top_nav_alerts_item_top_nav_alerts_item_component__WEBPACK_IMPORTED_MODULE_4__["TopNavAlertsItemComponent"];
    });

    var components = [_side_nav_item_pro_side_nav_item_pro_component__WEBPACK_IMPORTED_MODULE_3__["SideNavItemProComponent"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbsComponent"], _dashboard_head_dashboard_head_component__WEBPACK_IMPORTED_MODULE_2__["DashboardHeadComponent"], _top_nav_user_top_nav_user_component__WEBPACK_IMPORTED_MODULE_9__["TopNavUserComponent"], _top_nav_alerts_top_nav_alerts_component__WEBPACK_IMPORTED_MODULE_5__["TopNavAlertsComponent"], _top_nav_messages_top_nav_messages_component__WEBPACK_IMPORTED_MODULE_7__["TopNavMessagesComponent"], _top_nav_search_top_nav_search_component__WEBPACK_IMPORTED_MODULE_8__["TopNavSearchComponent"], _top_nav_messages_item_top_nav_messages_item_component__WEBPACK_IMPORTED_MODULE_6__["TopNavMessagesItemComponent"], _top_nav_alerts_item_top_nav_alerts_item_component__WEBPACK_IMPORTED_MODULE_4__["TopNavAlertsItemComponent"]];
    /***/
  },

  /***/
  "./src/modules/navigation/components/side-nav-item-pro/side-nav-item-pro.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/modules/navigation/components/side-nav-item-pro/side-nav-item-pro.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesNavigationComponentsSideNavItemProSideNavItemProComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav {\n  overflow: hidden;\n  -webkit-transition: height 0.2s ease-out;\n  transition: height 0.2s ease-out;\n}\n.nav.collapsed {\n  height: 0px;\n}\n.nav-link {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL25hdmlnYXRpb24vY29tcG9uZW50cy9zaWRlLW5hdi1pdGVtLXByby9DOlxcVXNlcnNcXEhhYmliTW9rbmlcXERvY3VtZW50c1xcR2l0SHViXFxwcy1ibXMvc3JjXFxtb2R1bGVzXFxuYXZpZ2F0aW9uXFxjb21wb25lbnRzXFxzaWRlLW5hdi1pdGVtLXByb1xcc2lkZS1uYXYtaXRlbS1wcm8uY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvc2lkZS1uYXYtaXRlbS1wcm8vc2lkZS1uYXYtaXRlbS1wcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxnQkFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7QUNGSjtBREdJO0VBQ0ksV0FBQTtBQ0RSO0FES0E7RUFDSSxlQUFBO0FDRkoiLCJmaWxlIjoic3JjL21vZHVsZXMvbmF2aWdhdGlvbi9jb21wb25lbnRzL3NpZGUtbmF2LWl0ZW0tcHJvL3NpZGUtbmF2LWl0ZW0tcHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5uYXYge1xyXG4gICAgLy8gaGVpZ2h0OiA5NnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2Utb3V0O1xyXG4gICAgJi5jb2xsYXBzZWQge1xyXG4gICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi5uYXYge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlLW91dDtcbn1cbi5uYXYuY29sbGFwc2VkIHtcbiAgaGVpZ2h0OiAwcHg7XG59XG5cbi5uYXYtbGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/modules/navigation/components/side-nav-item-pro/side-nav-item-pro.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/modules/navigation/components/side-nav-item-pro/side-nav-item-pro.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: SideNavItemProComponent */

  /***/
  function srcModulesNavigationComponentsSideNavItemProSideNavItemProComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideNavItemProComponent", function () {
      return SideNavItemProComponent;
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


    var _modules_navigation_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/navigation/services */
    "./src/modules/navigation/services/index.ts");
    /* harmony import */


    var object_hash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! object-hash */
    "./node_modules/object-hash/dist/object_hash.js");
    /* harmony import */


    var object_hash__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SideNavItemProComponent =
    /*#__PURE__*/
    function () {
      function SideNavItemProComponent(sideNavService, navigationService, router, changeDetectorRef) {
        _classCallCheck(this, SideNavItemProComponent);

        this.sideNavService = sideNavService;
        this.navigationService = navigationService;
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this.hierarchy = [];
        this.isActive = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
      }

      _createClass(SideNavItemProComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.id = object_hash__WEBPACK_IMPORTED_MODULE_4___default()(this.sideNavItem);
          this.collapsed = !this.sideNavService.isExpanded(this.id);
          this.hierarchyExtension = [].concat(_toConsumableArray(this.hierarchy), [this.id]);
          this.subscription.add(this.sideNavService.expand$.subscribe(function (ids) {
            var thisIDisInExpandedHierarchy = !!ids.find(function (id) {
              return id === _this18.id;
            });
            var sameLevel = ids.length === _this18.hierarchyExtension.length;

            if (!thisIDisInExpandedHierarchy && sameLevel) {
              _this18.collapse();
            }
          }));
          this.subscription.add(this.navigationService.currentURL$().subscribe(function (currentURL) {
            return _this18.determineIfActive(currentURL.replace(/#.*$/, ''), _this18.sideNavItem);
          }));
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this19 = this;

          this.navElement = this.collapsibleSection.nativeElement;
          this.navElement.addEventListener('transitionend', function (event) {
            if (!_this19.collapsed) {
              _this19.navElement.style.height = '';
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "determineIfActive",
        value: function determineIfActive(url, sideNavItem) {
          var _this20 = this;

          this.isActive = false;
          this.changeDetectorRef.markForCheck();

          if (sideNavItem.link) {
            this.isActive = url === sideNavItem.link;
            this.changeDetectorRef.markForCheck();
          }

          if (sideNavItem.submenu) {
            sideNavItem.submenu.forEach(function (submenu) {
              return _this20.determineIfActiveParent(url, submenu);
            });
          }
        }
      }, {
        key: "determineIfActiveParent",
        value: function determineIfActiveParent(url, sideNavItem) {
          var _this21 = this;

          if (sideNavItem.link && url === sideNavItem.link) {
            this.isActive = true;
            this.changeDetectorRef.markForCheck();
          }

          if (sideNavItem.submenu) {
            sideNavItem.submenu.forEach(function (submenu) {
              return _this21.determineIfActiveParent(url, submenu);
            });
          }
        }
      }, {
        key: "toggle",
        value: function toggle() {
          if (this.sideNavItem.link) {
            return this.router.navigate([this.sideNavItem.link]);
          }

          if (this.collapsed) {
            return this.expand();
          }

          return this.collapse();
        }
      }, {
        key: "collapse",
        value: function collapse() {
          var _this22 = this;

          this.sideNavService.setExpanded(this.id, false);
          var navHeight = this.navElement.scrollHeight;
          var elementTransition = this.navElement.style.transition;
          this.navElement.style.transition = '';
          requestAnimationFrame(function () {
            _this22.navElement.style.height = navHeight + 'px';
            _this22.navElement.style.transition = elementTransition;
            requestAnimationFrame(function () {
              _this22.navElement.style.height = 0 + 'px';
              _this22.collapsed = true;

              _this22.changeDetectorRef.markForCheck();
            });
          });
        }
      }, {
        key: "expand",
        value: function expand() {
          this.sideNavService.setExpanded(this.id, true);
          this.navElement.style.height = this.navElement.scrollHeight + 'px';
          this.collapsed = false;
          this.sideNavService.expand$.next(this.hierarchyExtension);
        }
      }]);

      return SideNavItemProComponent;
    }();

    SideNavItemProComponent.ctorParameters = function () {
      return [{
        type: _modules_navigation_services__WEBPACK_IMPORTED_MODULE_3__["SideNavService"]
      }, {
        type: _modules_navigation_services__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('collapsibleSection'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], SideNavItemProComponent.prototype, "collapsibleSection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SideNavItemProComponent.prototype, "sideNavItem", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], SideNavItemProComponent.prototype, "hierarchy", void 0);
    SideNavItemProComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-side-nav-item',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./side-nav-item-pro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/side-nav-item-pro/side-nav-item-pro.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./side-nav-item-pro.component.scss */
      "./src/modules/navigation/components/side-nav-item-pro/side-nav-item-pro.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_navigation_services__WEBPACK_IMPORTED_MODULE_3__["SideNavService"], _modules_navigation_services__WEBPACK_IMPORTED_MODULE_3__["NavigationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], SideNavItemProComponent);
    /***/
  },

  /***/
  "./src/modules/navigation/components/top-nav-alerts-item/top-nav-alerts-item.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/modules/navigation/components/top-nav-alerts-item/top-nav-alerts-item.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesNavigationComponentsTopNavAlertsItemTopNavAlertsItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvdG9wLW5hdi1hbGVydHMtaXRlbS90b3AtbmF2LWFsZXJ0cy1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/navigation/components/top-nav-alerts-item/top-nav-alerts-item.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/modules/navigation/components/top-nav-alerts-item/top-nav-alerts-item.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: TopNavAlertsItemComponent */

  /***/
  function srcModulesNavigationComponentsTopNavAlertsItemTopNavAlertsItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopNavAlertsItemComponent", function () {
      return TopNavAlertsItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TopNavAlertsItemComponent =
    /*#__PURE__*/
    function () {
      function TopNavAlertsItemComponent() {
        _classCallCheck(this, TopNavAlertsItemComponent);
      }

      _createClass(TopNavAlertsItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopNavAlertsItemComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TopNavAlertsItemComponent.prototype, "alert", void 0);
    TopNavAlertsItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-top-nav-alerts-item',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./top-nav-alerts-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/top-nav-alerts-item/top-nav-alerts-item.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./top-nav-alerts-item.component.scss */
      "./src/modules/navigation/components/top-nav-alerts-item/top-nav-alerts-item.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TopNavAlertsItemComponent);
    /***/
  },

  /***/
  "./src/modules/navigation/components/top-nav-alerts/top-nav-alerts.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/modules/navigation/components/top-nav-alerts/top-nav-alerts.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesNavigationComponentsTopNavAlertsTopNavAlertsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvdG9wLW5hdi1hbGVydHMvdG9wLW5hdi1hbGVydHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/navigation/components/top-nav-alerts/top-nav-alerts.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/modules/navigation/components/top-nav-alerts/top-nav-alerts.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: TopNavAlertsComponent */

  /***/
  function srcModulesNavigationComponentsTopNavAlertsTopNavAlertsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopNavAlertsComponent", function () {
      return TopNavAlertsComponent;
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


    var _modules_alerts_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @modules/alerts/services */
    "./src/modules/alerts/services/index.ts");

    var TopNavAlertsComponent =
    /*#__PURE__*/
    function () {
      function TopNavAlertsComponent(alertsService) {
        _classCallCheck(this, TopNavAlertsComponent);

        this.alertsService = alertsService;
        this.placement = 'bottom-right';
        this.dropdownClasses = [];
      }

      _createClass(TopNavAlertsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopNavAlertsComponent;
    }();

    TopNavAlertsComponent.ctorParameters = function () {
      return [{
        type: _modules_alerts_services__WEBPACK_IMPORTED_MODULE_2__["AlertsService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TopNavAlertsComponent.prototype, "placement", void 0);
    TopNavAlertsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-top-nav-alerts',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./top-nav-alerts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/top-nav-alerts/top-nav-alerts.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./top-nav-alerts.component.scss */
      "./src/modules/navigation/components/top-nav-alerts/top-nav-alerts.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_alerts_services__WEBPACK_IMPORTED_MODULE_2__["AlertsService"]])], TopNavAlertsComponent);
    /***/
  },

  /***/
  "./src/modules/navigation/components/top-nav-messages-item/top-nav-messages-item.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/modules/navigation/components/top-nav-messages-item/top-nav-messages-item.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesNavigationComponentsTopNavMessagesItemTopNavMessagesItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvdG9wLW5hdi1tZXNzYWdlcy1pdGVtL3RvcC1uYXYtbWVzc2FnZXMtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/navigation/components/top-nav-messages-item/top-nav-messages-item.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/modules/navigation/components/top-nav-messages-item/top-nav-messages-item.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: TopNavMessagesItemComponent */

  /***/
  function srcModulesNavigationComponentsTopNavMessagesItemTopNavMessagesItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopNavMessagesItemComponent", function () {
      return TopNavMessagesItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TopNavMessagesItemComponent =
    /*#__PURE__*/
    function () {
      function TopNavMessagesItemComponent() {
        _classCallCheck(this, TopNavMessagesItemComponent);
      }

      _createClass(TopNavMessagesItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopNavMessagesItemComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TopNavMessagesItemComponent.prototype, "message", void 0);
    TopNavMessagesItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-top-nav-messages-item',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./top-nav-messages-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/top-nav-messages-item/top-nav-messages-item.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./top-nav-messages-item.component.scss */
      "./src/modules/navigation/components/top-nav-messages-item/top-nav-messages-item.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TopNavMessagesItemComponent);
    /***/
  },

  /***/
  "./src/modules/navigation/components/top-nav-messages/top-nav-messages.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/modules/navigation/components/top-nav-messages/top-nav-messages.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesNavigationComponentsTopNavMessagesTopNavMessagesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvdG9wLW5hdi1tZXNzYWdlcy90b3AtbmF2LW1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/navigation/components/top-nav-messages/top-nav-messages.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/modules/navigation/components/top-nav-messages/top-nav-messages.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: TopNavMessagesComponent */

  /***/
  function srcModulesNavigationComponentsTopNavMessagesTopNavMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopNavMessagesComponent", function () {
      return TopNavMessagesComponent;
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


    var _modules_messages_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @modules/messages/services */
    "./src/modules/messages/services/index.ts");

    var TopNavMessagesComponent =
    /*#__PURE__*/
    function () {
      function TopNavMessagesComponent(messagesService) {
        _classCallCheck(this, TopNavMessagesComponent);

        this.messagesService = messagesService;
        this.placement = 'bottom-right';
        this.dropdownClasses = [];
      }

      _createClass(TopNavMessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopNavMessagesComponent;
    }();

    TopNavMessagesComponent.ctorParameters = function () {
      return [{
        type: _modules_messages_services__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TopNavMessagesComponent.prototype, "placement", void 0);
    TopNavMessagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-top-nav-messages',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./top-nav-messages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/top-nav-messages/top-nav-messages.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./top-nav-messages.component.scss */
      "./src/modules/navigation/components/top-nav-messages/top-nav-messages.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_messages_services__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]])], TopNavMessagesComponent);
    /***/
  },

  /***/
  "./src/modules/navigation/components/top-nav-search/top-nav-search.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/modules/navigation/components/top-nav-search/top-nav-search.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesNavigationComponentsTopNavSearchTopNavSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: contents;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL25hdmlnYXRpb24vY29tcG9uZW50cy90b3AtbmF2LXNlYXJjaC9DOlxcVXNlcnNcXEhhYmliTW9rbmlcXERvY3VtZW50c1xcR2l0SHViXFxwcy1ibXMvc3JjXFxtb2R1bGVzXFxuYXZpZ2F0aW9uXFxjb21wb25lbnRzXFx0b3AtbmF2LXNlYXJjaFxcdG9wLW5hdi1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvdG9wLW5hdi1zZWFyY2gvdG9wLW5hdi1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxpQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9tb2R1bGVzL25hdmlnYXRpb24vY29tcG9uZW50cy90b3AtbmF2LXNlYXJjaC90b3AtbmF2LXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogY29udGVudHM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/modules/navigation/components/top-nav-search/top-nav-search.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/modules/navigation/components/top-nav-search/top-nav-search.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: TopNavSearchComponent */

  /***/
  function srcModulesNavigationComponentsTopNavSearchTopNavSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopNavSearchComponent", function () {
      return TopNavSearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TopNavSearchComponent =
    /*#__PURE__*/
    function () {
      function TopNavSearchComponent() {
        _classCallCheck(this, TopNavSearchComponent);
      }

      _createClass(TopNavSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopNavSearchComponent;
    }();

    TopNavSearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-top-nav-search',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./top-nav-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/top-nav-search/top-nav-search.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./top-nav-search.component.scss */
      "./src/modules/navigation/components/top-nav-search/top-nav-search.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TopNavSearchComponent);
    /***/
  },

  /***/
  "./src/modules/navigation/components/top-nav-user/top-nav-user.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/modules/navigation/components/top-nav-user/top-nav-user.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesNavigationComponentsTopNavUserTopNavUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#userDropdown {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL25hdmlnYXRpb24vY29tcG9uZW50cy90b3AtbmF2LXVzZXIvQzpcXFVzZXJzXFxIYWJpYk1va25pXFxEb2N1bWVudHNcXEdpdEh1YlxccHMtYm1zL3NyY1xcbW9kdWxlc1xcbmF2aWdhdGlvblxcY29tcG9uZW50c1xcdG9wLW5hdi11c2VyXFx0b3AtbmF2LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvdG9wLW5hdi11c2VyL3RvcC1uYXYtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7QUNESiIsImZpbGUiOiJzcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvdG9wLW5hdi11c2VyL3RvcC1uYXYtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4jdXNlckRyb3Bkb3duIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSIsIiN1c2VyRHJvcGRvd24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/modules/navigation/components/top-nav-user/top-nav-user.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/modules/navigation/components/top-nav-user/top-nav-user.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: TopNavUserComponent */

  /***/
  function srcModulesNavigationComponentsTopNavUserTopNavUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopNavUserComponent", function () {
      return TopNavUserComponent;
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


    var _modules_auth_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @modules/auth/services */
    "./src/modules/auth/services/index.ts");

    var TopNavUserComponent =
    /*#__PURE__*/
    function () {
      function TopNavUserComponent(userService, authService) {
        _classCallCheck(this, TopNavUserComponent);

        this.userService = userService;
        this.authService = authService;
        this.placement = 'bottom-right';
        this.dropdownClasses = [];
      }

      _createClass(TopNavUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authService.logout();
        }
      }]);

      return TopNavUserComponent;
    }();

    TopNavUserComponent.ctorParameters = function () {
      return [{
        type: _modules_auth_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _modules_auth_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TopNavUserComponent.prototype, "placement", void 0);
    TopNavUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-top-nav-user',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./top-nav-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/components/top-nav-user/top-nav-user.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./top-nav-user.component.scss */
      "./src/modules/navigation/components/top-nav-user/top-nav-user.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_auth_services__WEBPACK_IMPORTED_MODULE_2__["UserService"], _modules_auth_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], TopNavUserComponent);
    /***/
  },

  /***/
  "./src/modules/navigation/containers/footer/footer.component.scss":
  /*!************************************************************************!*\
    !*** ./src/modules/navigation/containers/footer/footer.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesNavigationContainersFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbnRhaW5lcnMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/navigation/containers/footer/footer.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/modules/navigation/containers/footer/footer.component.ts ***!
    \**********************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcModulesNavigationContainersFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.dark = false;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], FooterComponent.prototype, "dark", void 0);
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-footer',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/containers/footer/footer.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./footer.component.scss */
      "./src/modules/navigation/containers/footer/footer.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FooterComponent);
    /***/
  },

  /***/
  "./src/modules/navigation/containers/index.ts":
  /*!****************************************************!*\
    !*** ./src/modules/navigation/containers/index.ts ***!
    \****************************************************/

  /*! exports provided: containers, TopNavComponent, SideNavComponent, FooterComponent */

  /***/
  function srcModulesNavigationContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "containers", function () {
      return containers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/modules/navigation/containers/footer/footer.component.ts");
    /* harmony import */


    var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./side-nav/side-nav.component */
    "./src/modules/navigation/containers/side-nav/side-nav.component.ts");
    /* harmony import */


    var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./top-nav/top-nav.component */
    "./src/modules/navigation/containers/top-nav/top-nav.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TopNavComponent", function () {
      return _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_3__["TopNavComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SideNavComponent", function () {
      return _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__["SideNavComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"];
    });

    var containers = [_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_3__["TopNavComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__["SideNavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]];
    /***/
  },

  /***/
  "./src/modules/navigation/containers/side-nav/side-nav.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/modules/navigation/containers/side-nav/side-nav.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesNavigationContainersSideNavSideNavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbnRhaW5lcnMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/navigation/containers/side-nav/side-nav.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/modules/navigation/containers/side-nav/side-nav.component.ts ***!
    \**************************************************************************/

  /*! exports provided: SideNavComponent */

  /***/
  function srcModulesNavigationContainersSideNavSideNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideNavComponent", function () {
      return SideNavComponent;
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


    var _modules_auth_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @modules/auth/services */
    "./src/modules/auth/services/index.ts");
    /* harmony import */


    var _modules_navigation_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/navigation/services */
    "./src/modules/navigation/services/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SideNavComponent =
    /*#__PURE__*/
    function () {
      function SideNavComponent(navigationService, userService) {
        _classCallCheck(this, SideNavComponent);

        this.navigationService = navigationService;
        this.userService = userService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
      }

      _createClass(SideNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return SideNavComponent;
    }();

    SideNavComponent.ctorParameters = function () {
      return [{
        type: _modules_navigation_services__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]
      }, {
        type: _modules_auth_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SideNavComponent.prototype, "sidenavStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SideNavComponent.prototype, "sideNavItems", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], SideNavComponent.prototype, "sideNavSections", void 0);
    SideNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-side-nav',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./side-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/containers/side-nav/side-nav.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./side-nav.component.scss */
      "./src/modules/navigation/containers/side-nav/side-nav.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_navigation_services__WEBPACK_IMPORTED_MODULE_3__["NavigationService"], _modules_auth_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])], SideNavComponent);
    /***/
  },

  /***/
  "./src/modules/navigation/containers/top-nav/top-nav.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/modules/navigation/containers/top-nav/top-nav.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesNavigationContainersTopNavTopNavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbnRhaW5lcnMvdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/navigation/containers/top-nav/top-nav.component.ts":
  /*!************************************************************************!*\
    !*** ./src/modules/navigation/containers/top-nav/top-nav.component.ts ***!
    \************************************************************************/

  /*! exports provided: TopNavComponent */

  /***/
  function srcModulesNavigationContainersTopNavTopNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopNavComponent", function () {
      return TopNavComponent;
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


    var _modules_navigation_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @modules/navigation/services */
    "./src/modules/navigation/services/index.ts");
    /* harmony import */


    var _auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../auth/services */
    "./src/modules/auth/services/index.ts");

    var TopNavComponent =
    /*#__PURE__*/
    function () {
      function TopNavComponent(navigationService, authService) {
        _classCallCheck(this, TopNavComponent);

        this.navigationService = navigationService;
        this.authService = authService;
        this.isAuthenticated = false;
        this.rtl = false;
      }

      _createClass(TopNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          console.log(this.authService.isLogged2);
          this.userSub = this.authService.isLogged.subscribe(function (user) {
            console.log(user);
            _this23.isAuthenticated = !user ? false : true;
            console.log('not user:', !user);
            console.log('not-NOT user:', !!user);
          });
        }
      }, {
        key: "toggleSideNav",
        value: function toggleSideNav() {
          this.navigationService.toggleSideNav();
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authService.logout();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userSub.unsubscribe();
        }
      }]);

      return TopNavComponent;
    }();

    TopNavComponent.ctorParameters = function () {
      return [{
        type: _modules_navigation_services__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]
      }, {
        type: _auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], TopNavComponent.prototype, "rtl", void 0);
    TopNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-top-nav',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./top-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/containers/top-nav/top-nav.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./top-nav.component.scss */
      "./src/modules/navigation/containers/top-nav/top-nav.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_navigation_services__WEBPACK_IMPORTED_MODULE_2__["NavigationService"], _auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], TopNavComponent);
    /***/
  },

  /***/
  "./src/modules/navigation/data/side-nav-dashboard.data.ts":
  /*!****************************************************************!*\
    !*** ./src/modules/navigation/data/side-nav-dashboard.data.ts ***!
    \****************************************************************/

  /*! exports provided: sideNavSections, sideNavItems */

  /***/
  function srcModulesNavigationDataSideNavDashboardDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sideNavSections", function () {
      return sideNavSections;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sideNavItems", function () {
      return sideNavItems;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var sideNavSections = [{
      text: 'CORE',
      items: ['dashboard']
    }, {
      text: 'INTERFACE',
      items: ['layout', 'components', 'utilities', 'pages', 'flows']
    }, {
      text: 'ADDONS',
      items: ['charts', 'tables']
    }];
    var sideNavItems = {
      charts: {
        icon: 'bar-chart',
        link: '/charts',
        text: 'Charts'
      },
      components: {
        icon: 'package',
        submenu: [{
          link: '/dashboard/components/alerts',
          text: 'Alerts'
        }, {
          link: '/dashboard/components/badges',
          text: 'Badges'
        }, {
          link: '/dashboard/components/buttons',
          text: 'Buttons'
        }, {
          link: '/dashboard/components/cards',
          text: 'Cards'
        }, {
          link: '/dashboard/components/dropdowns',
          text: 'Dropdowns'
        }, {
          link: '/dashboard/components/forms',
          text: 'Forms'
        }, {
          link: '/dashboard/components/modal',
          text: 'Modal'
        }, {
          link: '/dashboard/components/navigation',
          text: 'Navigation'
        }, {
          link: '/dashboard/components/progress',
          text: 'Progress'
        }, {
          link: '/dashboard/components/toasts',
          text: 'Toasts'
        }, {
          link: '/dashboard/components/tooltips',
          text: 'Tooltips'
        }],
        text: 'Components'
      },
      dashboard: {
        icon: 'activity',
        link: '/dashboard',
        text: 'Dashboard'
      },
      flows: {
        icon: 'repeat',
        submenu: [{
          link: '/auth/multi-tenant-select',
          text: 'Multi-Tenant Registration'
        }],
        text: 'Flows'
      },
      layout: {
        icon: 'layout',
        submenu: [{
          link: '/dashboard/static',
          text: 'Static Navigation'
        }, {
          link: '/dashboard/dark',
          text: 'Dark Sidenav'
        }, {
          link: '/dashboard/rtl',
          text: 'RTL Layout'
        }, {
          text: 'Page Headers',
          submenu: [{
            link: '/dashboard/page-headers/simplified',
            text: 'Simplified'
          }, {
            link: '/dashboard/page-headers/content-overlap',
            text: 'Content Overlap'
          }, {
            link: '/dashboard/page-headers/breadcrumbs',
            text: 'Breadcrumbs'
          }, {
            link: '/dashboard/page-headers/light',
            text: 'Light'
          }]
        }],
        text: 'Layout'
      },
      pages: {
        icon: 'book-open',
        submenu: [{
          submenu: [{
            submenu: [{
              link: '/auth/login',
              text: 'Login'
            }, {
              link: '/auth/register',
              text: 'Register'
            }, {
              link: '/auth/forgot-password',
              text: 'Forgot Password'
            }],
            text: 'Basic'
          }, {
            submenu: [{
              link: '/auth/login-social',
              text: 'Login'
            }, {
              link: '/auth/register-social',
              text: 'Register'
            }, {
              link: '/auth/forgot-password-social',
              text: 'Forgot Password'
            }],
            text: 'Social'
          }],
          text: 'Authentication'
        }, {
          link: '/dashboard/pages/blank',
          text: 'Blank'
        }, {
          submenu: [{
            link: '/error/401',
            text: '401 Page'
          }, {
            link: '/error/404',
            text: '404 Page'
          }, {
            link: '/error/404-glitch',
            text: '404 Page (Glitch Effect)'
          }, {
            link: '/error/500',
            text: '500 Page'
          }],
          text: 'Error'
        }],
        text: 'Pages'
      },
      tables: {
        icon: 'filter',
        link: '/tables',
        text: 'Tables'
      },
      utilities: {
        icon: 'tool',
        submenu: [{
          link: '/dashboard/utilities/animations',
          text: 'Animations'
        }, {
          link: '/dashboard/utilities/background',
          text: 'Background'
        }, {
          link: '/dashboard/utilities/borders',
          text: 'Borders'
        }, {
          link: '/dashboard/utilities/shadows',
          text: 'Shadows'
        }, {
          link: '/dashboard/utilities/typography',
          text: 'Typography'
        }],
        text: 'Utilities'
      }
    };
    /***/
  },

  /***/
  "./src/modules/navigation/data/side-nav-talents.data.ts":
  /*!**************************************************************!*\
    !*** ./src/modules/navigation/data/side-nav-talents.data.ts ***!
    \**************************************************************/

  /*! exports provided: sideNavSections, sideNavItems */

  /***/
  function srcModulesNavigationDataSideNavTalentsDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sideNavSections", function () {
      return sideNavSections;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sideNavItems", function () {
      return sideNavItems;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var sideNavSections = [{
      text: ' CORE',
      items: ['list']
    }];
    var sideNavItems = {
      list: {
        icon: 'activity',
        link: '/talents',
        text: 'Talents List'
      }
    };
    /***/
  },

  /***/
  "./src/modules/navigation/guards/index.ts":
  /*!************************************************!*\
    !*** ./src/modules/navigation/guards/index.ts ***!
    \************************************************/

  /*! exports provided: guards, NavigationGuard */

  /***/
  function srcModulesNavigationGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "guards", function () {
      return guards;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _navigation_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navigation.guard */
    "./src/modules/navigation/guards/navigation.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NavigationGuard", function () {
      return _navigation_guard__WEBPACK_IMPORTED_MODULE_1__["NavigationGuard"];
    });

    var guards = [_navigation_guard__WEBPACK_IMPORTED_MODULE_1__["NavigationGuard"]];
    /***/
  },

  /***/
  "./src/modules/navigation/guards/navigation.guard.ts":
  /*!***********************************************************!*\
    !*** ./src/modules/navigation/guards/navigation.guard.ts ***!
    \***********************************************************/

  /*! exports provided: NavigationGuard */

  /***/
  function srcModulesNavigationGuardsNavigationGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationGuard", function () {
      return NavigationGuard;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var NavigationGuard =
    /*#__PURE__*/
    function () {
      function NavigationGuard() {
        _classCallCheck(this, NavigationGuard);
      }

      _createClass(NavigationGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
      }]);

      return NavigationGuard;
    }();

    NavigationGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], NavigationGuard);
    /***/
  },

  /***/
  "./src/modules/navigation/layouts/index.ts":
  /*!*************************************************!*\
    !*** ./src/modules/navigation/layouts/index.ts ***!
    \*************************************************/

  /*! exports provided: layouts, LayoutDashboardComponent, LayoutAuthComponent, LayoutErrorComponent, LayoutTalentsComponent */

  /***/
  function srcModulesNavigationLayoutsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "layouts", function () {
      return layouts;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _layout_auth_layout_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layout-auth/layout-auth.component */
    "./src/modules/navigation/layouts/layout-auth/layout-auth.component.ts");
    /* harmony import */


    var _layout_dashboard_layout_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./layout-dashboard/layout-dashboard.component */
    "./src/modules/navigation/layouts/layout-dashboard/layout-dashboard.component.ts");
    /* harmony import */


    var _layout_error_layout_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout-error/layout-error.component */
    "./src/modules/navigation/layouts/layout-error/layout-error.component.ts");
    /* harmony import */


    var _layout_talents_layout_talents_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layout-talents/layout-talents.component */
    "./src/modules/navigation/layouts/layout-talents/layout-talents.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutDashboardComponent", function () {
      return _layout_dashboard_layout_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["LayoutDashboardComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutAuthComponent", function () {
      return _layout_auth_layout_auth_component__WEBPACK_IMPORTED_MODULE_1__["LayoutAuthComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutErrorComponent", function () {
      return _layout_error_layout_error_component__WEBPACK_IMPORTED_MODULE_3__["LayoutErrorComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutTalentsComponent", function () {
      return _layout_talents_layout_talents_component__WEBPACK_IMPORTED_MODULE_4__["LayoutTalentsComponent"];
    });

    var layouts = [_layout_dashboard_layout_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["LayoutDashboardComponent"], _layout_auth_layout_auth_component__WEBPACK_IMPORTED_MODULE_1__["LayoutAuthComponent"], _layout_error_layout_error_component__WEBPACK_IMPORTED_MODULE_3__["LayoutErrorComponent"], _layout_talents_layout_talents_component__WEBPACK_IMPORTED_MODULE_4__["LayoutTalentsComponent"]];
    /***/
  },

  /***/
  "./src/modules/navigation/layouts/layout-auth/layout-auth.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/modules/navigation/layouts/layout-auth/layout-auth.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesNavigationLayoutsLayoutAuthLayoutAuthComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2xheW91dHMvbGF5b3V0LWF1dGgvbGF5b3V0LWF1dGguY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/navigation/layouts/layout-auth/layout-auth.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/modules/navigation/layouts/layout-auth/layout-auth.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: LayoutAuthComponent */

  /***/
  function srcModulesNavigationLayoutsLayoutAuthLayoutAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutAuthComponent", function () {
      return LayoutAuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LayoutAuthComponent =
    /*#__PURE__*/
    function () {
      function LayoutAuthComponent() {
        _classCallCheck(this, LayoutAuthComponent);
      }

      _createClass(LayoutAuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutAuthComponent;
    }();

    LayoutAuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-layout-auth',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./layout-auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-auth/layout-auth.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./layout-auth.component.scss */
      "./src/modules/navigation/layouts/layout-auth/layout-auth.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LayoutAuthComponent);
    /***/
  },

  /***/
  "./src/modules/navigation/layouts/layout-dashboard/layout-dashboard.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/navigation/layouts/layout-dashboard/layout-dashboard.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesNavigationLayoutsLayoutDashboardLayoutDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host #layoutSidenav_content.scrollable {\n  height: calc(100vh - 58px);\n  display: block;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL25hdmlnYXRpb24vbGF5b3V0cy9sYXlvdXQtZGFzaGJvYXJkL0M6XFxVc2Vyc1xcSGFiaWJNb2tuaVxcRG9jdW1lbnRzXFxHaXRIdWJcXHBzLWJtcy9zcmNcXG1vZHVsZXNcXG5hdmlnYXRpb25cXGxheW91dHNcXGxheW91dC1kYXNoYm9hcmRcXGxheW91dC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2xheW91dHMvbGF5b3V0LWRhc2hib2FyZC9sYXlvdXQtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNESiIsImZpbGUiOiJzcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2xheW91dHMvbGF5b3V0LWRhc2hib2FyZC9sYXlvdXQtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbjpob3N0ICNsYXlvdXRTaWRlbmF2X2NvbnRlbnQuc2Nyb2xsYWJsZSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1OHB4KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufSIsIjpob3N0ICNsYXlvdXRTaWRlbmF2X2NvbnRlbnQuc2Nyb2xsYWJsZSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDU4cHgpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/modules/navigation/layouts/layout-dashboard/layout-dashboard.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/modules/navigation/layouts/layout-dashboard/layout-dashboard.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: LayoutDashboardComponent */

  /***/
  function srcModulesNavigationLayoutsLayoutDashboardLayoutDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutDashboardComponent", function () {
      return LayoutDashboardComponent;
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


    var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @common/services */
    "./src/modules/app-common/services/index.ts");
    /* harmony import */


    var _modules_navigation_data_side_nav_dashboard_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/navigation/data/side-nav-dashboard.data */
    "./src/modules/navigation/data/side-nav-dashboard.data.ts");
    /* harmony import */


    var _modules_navigation_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @modules/navigation/services */
    "./src/modules/navigation/services/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LayoutDashboardComponent =
    /*#__PURE__*/
    function () {
      function LayoutDashboardComponent(utilityService, navigationService, changeDetectorRef) {
        _classCallCheck(this, LayoutDashboardComponent);

        this.utilityService = utilityService;
        this.navigationService = navigationService;
        this.changeDetectorRef = changeDetectorRef;
        this["static"] = false;
        this.light = false;
        this.rtl = false;
        this.sideNavHidden = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.sideNavItems = _modules_navigation_data_side_nav_dashboard_data__WEBPACK_IMPORTED_MODULE_3__["sideNavItems"];
        this.sideNavSections = _modules_navigation_data_side_nav_dashboard_data__WEBPACK_IMPORTED_MODULE_3__["sideNavSections"];
        this.sidenavStyle = 'sb-sidenav-dark';
      }

      _createClass(LayoutDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          if (this.light) {
            this.sidenavStyle = 'sb-sidenav-light';
          }

          this.subscription.add(this.navigationService.sideNavVisible$().subscribe(function (isVisible) {
            _this24.sideNavHidden = !isVisible;

            _this24.changeDetectorRef.markForCheck();
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "closeSideNavIfOpen",
        value: function closeSideNavIfOpen() {
          var BOOTSTRAP_LG_WIDTH = 992;

          if (this.utilityService.window.innerWidth >= 992) {
            return;
          } // After the lg breakpoint, hidden is actually visible.
          // So the toggleSideNav below only will fire if the screen is < 992px
          // and the sideNav is open.


          if (this.sideNavHidden) {
            this.navigationService.toggleSideNav(true);
          }
        }
      }]);

      return LayoutDashboardComponent;
    }();

    LayoutDashboardComponent.ctorParameters = function () {
      return [{
        type: _common_services__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }, {
        type: _modules_navigation_services__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LayoutDashboardComponent.prototype, "static", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LayoutDashboardComponent.prototype, "light", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LayoutDashboardComponent.prototype, "rtl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sb-sidenav-toggled'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LayoutDashboardComponent.prototype, "sideNavHidden", void 0);
    LayoutDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-layout-dashboard',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./layout-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-dashboard/layout-dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./layout-dashboard.component.scss */
      "./src/modules/navigation/layouts/layout-dashboard/layout-dashboard.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_common_services__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], _modules_navigation_services__WEBPACK_IMPORTED_MODULE_4__["NavigationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], LayoutDashboardComponent);
    /***/
  },

  /***/
  "./src/modules/navigation/layouts/layout-error/layout-error.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/modules/navigation/layouts/layout-error/layout-error.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesNavigationLayoutsLayoutErrorLayoutErrorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2xheW91dHMvbGF5b3V0LWVycm9yL2xheW91dC1lcnJvci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/navigation/layouts/layout-error/layout-error.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/modules/navigation/layouts/layout-error/layout-error.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: LayoutErrorComponent */

  /***/
  function srcModulesNavigationLayoutsLayoutErrorLayoutErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutErrorComponent", function () {
      return LayoutErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LayoutErrorComponent =
    /*#__PURE__*/
    function () {
      function LayoutErrorComponent() {
        _classCallCheck(this, LayoutErrorComponent);
      }

      _createClass(LayoutErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutErrorComponent;
    }();

    LayoutErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-layout-error',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./layout-error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-error/layout-error.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./layout-error.component.scss */
      "./src/modules/navigation/layouts/layout-error/layout-error.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LayoutErrorComponent);
    /***/
  },

  /***/
  "./src/modules/navigation/layouts/layout-talents/layout-talents.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/modules/navigation/layouts/layout-talents/layout-talents.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesNavigationLayoutsLayoutTalentsLayoutTalentsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host #layoutSidenav_content.scrollable {\n  height: calc(100vh - 58px);\n  display: block;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL25hdmlnYXRpb24vbGF5b3V0cy9sYXlvdXQtdGFsZW50cy9DOlxcVXNlcnNcXEhhYmliTW9rbmlcXERvY3VtZW50c1xcR2l0SHViXFxwcy1ibXMvc3JjXFxtb2R1bGVzXFxuYXZpZ2F0aW9uXFxsYXlvdXRzXFxsYXlvdXQtdGFsZW50c1xcbGF5b3V0LXRhbGVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy9uYXZpZ2F0aW9uL2xheW91dHMvbGF5b3V0LXRhbGVudHMvbGF5b3V0LXRhbGVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9tb2R1bGVzL25hdmlnYXRpb24vbGF5b3V0cy9sYXlvdXQtdGFsZW50cy9sYXlvdXQtdGFsZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcbjpob3N0ICNsYXlvdXRTaWRlbmF2X2NvbnRlbnQuc2Nyb2xsYWJsZSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1OHB4KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4iLCI6aG9zdCAjbGF5b3V0U2lkZW5hdl9jb250ZW50LnNjcm9sbGFibGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1OHB4KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/modules/navigation/layouts/layout-talents/layout-talents.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/modules/navigation/layouts/layout-talents/layout-talents.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: LayoutTalentsComponent */

  /***/
  function srcModulesNavigationLayoutsLayoutTalentsLayoutTalentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutTalentsComponent", function () {
      return LayoutTalentsComponent;
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


    var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @common/services */
    "./src/modules/app-common/services/index.ts");
    /* harmony import */


    var _modules_navigation_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/navigation/classes */
    "./src/modules/navigation/classes/index.ts");
    /* harmony import */


    var _modules_navigation_data_side_nav_talents_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @modules/navigation/data/side-nav-talents.data */
    "./src/modules/navigation/data/side-nav-talents.data.ts");
    /* harmony import */


    var _modules_navigation_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @modules/navigation/services */
    "./src/modules/navigation/services/index.ts");

    var LayoutTalentsComponent =
    /*#__PURE__*/
    function (_modules_navigation_c) {
      _inherits(LayoutTalentsComponent, _modules_navigation_c);

      function LayoutTalentsComponent(utilityService, navigationService, changeDetectorRef) {
        var _this25;

        _classCallCheck(this, LayoutTalentsComponent);

        _this25 = _possibleConstructorReturn(this, _getPrototypeOf(LayoutTalentsComponent).call(this, utilityService, navigationService, changeDetectorRef));
        _this25.utilityService = utilityService;
        _this25.navigationService = navigationService;
        _this25.changeDetectorRef = changeDetectorRef;
        _this25.sideNavItems = _modules_navigation_data_side_nav_talents_data__WEBPACK_IMPORTED_MODULE_4__["sideNavItems"];
        _this25.sideNavSections = _modules_navigation_data_side_nav_talents_data__WEBPACK_IMPORTED_MODULE_4__["sideNavSections"];
        _this25.sidenavStyle = 'sb-sidenav-light';
        _this25.rtl = false;
        _this25["static"] = false;
        return _this25;
      }

      _createClass(LayoutTalentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(LayoutTalentsComponent.prototype), "ngOnInit", this).call(this);
        }
      }]);

      return LayoutTalentsComponent;
    }(_modules_navigation_classes__WEBPACK_IMPORTED_MODULE_3__["LayoutSidenav"]);

    LayoutTalentsComponent.ctorParameters = function () {
      return [{
        type: _common_services__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }, {
        type: _modules_navigation_services__WEBPACK_IMPORTED_MODULE_5__["NavigationService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    LayoutTalentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ps-layout-talents',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./layout-talents.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/navigation/layouts/layout-talents/layout-talents.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./layout-talents.component.scss */
      "./src/modules/navigation/layouts/layout-talents/layout-talents.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_common_services__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], _modules_navigation_services__WEBPACK_IMPORTED_MODULE_5__["NavigationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], LayoutTalentsComponent);
    /***/
  },

  /***/
  "./src/modules/navigation/navigation.module.ts":
  /*!*****************************************************!*\
    !*** ./src/modules/navigation/navigation.module.ts ***!
    \*****************************************************/

  /*! exports provided: NavigationModule */

  /***/
  function srcModulesNavigationNavigationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationModule", function () {
      return NavigationModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @common/app-common.module */
    "./src/modules/app-common/app-common.module.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components */
    "./src/modules/navigation/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/navigation/containers/index.ts");
    /* harmony import */


    var _layouts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layouts */
    "./src/modules/navigation/layouts/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./guards */
    "./src/modules/navigation/guards/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services */
    "./src/modules/navigation/services/index.ts");
    /* harmony import */


    var _modules_alerts_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @modules/alerts/services */
    "./src/modules/alerts/services/index.ts");
    /* harmony import */


    var _modules_messages_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @modules/messages/services */
    "./src/modules/messages/services/index.ts");

    var NavigationModule_1;
    /* tslint:disable: ordered-imports*/

    /* Modules */

    /* Components */

    /* Containers */

    /* Layouts */

    /* Guards */

    /* Services */

    var NavigationModule = NavigationModule_1 =
    /*#__PURE__*/
    function () {
      function NavigationModule() {
        _classCallCheck(this, NavigationModule);
      }

      _createClass(NavigationModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: NavigationModule_1,
            providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_9__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_8__["guards"]), [_modules_alerts_services__WEBPACK_IMPORTED_MODULE_10__["AlertsService"], _modules_messages_services__WEBPACK_IMPORTED_MODULE_11__["MessagesService"]])
          };
        }
      }]);

      return NavigationModule;
    }();

    NavigationModule = NavigationModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"]],
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_6__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_5__["components"]), _toConsumableArray(_layouts__WEBPACK_IMPORTED_MODULE_7__["layouts"])),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_6__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_5__["components"]), _toConsumableArray(_layouts__WEBPACK_IMPORTED_MODULE_7__["layouts"])),
      providers: [{
        provide: 'window',
        useValue: window
      }]
    })], NavigationModule);
    /***/
  },

  /***/
  "./src/modules/navigation/services/index.ts":
  /*!**************************************************!*\
    !*** ./src/modules/navigation/services/index.ts ***!
    \**************************************************/

  /*! exports provided: services, NavigationService, SideNavService */

  /***/
  function srcModulesNavigationServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "services", function () {
      return services;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navigation.service */
    "./src/modules/navigation/services/navigation.service.ts");
    /* harmony import */


    var _side_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./side-nav.service */
    "./src/modules/navigation/services/side-nav.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
      return _navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SideNavService", function () {
      return _side_nav_service__WEBPACK_IMPORTED_MODULE_2__["SideNavService"];
    });

    var services = [_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"], _side_nav_service__WEBPACK_IMPORTED_MODULE_2__["SideNavService"]];
    /***/
  },

  /***/
  "./src/modules/navigation/services/navigation.service.ts":
  /*!***************************************************************!*\
    !*** ./src/modules/navigation/services/navigation.service.ts ***!
    \***************************************************************/

  /*! exports provided: NavigationService */

  /***/
  function srcModulesNavigationServicesNavigationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
      return NavigationService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var NavigationService =
    /*#__PURE__*/
    function () {
      function NavigationService(route, router) {
        var _this26 = this;

        _classCallCheck(this, NavigationService);

        this.route = route;
        this.router = router;
        this._sideNavVisible$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
        this._routeData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this._currentURL$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildActivationEnd"];
        })).subscribe(function (event) {
          var snapshot = event.snapshot;

          while (snapshot.firstChild !== null) {
            snapshot = snapshot.firstChild;
          }

          _this26._routeData$.next(snapshot.data);

          _this26._currentURL$.next(router.url);
        });
      }

      _createClass(NavigationService, [{
        key: "sideNavVisible$",
        value: function sideNavVisible$() {
          return this._sideNavVisible$;
        }
      }, {
        key: "toggleSideNav",
        value: function toggleSideNav(visibility) {
          if (typeof visibility !== 'undefined') {
            this._sideNavVisible$.next(visibility);
          } else {
            this._sideNavVisible$.next(!this._sideNavVisible$.value);
          }
        }
      }, {
        key: "routeData$",
        value: function routeData$() {
          return this._routeData$;
        }
      }, {
        key: "currentURL$",
        value: function currentURL$() {
          return this._currentURL$;
        }
      }]);

      return NavigationService;
    }();

    NavigationService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    NavigationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], NavigationService);
    /***/
  },

  /***/
  "./src/modules/navigation/services/side-nav.service.ts":
  /*!*************************************************************!*\
    !*** ./src/modules/navigation/services/side-nav.service.ts ***!
    \*************************************************************/

  /*! exports provided: SideNavService */

  /***/
  function srcModulesNavigationServicesSideNavServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideNavService", function () {
      return SideNavService;
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


    var _modules_app_common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @modules/app-common/services */
    "./src/modules/app-common/services/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var _expand$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();

    var expandedTable = {};
    var EXPANDED_TABLE_CACHE_NAME = 'sbpro-expanded-table';

    var SideNavService =
    /*#__PURE__*/
    function () {
      function SideNavService(utilityService) {
        _classCallCheck(this, SideNavService);

        this.utilityService = utilityService;
        var cachedExpandedTable = this.utilityService.getStoredObject(EXPANDED_TABLE_CACHE_NAME);

        if (cachedExpandedTable) {
          expandedTable = cachedExpandedTable;
        }
      }

      _createClass(SideNavService, [{
        key: "isExpanded",
        value: function isExpanded(hash) {
          if (expandedTable[hash]) {
            return true;
          }

          return false;
        }
      }, {
        key: "setExpanded",
        value: function setExpanded(hash, expanded) {
          expandedTable[hash] = expanded;
          this.utilityService.storeObject(EXPANDED_TABLE_CACHE_NAME, expandedTable);
        }
      }, {
        key: "expand$",
        get: function get() {
          return _expand$;
        }
      }]);

      return SideNavService;
    }();

    SideNavService.ctorParameters = function () {
      return [{
        type: _modules_app_common_services__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }];
    };

    SideNavService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_app_common_services__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])], SideNavService);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\HabibMokni\Documents\GitHub\ps-bms\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map