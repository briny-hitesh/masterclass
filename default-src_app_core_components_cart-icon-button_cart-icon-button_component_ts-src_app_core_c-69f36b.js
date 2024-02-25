"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_core_components_cart-icon-button_cart-icon-button_component_ts-src_app_core_c-69f36b"],{

/***/ 167:
/*!********************************************************************************!*\
  !*** ./src/app/core/components/cart-icon-button/cart-icon-button.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartIconButtonComponent: () => (/* binding */ CartIconButtonComponent)
/* harmony export */ });
/* harmony import */ var _Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js */ 1560);
/* harmony import */ var _Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js */ 8048);
/* harmony import */ var _Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8848);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _core_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/cart.service */ 4188);
/* harmony import */ var _core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/constants/routes.constant */ 6012);



var _CartIconButtonComponent;







function CartIconButtonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r0.checkoutRoute);
  }
}
function CartIconButtonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CartIconButtonComponent_Conditional_1_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.addToCart(ctx_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
var _cartService = /*#__PURE__*/new WeakMap();
class CartIconButtonComponent {
  constructor() {
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _cartService, {
      writable: true,
      value: void 0
    });
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _cartService, (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService));
    this.checkoutRoute = `/${_core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_4__.ROUTES.TABS}/${_core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_4__.ROUTES.CHECKOUT}`;
    this.cartItemsIds = (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _cartService).cartItemsIds;
  }
  addToCart(id) {
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _cartService).addToCart(id);
  }
}
_CartIconButtonComponent = CartIconButtonComponent;
_CartIconButtonComponent.ɵfac = function CartIconButtonComponent_Factory(t) {
  return new (t || _CartIconButtonComponent)();
};
_CartIconButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _CartIconButtonComponent,
  selectors: [["app-cart-icon-button"]],
  inputs: {
    id: "id"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 1,
  consts: [["fill", "clear", "color", "secondary", 3, "routerLink"], ["slot", "icon-only", "name", "chevron-forward-circle-outline"], ["fill", "clear", "color", "dark", 3, "click"], ["slot", "icon-only", "name", "cart"]],
  template: function CartIconButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CartIconButtonComponent_Conditional_0_Template, 2, 1, "ion-button", 0)(1, CartIconButtonComponent_Conditional_1_Template, 2, 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](0, ctx.cartItemsIds().includes(ctx.id) ? 0 : 1);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
  encapsulation: 2
});

/***/ }),

/***/ 7840:
/*!****************************************************************************************!*\
  !*** ./src/app/core/components/wishlist-icon-button/wishlist-icon-button.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WishlistIconButtonComponent: () => (/* binding */ WishlistIconButtonComponent)
/* harmony export */ });
/* harmony import */ var _Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js */ 1560);
/* harmony import */ var _Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js */ 8048);
/* harmony import */ var _Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _core_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/wishlist.service */ 6024);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8848);



var _WishlistIconButtonComponent;





function WishlistIconButtonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WishlistIconButtonComponent_Conditional_0_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.removeFromWishlist());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function WishlistIconButtonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WishlistIconButtonComponent_Conditional_1_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.addToWishlist());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
var _wishlistService = /*#__PURE__*/new WeakMap();
class WishlistIconButtonComponent {
  constructor() {
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _wishlistService, {
      writable: true,
      value: void 0
    });
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _wishlistService, (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_core_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__.WishlistService));
    this.wishlistIds = (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _wishlistService).wishlistID;
  }
  addToWishlist() {
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _wishlistService).addWishlist(this.id);
  }
  removeFromWishlist() {
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _wishlistService).removeWishlist(this.id);
  }
}
_WishlistIconButtonComponent = WishlistIconButtonComponent;
_WishlistIconButtonComponent.ɵfac = function WishlistIconButtonComponent_Factory(t) {
  return new (t || _WishlistIconButtonComponent)();
};
_WishlistIconButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _WishlistIconButtonComponent,
  selectors: [["app-wishlist-icon-button"]],
  inputs: {
    id: "id"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 1,
  consts: [["fill", "clear", "color", "dark"], ["fill", "clear", "color", "dark", 3, "click"], ["slot", "icon-only", "name", "bookmark"], ["slot", "icon-only", "name", "bookmark-outline"]],
  template: function WishlistIconButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, WishlistIconButtonComponent_Conditional_0_Template, 2, 0, "ion-button", 0)(1, WishlistIconButtonComponent_Conditional_1_Template, 2, 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](0, ctx.wishlistIds().includes(ctx.id) ? 0 : 1);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon],
  encapsulation: 2
});

/***/ }),

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

/***/ 4188:
/*!***********************************************!*\
  !*** ./src/app/core/services/cart.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartService: () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var _Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js */ 1560);
/* harmony import */ var _Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js */ 8048);
/* harmony import */ var _Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8848);
/* harmony import */ var _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/toast.constant */ 7564);



var _CartService;




var _toast = /*#__PURE__*/new WeakMap();
class CartService {
  constructor() {
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _toast, {
      writable: true,
      value: void 0
    });
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _toast, (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController));
    this.cartItemsIds = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)([]);
  }
  addToCart(id) {
    this.cartItemsIds.update(courseIds => [...courseIds, id]);
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _toast).create({
      message: 'Course added to your cart.',
      ..._constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.TOAST_CONFIG
    }).then(toast => toast.present());
  }
  removeFromCart(id) {
    this.cartItemsIds.update(courseIds => this.cartItemsIds().filter(courseId => courseId !== id));
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _toast).create({
      message: 'Course removed from your cart.',
      ..._constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.TOAST_CONFIG
    }).then(toast => toast.present());
  }
}
_CartService = CartService;
_CartService.ɵfac = function CartService_Factory(t) {
  return new (t || _CartService)();
};
_CartService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _CartService,
  factory: _CartService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6024:
/*!***************************************************!*\
  !*** ./src/app/core/services/wishlist.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WishlistService: () => (/* binding */ WishlistService)
/* harmony export */ });
/* harmony import */ var _Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js */ 1560);
/* harmony import */ var _Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js */ 8048);
/* harmony import */ var _Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8848);
/* harmony import */ var _constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/toast.constant */ 7564);



var _WishlistService;




var _toast = /*#__PURE__*/new WeakMap();
class WishlistService {
  constructor() {
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _toast, {
      writable: true,
      value: void 0
    });
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _toast, (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController));
    this.wishlistID = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)([]);
  }
  addWishlist(id) {
    this.wishlistID.update(courseIds => [...courseIds, id]);
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _toast).create({
      message: 'Course added to your wishlist.',
      ..._constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.TOAST_CONFIG
    }).then(toast => toast.present());
  }
  removeWishlist(id) {
    this.wishlistID.update(courseIds => this.wishlistID().filter(courseId => courseId !== id));
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _toast).create({
      message: 'Course removed from your wishlist.',
      ..._constants_toast_constant__WEBPACK_IMPORTED_MODULE_3__.TOAST_CONFIG
    }).then(toast => toast.present());
  }
}
_WishlistService = WishlistService;
_WishlistService.ɵfac = function WishlistService_Factory(t) {
  return new (t || _WishlistService)();
};
_WishlistService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _WishlistService,
  factory: _WishlistService.ɵfac,
  providedIn: 'root'
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
//# sourceMappingURL=default-src_app_core_components_cart-icon-button_cart-icon-button_component_ts-src_app_core_c-69f36b.js.map