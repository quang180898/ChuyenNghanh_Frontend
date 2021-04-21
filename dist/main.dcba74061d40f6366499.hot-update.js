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
/******/ 	__webpack_require__.h = function() { return "124cd410904e6401e5be"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi8uL3NyYy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vcXVhbmx5LXRodXZpZW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIkxvZ2luIiwibGF6eSIsIkZvcmdvdFBhc3N3b3JkIiwiUmVnaXN0ZXIiLCJMT0dJTlMiLCJQQUdFU19VUkwiLCJNQUlOIiwiRWxlbWVudHMiLCJnZXRQYXRoTGlzdCIsIkRBVEEiLCJsaXN0IiwiaSIsImxlbmd0aCIsInB1c2giLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEtBQUssZ0JBQUdDLDJDQUFJLENBQUM7QUFBQSxTQUFNLDZVQUFOO0FBQUEsQ0FBRCxDQUFsQjtBQUNBLElBQU1DLGNBQWMsZ0JBQUdELDJDQUFJLENBQUM7QUFBQSxTQUFNLDJOQUFOO0FBQUEsQ0FBRCxDQUEzQjtBQUNBLElBQU1FLFFBQVEsZ0JBQUdGLDJDQUFJLENBQUM7QUFBQSxTQUFNLHNWQUFOO0FBQUEsQ0FBRCxDQUFyQjtBQUVBLElBQU1HLE1BQU0sR0FBRyxDQUNYO0FBQ0ksVUFBUUMseURBRFo7QUFFSSxlQUFhTDtBQUZqQixDQURXLEVBS1g7QUFDSSxVQUFRSyxrRUFEWjtBQUVJLGVBQWFIO0FBRmpCLENBTFcsRUFTWDtBQUNJLFVBQVFHLDREQURaO0FBRUksZUFBYUY7QUFGakIsQ0FUVyxDQUFmO0FBZUEsSUFBTUcsSUFBSSxHQUFHLENBQ1Q7QUFDSSxVQUFRLFdBRFo7QUFFSSxlQUFhQztBQUZqQixDQURTLENBQWI7O0FBT0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQzFCLE1BQUlDLElBQUksR0FBRyxFQUFYOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsSUFBSSxDQUFDRyxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxRQUFJRixJQUFJLENBQUNFLENBQUQsQ0FBUixFQUFhO0FBQ1RELFVBQUksQ0FBQ0csSUFBTCxDQUFVSixJQUFJLENBQUNFLENBQUQsQ0FBSixDQUFRRyxJQUFsQjtBQUNIO0FBQ0osR0FOeUIsQ0FPMUI7OztBQUNBLFNBQU9KLElBQVA7QUFDSCxDQVREOzs7Ozs7Ozs7Ozs7VUM3QkEsb0NBQW9DLCtCQUErQixFIiwiZmlsZSI6Im1haW4uZGNiYTc0MDYxZDQwZjYzNjY0OTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBsYXp5IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQQUdFU19VUkwgfSBmcm9tICcuL2NvbnRhbnQnO1xyXG5cclxuY29uc3QgTG9naW4gPSBsYXp5KCgpID0+IGltcG9ydCgnLi90ZW1wbGF0ZXMvQWNjb3VudC9Mb2dpbicpKTtcclxuY29uc3QgRm9yZ290UGFzc3dvcmQgPSBsYXp5KCgpID0+IGltcG9ydCgnLi90ZW1wbGF0ZXMvQWNjb3VudC9Gb3Jnb3RQYXNzd29yZCcpKTtcclxuY29uc3QgUmVnaXN0ZXIgPSBsYXp5KCgpID0+IGltcG9ydCgnLi90ZW1wbGF0ZXMvQWNjb3VudC9SZWdpc3RlcicpKTtcclxuXHJcbmNvbnN0IExPR0lOUyA9IFtcclxuICAgIHtcclxuICAgICAgICBcInBhdGhcIjogUEFHRVNfVVJMLmxvZ2luLnVybCxcclxuICAgICAgICBcImNvbXBvbmVudFwiOiBMb2dpblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInBhdGhcIjogUEFHRVNfVVJMLmZvcmdvdFBhc3N3b3JkLnVybCxcclxuICAgICAgICBcImNvbXBvbmVudFwiOiBGb3Jnb3RQYXNzd29yZFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInBhdGhcIjogUEFHRVNfVVJMLnJlZ2lzdGVyLnVybCxcclxuICAgICAgICBcImNvbXBvbmVudFwiOiBSZWdpc3RlclxyXG4gICAgfSxcclxuXVxyXG5cclxuY29uc3QgTUFJTiA9IFtcclxuICAgIHtcclxuICAgICAgICBcInBhdGhcIjogJy9lbGVtZW50cycsXHJcbiAgICAgICAgXCJjb21wb25lbnRcIjogRWxlbWVudHNcclxuICAgIH0sXHJcbl1cclxuXHJcbmNvbnN0IGdldFBhdGhMaXN0ID0gKERBVEEpID0+IHtcclxuICAgIHZhciBsaXN0ID0gW11cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgREFUQS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChEQVRBW2ldKSB7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChEQVRBW2ldLnBhdGgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coeyBsaXN0IH0pO1xyXG4gICAgcmV0dXJuIGxpc3RcclxufVxyXG5cclxuZXhwb3J0IHsgTE9HSU5TLCBnZXRQYXRoTGlzdCB9XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIxMjRjZDQxMDkwNGU2NDAxZTViZVwiOyB9Il0sInNvdXJjZVJvb3QiOiIifQ==