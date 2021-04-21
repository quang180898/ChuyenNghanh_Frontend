self["webpackHotUpdatequanly_thuvien"]("main",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _readOnlyError; }
/* harmony export */ });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./src/App/App.js":
/*!************************!*\
  !*** ./src/App/App.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../routes */ "./src/routes.js");
/* harmony import */ var _MainLogin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MainLogin */ "./src/App/MainLogin.js");








 // import { TOKEN } from '../functions/Utils';

var TOKEN = false;

var PrivateLoginRoute = function PrivateLoginRoute(_ref) {
  var Component = _ref.component,
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, rest, {
    render: function render(props) {
      return TOKEN === null // true
      ? ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_MainLogin__WEBPACK_IMPORTED_MODULE_7__.default, null), TOKEN = ((0,_babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_2__.default)("TOKEN"), TRUE)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Redirect, {
        to: "/"
      });
    }
  }));
};

var PrivateRoute = function PrivateRoute(_ref2) {
  var Component = _ref2.component,
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, ["component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, rest, {
    render: function render(props) {
      return (//check nếu chưa login thì ko được vào mainPage
        TOKEN ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(MainPage, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Redirect, {
          to: "/login"
        })
      );
    }
  }));
};

var App = function App() {
  var store = (0,_store__WEBPACK_IMPORTED_MODULE_5__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    exact: true,
    path: (0,_routes__WEBPACK_IMPORTED_MODULE_6__.getPathList)(_routes__WEBPACK_IMPORTED_MODULE_6__.LOGINS)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(PrivateLoginRoute, props);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    exact: true,
    path: (0,_routes__WEBPACK_IMPORTED_MODULE_6__.getPathList)(MAIN)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(PrivateRoute, props);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(PrivateRoute, props);
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "1165a5c9e8edef78b117"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9yZWFkT25seUVycm9yLmpzIiwid2VicGFjazovL3F1YW5seS10aHV2aWVuLy4vc3JjL0FwcC9BcHAuanMiLCJ3ZWJwYWNrOi8vcXVhbmx5LXRodXZpZW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIlRPS0VOIiwiUHJpdmF0ZUxvZ2luUm91dGUiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJyZXN0IiwicHJvcHMiLCJUUlVFIiwiUHJpdmF0ZVJvdXRlIiwiQXBwIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsImdldFBhdGhMaXN0IiwiTE9HSU5TIiwiTUFJTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBLElBQU1BLEtBQUssR0FBRyxLQUFkOztBQUVBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxNQUFjQyxTQUFkLFFBQUdDLFNBQUg7QUFBQSxNQUE0QkMsSUFBNUI7O0FBQUEsc0JBQ3RCLGlEQUFDLG1EQUFELDhFQUFXQSxJQUFYO0FBQWlCLFVBQU0sRUFBRSxnQkFBQ0MsS0FBRDtBQUFBLGFBQ3JCTCxLQUFLLEtBQUssSUFBVixDQUNBO0FBREEsU0FFRywrREFBQywrQ0FBRCxTQUFlQSxLQUFLLDRGQUFHTSxJQUFILENBRnZCLGlCQUdFLGlEQUFDLHNEQUFEO0FBQVUsVUFBRSxFQUFDO0FBQWIsUUFKbUI7QUFBQTtBQUF6QixLQURzQjtBQUFBLENBQTFCOztBQVFBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsTUFBY0wsU0FBZCxTQUFHQyxTQUFIO0FBQUEsTUFBNEJDLElBQTVCOztBQUFBLHNCQUNqQixpREFBQyxtREFBRCw4RUFBV0EsSUFBWDtBQUFpQixVQUFNLEVBQUUsZ0JBQUNDLEtBQUQ7QUFBQSxhQUNyQjtBQUNBTCxhQUFLLGdCQUNDLGlEQUFDLFFBQUQsT0FERCxnQkFFQyxpREFBQyxzREFBRDtBQUFVLFlBQUUsRUFBQztBQUFiO0FBSmU7QUFBQTtBQUF6QixLQURpQjtBQUFBLENBQXJCOztBQVNBLElBQU1RLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDZCxNQUFNQyxLQUFLLEdBQUdDLCtDQUFjLEVBQTVCO0FBQ0Esc0JBQ0ksaURBQUMsaURBQUQ7QUFBVSxTQUFLLEVBQUVEO0FBQWpCLGtCQUNJLGlEQUFDLDJEQUFELHFCQUNJLGlEQUFDLG9EQUFELHFCQUNJLGlEQUFDLG1EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFFRSxvREFBVyxDQUFDQywyQ0FBRDtBQUE5QixrQkFDSSxpREFBQyxtREFBRDtBQUFPLFVBQU0sRUFBRSxnQkFBQVAsS0FBSztBQUFBLDBCQUFJLGlEQUFDLGlCQUFELEVBQXVCQSxLQUF2QixDQUFKO0FBQUE7QUFBcEIsSUFESixDQURKLGVBSUksaURBQUMsbURBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUVNLG9EQUFXLENBQUNFLElBQUQ7QUFBOUIsa0JBQ0ksaURBQUMsbURBQUQ7QUFBTyxVQUFNLEVBQUUsZ0JBQUFSLEtBQUs7QUFBQSwwQkFBSSxpREFBQyxZQUFELEVBQWtCQSxLQUFsQixDQUFKO0FBQUE7QUFBcEIsSUFESixDQUpKLGVBT0ksaURBQUMsbURBQUQ7QUFBTyxVQUFNLEVBQUUsZ0JBQUFBLEtBQUs7QUFBQSwwQkFBSSxpREFBQyxZQUFELEVBQWtCQSxLQUFsQixDQUFKO0FBQUE7QUFBcEIsSUFQSixDQURKLENBREosQ0FESjtBQWVILENBakJEOztBQW9CQSwrREFBZUcsR0FBZixFOzs7Ozs7Ozs7O1VDOUNBLG9DQUFvQywrQkFBK0IsRSIsImZpbGUiOiJtYWluLjFmMzkwYzY2NmY5NTM3MjQ1MmNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVhZE9ubHlFcnJvcihuYW1lKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIHJlYWQtb25seVwiKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IGdldFBhdGhMaXN0LCBMT0dJTlMgfSBmcm9tICcuLi9yb3V0ZXMnO1xuaW1wb3J0IE1haW5Mb2dpbiBmcm9tICcuL01haW5Mb2dpbic7XG4vLyBpbXBvcnQgeyBUT0tFTiB9IGZyb20gJy4uL2Z1bmN0aW9ucy9VdGlscyc7XG5jb25zdCBUT0tFTiA9IGZhbHNlXG5cbmNvbnN0IFByaXZhdGVMb2dpblJvdXRlID0gKHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxSb3V0ZSB7Li4ucmVzdH0gcmVuZGVyPXsocHJvcHMpID0+IChcbiAgICAgICAgVE9LRU4gPT09IG51bGxcbiAgICAgICAgLy8gdHJ1ZVxuICAgICAgICA/ICg8TWFpbkxvZ2luIC8+LCBUT0tFTiA9IFRSVUUpXG4gICAgICAgIDogPFJlZGlyZWN0IHRvPScvJyAvPlxuICAgICl9IC8+XG4pXG5jb25zdCBQcml2YXRlUm91dGUgPSAoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPFJvdXRlIHsuLi5yZXN0fSByZW5kZXI9eyhwcm9wcykgPT4gKFxuICAgICAgICAvL2NoZWNrIG7hur91IGNoxrBhIGxvZ2luIHRow6wga28gxJHGsOG7o2MgdsOgbyBtYWluUGFnZVxuICAgICAgICBUT0tFTlxuICAgICAgICAgICAgPyA8TWFpblBhZ2UgLz5cbiAgICAgICAgICAgIDogPFJlZGlyZWN0IHRvPScvbG9naW4nIC8+XG4gICAgKX0gLz5cbilcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICAgICAgPFN3aXRjaCA+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtnZXRQYXRoTGlzdChMT0dJTlMpfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcmVuZGVyPXtwcm9wcyA9PiA8UHJpdmF0ZUxvZ2luUm91dGUgey4uLnByb3BzfSAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2dldFBhdGhMaXN0KE1BSU4pfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcmVuZGVyPXtwcm9wcyA9PiA8UHJpdmF0ZVJvdXRlIHsuLi5wcm9wc30gLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSByZW5kZXI9e3Byb3BzID0+IDxQcml2YXRlUm91dGUgey4uLnByb3BzfSAvPn0gLz5cbiAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjExNjVhNWM5ZThlZGVmNzhiMTE3XCI7IH0iXSwic291cmNlUm9vdCI6IiJ9