self["webpackHotUpdatequanly_thuvien"]("main",{

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
/******/ 	__webpack_require__.h = function() { return "bbcb0f0dba3588c4d01f"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi8uL3NyYy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vcXVhbmx5LXRodXZpZW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIkxvZ2luIiwibGF6eSIsIkZvcmdvdFBhc3N3b3JkIiwiUmVnaXN0ZXIiLCJMT0dJTlMiLCJQQUdFU19VUkwiLCJnZXRQYXRoTGlzdCIsIkRBVEEiLCJsaXN0IiwiaSIsImxlbmd0aCIsInB1c2giLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEtBQUssZ0JBQUdDLDJDQUFJLENBQUM7QUFBQSxTQUFNLDZVQUFOO0FBQUEsQ0FBRCxDQUFsQjtBQUNBLElBQU1DLGNBQWMsZ0JBQUdELDJDQUFJLENBQUM7QUFBQSxTQUFNLDJOQUFOO0FBQUEsQ0FBRCxDQUEzQjtBQUNBLElBQU1FLFFBQVEsZ0JBQUdGLDJDQUFJLENBQUM7QUFBQSxTQUFNLHNWQUFOO0FBQUEsQ0FBRCxDQUFyQjtBQUVBLElBQU1HLE1BQU0sR0FBRyxDQUNYO0FBQ0ksVUFBUUMseURBRFo7QUFFSSxlQUFhTDtBQUZqQixDQURXLEVBS1g7QUFDSSxVQUFRSyxrRUFEWjtBQUVJLGVBQWFIO0FBRmpCLENBTFcsRUFTWDtBQUNJLFVBQVFHLDREQURaO0FBRUksZUFBYUY7QUFGakIsQ0FUVyxDQUFmOztBQWVBLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBVTtBQUMxQixNQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLElBQUksQ0FBQ0csTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsUUFBSUYsSUFBSSxDQUFDRSxDQUFELENBQVIsRUFBYTtBQUNURCxVQUFJLENBQUNHLElBQUwsQ0FBVUosSUFBSSxDQUFDRSxDQUFELENBQUosQ0FBUUcsSUFBbEI7QUFDSDtBQUNKLEdBTnlCLENBTzFCOzs7QUFDQSxTQUFPSixJQUFQO0FBQ0gsQ0FURDs7Ozs7Ozs7Ozs7O1VDdEJBLG9DQUFvQywrQkFBK0IsRSIsImZpbGUiOiJtYWluLjFlYjcyMTg1OTQ0NTc4MzFkYTMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbGF6eSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUEFHRVNfVVJMIH0gZnJvbSAnLi9jb250YW50JztcclxuXHJcbmNvbnN0IExvZ2luID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vdGVtcGxhdGVzL0FjY291bnQvTG9naW4nKSk7XHJcbmNvbnN0IEZvcmdvdFBhc3N3b3JkID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vdGVtcGxhdGVzL0FjY291bnQvRm9yZ290UGFzc3dvcmQnKSk7XHJcbmNvbnN0IFJlZ2lzdGVyID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vdGVtcGxhdGVzL0FjY291bnQvUmVnaXN0ZXInKSk7XHJcblxyXG5jb25zdCBMT0dJTlMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJwYXRoXCI6IFBBR0VTX1VSTC5sb2dpbi51cmwsXHJcbiAgICAgICAgXCJjb21wb25lbnRcIjogTG9naW5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJwYXRoXCI6IFBBR0VTX1VSTC5mb3Jnb3RQYXNzd29yZC51cmwsXHJcbiAgICAgICAgXCJjb21wb25lbnRcIjogRm9yZ290UGFzc3dvcmRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJwYXRoXCI6IFBBR0VTX1VSTC5yZWdpc3Rlci51cmwsXHJcbiAgICAgICAgXCJjb21wb25lbnRcIjogUmVnaXN0ZXJcclxuICAgIH0sXHJcbl1cclxuXHJcbmNvbnN0IGdldFBhdGhMaXN0ID0gKERBVEEpID0+IHtcclxuICAgIHZhciBsaXN0ID0gW11cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgREFUQS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChEQVRBW2ldKSB7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChEQVRBW2ldLnBhdGgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coeyBsaXN0IH0pO1xyXG4gICAgcmV0dXJuIGxpc3RcclxufVxyXG5cclxuZXhwb3J0IHsgTE9HSU5TLCBnZXRQYXRoTGlzdCB9XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJiYmNiMGYwZGJhMzU4OGM0ZDAxZlwiOyB9Il0sInNvdXJjZVJvb3QiOiIifQ==