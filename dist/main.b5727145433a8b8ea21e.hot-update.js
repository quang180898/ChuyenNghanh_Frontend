self["webpackHotUpdatequanly_thuvien"]("main",{

/***/ "./src/App/App.js":
/*!************************!*\
  !*** ./src/App/App.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./src/routes.js");
/* harmony import */ var _MainLogin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MainLogin */ "./src/App/MainLogin.js");
/* harmony import */ var _functions_Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../functions/Utils */ "./src/functions/Utils.js");










var PrivateLoginRoute = function PrivateLoginRoute(_ref) {
  var Component = _ref.component,
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, rest, {
    render: function render(props) {
      return _functions_Utils__WEBPACK_IMPORTED_MODULE_7__.TOKEN === null // true
      ?
      /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_2__.createElement(_MainLogin__WEBPACK_IMPORTED_MODULE_6__.default, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Redirect, {
        to: "/"
      });
    }
  }));
};

var App = function App() {
  var store = (0,_store__WEBPACK_IMPORTED_MODULE_4__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    exact: true,
    path: (0,_routes__WEBPACK_IMPORTED_MODULE_5__.getPathList)(_routes__WEBPACK_IMPORTED_MODULE_5__.LOGINS)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(PrivateLoginRoute, props);
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "a774fbb7c0de9cdf2ea8"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi8uL3NyYy9BcHAvQXBwLmpzIiwid2VicGFjazovL3F1YW5seS10aHV2aWVuL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6WyJQcml2YXRlTG9naW5Sb3V0ZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsInJlc3QiLCJwcm9wcyIsIlRPS0VOIiwiQXBwIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsImdldFBhdGhMaXN0IiwiTE9HSU5TIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLE1BQWNDLFNBQWQsUUFBR0MsU0FBSDtBQUFBLE1BQTRCQyxJQUE1Qjs7QUFBQSxzQkFDdEIsaURBQUMsbURBQUQsOEVBQVdBLElBQVg7QUFBaUIsVUFBTSxFQUFFLGdCQUFDQyxLQUFEO0FBQUEsYUFDckJDLG1EQUFLLEtBQUssSUFBVixDQUNBO0FBREE7QUFBQTtBQUVFLHVEQUFDLCtDQUFELE9BRkYsZ0JBR0UsaURBQUMsc0RBQUQ7QUFBVSxVQUFFLEVBQUM7QUFBYixRQUptQjtBQUFBO0FBQXpCLEtBRHNCO0FBQUEsQ0FBMUI7O0FBU0EsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNkLE1BQU1DLEtBQUssR0FBR0MsK0NBQWMsRUFBNUI7QUFDQSxzQkFDSSxpREFBQyxpREFBRDtBQUFVLFNBQUssRUFBRUQ7QUFBakIsa0JBQ0ksaURBQUMsMkRBQUQscUJBQ0ksaURBQUMsb0RBQUQscUJBQ0ksaURBQUMsbURBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUVFLG9EQUFXLENBQUNDLDJDQUFEO0FBQTlCLGtCQUNJLGlEQUFDLG1EQUFEO0FBQU8sVUFBTSxFQUFFLGdCQUFBTixLQUFLO0FBQUEsMEJBQUksaURBQUMsaUJBQUQsRUFBdUJBLEtBQXZCLENBQUo7QUFBQTtBQUFwQixJQURKLENBREosQ0FESixDQURKLENBREo7QUFXSCxDQWJEOztBQWdCQSwrREFBZUUsR0FBZixFOzs7Ozs7Ozs7O1VDakNBLG9DQUFvQywrQkFBK0IsRSIsImZpbGUiOiJtYWluLmI1NzI3MTQ1NDMzYThiOGVhMjFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IGdldFBhdGhMaXN0LCBMT0dJTlMgfSBmcm9tICcuLi9yb3V0ZXMnO1xuaW1wb3J0IE1haW5Mb2dpbiBmcm9tICcuL01haW5Mb2dpbic7XG5pbXBvcnQgeyBUT0tFTiB9IGZyb20gJy4uL2Z1bmN0aW9ucy9VdGlscyc7XG5cbmNvbnN0IFByaXZhdGVMb2dpblJvdXRlID0gKHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxSb3V0ZSB7Li4ucmVzdH0gcmVuZGVyPXsocHJvcHMpID0+IChcbiAgICAgICAgVE9LRU4gPT09IG51bGxcbiAgICAgICAgLy8gdHJ1ZVxuICAgICAgICA/IDxNYWluTG9naW4gLz5cbiAgICAgICAgOiA8UmVkaXJlY3QgdG89Jy8nIC8+XG4gICAgKX0gLz5cbilcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICAgICAgPFN3aXRjaCA+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtnZXRQYXRoTGlzdChMT0dJTlMpfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcmVuZGVyPXtwcm9wcyA9PiA8UHJpdmF0ZUxvZ2luUm91dGUgey4uLnByb3BzfSAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImE3NzRmYmI3YzBkZTljZGYyZWE4XCI7IH0iXSwic291cmNlUm9vdCI6IiJ9