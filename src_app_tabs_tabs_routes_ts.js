"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_routes_ts"],{

/***/ 279:
/*!********************************************!*\
  !*** ./src/app/core/model/course.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Course: () => (/* binding */ Course)
/* harmony export */ });
class Course {
  constructor(properties = {}) {
    Object.assign(this, properties);
  }
  get getEffectivePrice() {
    return this.actualPrice - this.actualPrice * this.discountPercentage / 100;
  }
}

/***/ }),

/***/ 3728:
/*!**************************************************!*\
  !*** ./src/app/core/services/courses.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoursesService: () => (/* binding */ CoursesService)
/* harmony export */ });
/* harmony import */ var _Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js */ 1560);
/* harmony import */ var _Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js */ 8048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ 2464);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 6716);
/* harmony import */ var _core_model_course_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/model/course.model */ 279);


var _CoursesService;






var _http = /*#__PURE__*/new WeakMap();
var _dataService = /*#__PURE__*/new WeakMap();
var _baseUrl = /*#__PURE__*/new WeakMap();
class CoursesService {
  constructor() {
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _http, {
      writable: true,
      value: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)
    });
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _dataService, {
      writable: true,
      value: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService)
    });
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _baseUrl, {
      writable: true,
      value: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.API_POINT
    });
  }
  getCourses() {
    (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _http).get(`${(0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _baseUrl)}data/data.json`).subscribe(courses => {
      (0,_Users_hiteshpatoliya_Documents_personal_Course_masterclass_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _dataService).addCourses(courses.map(course => {
        return new _core_model_course_model__WEBPACK_IMPORTED_MODULE_4__.Course(course);
      }));
    });
  }
}
_CoursesService = CoursesService;
_CoursesService.ɵfac = function CoursesService_Factory(t) {
  return new (t || _CoursesService)();
};
_CoursesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: _CoursesService,
  factory: _CoursesService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2464:
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
var _DataService;


class DataService {
  constructor() {
    this.courses = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
  }
  addCourses(courses) {
    this.courses.update(() => courses);
  }
}
_DataService = DataService;
_DataService.ɵfac = function DataService_Factory(t) {
  return new (t || _DataService)();
};
_DataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _DataService,
  factory: _DataService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5132:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPage: () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8848);
/* harmony import */ var _core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/routes.constant */ 6012);
/* harmony import */ var _core_services_courses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/courses.service */ 3728);
var _TabsPage;






const _forTrack0 = ($index, $item) => $item.name;
function TabsPage_For_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-tab-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const route_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tab", route_r1.name)("href", route_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", route_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](route_r1.label);
  }
}
class TabsPage {
  constructor() {
    this.coursesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_core_services_courses_service__WEBPACK_IMPORTED_MODULE_1__.CoursesService);
    this.routes = [{
      name: _core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTES.HOME,
      label: 'Home',
      url: `/${_core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTES.TABS}/${_core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTES.HOME}`,
      icon: 'home'
    }, {
      name: _core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTES.COURSES,
      label: 'Courses',
      url: `/${_core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTES.TABS}/${_core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTES.COURSES}`,
      icon: 'book'
    }, {
      name: _core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTES.WISHLIST,
      label: 'Wishlist',
      url: `/${_core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTES.TABS}/${_core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTES.WISHLIST}`,
      icon: 'bookmark'
    }, {
      name: _core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTES.PROFILE,
      label: 'Profile',
      url: `/${_core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTES.TABS}/${_core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTES.PROFILE}`,
      icon: 'person'
    }];
  }
  ngOnInit() {
    this.coursesService.getCourses();
  }
}
_TabsPage = TabsPage;
_TabsPage.ɵfac = function TabsPage_Factory(t) {
  return new (t || _TabsPage)();
};
_TabsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _TabsPage,
  selectors: [["app-tabs"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 4,
  vars: 0,
  consts: [["slot", "bottom"], [3, "tab", "href"], ["aria-hidden", "true", 3, "name"]],
  template: function TabsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-tabs")(1, "ion-tab-bar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](2, TabsPage_For_3_Template, 4, 4, "ion-tab-button", 1, _forTrack0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.routes);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTabBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTabs],
  styles: ["ion-tab-bar[_ngcontent-%COMP%] {\n  --color: #cbc0f8;\n  --background: #7a60de;\n  --color-selected: #fff;\n  border-radius: 7rem;\n  box-shadow: 0 0 0.7rem rgba(122, 96, 222, 0.8);\n  border: 0.13rem solid #6145d0;\n  margin: 0.4rem;\n}\nion-tab-bar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUFESjtBQUdJO0VBQ0ksaUJBQUE7QUFEUiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLXRhYi1iYXIge1xuICAgIC0tY29sb3I6ICNjYmMwZjg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjN2E2MGRlO1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6ICNmZmY7XG5cbiAgICBib3JkZXItcmFkaXVzOiA3cmVtO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjdyZW0gcmdiYSgxMjIsIDk2LCAyMjIsIDAuOCk7XG4gICAgYm9yZGVyOiAwLjEzcmVtIHNvbGlkICM2MTQ1ZDA7XG4gICAgbWFyZ2luOiAwLjRyZW07XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8516:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.routes.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabRoutes: () => (/* binding */ TabRoutes)
/* harmony export */ });
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 5132);
/* harmony import */ var _core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/routes.constant */ 6012);


const TabRoutes = [{
  path: '',
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
  children: [{
    path: _core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_1__.ROUTES.HOME,
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_components_cart-icon-button_cart-icon-button_component_ts-src_app_core_c-69f36b"), __webpack_require__.e("src_app_pages_home_home_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @pages/home/home.page */ 5036)).then(p => p.HomePage)
  }, {
    path: _core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_1__.ROUTES.COURSES,
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_components_cart-icon-button_cart-icon-button_component_ts-src_app_core_c-69f36b"), __webpack_require__.e("src_app_pages_courses_courses_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @pages/courses/courses.page */ 4208)).then(p => p.CoursesPage)
  }, {
    path: _core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_1__.ROUTES.CHECKOUT,
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_checkout_checkout_page_ts").then(__webpack_require__.bind(__webpack_require__, /*! @pages/checkout/checkout.page */ 1344)).then(p => p.CheckoutPage)
  }, {
    path: _core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_1__.ROUTES.WISHLIST,
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_components_cart-icon-button_cart-icon-button_component_ts-src_app_core_c-69f36b"), __webpack_require__.e("src_app_pages_wishlist_wishlist_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @pages/wishlist/wishlist.page */ 8880)).then(p => p.WishlistPage)
  }, {
    path: _core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_1__.ROUTES.NOTIFICATIONS,
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_notification_notification_page_ts").then(__webpack_require__.bind(__webpack_require__, /*! @pages/notification/notification.page */ 6240)).then(p => p.NotificationPage)
  }, {
    path: _core_constants_routes_constant__WEBPACK_IMPORTED_MODULE_1__.ROUTES.PROFILE,
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_profile_page_ts").then(__webpack_require__.bind(__webpack_require__, /*! @pages/profile/profile.page */ 1760)).then(p => p.ProfilePage)
  }, {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }]
}, {
  path: '',
  redirectTo: '/tabs/home',
  pathMatch: 'full'
}];

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_routes_ts.js.map