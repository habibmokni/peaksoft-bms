(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-routing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/forgot-password-social/forgot-password-social.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/forgot-password-social/forgot-password-social.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-auth\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-xl-5 col-lg-6 col-md-8 col-sm-11\">\n                <div class=\"card my-5\">\n                    <div class=\"card-body p-5 text-center\"><div class=\"h3 font-weight-light mb-0\">Password Recovery</div></div>\n                    <hr class=\"my-0\" />\n                    <div class=\"card-body p-5\">\n                        <div class=\"text-center small text-muted mb-4\">Enter your email address below and we will send you a link to reset your password.</div>\n                        <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"onSubmit()\">\n                            <div class=\"form-group\">\n                                <label class=\"text-gray-600 small\" for=\"inputEmailAddress\">Email address</label><input class=\"form-control sb-form-control-solid py-4\" id=\"inputEmailAddress\" data-cy=\"emailInput\" type=\"email\" aria-describedby=\"emailHelp\" formControlName=\"email\" [class.is-valid]=\"emailControlValid\" [class.is-invalid]=\"emailControlInvalid\" />\n                                <div class=\"invalid-feedback\" *ngIf='emailControl.hasError(\"required\")'>Email required.</div>\n                                <div class=\"invalid-feedback\" *ngIf='emailControl.hasError(\"email\")'>Email is not valid.</div>\n                            </div>\n                            <div class=\"form-group mb-0\"><button class=\"btn btn-primary\" data-cy=\"resetPasswordButton\" type=\"submit\" [disabled]=\"forgotPasswordForm.invalid\">Reset Password</button></div>\n                        </form>\n                    </div>\n                    <hr class=\"my-0\" />\n                    <div class=\"card-body px-5 py-4\">\n                        <div class=\"small text-center\">New user? <a routerLink=\"/auth/register-social\">Create an account!</a></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-auth\n><ng-template #confirmationModal let-modal\n    ><div class=\"modal-header\">\n        <h5 class=\"modal-title\">Forgot Password Form Data</h5>\n        <button class=\"close\" type=\"button\" aria-label=\"Close\" (click)='modal.dismiss(\"Cross click\")'><span aria-hidden=\"true\">×</span></button>\n    </div>\n    <div class=\"modal-body\">\n        Wired up and ready to go. Just add a backend. <br /><br />\n        email: <code>{{forgotPasswordForm.value.email}}</code>\n    </div>\n    <div class=\"modal-footer\"><button class=\"btn btn-secondary\" type=\"button\" (click)=\"modal.close()\">Close</button><button class=\"btn btn-primary\" type=\"button\" (click)='modal.close(\"DASHBOARD\")'>Proceed back to Dashboard</button></div></ng-template\n>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/forgot-password/forgot-password.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/forgot-password/forgot-password.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-auth\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-5\">\n                <div class=\"card shadow-lg border-0 rounded-lg mt-5\">\n                    <div class=\"card-header justify-content-center\"><h3 class=\"font-weight-light my-4\">Password Recovery</h3></div>\n                    <div class=\"card-body\">\n                        <div class=\"small mb-3 text-muted\">Enter your email address and we will send you a link to reset your password.</div>\n                        <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"onSubmit()\">\n                            <div class=\"form-group\">\n                                <label class=\"small mb-1\" for=\"inputEmailAddress\">Email</label><input class=\"form-control py-4\" id=\"inputEmailAddress\" data-cy=\"emailInput\" type=\"email\" placeholder=\"Enter email address\" aria-describedby=\"emailHelp\" formControlName=\"email\" [class.is-valid]=\"emailControlValid\" [class.is-invalid]=\"emailControlInvalid\" />\n                                <div class=\"invalid-feedback\" *ngIf='emailControl.hasError(\"required\")'>Email required.</div>\n                                <div class=\"invalid-feedback\" *ngIf='emailControl.hasError(\"email\")'>Email is not valid.</div>\n                            </div>\n                            <div class=\"form-group d-flex align-items-center justify-content-between mt-4 mb-0\"><a class=\"small\" routerLink=\"/auth/login\">Return to login</a><button class=\"btn btn-primary\" data-cy=\"resetPasswordButton\" type=\"submit\" [disabled]=\"forgotPasswordForm.invalid\">Reset Password</button></div>\n                        </form>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <div class=\"small\"><a routerLink=\"/auth/register\">Need an account? Sign up!</a></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-auth\n><ng-template #confirmationModal let-modal\n    ><div class=\"modal-header\">\n        <h5 class=\"modal-title\">Forgot Password Form Data</h5>\n        <button class=\"close\" type=\"button\" aria-label=\"Close\" (click)='modal.dismiss(\"Cross click\")'><span aria-hidden=\"true\">×</span></button>\n    </div>\n    <div class=\"modal-body\">\n        Wired up and ready to go. Just add a backend. <br /><br />\n        email: <code>{{forgotPasswordForm.value.email}}</code>\n    </div>\n    <div class=\"modal-footer\"><button class=\"btn btn-secondary\" type=\"button\" (click)=\"modal.close()\">Close</button><button class=\"btn btn-primary\" type=\"button\" (click)='modal.close(\"DASHBOARD\")'>Proceed back to Dashboard</button></div></ng-template\n>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/login-social/login-social.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/login-social/login-social.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-auth\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-xl-5 col-lg-6 col-md-8 col-sm-11\">\n                <div class=\"card my-5\">\n                    <div class=\"card-body p-5 text-center\">\n                        <div class=\"h3 font-weight-light mb-3\">Sign In</div>\n                        <button class=\"btn sb-btn-icon sb-btn-facebook mx-1\"><fa-icon [icon]='[\"fab\", \"facebook-f\"]'></fa-icon></button><button class=\"btn sb-btn-icon sb-btn-github mx-1\"><fa-icon [icon]='[\"fab\", \"github\"]'></fa-icon></button><button class=\"btn sb-btn-icon sb-btn-google mx-1\"><fa-icon [icon]='[\"fab\", \"google\"]'></fa-icon></button><button class=\"btn sb-btn-icon sb-btn-twitter mx-1\"><fa-icon [icon]='[\"fab\", \"twitter\"]'></fa-icon></button>\n                    </div>\n                    <hr class=\"my-0\" />\n                    <div class=\"card-body p-5\">\n                        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                            <div class=\"form-group\">\n                                <label class=\"text-gray-600 small\" for=\"inputEmailAddress\">Email address</label><input class=\"form-control sb-form-control-solid py-4\" id=\"inputEmailAddress\" data-cy=\"emailInput\" type=\"email\" placeholder=\"Enter email address\" aria-describedby=\"emailHelp\" formControlName=\"email\" [class.is-valid]=\"emailControlValid\" [class.is-invalid]=\"emailControlInvalid\" />\n                                <div class=\"invalid-feedback\" *ngIf='emailControl.hasError(\"required\")'>Email required.</div>\n                                <div class=\"invalid-feedback\" *ngIf='emailControl.hasError(\"email\")'>Email is not valid.</div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"text-gray-600 small\" for=\"inputPassword\">Password</label><input class=\"form-control sb-form-control-solid py-4\" id=\"inputPassword\" data-cy=\"passwordInput\" type=\"password\" placeholder=\"Enter password\" formControlName=\"password\" [class.is-valid]=\"passwordControlValid\" [class.is-invalid]=\"passwordControlInvalid\" />\n                                <div class=\"invalid-feedback\" *ngIf='passwordControl.hasError(\"required\")'>Password required.</div>\n                                <div class=\"invalid-feedback\" *ngIf='passwordControl.hasError(\"minlength\")'>Password must be at least 8 characters.</div>\n                            </div>\n                            <div class=\"form-group\"><a class=\"small\" routerLink=\"/auth/forgot-password\">Forgot your password?</a></div>\n                            <div class=\"form-group d-flex align-items-center justify-content-between mb-0\">\n                                <div class=\"custom-control sb-custom-control-solid custom-checkbox\"><input class=\"custom-control-input small\" id=\"rememberPasswordCheck\" data-cy=\"rememberPasswordCheck\" type=\"checkbox\" formControlName=\"checkbox\" /><label class=\"custom-control-label\" for=\"rememberPasswordCheck\">Remember password</label></div>\n                                <button class=\"btn btn-primary\" data-cy=\"loginButton\" type=\"submit\" [disabled]=\"loginForm.invalid\">Login</button>\n                            </div>\n                        </form>\n                    </div>\n                    <hr class=\"my-0\" />\n                    <div class=\"card-body px-5 py-4\">\n                        <div class=\"small text-center\">New user? <a routerLink=\"/auth/register-social\">Create an account!</a></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-auth\n><ng-template #confirmationModal let-modal\n    ><div class=\"modal-header\">\n        <h5 class=\"modal-title\">Login Form Data</h5>\n        <button class=\"close\" type=\"button\" aria-label=\"Close\" (click)='modal.dismiss(\"Cross click\")'><span aria-hidden=\"true\">×</span></button>\n    </div>\n    <div class=\"modal-body\">\n        Wired up and ready to go. Just add a backend. <br /><br />\n        email: <code>{{loginForm.value.email}}</code>\n        <br />\n        password: <code>{{loginForm.value.password}}</code>\n        <br />\n        remember password: <code>{{loginForm.value.checkbox}}</code>\n    </div>\n    <div class=\"modal-footer\"><button class=\"btn btn-secondary\" type=\"button\" (click)=\"modal.close()\">Close</button><button class=\"btn btn-primary\" type=\"button\" (click)='modal.close(\"DASHBOARD\")'>Proceed back to Dashboard</button></div></ng-template\n>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/login/login.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/login/login.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-auth>\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5\">\r\n          <div class=\"card shadow-lg border-0 rounded-lg mt-5\">\r\n            <div class=\"card-header justify-content-center\"><img class=\"pslogo\" src=\"https://peak-soft.de/wp-content/uploads/2019/12/1627_PeakSoftGmbH_Logo_DA.png\" alt=\"peak-soft-logo\" /></div>\r\n            <!-- <div class=\"card-header justify-content-center\"><h4 class=\"font-weight-light my-4\">Login</h4></div> -->\r\n            <div class=\"card-body\">\r\n              <div class=\"justify-content-center\"><h5 class=\"font-weight-light\">Login</h5></div>\r\n              <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"small mb-1\" for=\"inputEmailAddress\">Email</label>\r\n                  <input\r\n                    class=\"form-control py-4\"\r\n                    id=\"inputEmailAddress\"\r\n                    data-cy=\"emailInput\"\r\n                    type=\"email\"\r\n                    placeholder=\"Enter email address\"\r\n                    aria-describedby=\"emailHelp\"\r\n                    formControlName=\"email\"\r\n                    [class.is-valid]=\"emailControlValid\"\r\n                    [class.is-invalid]=\"emailControlInvalid\"\r\n                  />\r\n                  <div class=\"invalid-feedback\" *ngIf='emailControl.hasError(\"required\")'>Email required.</div>\r\n                  <div class=\"invalid-feedback\" *ngIf='emailControl.hasError(\"email\")'>Email is not valid.</div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"small mb-1\" for=\"inputPassword\">Password</label>\r\n                  <input\r\n                    class=\"form-control py-4\"\r\n                    id=\"inputPassword\"\r\n                    data-cy=\"passwordInput\"\r\n                    type=\"password\"\r\n                    placeholder=\"Enter password\"\r\n                    formControlName=\"password\"\r\n                    [class.is-valid]=\"passwordControlValid\"\r\n                    [class.is-invalid]=\"passwordControlInvalid\"\r\n                  />\r\n                  <div class=\"invalid-feedback\" *ngIf='passwordControl.hasError(\"required\")'>Password required.</div>\r\n                  <div class=\"invalid-feedback\" *ngIf='passwordControl.hasError(\"minlength\")'>Password must be at least 8 characters.</div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <div class=\"custom-control custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\"rememberPasswordCheck\" data-cy=\"rememberPasswordCheck\" type=\"checkbox\" formControlName=\"checkbox\" />\r\n                    <label class=\"custom-control-label\" for=\"rememberPasswordCheck\">Remember password</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group d-flex align-items-center justify-content-between mt-4 mb-0\">\r\n                  <a class=\"small\" routerLink=\"/auth/forgot-password\">Forgot Password?</a>\r\n                  <button \r\n                    id=\"login-btn\"\r\n                    class=\"btn btn-primary\" \r\n                    data-cy=\"loginButton\" \r\n                    type=\"submit\" \r\n                    [disabled]=\"loginForm.invalid\">\r\n                  Login\r\n                </button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <div class=\"card-footer text-center\">\r\n              <div class=\"small\"><a routerLink=\"/auth/register\">Need an account? Sign up!</a></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </sb-layout-auth>\r\n  <ng-template #confirmationModal let-modal>\r\n    <div class=\"modal-header\">\r\n      <h5 class=\"modal-title\">Login Form Data</h5>\r\n      <button class=\"close\" type=\"button\" aria-label=\"Close\" (click)='modal.dismiss(\"Cross click\")'><span aria-hidden=\"true\">×</span></button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      Wired up and ready to go. Just add a backend. <br />\r\n      <br />\r\n      email: <code>{{loginForm.value.email}}</code>\r\n      <br />\r\n      password: <code>{{loginForm.value.password}}</code>\r\n      <br />\r\n      remember password: <code>{{loginForm.value.checkbox}}</code>\r\n    </div>\r\n    <div class=\"modal-footer\"><button class=\"btn btn-secondary\" type=\"button\" (click)=\"modal.close()\">Close</button><button class=\"btn btn-primary\" type=\"button\" (click)='modal.close(\"DASHBOARD\")'>Proceed back to Dashboard</button></div>\r\n  </ng-template>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/multi-tenant-add-users/multi-tenant-add-users.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/multi-tenant-add-users/multi-tenant-add-users.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-auth\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <!-- Create Organization-->\n            <div class=\"col-xl-5 col-lg-6 col-md-8 col-sm-11\">\n                <div class=\"card mt-5\">\n                    <div class=\"card-body p-5 text-center\">\n                        <div class=\"sb-icons-org-create align-items-center mx-auto\"><i-feather class=\"sb-icon-users\" name=\"users\"></i-feather><fa-icon class=\"sb-icon-plus\" [icon]='[\"fas\", \"plus\"]'></fa-icon></div>\n                        <div class=\"h3 text-primary font-weight-300 mb-0\">Who else is part of this organization?</div>\n                    </div>\n                    <hr class=\"m-0\" />\n                    <div class=\"card-body p-5\">\n                        <form [formGroup]=\"addUsersForm\" (ngSubmit)=\"onSubmit()\">\n                            <div formArrayName=\"emails\" *ngFor=\"let email of emails.controls; let i=index\">\n                                <div class=\"form-group\">\n                                    <input class=\"form-control form-control-solid\" [attr.data-cy]='\"emailInput_\" + i' type=\"text\" placeholder=\"name@example.com\" [formControlName]=\"i\" [class.is-valid]=\"emailControlValid(i)\" [class.is-invalid]=\"emailControlInvalid(i)\" />\n                                    <div class=\"invalid-feedback\" *ngIf='email.hasError(\"required\")'>Email required.</div>\n                                    <div class=\"invalid-feedback\" *ngIf='email.hasError(\"email\")'>Email is not valid.</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group text-right\">\n                                <button class=\"btn btn-link p-0\" data-cy=\"addAnotherButton\" [disabled]=\"addUsersForm.invalid\" (click)=\"addAnother()\"><fa-icon class=\"sb-icon-plus-circle mr-1\" [icon]='[\"fas\", \"plus-circle\"]'></fa-icon>Add another</button>\n                            </div>\n                            <div class=\"form-group\"><button class=\"btn btn-block btn-primary\" data-cy=\"addMembersButton\" type=\"submit\" [disabled]=\"addUsersForm.invalid\">Add Members</button></div>\n                            <div class=\"form-group mb-5\">\n                                <a class=\"d-flex align-items-center\" href=\"javascript:void(0);\"><i-feather class=\"mr-1\" name=\"link\"></i-feather>Get an invite link to share</a>\n                            </div>\n                            <div class=\"form-group mb-0 text-center\">Or, <a routerLink=\"/dashboard\">skip for now</a></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-auth\n><ng-template #confirmationModal let-modal\n    ><div class=\"modal-header\">\n        <h5 class=\"modal-title\">Add Members Data</h5>\n        <button class=\"close\" type=\"button\" aria-label=\"Close\" (click)='modal.dismiss(\"Cross click\")'><span aria-hidden=\"true\">×</span></button>\n    </div>\n    <div class=\"modal-body\">\n        Wired up and ready to go. Just add a backend.<br /><br /><span *ngFor=\"let email of emails.controls\"><code>{{email.value}}</code><br /></span>\n    </div>\n    <div class=\"modal-footer\"><button class=\"btn btn-secondary\" type=\"button\" (click)=\"modal.close()\">Close</button><button class=\"btn btn-primary\" type=\"button\" (click)='modal.close(\"DASHBOARD\")'>Proceed back to Dashboard</button></div></ng-template\n>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/multi-tenant-select/multi-tenant-select.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/multi-tenant-select/multi-tenant-select.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-auth\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <!-- Create Organization-->\n            <div class=\"col-xl-4 col-lg-6 col-md-8 col-sm-11\">\n                <div class=\"card mt-5\">\n                    <div class=\"card-body px-5 pt-5 text-center\">\n                        <div class=\"h3 text-primary font-weight-300\">Create</div>\n                        <p class=\"text-muted\">Create an organization and invite new members</p>\n                        <div class=\"sb-icons-org-create align-items-center mx-auto\"><i-feather class=\"sb-icon-users\" name=\"users\"></i-feather><fa-icon class=\"sb-icon-plus\" [icon]='[\"fas\", \"plus\"]'></fa-icon></div>\n                    </div>\n                    <hr class=\"my-0\" />\n                    <div class=\"card-body px-5 py-4\">\n                        <div class=\"small text-center\"><a class=\"btn btn-block btn-primary\" data-cy=\"createNewOrganization\" routerLink=\"/auth/org-create\">Create new organization</a></div>\n                    </div>\n                </div>\n            </div>\n            <!-- Join Organization-->\n            <div class=\"col-xl-4 col-lg-6 col-md-8 col-sm-11\">\n                <div class=\"card mt-5\">\n                    <div class=\"card-body px-5 pt-5 text-center\">\n                        <div class=\"h3 text-secondary font-weight-300\">Join</div>\n                        <p class=\"text-muted\">Enter an access code or request access to an existing organization</p>\n                        <div class=\"sb-icons-org-join align-items-center mx-auto\"><i-feather class=\"sb-icon-user\" name=\"user\"></i-feather><fa-icon class=\"sb-icon-arrow d-inline-flex\" [icon]='[\"fas\", \"long-arrow-alt-right\"]'></fa-icon><i-feather class=\"sb-icon-users\" name=\"users\"></i-feather></div>\n                    </div>\n                    <hr class=\"my-0\" />\n                    <div class=\"card-body px-5 py-4\">\n                        <div class=\"small text-center\"><a class=\"btn btn-block btn-secondary\" data-cy=\"joinOrganization\" routerLink=\"/auth/org-join\">Join an organization</a></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-auth\n>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/org-create/org-create.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/org-create/org-create.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-auth\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-xl-5 col-lg-6 col-md-8 col-sm-11\">\n                <div class=\"card mt-5\">\n                    <div class=\"card-body p-5 text-center\">\n                        <div class=\"sb-icons-org-create align-items-center mx-auto\"><i-feather class=\"sb-icon-users\" name=\"users\"></i-feather><fa-icon class=\"sb-icon-plus\" [icon]='[\"fas\", \"plus\"]'></fa-icon></div>\n                        <div class=\"h3 text-primary font-weight-300 mb-0\">Create an Organization</div>\n                    </div>\n                    <hr class=\"m-0\" />\n                    <div class=\"card-body p-5\">\n                        <form [formGroup]=\"organizationNewForm\" (ngSubmit)=\"onSubmit()\">\n                            <div class=\"form-group\">\n                                <input class=\"form-control form-control-solid\" data-cy=\"nameInput\" type=\"text\" placeholder=\"Enter new organization name\" aria-describedby=\"nameHelp\" formControlName=\"name\" [class.is-valid]=\"nameControlValid\" [class.is-invalid]=\"nameControlInvalid\" />\n                                <div class=\"invalid-feedback\" *ngIf='nameControl.hasError(\"required\")'>Name required</div>\n                                <div class=\"invalid-feedback\" *ngIf='nameControl.hasError(\"name\")'>Name is not available</div>\n                            </div>\n                            <div class=\"form-group mb-0\"><button class=\"btn btn-block btn-primary\" data-cy=\"organizationNewButton\" type=\"submit\" [disabled]=\"organizationNewForm.invalid\">Create Organization</button></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-auth\n>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/org-join/org-join.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/org-join/org-join.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-auth\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-xl-5 col-lg-6 col-md-8 col-sm-11\">\n                <div class=\"card border-0 shadow-lg mt-5\">\n                    <div class=\"card-body p-5 text-center\">\n                        <div class=\"sb-icons-org-join\"><i-feather class=\"sb-icon-user\" name=\"user\"></i-feather><fa-icon class=\"sb-icon-arrow\" [icon]='[\"fas\", \"long-arrow-alt-right\"]'></fa-icon><i-feather class=\"sb-icon-users\" name=\"users\"></i-feather></div>\n                        <div class=\"h3 text-secondary font-weight-300 mb-0\">Join an Organization</div>\n                    </div>\n                    <hr class=\"m-0\" />\n                    <div class=\"card-body p-5\">\n                        <form [formGroup]=\"organizationJoinFormCode\" (ngSubmit)=\"onSubmitCode()\">\n                            <h5 class=\"font-weight-500 mb-3\">Have an access code?</h5>\n                            <div class=\"form-group\">\n                                <input class=\"form-control form-control-solid py-4\" id=\"codeInput\" data-cy=\"codeInput\" type=\"text\" placeholder=\"Enter access code\" aria-label=\"Access Code\" formControlName=\"code\" [class.is-valid]=\"codeControlValid\" [class.is-invalid]=\"codeControlInvalid\" />\n                                <div class=\"invalid-feedback\" *ngIf='codeControl.hasError(\"required\")'>Code required</div>\n                                <div class=\"invalid-feedback\" *ngIf='codeControl.hasError(\"code\")'>Code not recognized</div>\n                            </div>\n                            <div class=\"form-group\"><button class=\"btn btn-block btn-secondary\" data-cy=\"accessCodeButton\" type=\"submit\" [disabled]=\"organizationJoinFormCode.invalid\">Request</button></div>\n                        </form>\n                    </div>\n                    <div class=\"sb-org-or-divider\"><div class=\"sb-org-or\">or</div></div>\n                    <div class=\"card-body p-5\">\n                        <form [formGroup]=\"organizationJoinFormRequest\" (ngSubmit)=\"onSubmitRequest()\">\n                            <h5 class=\"font-weight-500 mb-3\">Request access</h5>\n                            <div class=\"form-group\">\n                                <input class=\"form-control form-control-solid py-4\" id=\"joinNameInput\" data-cy=\"joinNameInput\" type=\"text\" placeholder=\"Existing organization name\" aria-label=\"Organization Name\" formControlName=\"name\" [class.is-valid]=\"nameControlValid\" [class.is-invalid]=\"nameControlInvalid\" />\n                                <div class=\"invalid-feedback\" *ngIf='nameControl.hasError(\"required\")'>Name required</div>\n                                <div class=\"invalid-feedback\" *ngIf='nameControl.hasError(\"name\")'>Organization not recognized</div>\n                            </div>\n                            <div class=\"form-group\"><button class=\"btn btn-block btn-secondary\" data-cy=\"joinOrgNamedButton\" type=\"submit\" [disabled]=\"organizationJoinFormRequest.invalid\">Join</button></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-auth\n><ng-template #confirmationModalAccessCode let-modal\n    ><div class=\"modal-header\">\n        <h5 class=\"modal-title\">Access Code</h5>\n        <button class=\"close\" type=\"button\" aria-label=\"Close\" (click)='modal.dismiss(\"Cross click\")'><span aria-hidden=\"true\">×</span></button>\n    </div>\n    <div class=\"modal-body\">\n        Wired up and ready to go. Just add a backend. <br /><br />\n        code: <code>{{organizationJoinFormCode.value.code}}</code>\n    </div>\n    <div class=\"modal-footer\"><button class=\"btn btn-secondary\" type=\"button\" (click)=\"modal.close()\">Close</button><button class=\"btn btn-primary\" type=\"button\" (click)='modal.close(\"DASHBOARD\")'>Proceed back to Dashboard</button></div></ng-template\n><ng-template #confirmationModalRequest let-modal\n    ><div class=\"modal-header\">\n        <h5 class=\"modal-title\">Request Access</h5>\n        <button class=\"close\" type=\"button\" aria-label=\"Close\" (click)='modal.dismiss(\"Cross click\")'><span aria-hidden=\"true\">×</span></button>\n    </div>\n    <div class=\"modal-body\">\n        Wired up and ready to go. Just add a backend. <br /><br />\n        name: <code>{{organizationJoinFormRequest.value.name}}</code>\n    </div>\n    <div class=\"modal-footer\"><button class=\"btn btn-secondary\" type=\"button\" (click)=\"modal.close()\">Close</button><button class=\"btn btn-primary\" type=\"button\" (click)='modal.close(\"DASHBOARD\")'>Proceed back to Dashboard</button></div></ng-template\n>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/register-social/register-social.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/register-social/register-social.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-auth\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <!-- Register Form-->\n            <div class=\"col-xl-8 col-lg-9\">\n                <div class=\"card my-5\">\n                    <div class=\"card-body p-5 text-center\">\n                        <div class=\"h3 font-weight-light mb-3\">Create an Account</div>\n                        <div class=\"small text-muted mb-2\">Sign in using...</div>\n                        <button class=\"btn sb-btn-icon sb-btn-facebook mx-1\"><fa-icon [icon]='[\"fab\", \"facebook-f\"]'></fa-icon></button><button class=\"btn sb-btn-icon sb-btn-github mx-1\"><fa-icon [icon]='[\"fab\", \"github\"]'></fa-icon></button><button class=\"btn sb-btn-icon sb-btn-google mx-1\"><fa-icon [icon]='[\"fab\", \"google\"]'></fa-icon></button><button class=\"btn sb-btn-icon sb-btn-twitter mx-1\"><fa-icon [icon]='[\"fab\", \"twitter\"]'></fa-icon></button>\n                    </div>\n                    <hr class=\"my-0\" />\n                    <div class=\"card-body p-5\">\n                        <div class=\"text-center small text-muted mb-4\">...or enter your information below.</div>\n                        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                            <div class=\"form-row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"text-gray-600 small\" for=\"inputFirstName\">First name</label><input class=\"form-control sb-form-control-solid py-4\" id=\"inputFirstName\" data-cy=\"firstNameInput\" type=\"text\" formControlName=\"firstName\" [class.is-valid]=\"firstNameControlValid\" [class.is-invalid]=\"firstNameControlInvalid\" />\n                                        <div class=\"valid-feedback\">Looks good!</div>\n                                        <div class=\"invalid-feedback\" *ngIf='firstNameControl.hasError(\"required\")'>First name required.</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"text-gray-600 small\" for=\"inputLastName\">Last name </label><input class=\"form-control sb-form-control-solid py-4\" id=\"inputLastName\" data-cy=\"lastNameInput\" type=\"text\" formControlName=\"lastName\" [class.is-valid]=\"lastNameControlValid\" [class.is-invalid]=\"lastNameControlInvalid\" />\n                                        <div class=\"valid-feedback\">Looks good!</div>\n                                        <div class=\"invalid-feedback\" *ngIf='lastNameControl.hasError(\"required\")'>Last name required.</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"text-gray-600 small\" for=\"inputEmailAddress\">Email address</label><input class=\"form-control sb-form-control-solid py-4\" id=\"inputEmailAddress\" data-cy=\"emailInput\" type=\"email\" aria-describedby=\"emailHelp\" formControlName=\"email\" [class.is-valid]=\"emailControlValid\" [class.is-invalid]=\"emailControlInvalid\" />\n                                <div class=\"valid-feedback\">Looks good!</div>\n                                <div class=\"invalid-feedback\" *ngIf='emailControl.hasError(\"required\")'>Email required.</div>\n                                <div class=\"invalid-feedback\" *ngIf='emailControl.hasError(\"email\")'>Email is not valid.</div>\n                            </div>\n                            <div class=\"form-row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"text-gray-600 small\" for=\"inputPassword\">Password</label><input class=\"form-control sb-form-control-solid py-4\" id=\"inputPassword\" data-cy=\"passwordInput\" type=\"password\" formControlName=\"password\" [class.is-valid]=\"passwordControlValid\" [class.is-invalid]=\"passwordControlInvalid\" />\n                                        <div class=\"valid-feedback\">Looks good!</div>\n                                        <div class=\"invalid-feedback\" *ngIf='passwordControl.hasError(\"required\")'>Password required.</div>\n                                        <div class=\"invalid-feedback\" *ngIf='passwordControl.hasError(\"minlength\")'>Password must be at least 8 characters.</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"text-gray-600 small\" for=\"inputConfirmPassword\">Confirm Password</label><input class=\"form-control sb-form-control-solid py-4\" id=\"inputConfirmPassword\" data-cy=\"confirmPasswordInput\" type=\"password\" formControlName=\"confirmPassword\" [class.is-valid]=\"confirmPasswordControlValid\" [class.is-invalid]=\"confirmPasswordControlInvalid\" />\n                                        <div class=\"valid-feedback\">Looks good!</div>\n                                        <div class=\"invalid-feedback\" *ngIf='confirmPasswordControl.hasError(\"required\")'>Confirm Password required.</div>\n                                        <div class=\"invalid-feedback\" *ngIf='registerForm.hasError(\"passwordMismatch\")'>Passwords do not match.</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group d-flex align-items-center justify-content-between\">\n                                <div class=\"custom-control sb-custom-control-solid custom-checkbox\">\n                                    <input class=\"custom-control-input small\" id=\"termsAndConditionsInput\" data-cy=\"termsAndConditionsInput\" type=\"checkbox\" formControlName=\"termsAndConditions\" [class.is-valid]=\"termsAndConditionsControlValid\" [class.is-invalid]=\"termsAndConditionsControlInvalid\" /><label class=\"custom-control-label\" for=\"termsAndConditionsInput\">I accept the terms & conditions</label>\n                                    <div class=\"invalid-feedback\" *ngIf='termsAndConditionsControl.hasError(\"required\")'>You must accept the terms & conditions.</div>\n                                </div>\n                                <button class=\"btn btn-primary\" data-cy=\"registerButton\" type=\"submit\" [disabled]=\"registerForm.invalid\">Create Account</button>\n                            </div>\n                        </form>\n                    </div>\n                    <hr class=\"my-0\" />\n                    <div class=\"card-body px-5 py-4\">\n                        <div class=\"small text-center\">Have an account? <a routerLink=\"/auth/login-social\">Sign in!</a></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-auth\n><ng-template #confirmationModal let-modal\n    ><div class=\"modal-header\">\n        <h5 class=\"modal-title\">Create Account Form Data</h5>\n        <button class=\"close\" type=\"button\" aria-label=\"Close\" (click)='modal.dismiss(\"Cross click\")'><span aria-hidden=\"true\">×</span></button>\n    </div>\n    <div class=\"modal-body\">\n        Wired up and ready to go. Just add a backend. <br /><br />\n        firstName: <code>{{registerForm.value.firstName}}</code>\n        <br />\n        lastName: <code>{{registerForm.value.lastName}}</code>\n        <br />\n        email: <code>{{registerForm.value.email}}</code>\n        <br />\n        password: <code>{{registerForm.value.password}}</code>\n        <br />\n        termsAndConditions: <code>{{registerForm.value.termsAndConditions}}</code>\n    </div>\n    <div class=\"modal-footer\"><button class=\"btn btn-secondary\" type=\"button\" (click)=\"modal.close()\">Close</button><button class=\"btn btn-primary\" type=\"button\" (click)='modal.close(\"DASHBOARD\")'>Proceed back to Dashboard</button></div></ng-template\n>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/register/register.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/register/register.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-auth\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-7\">\n                <div class=\"card shadow-lg border-0 rounded-lg mt-5\">\n                    <div class=\"card-header justify-content-center\"><h3 class=\"font-weight-light my-4\">Create Account</h3></div>\n                    <div class=\"card-body\">\n                        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                            <div class=\"form-row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"small mb-1\" for=\"inputFirstName\">First Name</label><input class=\"form-control py-4\" id=\"inputFirstName\" data-cy=\"firstNameInput\" type=\"text\" placeholder=\"Enter first name\" formControlName=\"firstName\" [class.is-valid]=\"firstNameControlValid\" [class.is-invalid]=\"firstNameControlInvalid\" />\n                                        <div class=\"valid-feedback\">Looks good!</div>\n                                        <div class=\"invalid-feedback\" *ngIf='firstNameControl.hasError(\"required\")'>First name required.</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"small mb-1\" for=\"inputLastName\">Last Name</label><input class=\"form-control py-4\" id=\"inputLastName\" data-cy=\"lastNameInput\" type=\"text\" placeholder=\"Enter last name\" formControlName=\"lastName\" [class.is-valid]=\"lastNameControlValid\" [class.is-invalid]=\"lastNameControlInvalid\" />\n                                        <div class=\"valid-feedback\">Looks good!</div>\n                                        <div class=\"invalid-feedback\" *ngIf='lastNameControl.hasError(\"required\")'>Last name required.</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"small mb-1\" for=\"inputEmailAddress\">Email</label><input class=\"form-control py-4\" id=\"inputEmailAddress\" data-cy=\"emailInput\" type=\"email\" placeholder=\"Enter email address\" aria-describedby=\"emailHelp\" formControlName=\"email\" [class.is-valid]=\"emailControlValid\" [class.is-invalid]=\"emailControlInvalid\" />\n                                <div class=\"valid-feedback\">Looks good!</div>\n                                <div class=\"invalid-feedback\" *ngIf='emailControl.hasError(\"required\")'>Email required.</div>\n                                <div class=\"invalid-feedback\" *ngIf='emailControl.hasError(\"email\")'>Email is not valid.</div>\n                            </div>\n                            <div class=\"form-row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"small mb-1\" for=\"inputPassword\">Password</label><input class=\"form-control py-4\" id=\"inputPassword\" data-cy=\"passwordInput\" type=\"password\" placeholder=\"Enter password\" formControlName=\"password\" [class.is-valid]=\"passwordControlValid\" [class.is-invalid]=\"passwordControlInvalid\" />\n                                        <div class=\"valid-feedback\">Looks good!</div>\n                                        <div class=\"invalid-feedback\" *ngIf='passwordControl.hasError(\"required\")'>Password required.</div>\n                                        <div class=\"invalid-feedback\" *ngIf='passwordControl.hasError(\"minlength\")'>Password must be at least 8 characters.</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"small mb-1\" for=\"inputConfirmPassword\">Confirm Password</label><input class=\"form-control py-4\" id=\"inputConfirmPassword\" data-cy=\"confirmPasswordInput\" type=\"password\" placeholder=\"Confirm password\" formControlName=\"confirmPassword\" [class.is-valid]=\"confirmPasswordControlValid\" [class.is-invalid]=\"confirmPasswordControlInvalid\" />\n                                        <div class=\"valid-feedback\">Looks good!</div>\n                                        <div class=\"invalid-feedback\" *ngIf='confirmPasswordControl.hasError(\"required\")'>Confirm Password required.</div>\n                                        <div class=\"invalid-feedback\" *ngIf='registerForm.hasError(\"passwordMismatch\")'>Passwords do not match.</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group mt-4 mb-0\"><button class=\"btn btn-primary btn-block\" data-cy=\"registerButton\" type=\"submit\" [disabled]=\"registerForm.invalid\">Create Account</button></div>\n                        </form>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <div class=\"small\"><a routerLink=\"/auth/login\">Have an account? Go to login</a></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-auth\n><ng-template #confirmationModal let-modal\n    ><div class=\"modal-header\">\n        <h5 class=\"modal-title\">Create Account Form Data</h5>\n        <button class=\"close\" type=\"button\" aria-label=\"Close\" (click)='modal.dismiss(\"Cross click\")'><span aria-hidden=\"true\">×</span></button>\n    </div>\n    <div class=\"modal-body\">\n        Wired up and ready to go. Just add a backend. <br /><br />\n        firstName: <code>{{registerForm.value.firstName}}</code>\n        <br />\n        lastName: <code>{{registerForm.value.lastName}}</code>\n        <br />\n        email: <code>{{registerForm.value.email}}</code>\n        <br />\n        password: <code>{{registerForm.value.password}}</code>\n    </div>\n    <div class=\"modal-footer\"><button class=\"btn btn-secondary\" type=\"button\" (click)=\"modal.close()\">Close</button><button class=\"btn btn-primary\" type=\"button\" (click)='modal.close(\"DASHBOARD\")'>Proceed back to Dashboard</button></div></ng-template\n>\n");

/***/ }),

/***/ "./src/modules/auth/auth-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/auth/auth-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ROUTES, AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.module */ "./src/modules/auth/auth.module.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "./src/modules/auth/containers/index.ts");

/* tslint:disable: ordered-imports*/


/* Module */

/* Containers */

/* Routes */
const ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        data: {
            title: 'Login - SB Admin Pro Angular',
        },
    },
    {
        path: 'register',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
        data: {
            title: 'Register - SB Admin Pro Angular',
        },
    },
    {
        path: 'forgot-password',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"],
        data: {
            title: 'Forgot Password - SB Admin Pro Angular',
        },
    },
    {
        path: 'login-social',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["LoginSocialComponent"],
        data: {
            title: 'Login Social - SB Admin Pro Angular',
        },
    },
    {
        path: 'register-social',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["RegisterSocialComponent"],
        data: {
            title: 'Register Social - SB Admin Pro Angular',
        },
    },
    {
        path: 'forgot-password-social',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordSocialComponent"],
        data: {
            title: 'Forgot Password Social - SB Admin Pro Angular',
        },
    },
    {
        path: 'multi-tenant-select',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["MultiTenantSelectComponent"],
        data: {
            title: 'Multi-Tenant Select - SB Admin Pro Angular',
        },
    },
    {
        path: 'multi-tenant-add-users',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["MultiTenantAddUsersComponent"],
        data: {
            title: 'Multi-Tenant Add Users - SB Admin Pro Angular',
        },
    },
    {
        path: 'org-create',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["OrgCreateComponent"],
        data: {
            title: 'Org Create - SB Admin Pro Angular',
        },
    },
    {
        path: 'org-join',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["OrgJoinComponent"],
        data: {
            title: 'Org Join - SB Admin Pro Angular',
        },
    },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/modules/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @common/app-common.module */ "./src/modules/app-common/app-common.module.ts");
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/navigation/navigation.module */ "./src/modules/navigation/navigation.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./src/modules/auth/components/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers */ "./src/modules/auth/containers/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards */ "./src/modules/auth/guards/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services */ "./src/modules/auth/services/index.ts");
/* harmony import */ var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth-interceptor.service */ "./src/modules/auth/services/auth-interceptor.service.ts");

/* tslint:disable: ordered-imports*/





/* Modules */


/* Components */

/* Containers */

/* Guards */

/* Services */


let AuthModule = class AuthModule {
};
AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_6__["AppCommonModule"],
            _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_7__["NavigationModule"],
        ],
        providers: [
            ..._services__WEBPACK_IMPORTED_MODULE_11__["services"],
            ..._guards__WEBPACK_IMPORTED_MODULE_10__["guards"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptorService"],
                multi: true,
            },
        ],
        declarations: [..._containers__WEBPACK_IMPORTED_MODULE_9__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_8__["components"]],
        exports: [..._containers__WEBPACK_IMPORTED_MODULE_9__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_8__["components"]],
    })
], AuthModule);



/***/ }),

/***/ "./src/modules/auth/components/index.ts":
/*!**********************************************!*\
  !*** ./src/modules/auth/components/index.ts ***!
  \**********************************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const components = [];


/***/ }),

/***/ "./src/modules/auth/containers/forgot-password-social/forgot-password-social.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/modules/auth/containers/forgot-password-social/forgot-password-social.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hdXRoL2NvbnRhaW5lcnMvZm9yZ290LXBhc3N3b3JkLXNvY2lhbC9mb3Jnb3QtcGFzc3dvcmQtc29jaWFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/modules/auth/containers/forgot-password-social/forgot-password-social.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/modules/auth/containers/forgot-password-social/forgot-password-social.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ForgotPasswordSocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordSocialComponent", function() { return ForgotPasswordSocialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





let ForgotPasswordSocialComponent = class ForgotPasswordSocialComponent {
    constructor(fb, modalService, router) {
        this.fb = fb;
        this.modalService = modalService;
        this.router = router;
        this.forgotPasswordForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
        });
    }
    ngOnInit() { }
    onSubmit() {
        if (this.forgotPasswordForm.status === 'VALID') {
            this.modalService.open(this.confirmationModal).result.then(result => {
                if (result === 'DASHBOARD') {
                    this.router.navigate(['/dashboard']);
                }
            }, reason => { });
        }
        for (const key in this.forgotPasswordForm.controls) {
            const control = this.forgotPasswordForm.controls[key];
            control.markAllAsTouched();
        }
    }
    /* Accessor Methods */
    get emailControl() {
        return this.forgotPasswordForm.get('email');
    }
    get emailControlValid() {
        return this.emailControl.touched && !this.emailControlInvalid;
    }
    get emailControlInvalid() {
        return (this.emailControl.touched &&
            (this.emailControl.hasError('required') || this.emailControl.hasError('email')));
    }
};
ForgotPasswordSocialComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmationModal'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], ForgotPasswordSocialComponent.prototype, "confirmationModal", void 0);
ForgotPasswordSocialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sbpro-forgot-password-social',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgot-password-social.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/forgot-password-social/forgot-password-social.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgot-password-social.component.scss */ "./src/modules/auth/containers/forgot-password-social/forgot-password-social.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ForgotPasswordSocialComponent);



/***/ }),

/***/ "./src/modules/auth/containers/forgot-password/forgot-password.component.scss":
/*!************************************************************************************!*\
  !*** ./src/modules/auth/containers/forgot-password/forgot-password.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hdXRoL2NvbnRhaW5lcnMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/modules/auth/containers/forgot-password/forgot-password.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/modules/auth/containers/forgot-password/forgot-password.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(fb, modalService, router) {
        this.fb = fb;
        this.modalService = modalService;
        this.router = router;
        this.forgotPasswordForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
        });
    }
    ngOnInit() { }
    onSubmit() {
        if (this.forgotPasswordForm.status === 'VALID') {
            this.modalService.open(this.confirmationModal).result.then(result => {
                if (result === 'DASHBOARD') {
                    this.router.navigate(['/dashboard']);
                }
            }, reason => { });
        }
        for (const key in this.forgotPasswordForm.controls) {
            const control = this.forgotPasswordForm.controls[key];
            control.markAllAsTouched();
        }
    }
    /* Accessor Methods */
    get emailControl() {
        return this.forgotPasswordForm.get('email');
    }
    get emailControlValid() {
        return this.emailControl.touched && !this.emailControlInvalid;
    }
    get emailControlInvalid() {
        return (this.emailControl.touched &&
            (this.emailControl.hasError('required') || this.emailControl.hasError('email')));
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmationModal'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], ForgotPasswordComponent.prototype, "confirmationModal", void 0);
ForgotPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-forgot-password',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/forgot-password/forgot-password.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgot-password.component.scss */ "./src/modules/auth/containers/forgot-password/forgot-password.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/modules/auth/containers/index.ts":
/*!**********************************************!*\
  !*** ./src/modules/auth/containers/index.ts ***!
  \**********************************************/
/*! exports provided: containers, LoginComponent, RegisterComponent, ForgotPasswordComponent, LoginSocialComponent, RegisterSocialComponent, ForgotPasswordSocialComponent, MultiTenantSelectComponent, OrgCreateComponent, OrgJoinComponent, MultiTenantAddUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _forgot_password_social_forgot_password_social_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password-social/forgot-password-social.component */ "./src/modules/auth/containers/forgot-password-social/forgot-password-social.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/modules/auth/containers/forgot-password/forgot-password.component.ts");
/* harmony import */ var _login_social_login_social_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-social/login-social.component */ "./src/modules/auth/containers/login-social/login-social.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/modules/auth/containers/login/login.component.ts");
/* harmony import */ var _multi_tenant_add_users_multi_tenant_add_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multi-tenant-add-users/multi-tenant-add-users.component */ "./src/modules/auth/containers/multi-tenant-add-users/multi-tenant-add-users.component.ts");
/* harmony import */ var _multi_tenant_select_multi_tenant_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./multi-tenant-select/multi-tenant-select.component */ "./src/modules/auth/containers/multi-tenant-select/multi-tenant-select.component.ts");
/* harmony import */ var _org_create_org_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./org-create/org-create.component */ "./src/modules/auth/containers/org-create/org-create.component.ts");
/* harmony import */ var _org_join_org_join_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./org-join/org-join.component */ "./src/modules/auth/containers/org-join/org-join.component.ts");
/* harmony import */ var _register_social_register_social_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register-social/register-social.component */ "./src/modules/auth/containers/register-social/register-social.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/modules/auth/containers/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginSocialComponent", function() { return _login_social_login_social_component__WEBPACK_IMPORTED_MODULE_3__["LoginSocialComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterSocialComponent", function() { return _register_social_register_social_component__WEBPACK_IMPORTED_MODULE_9__["RegisterSocialComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordSocialComponent", function() { return _forgot_password_social_forgot_password_social_component__WEBPACK_IMPORTED_MODULE_1__["ForgotPasswordSocialComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiTenantSelectComponent", function() { return _multi_tenant_select_multi_tenant_select_component__WEBPACK_IMPORTED_MODULE_6__["MultiTenantSelectComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrgCreateComponent", function() { return _org_create_org_create_component__WEBPACK_IMPORTED_MODULE_7__["OrgCreateComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrgJoinComponent", function() { return _org_join_org_join_component__WEBPACK_IMPORTED_MODULE_8__["OrgJoinComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiTenantAddUsersComponent", function() { return _multi_tenant_add_users_multi_tenant_add_users_component__WEBPACK_IMPORTED_MODULE_5__["MultiTenantAddUsersComponent"]; });












const containers = [
    _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
    _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
    _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"],
    _login_social_login_social_component__WEBPACK_IMPORTED_MODULE_3__["LoginSocialComponent"],
    _register_social_register_social_component__WEBPACK_IMPORTED_MODULE_9__["RegisterSocialComponent"],
    _forgot_password_social_forgot_password_social_component__WEBPACK_IMPORTED_MODULE_1__["ForgotPasswordSocialComponent"],
    _multi_tenant_select_multi_tenant_select_component__WEBPACK_IMPORTED_MODULE_6__["MultiTenantSelectComponent"],
    _org_create_org_create_component__WEBPACK_IMPORTED_MODULE_7__["OrgCreateComponent"],
    _org_join_org_join_component__WEBPACK_IMPORTED_MODULE_8__["OrgJoinComponent"],
    _multi_tenant_add_users_multi_tenant_add_users_component__WEBPACK_IMPORTED_MODULE_5__["MultiTenantAddUsersComponent"],
];












/***/ }),

/***/ "./src/modules/auth/containers/login-social/login-social.component.scss":
/*!******************************************************************************!*\
  !*** ./src/modules/auth/containers/login-social/login-social.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hdXRoL2NvbnRhaW5lcnMvbG9naW4tc29jaWFsL2xvZ2luLXNvY2lhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/modules/auth/containers/login-social/login-social.component.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/auth/containers/login-social/login-social.component.ts ***!
  \****************************************************************************/
/*! exports provided: LoginSocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSocialComponent", function() { return LoginSocialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





let LoginSocialComponent = class LoginSocialComponent {
    constructor(fb, modalService, router) {
        this.fb = fb;
        this.modalService = modalService;
        this.router = router;
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            checkbox: [false],
        });
    }
    ngOnInit() { }
    onSubmit() {
        if (this.loginForm.status === 'VALID') {
            this.modalService.open(this.confirmationModal).result.then(result => {
                if (result === 'DASHBOARD') {
                    this.router.navigate(['/dashboard']);
                }
            }, reason => { });
        }
        for (const key in this.loginForm.controls) {
            const control = this.loginForm.controls[key];
            control.markAllAsTouched();
        }
    }
    /* Accessor Methods */
    get emailControl() {
        return this.loginForm.get('email');
    }
    get emailControlValid() {
        return this.emailControl.touched && !this.emailControlInvalid;
    }
    get emailControlInvalid() {
        return (this.emailControl.touched &&
            (this.emailControl.hasError('required') || this.emailControl.hasError('email')));
    }
    get passwordControl() {
        return this.loginForm.get('password');
    }
    get passwordControlValid() {
        return this.passwordControl.touched && !this.passwordControlInvalid;
    }
    get passwordControlInvalid() {
        return (this.passwordControl.touched &&
            (this.passwordControl.hasError('required') ||
                this.passwordControl.hasError('minlength')));
    }
};
LoginSocialComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmationModal'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], LoginSocialComponent.prototype, "confirmationModal", void 0);
LoginSocialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sbpro-login-social',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login-social.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/login-social/login-social.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login-social.component.scss */ "./src/modules/auth/containers/login-social/login-social.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginSocialComponent);



/***/ }),

/***/ "./src/modules/auth/containers/login/login.component.scss":
/*!****************************************************************!*\
  !*** ./src/modules/auth/containers/login/login.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pslogo {\n  max-width: -webkit-fill-available;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2F1dGgvY29udGFpbmVycy9sb2dpbi9DOlxcVXNlcnNcXEhhYmliTW9rbmlcXERvY3VtZW50c1xcR2l0SHViXFxwcy1ibXMvc3JjXFxtb2R1bGVzXFxhdXRoXFxjb250YWluZXJzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy9hdXRoL2NvbnRhaW5lcnMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQ0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9tb2R1bGVzL2F1dGgvY29udGFpbmVycy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcbi5wc2xvZ297XHJcbiAgICBtYXgtd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn0iLCIucHNsb2dvIHtcbiAgbWF4LXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/modules/auth/containers/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/modules/auth/containers/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modules_auth_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/auth/services */ "./src/modules/auth/services/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");






let LoginComponent = class LoginComponent {
    constructor(fb, modalService, router, authService) {
        this.fb = fb;
        this.modalService = modalService;
        this.router = router;
        this.authService = authService;
        this.error = '';
        this.token = '';
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            checkbox: [false],
        });
    }
    /* Accessor Methods */
    get emailControl() {
        return this.loginForm.get('email');
    }
    get emailControlValid() {
        return this.emailControl.touched && !this.emailControlInvalid;
    }
    get emailControlInvalid() {
        return (this.emailControl.touched &&
            (this.emailControl.hasError('required') || this.emailControl.hasError('email')));
    }
    get passwordControl() {
        return this.loginForm.get('password');
    }
    get passwordControlValid() {
        return this.passwordControl.touched && !this.passwordControlInvalid;
    }
    get passwordControlInvalid() {
        return (this.passwordControl.touched &&
            (this.passwordControl.hasError('required') ||
                this.passwordControl.hasError('minlength')));
    }
    // onSwitchMode() {
    //     this.isLoginMode = !this.isLoginMode;
    // }
    ngOnInit() { }
    onSubmit() {
        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;
        let authObs;
        if (this.loginForm.status === 'VALID') {
            // console.log(email, password);
            authObs = this.authService.login(email, password);
        }
        else {
            alert('This is alert box!');
            console.log(email, password);
        }
        authObs.subscribe(resData => {
            console.log('restdata ', resData);
            this.authService.isLogged.next(true);
            this.authService.isLogged2 = true;
            console.log(this.authService.isLogged2);
            localStorage.setItem('access-token', resData.idToken);
            this.router.navigate(['/talents/list']);
            // console.log(localStorage.getItem('access-token'));
        }, errorMessage => {
            this.authService.isLogged.next(false);
            console.log(errorMessage);
            this.error = errorMessage;
            this.modalService.open(this.errorModal).result.then(result => {
                if (result === 'ERROR') {
                    this.router.navigate(['/auth/login']);
                }
            }, reason => { });
        });
        for (const key in this.loginForm.controls) {
            const control = this.loginForm.controls[key];
            control.markAllAsTouched();
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _modules_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmationModal'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], LoginComponent.prototype, "confirmationModal", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('errorModal'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], LoginComponent.prototype, "errorModal", void 0);
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-login',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/modules/auth/containers/login/login.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _modules_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], LoginComponent);



/***/ }),

/***/ "./src/modules/auth/containers/multi-tenant-add-users/multi-tenant-add-users.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/modules/auth/containers/multi-tenant-add-users/multi-tenant-add-users.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hdXRoL2NvbnRhaW5lcnMvbXVsdGktdGVuYW50LWFkZC11c2Vycy9tdWx0aS10ZW5hbnQtYWRkLXVzZXJzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/modules/auth/containers/multi-tenant-add-users/multi-tenant-add-users.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/modules/auth/containers/multi-tenant-add-users/multi-tenant-add-users.component.ts ***!
  \************************************************************************************************/
/*! exports provided: MultiTenantAddUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiTenantAddUsersComponent", function() { return MultiTenantAddUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





let MultiTenantAddUsersComponent = class MultiTenantAddUsersComponent {
    constructor(fb, modalService, router) {
        this.fb = fb;
        this.modalService = modalService;
        this.router = router;
        this.addUsersForm = this.fb.group({
            emails: this.fb.array([this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])]),
        });
    }
    ngOnInit() { }
    onSubmit() {
        if (this.addUsersForm.status === 'VALID') {
            this.modalService.open(this.confirmationModal).result.then(result => {
                if (result === 'DASHBOARD') {
                    this.router.navigate(['/dashboard']);
                }
            }, reason => { });
        }
        for (const key in this.addUsersForm.controls) {
            const control = this.addUsersForm.controls[key];
            control.markAllAsTouched();
        }
    }
    addAnother() {
        this.emails.push(this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]));
    }
    /* Accessor Methods */
    get emails() {
        return this.addUsersForm.get('emails');
    }
    emailControlValid(index) {
        return this.emails.controls[index].touched && !this.emailControlInvalid(index);
    }
    emailControlInvalid(index) {
        return (this.emails.controls[index].touched &&
            (this.emails.controls[index].hasError('required') ||
                this.emails.controls[index].hasError('email')));
    }
};
MultiTenantAddUsersComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmationModal'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], MultiTenantAddUsersComponent.prototype, "confirmationModal", void 0);
MultiTenantAddUsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sbpro-multi-tenant-add-users',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./multi-tenant-add-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/multi-tenant-add-users/multi-tenant-add-users.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./multi-tenant-add-users.component.scss */ "./src/modules/auth/containers/multi-tenant-add-users/multi-tenant-add-users.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], MultiTenantAddUsersComponent);



/***/ }),

/***/ "./src/modules/auth/containers/multi-tenant-select/multi-tenant-select.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/modules/auth/containers/multi-tenant-select/multi-tenant-select.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hdXRoL2NvbnRhaW5lcnMvbXVsdGktdGVuYW50LXNlbGVjdC9tdWx0aS10ZW5hbnQtc2VsZWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/modules/auth/containers/multi-tenant-select/multi-tenant-select.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/modules/auth/containers/multi-tenant-select/multi-tenant-select.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MultiTenantSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiTenantSelectComponent", function() { return MultiTenantSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MultiTenantSelectComponent = class MultiTenantSelectComponent {
    constructor() { }
    ngOnInit() { }
};
MultiTenantSelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sbpro-multi-tenant-select',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./multi-tenant-select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/multi-tenant-select/multi-tenant-select.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./multi-tenant-select.component.scss */ "./src/modules/auth/containers/multi-tenant-select/multi-tenant-select.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MultiTenantSelectComponent);



/***/ }),

/***/ "./src/modules/auth/containers/org-create/org-create.component.scss":
/*!**************************************************************************!*\
  !*** ./src/modules/auth/containers/org-create/org-create.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hdXRoL2NvbnRhaW5lcnMvb3JnLWNyZWF0ZS9vcmctY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/modules/auth/containers/org-create/org-create.component.ts":
/*!************************************************************************!*\
  !*** ./src/modules/auth/containers/org-create/org-create.component.ts ***!
  \************************************************************************/
/*! exports provided: OrgCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgCreateComponent", function() { return OrgCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let OrgCreateComponent = class OrgCreateComponent {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.organizationNewForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    ngOnInit() { }
    onSubmit() {
        if (this.organizationNewForm.status === 'VALID') {
            this.router.navigate(['/auth/multi-tenant-add-users']);
        }
        for (const key in this.organizationNewForm.controls) {
            const control = this.organizationNewForm.controls[key];
            control.markAllAsTouched();
        }
    }
    /* Accessor Methods */
    get nameControl() {
        return this.organizationNewForm.get('name');
    }
    get nameControlValid() {
        return this.nameControl.touched && !this.nameControlInvalid;
    }
    get nameControlInvalid() {
        return this.nameControl.touched && this.nameControl.hasError('required');
    }
};
OrgCreateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
OrgCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sbpro-org-create',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./org-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/org-create/org-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./org-create.component.scss */ "./src/modules/auth/containers/org-create/org-create.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], OrgCreateComponent);



/***/ }),

/***/ "./src/modules/auth/containers/org-join/org-join.component.scss":
/*!**********************************************************************!*\
  !*** ./src/modules/auth/containers/org-join/org-join.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hdXRoL2NvbnRhaW5lcnMvb3JnLWpvaW4vb3JnLWpvaW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/modules/auth/containers/org-join/org-join.component.ts":
/*!********************************************************************!*\
  !*** ./src/modules/auth/containers/org-join/org-join.component.ts ***!
  \********************************************************************/
/*! exports provided: OrgJoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgJoinComponent", function() { return OrgJoinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





let OrgJoinComponent = class OrgJoinComponent {
    constructor(fb, modalService, router) {
        this.fb = fb;
        this.modalService = modalService;
        this.router = router;
        this.organizationJoinFormCode = this.fb.group({
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.organizationJoinFormRequest = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    ngOnInit() { }
    _reset() {
        this.organizationJoinFormCode.reset();
        this.organizationJoinFormRequest.reset();
    }
    onSubmitCode() {
        if (this.organizationJoinFormCode.status === 'VALID') {
            this.modalService.open(this.confirmationModalAccessCode).result.then(result => {
                if (result === 'DASHBOARD') {
                    return this.router.navigate(['/dashboard']);
                }
                this._reset();
                return true;
            }, reason => { });
        }
        for (const key in this.organizationJoinFormCode.controls) {
            const control = this.organizationJoinFormCode.controls[key];
            control.markAllAsTouched();
        }
    }
    onSubmitRequest() {
        if (this.organizationJoinFormRequest.status === 'VALID') {
            this.modalService.open(this.confirmationModalRequest).result.then(result => {
                if (result === 'DASHBOARD') {
                    return this.router.navigate(['/dashboard']);
                }
                this._reset();
                return true;
            }, reason => { });
        }
        for (const key in this.organizationJoinFormRequest.controls) {
            const control = this.organizationJoinFormRequest.controls[key];
            control.markAllAsTouched();
        }
    }
    /* Accessor Methods */
    get codeControl() {
        return this.organizationJoinFormCode.get('code');
    }
    get codeControlValid() {
        return this.codeControl.touched && !this.codeControlInvalid;
    }
    get codeControlInvalid() {
        return this.codeControl.touched && this.codeControl.hasError('required');
    }
    get nameControl() {
        return this.organizationJoinFormRequest.get('name');
    }
    get nameControlValid() {
        return this.nameControl.touched && !this.nameControlInvalid;
    }
    get nameControlInvalid() {
        return this.nameControl.touched && this.nameControl.hasError('required');
    }
};
OrgJoinComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmationModalAccessCode'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], OrgJoinComponent.prototype, "confirmationModalAccessCode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmationModalRequest'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], OrgJoinComponent.prototype, "confirmationModalRequest", void 0);
OrgJoinComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sbpro-org-join',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./org-join.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/org-join/org-join.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./org-join.component.scss */ "./src/modules/auth/containers/org-join/org-join.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], OrgJoinComponent);



/***/ }),

/***/ "./src/modules/auth/containers/register-social/register-social.component.scss":
/*!************************************************************************************!*\
  !*** ./src/modules/auth/containers/register-social/register-social.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hdXRoL2NvbnRhaW5lcnMvcmVnaXN0ZXItc29jaWFsL3JlZ2lzdGVyLXNvY2lhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/modules/auth/containers/register-social/register-social.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/modules/auth/containers/register-social/register-social.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RegisterSocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterSocialComponent", function() { return RegisterSocialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





let RegisterSocialComponent = class RegisterSocialComponent {
    constructor(fb, modalService, router) {
        this.fb = fb;
        this.modalService = modalService;
        this.router = router;
        this.registerForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            termsAndConditions: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]],
        }, { validator: this._checkPasswords });
    }
    ngOnInit() { }
    onSubmit() {
        if (this.registerForm.status === 'VALID') {
            this.modalService.open(this.confirmationModal).result.then(result => {
                if (result === 'DASHBOARD') {
                    this.router.navigate(['/dashboard']);
                }
            }, reason => { });
        }
        for (const key in this.registerForm.controls) {
            const control = this.registerForm.controls[key];
            control.markAllAsTouched();
        }
    }
    _checkPasswords(group) {
        const pass = group.controls.password.value;
        const confirmPass = group.controls.confirmPassword.value;
        return pass === confirmPass ? null : { passwordMismatch: true };
    }
    /* Accessor Methods */
    get firstNameControl() {
        return this.registerForm.get('firstName');
    }
    get firstNameControlValid() {
        return this.firstNameControl.touched && !this.firstNameControlInvalid;
    }
    get firstNameControlInvalid() {
        return this.firstNameControl.touched && this.firstNameControl.hasError('required');
    }
    get lastNameControl() {
        return this.registerForm.get('lastName');
    }
    get lastNameControlValid() {
        return this.lastNameControl.touched && !this.lastNameControlInvalid;
    }
    get lastNameControlInvalid() {
        return this.lastNameControl.touched && this.lastNameControl.hasError('required');
    }
    get emailControl() {
        return this.registerForm.get('email');
    }
    get emailControlValid() {
        return this.emailControl.touched && !this.emailControlInvalid;
    }
    get emailControlInvalid() {
        return (this.emailControl.touched &&
            (this.emailControl.hasError('required') || this.emailControl.hasError('email')));
    }
    get passwordControl() {
        return this.registerForm.get('password');
    }
    get passwordControlValid() {
        return this.passwordControl.touched && !this.passwordControlInvalid;
    }
    get passwordControlInvalid() {
        return (this.passwordControl.touched &&
            (this.passwordControl.hasError('required') ||
                this.passwordControl.hasError('minlength')));
    }
    get confirmPasswordControl() {
        return this.registerForm.get('confirmPassword');
    }
    get confirmPasswordControlValid() {
        return this.confirmPasswordControl.touched && !this.confirmPasswordControlInvalid;
    }
    get confirmPasswordControlInvalid() {
        return (this.confirmPasswordControl.touched &&
            (this.confirmPasswordControl.hasError('required') ||
                this.confirmPasswordControl.hasError('minlength') ||
                this.registerForm.hasError('passwordMismatch')));
    }
    get termsAndConditionsControl() {
        return this.registerForm.get('termsAndConditions');
    }
    get termsAndConditionsControlValid() {
        return this.termsAndConditionsControl.touched && !this.termsAndConditionsControlInvalid;
    }
    get termsAndConditionsControlInvalid() {
        return (this.termsAndConditionsControl.touched &&
            this.termsAndConditionsControl.hasError('required'));
    }
};
RegisterSocialComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmationModal'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], RegisterSocialComponent.prototype, "confirmationModal", void 0);
RegisterSocialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sbpro-register-social',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register-social.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/register-social/register-social.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register-social.component.scss */ "./src/modules/auth/containers/register-social/register-social.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], RegisterSocialComponent);



/***/ }),

/***/ "./src/modules/auth/containers/register/register.component.scss":
/*!**********************************************************************!*\
  !*** ./src/modules/auth/containers/register/register.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9hdXRoL2NvbnRhaW5lcnMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/modules/auth/containers/register/register.component.ts":
/*!********************************************************************!*\
  !*** ./src/modules/auth/containers/register/register.component.ts ***!
  \********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modules_auth_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/auth/services */ "./src/modules/auth/services/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");






let RegisterComponent = class RegisterComponent {
    constructor(fb, modalService, router, authService) {
        this.fb = fb;
        this.modalService = modalService;
        this.router = router;
        this.authService = authService;
        this.error = '';
        this.registerForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        }, { validator: this._checkPasswords });
    }
    ngOnInit() {
        this.authService.autoLogin();
        console.log('sss');
    }
    onSubmit() {
        const email = this.registerForm.value.email;
        const password = this.registerForm.value.password;
        let authObs;
        if (this.registerForm.status === 'VALID') {
            authObs = this.authService.signup(email, password);
            authObs.subscribe(resData => {
                console.log(resData);
                this.modalService.open(this.confirmationModal).result.then(result => {
                    if (result === 'TALENTS') {
                        this.router.navigate(['/talents/list']);
                    }
                }, reason => { });
            }, errorMessage => {
                console.log(errorMessage);
                this.error = errorMessage;
            });
        }
        else {
            this.modalService.open(this.errorModal).result.then(result => {
                if (result === 'ERROR') {
                    this.error = result;
                    console.log(result);
                    this.router.navigate(['/auth/register']);
                }
            }, reason => { });
        }
        for (const key in this.registerForm.controls) {
            const control = this.registerForm.controls[key];
            control.markAllAsTouched();
        }
    }
    _checkPasswords(group) {
        const pass = group.controls.password.value;
        const confirmPass = group.controls.confirmPassword.value;
        return pass === confirmPass ? null : { passwordMismatch: true };
    }
    /* Accessor Methods */ get firstNameControl() {
        return this.registerForm.get('firstName');
    }
    get firstNameControlValid() {
        return this.firstNameControl.touched && !this.firstNameControlInvalid;
    }
    get firstNameControlInvalid() {
        return this.firstNameControl.touched && this.firstNameControl.hasError('required');
    }
    get lastNameControl() {
        return this.registerForm.get('lastName');
    }
    get lastNameControlValid() {
        return this.lastNameControl.touched && !this.lastNameControlInvalid;
    }
    get lastNameControlInvalid() {
        return this.lastNameControl.touched && this.lastNameControl.hasError('required');
    }
    get emailControl() {
        return this.registerForm.get('email');
    }
    get emailControlValid() {
        return this.emailControl.touched && !this.emailControlInvalid;
    }
    get emailControlInvalid() {
        return (this.emailControl.touched &&
            (this.emailControl.hasError('required') || this.emailControl.hasError('email')));
    }
    get passwordControl() {
        return this.registerForm.get('password');
    }
    get passwordControlValid() {
        return this.passwordControl.touched && !this.passwordControlInvalid;
    }
    get passwordControlInvalid() {
        return (this.passwordControl.touched &&
            (this.passwordControl.hasError('required') ||
                this.passwordControl.hasError('minlength')));
    }
    get confirmPasswordControl() {
        return this.registerForm.get('confirmPassword');
    }
    get confirmPasswordControlValid() {
        return this.confirmPasswordControl.touched && !this.confirmPasswordControlInvalid;
    }
    get confirmPasswordControlInvalid() {
        return (this.confirmPasswordControl.touched &&
            (this.confirmPasswordControl.hasError('required') ||
                this.confirmPasswordControl.hasError('minlength') ||
                this.registerForm.hasError('passwordMismatch')));
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _modules_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmationModal'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], RegisterComponent.prototype, "confirmationModal", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('errorModal'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], RegisterComponent.prototype, "errorModal", void 0);
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-register',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/auth/containers/register/register.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.component.scss */ "./src/modules/auth/containers/register/register.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _modules_auth_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/modules/auth/guards/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/modules/auth/guards/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let AuthGuard = class AuthGuard {
    canActivate() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
};
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);

/* import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '../services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        router: RouterStateSnapshot
    ): boolean | Promise<boolean> | Observable<boolean> {
        return this.authService.user.pipe(
            map((user: any) => {
                return !!user;
            })
        );
    }
}
 */


/***/ }),

/***/ "./src/modules/auth/guards/index.ts":
/*!******************************************!*\
  !*** ./src/modules/auth/guards/index.ts ***!
  \******************************************/
/*! exports provided: guards, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/modules/auth/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });



const guards = [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]];



/***/ }),

/***/ "./src/modules/auth/services/auth-interceptor.service.ts":
/*!***************************************************************!*\
  !*** ./src/modules/auth/services/auth-interceptor.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/services/auth.service.ts");

// tslint:disable: prettier




let AuthInterceptorService = class AuthInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    /* intercept(req: HttpRequest<any>, next: HttpHandler){

        if(localStorage.getItem('access-token') != null) {
            const token =  localStorage.getItem('access-token');
            // const headers = new HttpHeaders().set('access-token', token);
            const AuthRequest = req.clone({
                params: new HttpParams().set('auth', token)
            });
            console.log(AuthRequest);
            return next.handle(AuthRequest)
        }else {
            return next.handle(req);
        }
    } */
    intercept(req, next) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(user => {
            if (!user) {
                return next.handle(req);
            }
            const userReq = req.clone({
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('auth', user.token)
            });
            return next.handle(userReq);
        }));
    }
};
AuthInterceptorService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AuthInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], AuthInterceptorService);

/* console.log('//////////////////////////interceptor');
        /* localStorage.setItem('token', 'code');
        console.log(localStorage.getItem('token'));
const bla = this.authService.user.subscribe(value => {
    console.log(value);
});
return this.authService.user.pipe(
    take(1),
    exhaustMap(user => {
        console.log(user);
        if (!user) {
            return next.handle(req);
        }else{
            // console.log(user.token);
            const userReq = req.clone({
                params: new HttpParams().set('auth', user.token)
            });
            console.log(userReq.params);
            return next.handle(userReq);
        }

    })
);
}} */


/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-routing-module-es2015.js.map