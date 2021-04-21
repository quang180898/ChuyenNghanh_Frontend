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
/* harmony import */ var _MainPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MainPage */ "./src/App/MainPage.js");








 // import { TOKEN } from '../functions/Utils';

var TOKEN = true;

var PrivateLoginRoute = function PrivateLoginRoute(_ref) {
  var Component = _ref.component,
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, rest, {
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_MainLogin__WEBPACK_IMPORTED_MODULE_6__.default, null);
    }
  }));
};

var PrivateRoute = function PrivateRoute(_ref2) {
  var Component = _ref2.component,
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, ["component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, rest, {
    render: function render(props) {
      return (//check nếu chưa login thì ko được vào mainPage
        TOKEN ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_MainPage__WEBPACK_IMPORTED_MODULE_7__.default, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Redirect, {
          to: "/login"
        })
      );
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    exact: true,
    path: (0,_routes__WEBPACK_IMPORTED_MODULE_5__.getPathList)(MAIN)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(PrivateRoute, props);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(PrivateRoute, props);
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
/******/ 	__webpack_require__.h = function() { return "0d747a9fdc9ce911068c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi8uL3NyYy9BcHAvQXBwLmpzIiwid2VicGFjazovL3F1YW5seS10aHV2aWVuL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6WyJUT0tFTiIsIlByaXZhdGVMb2dpblJvdXRlIiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwicmVzdCIsInByb3BzIiwiUHJpdmF0ZVJvdXRlIiwiQXBwIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsImdldFBhdGhMaXN0IiwiTE9HSU5TIiwiTUFJTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBLElBQU1BLEtBQUssR0FBRyxJQUFkOztBQUVBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxNQUFjQyxTQUFkLFFBQUdDLFNBQUg7QUFBQSxNQUE0QkMsSUFBNUI7O0FBQUEsc0JBQ3RCLGlEQUFDLG1EQUFELDhFQUFXQSxJQUFYO0FBQWlCLFVBQU0sRUFBRSxnQkFBQ0MsS0FBRDtBQUFBLDBCQUNyQixpREFBQywrQ0FBRCxPQURxQjtBQUFBO0FBQXpCLEtBRHNCO0FBQUEsQ0FBMUI7O0FBS0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFjSixTQUFkLFNBQUdDLFNBQUg7QUFBQSxNQUE0QkMsSUFBNUI7O0FBQUEsc0JBQ2pCLGlEQUFDLG1EQUFELDhFQUFXQSxJQUFYO0FBQWlCLFVBQU0sRUFBRSxnQkFBQ0MsS0FBRDtBQUFBLGFBQ3JCO0FBQ0FMLGFBQUssZ0JBQ0MsaURBQUMsOENBQUQsT0FERCxnQkFFQyxpREFBQyxzREFBRDtBQUFVLFlBQUUsRUFBQztBQUFiO0FBSmU7QUFBQTtBQUF6QixLQURpQjtBQUFBLENBQXJCOztBQVNBLElBQU1PLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDZCxNQUFNQyxLQUFLLEdBQUdDLCtDQUFjLEVBQTVCO0FBQ0Esc0JBQ0ksaURBQUMsaURBQUQ7QUFBVSxTQUFLLEVBQUVEO0FBQWpCLGtCQUNJLGlEQUFDLDJEQUFELHFCQUNJLGlEQUFDLG9EQUFELHFCQUNJLGlEQUFDLG1EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFFRSxvREFBVyxDQUFDQywyQ0FBRDtBQUE5QixrQkFDSSxpREFBQyxtREFBRDtBQUFPLFVBQU0sRUFBRSxnQkFBQU4sS0FBSztBQUFBLDBCQUFJLGlEQUFDLGlCQUFELEVBQXVCQSxLQUF2QixDQUFKO0FBQUE7QUFBcEIsSUFESixDQURKLGVBSUksaURBQUMsbURBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUVLLG9EQUFXLENBQUNFLElBQUQ7QUFBOUIsa0JBQ0ksaURBQUMsbURBQUQ7QUFBTyxVQUFNLEVBQUUsZ0JBQUFQLEtBQUs7QUFBQSwwQkFBSSxpREFBQyxZQUFELEVBQWtCQSxLQUFsQixDQUFKO0FBQUE7QUFBcEIsSUFESixDQUpKLGVBT0ksaURBQUMsbURBQUQ7QUFBTyxVQUFNLEVBQUUsZ0JBQUFBLEtBQUs7QUFBQSwwQkFBSSxpREFBQyxZQUFELEVBQWtCQSxLQUFsQixDQUFKO0FBQUE7QUFBcEIsSUFQSixDQURKLENBREosQ0FESjtBQWVILENBakJEOztBQW9CQSwrREFBZUUsR0FBZixFOzs7Ozs7Ozs7O1VDNUNBLG9DQUFvQywrQkFBK0IsRSIsImZpbGUiOiJtYWluLjYwOWY2YWU1ZDZkMzFiMTE1MmNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IGdldFBhdGhMaXN0LCBMT0dJTlMgfSBmcm9tICcuLi9yb3V0ZXMnO1xuaW1wb3J0IE1haW5Mb2dpbiBmcm9tICcuL01haW5Mb2dpbic7XG5pbXBvcnQgTWFpblBhZ2UgZnJvbSBcIi4vTWFpblBhZ2VcIjtcbi8vIGltcG9ydCB7IFRPS0VOIH0gZnJvbSAnLi4vZnVuY3Rpb25zL1V0aWxzJztcbmNvbnN0IFRPS0VOID0gdHJ1ZVxuXG5jb25zdCBQcml2YXRlTG9naW5Sb3V0ZSA9ICh7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pID0+IChcbiAgICA8Um91dGUgey4uLnJlc3R9IHJlbmRlcj17KHByb3BzKSA9PiAoXG4gICAgICAgIDxNYWluTG9naW4gLz5cbiAgICApfSAvPlxuKVxuY29uc3QgUHJpdmF0ZVJvdXRlID0gKHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxSb3V0ZSB7Li4ucmVzdH0gcmVuZGVyPXsocHJvcHMpID0+IChcbiAgICAgICAgLy9jaGVjayBu4bq/dSBjaMawYSBsb2dpbiB0aMOsIGtvIMSRxrDhu6NjIHbDoG8gbWFpblBhZ2VcbiAgICAgICAgVE9LRU5cbiAgICAgICAgICAgID8gPE1haW5QYWdlIC8+XG4gICAgICAgICAgICA6IDxSZWRpcmVjdCB0bz0nL2xvZ2luJyAvPlxuICAgICl9IC8+XG4pXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgICAgIDxTd2l0Y2ggPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17Z2V0UGF0aExpc3QoTE9HSU5TKX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHJlbmRlcj17cHJvcHMgPT4gPFByaXZhdGVMb2dpblJvdXRlIHsuLi5wcm9wc30gLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtnZXRQYXRoTGlzdChNQUlOKX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHJlbmRlcj17cHJvcHMgPT4gPFByaXZhdGVSb3V0ZSB7Li4ucHJvcHN9IC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcmVuZGVyPXtwcm9wcyA9PiA8UHJpdmF0ZVJvdXRlIHsuLi5wcm9wc30gLz59IC8+XG4gICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICA8L1JvdXRlcj5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIwZDc0N2E5ZmRjOWNlOTExMDY4Y1wiOyB9Il0sInNvdXJjZVJvb3QiOiIifQ==