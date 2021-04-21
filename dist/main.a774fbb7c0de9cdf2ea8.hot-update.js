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
var DEFAULT_MAIN = [{
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
/******/ 	__webpack_require__.h = function() { return "dcba74061d40f6366499"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi8uL3NyYy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vcXVhbmx5LXRodXZpZW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIkxvZ2luIiwibGF6eSIsIkZvcmdvdFBhc3N3b3JkIiwiUmVnaXN0ZXIiLCJMT0dJTlMiLCJQQUdFU19VUkwiLCJERUZBVUxUX01BSU4iLCJFbGVtZW50cyIsImdldFBhdGhMaXN0IiwiREFUQSIsImxpc3QiLCJpIiwibGVuZ3RoIiwicHVzaCIsInBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxnQkFBR0MsMkNBQUksQ0FBQztBQUFBLFNBQU0sNlVBQU47QUFBQSxDQUFELENBQWxCO0FBQ0EsSUFBTUMsY0FBYyxnQkFBR0QsMkNBQUksQ0FBQztBQUFBLFNBQU0sMk5BQU47QUFBQSxDQUFELENBQTNCO0FBQ0EsSUFBTUUsUUFBUSxnQkFBR0YsMkNBQUksQ0FBQztBQUFBLFNBQU0sc1ZBQU47QUFBQSxDQUFELENBQXJCO0FBRUEsSUFBTUcsTUFBTSxHQUFHLENBQ1g7QUFDSSxVQUFRQyx5REFEWjtBQUVJLGVBQWFMO0FBRmpCLENBRFcsRUFLWDtBQUNJLFVBQVFLLGtFQURaO0FBRUksZUFBYUg7QUFGakIsQ0FMVyxFQVNYO0FBQ0ksVUFBUUcsNERBRFo7QUFFSSxlQUFhRjtBQUZqQixDQVRXLENBQWY7QUFlQSxJQUFNRyxZQUFZLEdBQUcsQ0FDakI7QUFDSSxVQUFRLFdBRFo7QUFFSSxlQUFhQztBQUZqQixDQURpQixDQUFyQjs7QUFPQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQVU7QUFDMUIsTUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixJQUFJLENBQUNHLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFFBQUlGLElBQUksQ0FBQ0UsQ0FBRCxDQUFSLEVBQWE7QUFDVEQsVUFBSSxDQUFDRyxJQUFMLENBQVVKLElBQUksQ0FBQ0UsQ0FBRCxDQUFKLENBQVFHLElBQWxCO0FBQ0g7QUFDSixHQU55QixDQU8xQjs7O0FBQ0EsU0FBT0osSUFBUDtBQUNILENBVEQ7Ozs7Ozs7Ozs7OztVQzdCQSxvQ0FBb0MsK0JBQStCLEUiLCJmaWxlIjoibWFpbi5hNzc0ZmJiN2MwZGU5Y2RmMmVhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGxhenkgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBBR0VTX1VSTCB9IGZyb20gJy4vY29udGFudCc7XHJcblxyXG5jb25zdCBMb2dpbiA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3RlbXBsYXRlcy9BY2NvdW50L0xvZ2luJykpO1xyXG5jb25zdCBGb3Jnb3RQYXNzd29yZCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3RlbXBsYXRlcy9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkJykpO1xyXG5jb25zdCBSZWdpc3RlciA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3RlbXBsYXRlcy9BY2NvdW50L1JlZ2lzdGVyJykpO1xyXG5cclxuY29uc3QgTE9HSU5TID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwicGF0aFwiOiBQQUdFU19VUkwubG9naW4udXJsLFxyXG4gICAgICAgIFwiY29tcG9uZW50XCI6IExvZ2luXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwicGF0aFwiOiBQQUdFU19VUkwuZm9yZ290UGFzc3dvcmQudXJsLFxyXG4gICAgICAgIFwiY29tcG9uZW50XCI6IEZvcmdvdFBhc3N3b3JkXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwicGF0aFwiOiBQQUdFU19VUkwucmVnaXN0ZXIudXJsLFxyXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFJlZ2lzdGVyXHJcbiAgICB9LFxyXG5dXHJcblxyXG5jb25zdCBERUZBVUxUX01BSU4gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJwYXRoXCI6ICcvZWxlbWVudHMnLFxyXG4gICAgICAgIFwiY29tcG9uZW50XCI6IEVsZW1lbnRzXHJcbiAgICB9LFxyXG5dXHJcblxyXG5jb25zdCBnZXRQYXRoTGlzdCA9IChEQVRBKSA9PiB7XHJcbiAgICB2YXIgbGlzdCA9IFtdXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IERBVEEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoREFUQVtpXSkge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goREFUQVtpXS5wYXRoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHsgbGlzdCB9KTtcclxuICAgIHJldHVybiBsaXN0XHJcbn1cclxuXHJcbmV4cG9ydCB7IExPR0lOUywgZ2V0UGF0aExpc3QgfVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiZGNiYTc0MDYxZDQwZjYzNjY0OTlcIjsgfSJdLCJzb3VyY2VSb290IjoiIn0=