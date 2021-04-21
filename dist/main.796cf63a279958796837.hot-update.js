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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./src/routes.js");
/* harmony import */ var _MainLogin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MainLogin */ "./src/App/MainLogin.js");







 // import { TOKEN } from '../functions/Utils';

var TOKEN = false;

var PrivateLoginRoute = function PrivateLoginRoute(_ref) {
  var Component = _ref.component,
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, rest, {
    render: function render(props) {
      return TOKEN === null // true
      ?
      /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_2__.createElement(_MainLogin__WEBPACK_IMPORTED_MODULE_6__.default, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Redirect, {
        to: "/"
      });
    }
  }));
};

var PrivateRoute = function PrivateRoute(_ref2) {
  var Component = _ref2.component,
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, ["component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, rest, {
    render: function render(props) {
      return (//check nếu chưa login thì ko được vào mainPage
        TOKEN ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(MainPage, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Redirect, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    exact: true,
    path: (0,_routes__WEBPACK_IMPORTED_MODULE_5__.getPathList)(_routes__WEBPACK_IMPORTED_MODULE_5__.LOGINS)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(PrivateLoginRoute, props);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    exact: true,
    path: (0,_routes__WEBPACK_IMPORTED_MODULE_5__.getPathList)(MAIN)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(PrivateRoute, props);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
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
/******/ 	__webpack_require__.h = function() { return "1f390c666f95372452ca"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi8uL3NyYy9BcHAvQXBwLmpzIiwid2VicGFjazovL3F1YW5seS10aHV2aWVuL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6WyJUT0tFTiIsIlByaXZhdGVMb2dpblJvdXRlIiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwicmVzdCIsInByb3BzIiwiUHJpdmF0ZVJvdXRlIiwiQXBwIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsImdldFBhdGhMaXN0IiwiTE9HSU5TIiwiTUFJTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBLElBQU1BLEtBQUssR0FBRyxLQUFkOztBQUVBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxNQUFjQyxTQUFkLFFBQUdDLFNBQUg7QUFBQSxNQUE0QkMsSUFBNUI7O0FBQUEsc0JBQ3RCLGlEQUFDLG1EQUFELDhFQUFXQSxJQUFYO0FBQWlCLFVBQU0sRUFBRSxnQkFBQ0MsS0FBRDtBQUFBLGFBQ3JCTCxLQUFLLEtBQUssSUFBVixDQUNBO0FBREE7QUFBQTtBQUVFLHVEQUFDLCtDQUFELE9BRkYsZ0JBR0UsaURBQUMsc0RBQUQ7QUFBVSxVQUFFLEVBQUM7QUFBYixRQUptQjtBQUFBO0FBQXpCLEtBRHNCO0FBQUEsQ0FBMUI7O0FBUUEsSUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFjSixTQUFkLFNBQUdDLFNBQUg7QUFBQSxNQUE0QkMsSUFBNUI7O0FBQUEsc0JBQ2pCLGlEQUFDLG1EQUFELDhFQUFXQSxJQUFYO0FBQWlCLFVBQU0sRUFBRSxnQkFBQ0MsS0FBRDtBQUFBLGFBQ3JCO0FBQ0FMLGFBQUssZ0JBQ0MsaURBQUMsUUFBRCxPQURELGdCQUVDLGlEQUFDLHNEQUFEO0FBQVUsWUFBRSxFQUFDO0FBQWI7QUFKZTtBQUFBO0FBQXpCLEtBRGlCO0FBQUEsQ0FBckI7O0FBU0EsSUFBTU8sR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNkLE1BQU1DLEtBQUssR0FBR0MsK0NBQWMsRUFBNUI7QUFDQSxzQkFDSSxpREFBQyxpREFBRDtBQUFVLFNBQUssRUFBRUQ7QUFBakIsa0JBQ0ksaURBQUMsMkRBQUQscUJBQ0ksaURBQUMsb0RBQUQscUJBQ0ksaURBQUMsbURBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUVFLG9EQUFXLENBQUNDLDJDQUFEO0FBQTlCLGtCQUNJLGlEQUFDLG1EQUFEO0FBQU8sVUFBTSxFQUFFLGdCQUFBTixLQUFLO0FBQUEsMEJBQUksaURBQUMsaUJBQUQsRUFBdUJBLEtBQXZCLENBQUo7QUFBQTtBQUFwQixJQURKLENBREosZUFJSSxpREFBQyxtREFBRDtBQUFPLFNBQUssTUFBWjtBQUFhLFFBQUksRUFBRUssb0RBQVcsQ0FBQ0UsSUFBRDtBQUE5QixrQkFDSSxpREFBQyxtREFBRDtBQUFPLFVBQU0sRUFBRSxnQkFBQVAsS0FBSztBQUFBLDBCQUFJLGlEQUFDLFlBQUQsRUFBa0JBLEtBQWxCLENBQUo7QUFBQTtBQUFwQixJQURKLENBSkosZUFPSSxpREFBQyxtREFBRDtBQUFPLFVBQU0sRUFBRSxnQkFBQUEsS0FBSztBQUFBLDBCQUFJLGlEQUFDLFlBQUQsRUFBa0JBLEtBQWxCLENBQUo7QUFBQTtBQUFwQixJQVBKLENBREosQ0FESixDQURKO0FBZUgsQ0FqQkQ7O0FBb0JBLCtEQUFlRSxHQUFmLEU7Ozs7Ozs7Ozs7VUM5Q0Esb0NBQW9DLCtCQUErQixFIiwiZmlsZSI6Im1haW4uNzk2Y2Y2M2EyNzk5NTg3OTY4MzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHsgZ2V0UGF0aExpc3QsIExPR0lOUyB9IGZyb20gJy4uL3JvdXRlcyc7XG5pbXBvcnQgTWFpbkxvZ2luIGZyb20gJy4vTWFpbkxvZ2luJztcbi8vIGltcG9ydCB7IFRPS0VOIH0gZnJvbSAnLi4vZnVuY3Rpb25zL1V0aWxzJztcbmNvbnN0IFRPS0VOID0gZmFsc2VcblxuY29uc3QgUHJpdmF0ZUxvZ2luUm91dGUgPSAoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPFJvdXRlIHsuLi5yZXN0fSByZW5kZXI9eyhwcm9wcykgPT4gKFxuICAgICAgICBUT0tFTiA9PT0gbnVsbFxuICAgICAgICAvLyB0cnVlXG4gICAgICAgID8gPE1haW5Mb2dpbiAvPlxuICAgICAgICA6IDxSZWRpcmVjdCB0bz0nLycgLz5cbiAgICApfSAvPlxuKVxuY29uc3QgUHJpdmF0ZVJvdXRlID0gKHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxSb3V0ZSB7Li4ucmVzdH0gcmVuZGVyPXsocHJvcHMpID0+IChcbiAgICAgICAgLy9jaGVjayBu4bq/dSBjaMawYSBsb2dpbiB0aMOsIGtvIMSRxrDhu6NjIHbDoG8gbWFpblBhZ2VcbiAgICAgICAgVE9LRU5cbiAgICAgICAgICAgID8gPE1haW5QYWdlIC8+XG4gICAgICAgICAgICA6IDxSZWRpcmVjdCB0bz0nL2xvZ2luJyAvPlxuICAgICl9IC8+XG4pXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgICAgIDxTd2l0Y2ggPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17Z2V0UGF0aExpc3QoTE9HSU5TKX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHJlbmRlcj17cHJvcHMgPT4gPFByaXZhdGVMb2dpblJvdXRlIHsuLi5wcm9wc30gLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtnZXRQYXRoTGlzdChNQUlOKX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHJlbmRlcj17cHJvcHMgPT4gPFByaXZhdGVSb3V0ZSB7Li4ucHJvcHN9IC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcmVuZGVyPXtwcm9wcyA9PiA8UHJpdmF0ZVJvdXRlIHsuLi5wcm9wc30gLz59IC8+XG4gICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICA8L1JvdXRlcj5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIxZjM5MGM2NjZmOTUzNzI0NTJjYVwiOyB9Il0sInNvdXJjZVJvb3QiOiIifQ==