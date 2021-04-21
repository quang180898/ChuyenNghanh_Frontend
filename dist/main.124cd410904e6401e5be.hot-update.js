self["webpackHotUpdatequanly_thuvien"]("main",{

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAIN": function() { return /* binding */ MAIN; },
/* harmony export */   "LOGINS": function() { return /* binding */ LOGINS; },
/* harmony export */   "getPathList": function() { return /* binding */ getPathList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _contant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contant */ "./src/contant.js");


var Login = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_antd_es_date-picker_index_js-node_modules_antd_es_form_index_js-node_mod-c71a9b"), __webpack_require__.e("src_templates_Account_Login_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./templates/Account/Login */ "./src/templates/Account/Login.js"));
});
var ForgotPassword = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "src_templates_Account_ForgotPassword_js").then(__webpack_require__.bind(__webpack_require__, /*! ./templates/Account/ForgotPassword */ "./src/templates/Account/ForgotPassword.js"));
});
var Register = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_antd_es_date-picker_index_js-node_modules_antd_es_form_index_js-node_mod-c71a9b"), __webpack_require__.e("src_templates_Account_Register_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./templates/Account/Register */ "./src/templates/Account/Register.js"));
});
var LOGINS = [{
  "path": _contant__WEBPACK_IMPORTED_MODULE_1__.PAGES_URL.login.url,
  "component": Login
}, {
  "path": _contant__WEBPACK_IMPORTED_MODULE_1__.PAGES_URL.forgotPassword.url,
  "component": ForgotPassword
}, {
  "path": _contant__WEBPACK_IMPORTED_MODULE_1__.PAGES_URL.register.url,
  "component": Register
}];
var MAIN = [{
  "path": '/elements',
  "component": Elements
}];

var getPathList = function getPathList(DATA) {
  var list = [];

  for (var i = 0; i < DATA.length; i++) {
    if (DATA[i]) {
      list.push(DATA[i].path);
    }
  } // console.log({ list });


  return list;
};



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "31675a58ecd9879633af"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi8uL3NyYy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vcXVhbmx5LXRodXZpZW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIkxvZ2luIiwibGF6eSIsIkZvcmdvdFBhc3N3b3JkIiwiUmVnaXN0ZXIiLCJMT0dJTlMiLCJQQUdFU19VUkwiLCJNQUlOIiwiRWxlbWVudHMiLCJnZXRQYXRoTGlzdCIsIkRBVEEiLCJsaXN0IiwiaSIsImxlbmd0aCIsInB1c2giLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLGdCQUFHQywyQ0FBSSxDQUFDO0FBQUEsU0FBTSw2VUFBTjtBQUFBLENBQUQsQ0FBbEI7QUFDQSxJQUFNQyxjQUFjLGdCQUFHRCwyQ0FBSSxDQUFDO0FBQUEsU0FBTSwyTkFBTjtBQUFBLENBQUQsQ0FBM0I7QUFDQSxJQUFNRSxRQUFRLGdCQUFHRiwyQ0FBSSxDQUFDO0FBQUEsU0FBTSxzVkFBTjtBQUFBLENBQUQsQ0FBckI7QUFFQSxJQUFNRyxNQUFNLEdBQUcsQ0FDWDtBQUNJLFVBQVFDLHlEQURaO0FBRUksZUFBYUw7QUFGakIsQ0FEVyxFQUtYO0FBQ0ksVUFBUUssa0VBRFo7QUFFSSxlQUFhSDtBQUZqQixDQUxXLEVBU1g7QUFDSSxVQUFRRyw0REFEWjtBQUVJLGVBQWFGO0FBRmpCLENBVFcsQ0FBZjtBQWVBLElBQU1HLElBQUksR0FBRyxDQUNUO0FBQ0ksVUFBUSxXQURaO0FBRUksZUFBYUM7QUFGakIsQ0FEUyxDQUFiOztBQU9BLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBVTtBQUMxQixNQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLElBQUksQ0FBQ0csTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsUUFBSUYsSUFBSSxDQUFDRSxDQUFELENBQVIsRUFBYTtBQUNURCxVQUFJLENBQUNHLElBQUwsQ0FBVUosSUFBSSxDQUFDRSxDQUFELENBQUosQ0FBUUcsSUFBbEI7QUFDSDtBQUNKLEdBTnlCLENBTzFCOzs7QUFDQSxTQUFPSixJQUFQO0FBQ0gsQ0FURDs7Ozs7Ozs7Ozs7O1VDN0JBLG9DQUFvQywrQkFBK0IsRSIsImZpbGUiOiJtYWluLjEyNGNkNDEwOTA0ZTY0MDFlNWJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbGF6eSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUEFHRVNfVVJMIH0gZnJvbSAnLi9jb250YW50JztcclxuXHJcbmNvbnN0IExvZ2luID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vdGVtcGxhdGVzL0FjY291bnQvTG9naW4nKSk7XHJcbmNvbnN0IEZvcmdvdFBhc3N3b3JkID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vdGVtcGxhdGVzL0FjY291bnQvRm9yZ290UGFzc3dvcmQnKSk7XHJcbmNvbnN0IFJlZ2lzdGVyID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vdGVtcGxhdGVzL0FjY291bnQvUmVnaXN0ZXInKSk7XHJcblxyXG5jb25zdCBMT0dJTlMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJwYXRoXCI6IFBBR0VTX1VSTC5sb2dpbi51cmwsXHJcbiAgICAgICAgXCJjb21wb25lbnRcIjogTG9naW5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJwYXRoXCI6IFBBR0VTX1VSTC5mb3Jnb3RQYXNzd29yZC51cmwsXHJcbiAgICAgICAgXCJjb21wb25lbnRcIjogRm9yZ290UGFzc3dvcmRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJwYXRoXCI6IFBBR0VTX1VSTC5yZWdpc3Rlci51cmwsXHJcbiAgICAgICAgXCJjb21wb25lbnRcIjogUmVnaXN0ZXJcclxuICAgIH0sXHJcbl1cclxuXHJcbmNvbnN0IE1BSU4gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJwYXRoXCI6ICcvZWxlbWVudHMnLFxyXG4gICAgICAgIFwiY29tcG9uZW50XCI6IEVsZW1lbnRzXHJcbiAgICB9LFxyXG5dXHJcblxyXG5jb25zdCBnZXRQYXRoTGlzdCA9IChEQVRBKSA9PiB7XHJcbiAgICB2YXIgbGlzdCA9IFtdXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IERBVEEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoREFUQVtpXSkge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goREFUQVtpXS5wYXRoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHsgbGlzdCB9KTtcclxuICAgIHJldHVybiBsaXN0XHJcbn1cclxuXHJcbmV4cG9ydCB7IE1BSU4sTE9HSU5TLCBnZXRQYXRoTGlzdCB9XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIzMTY3NWE1OGVjZDk4Nzk2MzNhZlwiOyB9Il0sInNvdXJjZVJvb3QiOiIifQ==