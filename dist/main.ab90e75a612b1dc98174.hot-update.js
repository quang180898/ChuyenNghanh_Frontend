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
var Home = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "src_templates_Home_Home_js").then(__webpack_require__.bind(__webpack_require__, /*! ./templates/Home/Home */ "./src/templates/Home/Home.js"));
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
  "path": _contant__WEBPACK_IMPORTED_MODULE_1__.PAGES_URL.home.url,
  "component": Home
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
/******/ 	__webpack_require__.h = function() { return "aaf2071d3afb4fe9911b"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi8uL3NyYy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vcXVhbmx5LXRodXZpZW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIkxvZ2luIiwibGF6eSIsIkZvcmdvdFBhc3N3b3JkIiwiUmVnaXN0ZXIiLCJIb21lIiwiTE9HSU5TIiwiUEFHRVNfVVJMIiwiTUFJTiIsImdldFBhdGhMaXN0IiwiREFUQSIsImxpc3QiLCJpIiwibGVuZ3RoIiwicHVzaCIsInBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEtBQUssZ0JBQUdDLDJDQUFJLENBQUM7QUFBQSxTQUFNLDZVQUFOO0FBQUEsQ0FBRCxDQUFsQjtBQUNBLElBQU1DLGNBQWMsZ0JBQUdELDJDQUFJLENBQUM7QUFBQSxTQUFNLDJOQUFOO0FBQUEsQ0FBRCxDQUEzQjtBQUNBLElBQU1FLFFBQVEsZ0JBQUdGLDJDQUFJLENBQUM7QUFBQSxTQUFNLHNWQUFOO0FBQUEsQ0FBRCxDQUFyQjtBQUNBLElBQU1HLElBQUksZ0JBQUdILDJDQUFJLENBQUM7QUFBQSxTQUFNLG9MQUFOO0FBQUEsQ0FBRCxDQUFqQjtBQUVBLElBQU1JLE1BQU0sR0FBRyxDQUNYO0FBQ0ksVUFBUUMseURBRFo7QUFFSSxlQUFhTjtBQUZqQixDQURXLEVBS1g7QUFDSSxVQUFRTSxrRUFEWjtBQUVJLGVBQWFKO0FBRmpCLENBTFcsRUFTWDtBQUNJLFVBQVFJLDREQURaO0FBRUksZUFBYUg7QUFGakIsQ0FUVyxDQUFmO0FBZUEsSUFBTUksSUFBSSxHQUFHLENBQ1Q7QUFDSSxVQUFRRCx3REFEWjtBQUVJLGVBQWFGO0FBRmpCLENBRFMsQ0FBYjs7QUFPQSxJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQVU7QUFDMUIsTUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixJQUFJLENBQUNHLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFFBQUlGLElBQUksQ0FBQ0UsQ0FBRCxDQUFSLEVBQWE7QUFDVEQsVUFBSSxDQUFDRyxJQUFMLENBQVVKLElBQUksQ0FBQ0UsQ0FBRCxDQUFKLENBQVFHLElBQWxCO0FBQ0g7QUFDSixHQU55QixDQU8xQjs7O0FBQ0EsU0FBT0osSUFBUDtBQUNILENBVEQ7Ozs7Ozs7Ozs7OztVQzlCQSxvQ0FBb0MsK0JBQStCLEUiLCJmaWxlIjoibWFpbi5hYjkwZTc1YTYxMmIxZGM5ODE3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGxhenkgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBBR0VTX1VSTCB9IGZyb20gJy4vY29udGFudCc7XHJcblxyXG5jb25zdCBMb2dpbiA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3RlbXBsYXRlcy9BY2NvdW50L0xvZ2luJykpO1xyXG5jb25zdCBGb3Jnb3RQYXNzd29yZCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3RlbXBsYXRlcy9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkJykpO1xyXG5jb25zdCBSZWdpc3RlciA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3RlbXBsYXRlcy9BY2NvdW50L1JlZ2lzdGVyJykpO1xyXG5jb25zdCBIb21lID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vdGVtcGxhdGVzL0hvbWUvSG9tZScpKTtcclxuXHJcbmNvbnN0IExPR0lOUyA9IFtcclxuICAgIHtcclxuICAgICAgICBcInBhdGhcIjogUEFHRVNfVVJMLmxvZ2luLnVybCxcclxuICAgICAgICBcImNvbXBvbmVudFwiOiBMb2dpblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInBhdGhcIjogUEFHRVNfVVJMLmZvcmdvdFBhc3N3b3JkLnVybCxcclxuICAgICAgICBcImNvbXBvbmVudFwiOiBGb3Jnb3RQYXNzd29yZFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInBhdGhcIjogUEFHRVNfVVJMLnJlZ2lzdGVyLnVybCxcclxuICAgICAgICBcImNvbXBvbmVudFwiOiBSZWdpc3RlclxyXG4gICAgfSxcclxuXVxyXG5cclxuY29uc3QgTUFJTiA9IFtcclxuICAgIHtcclxuICAgICAgICBcInBhdGhcIjogUEFHRVNfVVJMLmhvbWUudXJsLFxyXG4gICAgICAgIFwiY29tcG9uZW50XCI6IEhvbWVcclxuICAgIH0sXHJcbl1cclxuXHJcbmNvbnN0IGdldFBhdGhMaXN0ID0gKERBVEEpID0+IHtcclxuICAgIHZhciBsaXN0ID0gW11cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgREFUQS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChEQVRBW2ldKSB7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChEQVRBW2ldLnBhdGgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coeyBsaXN0IH0pO1xyXG4gICAgcmV0dXJuIGxpc3RcclxufVxyXG5cclxuZXhwb3J0IHsgTUFJTixMT0dJTlMsIGdldFBhdGhMaXN0IH1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImFhZjIwNzFkM2FmYjRmZTk5MTFiXCI7IH0iXSwic291cmNlUm9vdCI6IiJ9