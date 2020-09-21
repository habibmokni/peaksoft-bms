(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-talents-talents-routing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/talents/containers/list/list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/talents/containers/list/list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sbpro-dashboard-head icon=\"bar-chart\" title=\"Talents\"></sbpro-dashboard-head>\r\n<div class=\"container-fluid mt-n10\">\r\n  <sbpro-card>\r\n    <div class=\"card-header\">\r\n      <div>\r\n        <button\r\n          class=\"btn btn-primary rounded-pill px-4 shadow-sm\"\r\n          type=\"button\"\r\n          id=\"add-talent-btn\"\r\n          (click)=\"open(modalNewTalent)\"\r\n        >\r\n          Neu Talent Hinzufügen\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <!-- Talents Table -->\r\n    <div class=\"card-body\">\r\n      <!-- <sb-ng-bootstrap-table [pageSize]=\"4\"></sb-ng-bootstrap-table> -->\r\n      <div>\r\n        <p *ngIf=\"loadedProfiles.length < 1 && !isFetching\">\r\n          No Talents Available !\r\n        </p>\r\n        <div class=\"table-responsive-sm\">\r\n        <table class=\"table\" *ngIf=\"loadedProfiles.length >= 1 && !isFetching\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">#</th>\r\n              <th scope=\"col\">Vorname</th>\r\n              <th scope=\"col\">Nachname</th>\r\n              <th scope=\"col\">Stelle</th>\r\n              <th scope=\"col\">Status</th>\r\n              <th scope=\"col\">Link</th>\r\n              <th scope=\"col\">Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let profil of loadedProfiles; let i = index\">\r\n            <tr>\r\n              <th scope=\"row\">\r\n                {{ i + 1 }} <!-- {{ profil.id }} -->\r\n              </th>\r\n              <th>{{ profil.fname }}</th>\r\n              <th>{{ profil.lname }}</th>\r\n              <th>{{ profil.job }}</th>\r\n              <th\r\n                [ngStyle]=\"{\r\n                  color: profil.status === 'Contacted' ? 'green' : 'red'\r\n                }\"\r\n              >\r\n                {{ profil.status }}\r\n              </th>\r\n              <th>\r\n                <a href=\"{{ profil.profileLink }}\" target=\"_blank\">{{\r\n                  profil.profileLink\r\n                }}</a>\r\n              </th>\r\n              <th>\r\n                <button\r\n                (click)=\"open(modalDeleteTalent, {centered: true}); saveSelectedProfilID(profil.id)\"\r\n                  class=\"btn btn-outline-red btn-icon shadow-sm\"\r\n                  type=\"button\"\r\n                >\r\n                  <i-feather name=\"Trash2\"></i-feather>\r\n                </button>\r\n                &nbsp;\r\n                <button\r\n                  (click)=\"\r\n                    onFetchTalentProfil(profil.id); open(modalTalentProfil)\r\n                  \"\r\n                  class=\"btn btn-outline-blue btn-icon shadow-sm\"\r\n                  type=\"button\"\r\n                >\r\n                  <i-feather name=\"user\"></i-feather>\r\n                </button>\r\n                &nbsp;\r\n                <button\r\n                  (click)=\"\r\n                    onFetchTalentProfil(profil.id); open(modalEditTalent)\r\n                  \"\r\n                  class=\"btn btn-outline-green btn-icon shadow-sm\"\r\n                  type=\"button\"\r\n                >\r\n                  <i-feather name=\"settings\"></i-feather>\r\n                </button>\r\n              </th>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n    </div>\r\n        <p *ngIf=\"isFetching && !error\">Lädt...{{ error }}</p>\r\n        <div class=\"alert alert-danger\" *ngIf=\"error\">\r\n          <h1>An Error Occurred!</h1>\r\n          <p>{{ error }}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </sbpro-card>\r\n</div>\r\n\r\n<!-- MODAL ADD TALENT FORM -->\r\n<ng-template #modalNewTalent let-modal>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\">Neu Talent Hinzufügen</h5>\r\n    <button\r\n      class=\"close\"\r\n      type=\"button\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">×</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form (ngSubmit)=\"onSubmit(f.value); modal.close()\" #f=\"ngForm\">\r\n      <!-- access to the form Angular Created // f.value-->\r\n      <div class=\"form-row\">\r\n        <div class=\"col form-group\">\r\n          <label for=\"fname\">Vorname </label>\r\n          <input\r\n            id=\"fname\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"Vorname\"\r\n            ngModel\r\n            name=\"fname\"\r\n            required\r\n          />\r\n        </div>\r\n        <!-- form-group end.// -->\r\n        <div class=\"col form-group\">\r\n          <label for=\"lname\">Nachname</label>\r\n          <input\r\n            id=\"lname\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"Nachname\"\r\n            ngModel\r\n            name=\"lname\"\r\n            required\r\n          />\r\n        </div>\r\n        <!-- form-group end.// -->\r\n      </div>\r\n      <!-- form-row end.// -->\r\n      <div class=\"form-group\">\r\n        <label for=\"picture\">Picture Link</label>\r\n        <input\r\n          id=\"picture\"\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          placeholder=\"Profile Picture Link\"\r\n          ngModel\r\n          name=\"picture\"\r\n          required\r\n          #picture=\"ngModel\"\r\n        />\r\n        <span class=\"help-block\" *ngIf=\"!picture.valid && picture.touched\"\r\n          >Bitte geben Sie eine valide URL ein !</span\r\n        >\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Email Addresse</label>\r\n        <input\r\n          id=\"email\"\r\n          type=\"email\"\r\n          class=\"form-control\"\r\n          placeholder=\"\"\r\n          ngModel\r\n          name=\"email\"\r\n          required\r\n          email\r\n          #email=\"ngModel\"\r\n        />\r\n        <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\"\r\n          >Bitte geben Sie eine valide E-Mail ein !</span\r\n        >\r\n      </div>\r\n      <!-- form-group end.// -->\r\n      <div class=\"form-group\">\r\n        <label>Status</label>\r\n        <div class=\"form-control\">\r\n          <label class=\"radio-inline\">\r\n            <input\r\n              type=\"radio\"\r\n              name=\"status\"\r\n              value=\"Contacted\"\r\n              [(ngModel)]=\"status\"\r\n            />\r\n            <span> Contacted </span>&nbsp;\r\n          </label>\r\n          <label class=\"radio-inline\">\r\n            <input\r\n              type=\"radio\"\r\n              name=\"status\"\r\n              value=\"Not Contacted\"\r\n              [(ngModel)]=\"status\"\r\n            />\r\n            <span> Not Contacted </span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <!-- form-group end.// -->\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"tel\">Tel. Nummer</label>\r\n          <input id=\"tel\" type=\"text\" class=\"form-control\" ngModel name=\"tel\" />\r\n        </div>\r\n        <!-- form-group end.// -->\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"job\">Stelle</label>\r\n          <select\r\n            id=\"job\"\r\n            class=\"form-control\"\r\n            [ngModel]=\"defaultJob\"\r\n            name=\"job\"\r\n          >\r\n            <option *ngFor=\"let job of jobs\" [value]=\"job.value\">{{\r\n              job.display\r\n            }}</option>\r\n          </select>\r\n        </div>\r\n        <!-- form-group end.// -->\r\n      </div>\r\n      <!-- form-row.// -->\r\n      <div class=\"form-group\">\r\n        <label for=\"profileLink\">Profile Link</label>\r\n        <input\r\n          id=\"profileLink\"\r\n          class=\"form-control\"\r\n          type=\"url\"\r\n          pattern=\"https?://.+\"\r\n          placeholder=\"https://example.com\"\r\n          ngModel\r\n          name=\"profileLink\"\r\n          required\r\n          #profileLink=\"ngModel\"\r\n        />\r\n        <span class=\"help-block\" *ngIf=\"!profileLink.valid && profileLink.touched\"\r\n          >Bitte geben Sie eine valide URL ein !</span\r\n        >\r\n      </div>\r\n      <!-- form-group end.// -->\r\n      <div class=\"form-group\">\r\n        <label for=\"notes\">Notes</label>\r\n        <textarea\r\n          class=\"form-control\"\r\n          name=\"notes\"\r\n          id=\"notes\"\r\n          rows=\"3\"\r\n          ngModel\r\n        ></textarea>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button\r\n          class=\"btn btn-danger\"\r\n          type=\"button\"\r\n          (click)=\"modal.close('Close Click')\"\r\n        >\r\n          Abbrechen\r\n        </button>\r\n        <button id=\"add-talent-sumbit-btn\" class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">\r\n          Bestätigen\r\n        </button>\r\n        <!-- (click)='modal.close(\"Save Click\")' -->\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- MODAL TALENT PROFILE -->\r\n\r\n<ng-template #modalTalentProfil let-modal>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\">Talent Profil</h5>\r\n    <button\r\n      class=\"close\"\r\n      type=\"button\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">×</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <!-- {{ selectedProfil.fname }} -->\r\n\r\n    <div>\r\n      <div class=\"profile-userpic\">\r\n        <img\r\n          [ngStyle]=\"{\r\n            border:\r\n              selectedProfil.status === 'Contacted'\r\n                ? '1px solid green'\r\n                : '1px solid red'\r\n          }\"\r\n          [src]=\"selectedProfil.picture\"\r\n          class=\"img-responsive\"\r\n        />\r\n      </div>\r\n      <table class=\"table table-bordered\">\r\n        <tbody>\r\n          <tr>\r\n            <td><i>Vorname</i></td>\r\n            <td>\r\n              <b>{{ selectedProfil.fname }}</b>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><i>Nachname</i></td>\r\n            <td>\r\n              <b>{{ selectedProfil.lname }}</b>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><i>E-mail</i></td>\r\n            <td>\r\n              <b>{{ selectedProfil.email }}</b>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><i>Tel.</i></td>\r\n            <td>\r\n              <b>{{ selectedProfil.tel }}</b>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><i>Status</i></td>\r\n            <td\r\n              [ngStyle]=\"{\r\n                color: selectedProfil.status === 'Contacted' ? 'green' : 'red'\r\n              }\"\r\n            >\r\n              <b>{{ selectedProfil.status }}</b>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><i>Stelle</i></td>\r\n            <td>\r\n              <b>{{ selectedProfil.job }}</b>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><i>Profil Link</i></td>\r\n            <!-- <td><b>{{ selectedProfil.profileLink }}</b></td> -->\r\n            <td>\r\n              <a [href]=\"selectedProfil.profileLink\" target=\"_blank\"\r\n                ><b>{{ selectedProfil.profileLink }}</b></a\r\n              >\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td><i>Notes</i></td>\r\n            <td>\r\n              <b>{{ selectedProfil.notes }}</b>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button\r\n      class=\"btn btn-danger\"\r\n      type=\"button\"\r\n      (click)=\"modal.close('Close Click')\"\r\n    >\r\n      Abbrechen\r\n    </button>\r\n    <!--<button class=\"btn btn-primary\" type=\"submit\">\r\n          Bestätigen\r\n        </button> -->\r\n    <!-- (click)='modal.close(\"Save Click\")' -->\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<!-- MODAL DELETE PROFIL -->\r\n\r\n<ng-template #modalDeleteTalent let-modal >\r\n    <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Löschung bestätigen</h5>\r\n        <button class=\"close\" type=\"button\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n            <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <b style=\"color: red;\">Sind Sie sicher, dass Sie dieses Talentprofil löschen möchten ?</b>\r\n        <br>\r\n         <i>Dieses Element wird sofort gelöscht. Sie können diese Aktion nicht rückgängig machen.</i>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-outline-blue\" type=\"button\" (click)=\"modal.dismiss()\">Abbrechen</button>\r\n        <button class=\"btn btn-danger\" type=\"button\" (click)=\"onDeleteTalents(selectedProfileID); modal.close()\">Entfernen</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- MODAL EDIT PROFIL -->\r\n\r\n<ng-template #modalEditTalent let-modal>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\" id=\"editProfileLabel\">Edit Talent Profile</h5>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      (click)=\"modal.dismiss()\"\r\n      aria-label=\"Close\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n    <form (ngSubmit)=\"onUpdateTalentProfil(f.value); modal.close()\" #f=\"ngForm\">\r\n      <!-- first Name -->\r\n      <div class=\"form-group row\">\r\n        <label for=\"firstname\" class=\"col-sm-4 col-form-label\"\r\n          >First Name</label\r\n        >\r\n        <div class=\"col-sm-8\">\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"fname\"\r\n            [(ngModel)]=\"selectedProfil.fname\"\r\n            name=\"fname\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <!-- last Name -->\r\n      <div class=\"form-group row\">\r\n        <label for=\"lastname\" class=\"col-sm-4 col-form-label\">Last Name</label>\r\n        <div class=\"col-sm-8\">\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"lname\"\r\n            [(ngModel)]=\"selectedProfil.lname\"\r\n            name=\"lname\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <!-- email -->\r\n      <div class=\"form-group row\">\r\n        <label for=\"email\" class=\"col-sm-4 col-form-label\">Email</label>\r\n        <div class=\"col-sm-8\">\r\n          <input\r\n            type=\"email\"\r\n            class=\"form-control\"\r\n            id=\"email\"\r\n            [(ngModel)]=\"selectedProfil.email\"\r\n            name=\"email\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <!-- tel -->\r\n      <div class=\"form-group row\">\r\n        <label for=\"tel\" class=\"col-sm-4 col-form-label\">Tel Nummer :</label>\r\n        <div class=\"col-sm-8\">\r\n          <input\r\n            type=\"tel\"\r\n            class=\"form-control\"\r\n            id=\"tel\"\r\n            name=\"tel\"\r\n            [(ngModel)]=\"selectedProfil.tel\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <!-- picture -->\r\n      <div class=\"form-group row\">\r\n        <label for=\"picture\" class=\"col-sm-4 col-form-label\">Bild :</label>\r\n        <div class=\"col-sm-8\">\r\n          <input\r\n            type=\"picture\"\r\n            class=\"form-control\"\r\n            id=\"picture\"\r\n            name=\"picture\"\r\n            [(ngModel)]=\"selectedProfil.picture\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <!-- profileLink -->\r\n      <div class=\"form-group row\">\r\n        <label for=\"profileLink\" class=\"col-sm-4 col-form-label\"\r\n          >Profile Link :</label\r\n        >\r\n        <div class=\"col-sm-8\">\r\n          <input\r\n            type=\"profileLink\"\r\n            class=\"form-control\"\r\n            id=\"profileLink\"\r\n            [(ngModel)]=\"selectedProfil.profileLink\"\r\n            name=\"profileLink\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <!-- job/stelle -->\r\n      <div class=\"form-group row\">\r\n        <label for=\"job\" class=\"col-sm-4 col-form-label\">Stelle</label>\r\n        <div class=\"col-sm-8\">\r\n          <select type=\"job\" name=\"job\" class=\"form-control\" id=\"job\" [(ngModel)]=\"selectedProfil.job\">\r\n            <option\r\n              *ngFor=\"let job of jobs\"\r\n              [selected]=\"selectedProfil.job == job.value\"\r\n              value=\"{{ job.value }}\"\r\n              >{{ job.display }}</option\r\n            >\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <!-- status -->\r\n      <div class=\"form-group row\">\r\n        <label for=\"status\" class=\"col-sm-4 col-form-label\">Status</label>\r\n        <div class=\"col-sm-8\">\r\n          <div class=\"form-group\">\r\n            <div class=\"form-control\">\r\n              <label class=\"radio-inline\">\r\n                <input\r\n                  type=\"radio\"\r\n                  name=\"status\"\r\n                  value=\"Contacted\"\r\n                  [(ngModel)]=\"selectedProfil.status\"\r\n                  [checked]=\"selectedProfil.status === 'Contacted'\"\r\n                />\r\n                <span> kontaktiert </span>&nbsp;\r\n              </label>\r\n              <label class=\"radio-inline\">\r\n                <input\r\n                  type=\"radio\"\r\n                  name=\"status\"\r\n                  value=\"Not Contacted\"\r\n                  [(ngModel)]=\"selectedProfil.status\"\r\n                  [checked]=\"selectedProfil.status === 'Not Contacted'\"\r\n                />\r\n                <span> Nicht kontaktiert </span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- notes -->\r\n      <div class=\"form-group row\">\r\n        <label for=\"notes\" class=\"col-sm-4 col-form-label\">Notes</label>\r\n        <div class=\"col-sm-8\">\r\n          <textarea\r\n            class=\"form-control\"\r\n            name=\"notes\"\r\n            id=\"notes\"\r\n            rows=\"3\"\r\n            [(ngModel)]=\"selectedProfil.notes\"\r\n          ></textarea>\r\n        </div>\r\n      </div>\r\n      <!-- footer -->\r\n      <div class=\"modal-footer\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-outline-red\"\r\n          (click)=\"modal.dismiss()\"\r\n        >\r\n          Beenden\r\n        </button>\r\n        <button type=\"submit\" class=\"btn btn-success\">\r\n          Änderungen speichern\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/talents/containers/talents/talents.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/talents/containers/talents/talents.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-layout-talents><router-outlet></router-outlet></ps-layout-talents>\n");

/***/ }),

/***/ "./src/modules/talents/components/index.ts":
/*!*************************************************!*\
  !*** ./src/modules/talents/components/index.ts ***!
  \*************************************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const components = [];


/***/ }),

/***/ "./src/modules/talents/containers/index.ts":
/*!*************************************************!*\
  !*** ./src/modules/talents/containers/index.ts ***!
  \*************************************************/
/*! exports provided: containers, TalentsComponent, ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _talents_talents_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./talents/talents.component */ "./src/modules/talents/containers/talents/talents.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/modules/talents/containers/list/list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TalentsComponent", function() { return _talents_talents_component__WEBPACK_IMPORTED_MODULE_1__["TalentsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]; });




const containers = [_talents_talents_component__WEBPACK_IMPORTED_MODULE_1__["TalentsComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]];




/***/ }),

/***/ "./src/modules/talents/containers/list/list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/modules/talents/containers/list/list.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.ng-invalid.ng-touched, select.ng-invalid.ng.touched {\n  border: 1px solid red;\n}\n\n.profile-userpic img {\n  display: block;\n  margin: 10px auto;\n  width: 10em;\n  height: 10em;\n  padding: 0.8em;\n  border-radius: 50% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3RhbGVudHMvY29udGFpbmVycy9saXN0L0M6XFxVc2Vyc1xcSGFiaWJNb2tuaVxcRG9jdW1lbnRzXFxHaXRIdWJcXHBzLWJtcy9zcmNcXG1vZHVsZXNcXHRhbGVudHNcXGNvbnRhaW5lcnNcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy90YWxlbnRzL2NvbnRhaW5lcnMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUdBLDZCQUFBO0FDRUoiLCJmaWxlIjoic3JjL21vZHVsZXMvdGFsZW50cy9jb250YWluZXJzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCwgc2VsZWN0Lm5nLWludmFsaWQubmcudG91Y2hlZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG4ucHJvZmlsZS11c2VycGljIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwZW07XHJcbiAgICBoZWlnaHQ6IDEwZW07XHJcbiAgICBwYWRkaW5nOiAwLjhlbTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbn0iLCJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsIHNlbGVjdC5uZy1pbnZhbGlkLm5nLnRvdWNoZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5wcm9maWxlLXVzZXJwaWMgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICB3aWR0aDogMTBlbTtcbiAgaGVpZ2h0OiAxMGVtO1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/modules/talents/containers/list/list.component.ts":
/*!***************************************************************!*\
  !*** ./src/modules/talents/containers/list/list.component.ts ***!
  \***************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modules_auth_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/auth/services */ "./src/modules/auth/services/index.ts");
/* harmony import */ var _modules_talents_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/talents/services */ "./src/modules/talents/services/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





let ListComponent = class ListComponent {
    constructor(modalService, talentsService, cd, authService) {
        this.modalService = modalService;
        this.talentsService = talentsService;
        this.cd = cd;
        this.authService = authService;
        this.isAuthenticated = false;
        this.loadedProfiles = [];
        this.selectedProfileID = '';
        this.defaultJob = 'Front End Senior';
        this.jobs = [
            { value: 'Front End Senior', display: 'Front End Senior' },
            { value: 'Front End Junior', display: 'Front End Junior' },
            { value: 'Back End Senior', display: 'Back End Senior' },
            { value: 'Back End Junior', display: 'Back End Junior' },
            { value: 'Senior Fullstack', display: 'Senior Fullstack' },
            { value: 'Junior Fullstack', display: 'Junior Fullstack' },
            { value: 'Testautomatisierer', display: 'Testautomatisierer' },
            { value: 'Werkstudent', display: 'Werkstudent' },
        ];
        this.status = 'Contacted';
        // notes = 'this.selectedProfil.notes';
        this.error = null;
        this.isFetching = false;
    }
    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {
            this.onFetchTalents();
            this.isAuthenticated = !!user;
            console.log(this.isAuthenticated);
        });
    }
    open(content, modalOptions = {}) {
        this.modalService.open(content, modalOptions).result.then(result => {
            console.log(`closed with ${result}`);
        }, reason => {
            console.log(`Dismissed ${this._getDismissReason(reason)}`);
        });
    }
    _getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    onSubmit(form) {
        // Send Http request
        this.talentsService.createandStoreTalents(form).subscribe(talents => {
            // this.isFetching = false;
            // this.loadedProfiles = talents;
            // this.cd.detectChanges();
            this.onFetchTalents();
        }, error => {
            // this.isFetching = false;
            this.error = error.message;
        });
        // this.cd.detectChanges();
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
    onFetchTalents() {
        this.isFetching = true;
        this.talentsService.fetchTalents().subscribe(talents => {
            this.isFetching = false;
            this.loadedProfiles = talents;
            this.cd.detectChanges();
        }, error => {
            this.isFetching = false;
            this.error = error.message;
        });
    }
    onDeleteTalents(id) {
        console.log(id);
        this.talentsService.deleteTalent(id).subscribe(() => {
            this.loadedProfiles = [];
            this.cd.detectChanges();
            this.onFetchTalents();
        });
    }
    onFetchTalentProfil(id) {
        this.saveSelectedProfilID(id);
        console.log(id);
        this.talentsService.showTalentProfil(id).subscribe(value => {
            console.log(value);
            return (this.selectedProfil = value);
        });
    }
    onUpdateTalentProfil(form, id) {
        console.log(form);
        this.talentsService.updateProfil(form, this.selectedProfileID).subscribe(responseData => {
            console.log(responseData);
            this.ProfilData = responseData;
            this.onFetchTalents();
        });
        // this.cd.detectChanges();
        // this.onFetchTalents();
    }
    saveSelectedProfilID(value) {
        this.selectedProfileID = value;
    }
};
ListComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _modules_talents_services__WEBPACK_IMPORTED_MODULE_3__["TalentsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _modules_auth_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ps-list',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/talents/containers/list/list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list.component.scss */ "./src/modules/talents/containers/list/list.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        _modules_talents_services__WEBPACK_IMPORTED_MODULE_3__["TalentsService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _modules_auth_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], ListComponent);



/***/ }),

/***/ "./src/modules/talents/containers/talents/talents.component.scss":
/*!***********************************************************************!*\
  !*** ./src/modules/talents/containers/talents/talents.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy90YWxlbnRzL2NvbnRhaW5lcnMvdGFsZW50cy90YWxlbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/modules/talents/containers/talents/talents.component.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/talents/containers/talents/talents.component.ts ***!
  \*********************************************************************/
/*! exports provided: TalentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentsComponent", function() { return TalentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TalentsComponent = class TalentsComponent {
    constructor() { }
    ngOnInit() { }
};
TalentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ps-talents',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./talents.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/talents/containers/talents/talents.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./talents.component.scss */ "./src/modules/talents/containers/talents/talents.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TalentsComponent);



/***/ }),

/***/ "./src/modules/talents/guards/index.ts":
/*!*********************************************!*\
  !*** ./src/modules/talents/guards/index.ts ***!
  \*********************************************/
/*! exports provided: guards, TalentsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _talents_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./talents.guard */ "./src/modules/talents/guards/talents.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TalentsGuard", function() { return _talents_guard__WEBPACK_IMPORTED_MODULE_1__["TalentsGuard"]; });



const guards = [_talents_guard__WEBPACK_IMPORTED_MODULE_1__["TalentsGuard"]];



/***/ }),

/***/ "./src/modules/talents/guards/talents.guard.ts":
/*!*****************************************************!*\
  !*** ./src/modules/talents/guards/talents.guard.ts ***!
  \*****************************************************/
/*! exports provided: TalentsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentsGuard", function() { return TalentsGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let TalentsGuard = class TalentsGuard {
    canActivate() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
};
TalentsGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TalentsGuard);



/***/ }),

/***/ "./src/modules/talents/services/index.ts":
/*!***********************************************!*\
  !*** ./src/modules/talents/services/index.ts ***!
  \***********************************************/
/*! exports provided: services, TalentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _talents_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./talents.service */ "./src/modules/talents/services/talents.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TalentsService", function() { return _talents_service__WEBPACK_IMPORTED_MODULE_1__["TalentsService"]; });



const services = [_talents_service__WEBPACK_IMPORTED_MODULE_1__["TalentsService"]];



/***/ }),

/***/ "./src/modules/talents/services/talents.service.ts":
/*!*********************************************************!*\
  !*** ./src/modules/talents/services/talents.service.ts ***!
  \*********************************************************/
/*! exports provided: TalentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentsService", function() { return TalentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/auth/services */ "./src/modules/auth/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let TalentsService = class TalentsService {
    constructor(http, userServ, authService) {
        this.http = http;
        this.userServ = userServ;
        this.authService = authService;
    }
    createandStoreTalents(form) {
        return this.http.post('https://peaksoft-47458.firebaseio.com/talents.json', form);
    }
    fetchTalents() {
        const param = {
            auth: localStorage.getItem('access-token'),
        };
        return this.http
            .get('https://peaksoft-47458.firebaseio.com/talents.json', { params: param })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(responseData => {
            const talentsArray = [];
            for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    talentsArray.push(Object.assign(Object.assign({}, responseData[key]), { id: key }));
                    // console.log(this.authService.login);
                }
            }
            console.log(talentsArray);
            return talentsArray;
        }));
    }
    deleteTalent(id) {
        const param = {
            auth: localStorage.getItem('access-token'),
        };
        return this.http.delete(`https://peaksoft-47458.firebaseio.com/talents/${id}.json`);
    }
    showTalentProfil(id) {
        const param = {
            auth: localStorage.getItem('access-token'),
        };
        return this.http.get(`https://peaksoft-47458.firebaseio.com/talents/${id}.json`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(responseData => {
            // console.log(responseData);
            this.ProfilData = responseData;
            return responseData;
        }));
    }
    updateProfil(form, id) {
        console.log(id);
        return this.http.put(`https://peaksoft-47458.firebaseio.com/talents/${id}.json`, form);
    }
};
TalentsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
TalentsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _modules_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], TalentsService);



/***/ }),

/***/ "./src/modules/talents/talents-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/modules/talents/talents-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ROUTES, TalentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentsRoutingModule", function() { return TalentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _talents_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./talents.module */ "./src/modules/talents/talents.module.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "./src/modules/talents/containers/index.ts");

/* tslint:disable: ordered-imports*/


/* Module */

/* Containers */

/* Routes */
const ROUTES = [
    {
        path: '',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["TalentsComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                path: 'list',
                data: {
                    title: 'Talents List',
                },
                component: _containers__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
            },
        ],
    },
];
let TalentsRoutingModule = class TalentsRoutingModule {
};
TalentsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_talents_module__WEBPACK_IMPORTED_MODULE_3__["TalentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TalentsRoutingModule);



/***/ }),

/***/ "./src/modules/talents/talents.module.ts":
/*!***********************************************!*\
  !*** ./src/modules/talents/talents.module.ts ***!
  \***********************************************/
/*! exports provided: TalentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentsModule", function() { return TalentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @common/app-common.module */ "./src/modules/app-common/app-common.module.ts");
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/navigation/navigation.module */ "./src/modules/navigation/navigation.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./src/modules/talents/components/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers */ "./src/modules/talents/containers/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards */ "./src/modules/talents/guards/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services */ "./src/modules/talents/services/index.ts");

/* tslint:disable: ordered-imports*/





/* Modules */


/* Components */

/* Containers */

/* Guards */

/* Services */

let TalentsModule = class TalentsModule {
};
TalentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
        providers: [..._services__WEBPACK_IMPORTED_MODULE_11__["services"], ..._guards__WEBPACK_IMPORTED_MODULE_10__["guards"]],
        declarations: [..._containers__WEBPACK_IMPORTED_MODULE_9__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_8__["components"]],
        exports: [..._containers__WEBPACK_IMPORTED_MODULE_9__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_8__["components"]],
    })
], TalentsModule);



/***/ })

}]);
//# sourceMappingURL=modules-talents-talents-routing-module-es2015.js.map