"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_page_ts"],{

/***/ 7564:
/*!**************************************************!*\
  !*** ./src/app/core/constants/toast.constant.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TOAST_CONFIG: () => (/* binding */ TOAST_CONFIG)
/* harmony export */ });
const TOAST_CONFIG = {
  keyboardClose: true,
  duration: 1000,
  position: "top"
};

/***/ }),

/***/ 3156:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js */ 1560);
/* harmony import */ var _Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js */ 8048);
/* harmony import */ var _Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8848);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/routes.constant */ 6012);
/* harmony import */ var _core_constants_toast_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/constants/toast.constant */ 7564);



var _LoginPage;











var _router = /*#__PURE__*/new WeakMap();
var _toast = /*#__PURE__*/new WeakMap();
class LoginPage {
  constructor() {
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _router, {
      writable: true,
      value: void 0
    });
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _toast, {
      writable: true,
      value: void 0
    });
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _router, (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _toast, (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController));
    this.username = '';
    this.password = '';
  }
  /**
   * User sign in logic function for validation details
   * TODO: Validate user using backend api.
   */
  signIn() {
    if (this.username && this.password && this.password === 'dummy123') {
      localStorage.setItem('token', 'test');
      (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _router).navigateByUrl(`/${_core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_3__.ROUTES.TABS}/${_core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_3__.ROUTES.HOME}`);
    } else {
      (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _toast).create({
        message: 'Invalid credentials!',
        ..._core_constants_toast_constant__WEBPACK_IMPORTED_MODULE_4__.TOAST_CONFIG
      }).then(modal => modal.present());
    }
  }
}
_LoginPage = LoginPage;
_LoginPage.ɵfac = function LoginPage_Factory(t) {
  return new (t || _LoginPage)();
};
_LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _LoginPage,
  selectors: [["app-login"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
  decls: 20,
  vars: 4,
  consts: [[3, "fullscreen"], ["color", "secondary", 1, "", 3, "fullscreen"], [1, "container"], ["position", "floating"], ["aria-label", "Username", "type", "text", 3, "ngModel", "ngModelChange"], ["aria-label", "Password", "type", "text", 3, "ngModel", "ngModelChange"], ["expand", "full", 1, "ion-margin-top", 3, "click"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-content", 1)(2, "div", 2)(3, "ion-card")(4, "ion-card-header")(5, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Sign In");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Enter account detail!");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-card-content")(10, "ion-item")(11, "ion-label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_13_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.username, $event) || (ctx.username = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-item")(15, "ion-label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_17_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_18_listener() {
        return ctx.signIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Sign In ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel],
  styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  max-width: 90%;\n  width: 360px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBQ1IiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW9uLWNhcmQge1xuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgICAgd2lkdGg6IDM2MHB4O1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 256:
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorSet)
/* harmony export */ });
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}

/***/ }),

/***/ 3069:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldSet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorSet.js */ 256);
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ 3092);


function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "set");
  (0,_classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor, value);
  return value;
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_page_ts.js.map