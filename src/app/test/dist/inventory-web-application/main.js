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

/***/ "./src/app/add-item/add-item.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-item/add-item.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%;\n}\n\n.shipping-card {\n  min-width: 120px;\n  margin: 20px auto;\n}\n\n.mat-radio-button {\n  display: block;\n  margin: 5px 0;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.col {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.col:last-child {\n  margin-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWl0ZW0vYWRkLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWRkLWl0ZW0vYWRkLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaGlwcGluZy1jYXJkIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY29sIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY29sOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/add-item/add-item.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-item/add-item.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]=\"itemForm\" novalidate (ngSubmit)=\"onSubmit()\">\n  <mat-card class=\"shipping-card\">\n    <mat-card-header>\n      <mat-card-title>Item Information</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Name\" formControlName=\"name\">\n            <mat-error *ngIf=\"itemForm.controls['name'].hasError('required')\">\n                Name <strong>required</strong>\n              </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <textarea matInput placeholder=\"Description\" formControlName=\"description\"></textarea>\n            <mat-error *ngIf=\"itemForm.controls['description'].hasError('required')\">\n              Description <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <input type=\"number\" matInput placeholder=\"Quantity\" formControlName=\"quantity\" >\n              <mat-error *ngIf=\"itemForm.controls['quantity'].hasError('required')\">\n                Quantity <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <input matInput type=\"number\" placeholder=\"Price\" formControlName=\"price\">\n              <mat-error *ngIf=\"itemForm.controls['price'].hasError('required')\">\n                Price <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n      <div class=\"row\" *ngIf=\"hasUnitNumber\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <textarea matInput placeholder=\"Address 2\" formControlName=\"address2\"></textarea>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col\">\n              <mat-form-field class=\"full-width\">\n                <mat-select placeholder=\"Category\" formControlName=\"category\">\n                  <mat-option *ngFor=\"let categories of categories\" [value]=\"categories.id\">\n                    {{ categories.name }}\n                  </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"itemForm.controls['category'].hasError('required')\">\n                  Category <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n            </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <mat-select placeholder=\"Seller/Vendor\" formControlName=\"seller\">\n              <mat-option *ngFor=\"let sellerList of sellers\" [value]=\"sellerList.id\">\n                {{ sellerList.name }}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"itemForm.controls['seller'].hasError('required')\">\n              Seller/Vendor <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col\">\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Location\" formControlName=\"location\">\n                <mat-error *ngIf=\"itemForm.controls['location'].hasError('required')\">\n                    Location <strong>required</strong>\n                  </mat-error>\n              </mat-form-field>\n            </div>\n        <div class=\"col\">\n          <mat-radio-group formControlName=\"currency\">\n            <mat-radio-button value=\"free\">CAD</mat-radio-button>\n            <mat-radio-button value=\"priority\">US</mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n    </mat-card-actions>\n  </mat-card>\n</form>\n"

/***/ }),

/***/ "./src/app/add-item/add-item.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-item/add-item.component.ts ***!
  \************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var AddItemComponent = /** @class */ (function () {
    function AddItemComponent(fb) {
        this.fb = fb;
        this.itemForm = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            quantity: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            seller: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            currency: ['free', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.hasUnitNumber = false;
        this.sellers = [
            { id: 1, name: 'Andy Mark' },
            { id: 2, name: 'Vex Pro' },
            { id: 3, name: 'Studica' },
            { id: 4, name: 'Home Hardware' },
            { id: 5, name: 'National Instruments' },
            { id: 6, name: 'Digikey' },
            { id: 7, name: 'Computers For Kids' },
        ];
        this.categories = [
            { id: 1, name: 'Computer' },
            { id: 2, name: 'Tool' },
            { id: 3, name: 'Motor' },
            { id: 4, name: 'Pneumatics' },
            { id: 5, name: 'Electrical' },
            { id: 6, name: 'Business' },
            { id: 7, name: 'Other' },
        ];
    }
    AddItemComponent.prototype.onSubmit = function () {
        alert('Item Added Succesfully');
    };
    AddItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__(/*! ./add-item.component.html */ "./src/app/add-item/add-item.component.html"),
            styles: [__webpack_require__(/*! ./add-item.component.css */ "./src/app/add-item/add-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-list/item-list.component */ "./src/app/item-list/item-list.component.ts");
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-item/add-item.component */ "./src/app/add-item/add-item.component.ts");
/* harmony import */ var _basket_basket_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basket/basket.component */ "./src/app/basket/basket.component.ts");






var routes = [
    { path: 'item-list', component: _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_3__["ItemListComponent"] },
    { path: 'add-item', component: _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_4__["AddItemComponent"] },
    { path: 'basket', component: _basket_basket_component__WEBPACK_IMPORTED_MODULE_5__["BasketComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-checkbox {\n    margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2hlY2tib3gge1xuICAgIG1hcmdpbjogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'inventory-web-application';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./item-list/item-list.component */ "./src/app/item-list/item-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-item/add-item.component */ "./src/app/add-item/add-item.component.ts");
/* harmony import */ var _basket_basket_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./basket/basket.component */ "./src/app/basket/basket.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_11__["ItemListComponent"],
                _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_14__["AddItemComponent"],
                _basket_basket_component__WEBPACK_IMPORTED_MODULE_15__["BasketComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/basket/basket.component.css":
/*!*********************************************!*\
  !*** ./src/app/basket/basket.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkButtons{\n    float: left;\n    margin: 30px;\n}\n.row {\n    display: flex;\n    flex-direction: row;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFza2V0L2Jhc2tldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9iYXNrZXQvYmFza2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tCdXR0b25ze1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMzBweDtcbn1cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/basket/basket.component.html":
/*!**********************************************!*\
  !*** ./src/app/basket/basket.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"checkButtons\">\n  <button mat-raised-button style=\"margin-right: 10px;\" color=\"primary\">Check In</button>\n  <button mat-raised-button color=\"error\">Check Out</button>\n</div>\n"

/***/ }),

/***/ "./src/app/basket/basket.component.ts":
/*!********************************************!*\
  !*** ./src/app/basket/basket.component.ts ***!
  \********************************************/
/*! exports provided: BasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketComponent", function() { return BasketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasketComponent = /** @class */ (function () {
    function BasketComponent() {
    }
    BasketComponent.prototype.ngOnInit = function () {
    };
    BasketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basket',
            template: __webpack_require__(/*! ./basket.component.html */ "./src/app/basket/basket.component.html"),
            styles: [__webpack_require__(/*! ./basket.component.css */ "./src/app/basket/basket.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasketComponent);
    return BasketComponent;
}());



/***/ }),

/***/ "./src/app/item-list/item-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/item-list/item-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    margin-top: 10px;\n    margin-left: 10px;\n}\n\n.row {\n    display: flex;\n    flex-direction: row;\n  }\n\ntable {\n    width: 100%;\n  }\n\n.searchField{\n    border: 1px solid lightgray;\n    border-radius: 5px;\n  }\n\n.searchArea{\n    margin: 10px;\n    padding: 5px;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1saXN0L2l0ZW0tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBQ0E7SUFDRSwyQkFBMkI7SUFDM0Isa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tbGlzdC9pdGVtLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNlYXJjaEZpZWxke1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICAuc2VhcmNoQXJlYXtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/item-list/item-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/item-list/item-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin:10px;\">\n<div class=\"row searchArea searchField\">\n  <h2 style=\"font-family: Arial, Helvetica, sans-serif\">Search Settings</h2>\n  <mat-form-field class=\"example-form-field\">\n    <input matInput type=\"text\" [(ngModel)]=\"searchValue\">\n    <button mat-button matSuffix mat-icon-button *ngIf=\"searchValue\" aria-label=\"Clear\" (click)=\"searchValue=''\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n</div>\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let item\"> {{item.name}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"location\">\n    <th mat-header-cell *matHeaderCellDef> Location </th>\n    <td mat-cell *matCellDef=\"let item\"> {{item.location}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"quantity\">\n    <th mat-header-cell *matHeaderCellDef> Quantity </th>\n    <td mat-cell *matCellDef=\"let item\"> {{item.quantity}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n</div>\n"

/***/ }),

/***/ "./src/app/item-list/item-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/item-list/item-list.component.ts ***!
  \**************************************************/
/*! exports provided: ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ITEM_DATA = [
    { id: 1, name: 'TalonSRX', location: 'H2', quantity: 15 },
    { id: 1, name: 'VictorSPX', location: 'H2', quantity: 15 },
];
var ItemListComponent = /** @class */ (function () {
    function ItemListComponent() {
        this.displayedColumns = ['name', 'location', 'quantity'];
        this.dataSource = ITEM_DATA;
        this.searchValue = '';
    }
    ItemListComponent.prototype.ngOnInit = function () {
    };
    ItemListComponent.prototype.onAddItem = function () {
    };
    ItemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-list',
            template: __webpack_require__(/*! ./item-list.component.html */ "./src/app/item-list/item-list.component.html"),
            styles: [__webpack_require__(/*! ./item-list.component.css */ "./src/app/item-list/item-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ItemListComponent);
    return ItemListComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 150px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.right-basket {\n  position: absolute;\n  right: 0px;\n  text-decoration: none;\n  align-self: flex-end;\n  color: white;\n  margin-right: 15px;\n}\n\n.cartDecoration{\n  font-size: 34px;\n  align-self: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ucmlnaHQtYmFza2V0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmNhcnREZWNvcmF0aW9ue1xuICBmb250LXNpemU6IDM0cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n      <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a  mat-list-item routerLink=\"/item-list\">Item List</a>\n      <a  mat-list-item routerLink=\"/add-item\">Add Item(s)</a>\n      <a  mat-list-item routerLink=\"/basket\">View Basket</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon style=\"margin-left: 2px;\">menu</mat-icon>\n      </button>\n      <p>FRC Inventory Application</p>\n      <ul style=\"list-style: none;\">\n        <li>\n          <a class=\"right-basket\" routerLink=\"/basket\">\n              <mat-icon class=\"cartDecoration\">shopping_cart</mat-icon>\n              [Cart {{cartItems}}]\n          </a>\n        </li>\n      </ul>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var NavComponent = /** @class */ (function () {
    function NavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
        this.cartItems = 2;
    }
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], NavComponent);
    return NavComponent;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adamtronchin/Documents/GitHub/inventory-web-application/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map