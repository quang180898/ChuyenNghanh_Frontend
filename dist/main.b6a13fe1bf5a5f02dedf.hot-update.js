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
  "path": '/Home',
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
/******/ 	__webpack_require__.h = function() { return "ab90e75a612b1dc98174"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi8uL3NyYy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vcXVhbmx5LXRodXZpZW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIkxvZ2luIiwibGF6eSIsIkZvcmdvdFBhc3N3b3JkIiwiUmVnaXN0ZXIiLCJIb21lIiwiTE9HSU5TIiwiUEFHRVNfVVJMIiwiTUFJTiIsImdldFBhdGhMaXN0IiwiREFUQSIsImxpc3QiLCJpIiwibGVuZ3RoIiwicHVzaCIsInBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEtBQUssZ0JBQUdDLDJDQUFJLENBQUM7QUFBQSxTQUFNLDZVQUFOO0FBQUEsQ0FBRCxDQUFsQjtBQUNBLElBQU1DLGNBQWMsZ0JBQUdELDJDQUFJLENBQUM7QUFBQSxTQUFNLDJOQUFOO0FBQUEsQ0FBRCxDQUEzQjtBQUNBLElBQU1FLFFBQVEsZ0JBQUdGLDJDQUFJLENBQUM7QUFBQSxTQUFNLHNWQUFOO0FBQUEsQ0FBRCxDQUFyQjtBQUNBLElBQU1HLElBQUksZ0JBQUdILDJDQUFJLENBQUM7QUFBQSxTQUFNLG9MQUFOO0FBQUEsQ0FBRCxDQUFqQjtBQUVBLElBQU1JLE1BQU0sR0FBRyxDQUNYO0FBQ0ksVUFBUUMseURBRFo7QUFFSSxlQUFhTjtBQUZqQixDQURXLEVBS1g7QUFDSSxVQUFRTSxrRUFEWjtBQUVJLGVBQWFKO0FBRmpCLENBTFcsRUFTWDtBQUNJLFVBQVFJLDREQURaO0FBRUksZUFBYUg7QUFGakIsQ0FUVyxDQUFmO0FBZUEsSUFBTUksSUFBSSxHQUFHLENBQ1Q7QUFDSSxVQUFRLE9BRFo7QUFFSSxlQUFhSDtBQUZqQixDQURTLENBQWI7O0FBT0EsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQzFCLE1BQUlDLElBQUksR0FBRyxFQUFYOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsSUFBSSxDQUFDRyxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxRQUFJRixJQUFJLENBQUNFLENBQUQsQ0FBUixFQUFhO0FBQ1RELFVBQUksQ0FBQ0csSUFBTCxDQUFVSixJQUFJLENBQUNFLENBQUQsQ0FBSixDQUFRRyxJQUFsQjtBQUNIO0FBQ0osR0FOeUIsQ0FPMUI7OztBQUNBLFNBQU9KLElBQVA7QUFDSCxDQVREOzs7Ozs7Ozs7Ozs7VUM5QkEsb0NBQW9DLCtCQUErQixFIiwiZmlsZSI6Im1haW4uYjZhMTNmZTFiZjVhNWYwMmRlZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBsYXp5IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQQUdFU19VUkwgfSBmcm9tICcuL2NvbnRhbnQnO1xyXG5cclxuY29uc3QgTG9naW4gPSBsYXp5KCgpID0+IGltcG9ydCgnLi90ZW1wbGF0ZXMvQWNjb3VudC9Mb2dpbicpKTtcclxuY29uc3QgRm9yZ290UGFzc3dvcmQgPSBsYXp5KCgpID0+IGltcG9ydCgnLi90ZW1wbGF0ZXMvQWNjb3VudC9Gb3Jnb3RQYXNzd29yZCcpKTtcclxuY29uc3QgUmVnaXN0ZXIgPSBsYXp5KCgpID0+IGltcG9ydCgnLi90ZW1wbGF0ZXMvQWNjb3VudC9SZWdpc3RlcicpKTtcclxuY29uc3QgSG9tZSA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3RlbXBsYXRlcy9Ib21lL0hvbWUnKSk7XHJcblxyXG5jb25zdCBMT0dJTlMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJwYXRoXCI6IFBBR0VTX1VSTC5sb2dpbi51cmwsXHJcbiAgICAgICAgXCJjb21wb25lbnRcIjogTG9naW5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJwYXRoXCI6IFBBR0VTX1VSTC5mb3Jnb3RQYXNzd29yZC51cmwsXHJcbiAgICAgICAgXCJjb21wb25lbnRcIjogRm9yZ290UGFzc3dvcmRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJwYXRoXCI6IFBBR0VTX1VSTC5yZWdpc3Rlci51cmwsXHJcbiAgICAgICAgXCJjb21wb25lbnRcIjogUmVnaXN0ZXJcclxuICAgIH0sXHJcbl1cclxuXHJcbmNvbnN0IE1BSU4gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJwYXRoXCI6ICcvSG9tZScsXHJcbiAgICAgICAgXCJjb21wb25lbnRcIjogSG9tZVxyXG4gICAgfSxcclxuXVxyXG5cclxuY29uc3QgZ2V0UGF0aExpc3QgPSAoREFUQSkgPT4ge1xyXG4gICAgdmFyIGxpc3QgPSBbXVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBEQVRBLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKERBVEFbaV0pIHtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKERBVEFbaV0ucGF0aClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyh7IGxpc3QgfSk7XHJcbiAgICByZXR1cm4gbGlzdFxyXG59XHJcblxyXG5leHBvcnQgeyBNQUlOLExPR0lOUywgZ2V0UGF0aExpc3QgfVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiYWI5MGU3NWE2MTJiMWRjOTgxNzRcIjsgfSJdLCJzb3VyY2VSb290IjoiIn0=