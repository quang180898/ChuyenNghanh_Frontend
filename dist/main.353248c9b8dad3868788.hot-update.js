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
/* harmony import */ var _babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../routes */ "./src/routes.js");
/* harmony import */ var _MainLogin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MainLogin */ "./src/App/MainLogin.js");
/* harmony import */ var _MainPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MainPage */ "./src/App/MainPage.js");
/* harmony import */ var _MainPage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_MainPage__WEBPACK_IMPORTED_MODULE_8__);









 // import { TOKEN } from '../functions/Utils';

var TOKEN = false;

var PrivateLoginRoute = function PrivateLoginRoute(_ref) {
  var Component = _ref.component,
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, rest, {
    render: function render(props) {
      return TOKEN === null // true
      ? ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_MainLogin__WEBPACK_IMPORTED_MODULE_7__.default, null), TOKEN = ((0,_babel_runtime_helpers_readOnlyError__WEBPACK_IMPORTED_MODULE_2__.default)("TOKEN"), TRUE)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Redirect, {
        to: "/"
      });
    }
  }));
};

var PrivateRoute = function PrivateRoute(_ref2) {
  var Component = _ref2.component,
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, ["component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, rest, {
    render: function render(props) {
      return (//check nếu chưa login thì ko được vào mainPage
        TOKEN ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((_MainPage__WEBPACK_IMPORTED_MODULE_8___default()), null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Redirect, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    exact: true,
    path: (0,_routes__WEBPACK_IMPORTED_MODULE_6__.getPathList)(_routes__WEBPACK_IMPORTED_MODULE_6__.LOGINS)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(PrivateLoginRoute, props);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    exact: true,
    path: (0,_routes__WEBPACK_IMPORTED_MODULE_6__.getPathList)(MAIN)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(PrivateRoute, props);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(PrivateRoute, props);
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/App/MainPage.js":
/*!*****************************!*\
  !*** ./src/App/MainPage.js ***!
  \*****************************/
/***/ (function() {



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "cabc3038a76cf0dc2136"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi8uL3NyYy9BcHAvQXBwLmpzIiwid2VicGFjazovL3F1YW5seS10aHV2aWVuL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6WyJUT0tFTiIsIlByaXZhdGVMb2dpblJvdXRlIiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwicmVzdCIsInByb3BzIiwiVFJVRSIsIlByaXZhdGVSb3V0ZSIsIkFwcCIsInN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJnZXRQYXRoTGlzdCIsIkxPR0lOUyIsIk1BSU4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsS0FBZDs7QUFFQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsTUFBY0MsU0FBZCxRQUFHQyxTQUFIO0FBQUEsTUFBNEJDLElBQTVCOztBQUFBLHNCQUN0QixpREFBQyxtREFBRCw4RUFBV0EsSUFBWDtBQUFpQixVQUFNLEVBQUUsZ0JBQUNDLEtBQUQ7QUFBQSxhQUNyQkwsS0FBSyxLQUFLLElBQVYsQ0FDQTtBQURBLFNBRUcsK0RBQUMsK0NBQUQsU0FBZUEsS0FBSyw0RkFBR00sSUFBSCxDQUZ2QixpQkFHRSxpREFBQyxzREFBRDtBQUFVLFVBQUUsRUFBQztBQUFiLFFBSm1CO0FBQUE7QUFBekIsS0FEc0I7QUFBQSxDQUExQjs7QUFRQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLE1BQWNMLFNBQWQsU0FBR0MsU0FBSDtBQUFBLE1BQTRCQyxJQUE1Qjs7QUFBQSxzQkFDakIsaURBQUMsbURBQUQsOEVBQVdBLElBQVg7QUFBaUIsVUFBTSxFQUFFLGdCQUFDQyxLQUFEO0FBQUEsYUFDckI7QUFDQUwsYUFBSyxnQkFDQyxpREFBQyxrREFBRCxPQURELGdCQUVDLGlEQUFDLHNEQUFEO0FBQVUsWUFBRSxFQUFDO0FBQWI7QUFKZTtBQUFBO0FBQXpCLEtBRGlCO0FBQUEsQ0FBckI7O0FBU0EsSUFBTVEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNkLE1BQU1DLEtBQUssR0FBR0MsK0NBQWMsRUFBNUI7QUFDQSxzQkFDSSxpREFBQyxpREFBRDtBQUFVLFNBQUssRUFBRUQ7QUFBakIsa0JBQ0ksaURBQUMsNERBQUQscUJBQ0ksaURBQUMsb0RBQUQscUJBQ0ksaURBQUMsbURBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUVFLG9EQUFXLENBQUNDLDJDQUFEO0FBQTlCLGtCQUNJLGlEQUFDLG1EQUFEO0FBQU8sVUFBTSxFQUFFLGdCQUFBUCxLQUFLO0FBQUEsMEJBQUksaURBQUMsaUJBQUQsRUFBdUJBLEtBQXZCLENBQUo7QUFBQTtBQUFwQixJQURKLENBREosZUFJSSxpREFBQyxtREFBRDtBQUFPLFNBQUssTUFBWjtBQUFhLFFBQUksRUFBRU0sb0RBQVcsQ0FBQ0UsSUFBRDtBQUE5QixrQkFDSSxpREFBQyxtREFBRDtBQUFPLFVBQU0sRUFBRSxnQkFBQVIsS0FBSztBQUFBLDBCQUFJLGlEQUFDLFlBQUQsRUFBa0JBLEtBQWxCLENBQUo7QUFBQTtBQUFwQixJQURKLENBSkosZUFPSSxpREFBQyxtREFBRDtBQUFPLFVBQU0sRUFBRSxnQkFBQUEsS0FBSztBQUFBLDBCQUFJLGlEQUFDLFlBQUQsRUFBa0JBLEtBQWxCLENBQUo7QUFBQTtBQUFwQixJQVBKLENBREosQ0FESixDQURKO0FBZUgsQ0FqQkQ7O0FBb0JBLCtEQUFlRyxHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0NBLG9DQUFvQywrQkFBK0IsRSIsImZpbGUiOiJtYWluLjM1MzI0OGM5YjhkYWQzODY4Nzg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IGdldFBhdGhMaXN0LCBMT0dJTlMgfSBmcm9tICcuLi9yb3V0ZXMnO1xuaW1wb3J0IE1haW5Mb2dpbiBmcm9tICcuL01haW5Mb2dpbic7XG5pbXBvcnQgTWFpblBhZ2UgZnJvbSBcIi4vTWFpblBhZ2VcIjtcbi8vIGltcG9ydCB7IFRPS0VOIH0gZnJvbSAnLi4vZnVuY3Rpb25zL1V0aWxzJztcbmNvbnN0IFRPS0VOID0gZmFsc2VcblxuY29uc3QgUHJpdmF0ZUxvZ2luUm91dGUgPSAoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPFJvdXRlIHsuLi5yZXN0fSByZW5kZXI9eyhwcm9wcykgPT4gKFxuICAgICAgICBUT0tFTiA9PT0gbnVsbFxuICAgICAgICAvLyB0cnVlXG4gICAgICAgID8gKDxNYWluTG9naW4gLz4sIFRPS0VOID0gVFJVRSlcbiAgICAgICAgOiA8UmVkaXJlY3QgdG89Jy8nIC8+XG4gICAgKX0gLz5cbilcbmNvbnN0IFByaXZhdGVSb3V0ZSA9ICh7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pID0+IChcbiAgICA8Um91dGUgey4uLnJlc3R9IHJlbmRlcj17KHByb3BzKSA9PiAoXG4gICAgICAgIC8vY2hlY2sgbuG6v3UgY2jGsGEgbG9naW4gdGjDrCBrbyDEkcaw4bujYyB2w6BvIG1haW5QYWdlXG4gICAgICAgIFRPS0VOXG4gICAgICAgICAgICA/IDxNYWluUGFnZSAvPlxuICAgICAgICAgICAgOiA8UmVkaXJlY3QgdG89Jy9sb2dpbicgLz5cbiAgICApfSAvPlxuKVxuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgICAgICA8U3dpdGNoID5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2dldFBhdGhMaXN0KExPR0lOUyl9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSByZW5kZXI9e3Byb3BzID0+IDxQcml2YXRlTG9naW5Sb3V0ZSB7Li4ucHJvcHN9IC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17Z2V0UGF0aExpc3QoTUFJTil9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSByZW5kZXI9e3Byb3BzID0+IDxQcml2YXRlUm91dGUgey4uLnByb3BzfSAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHJlbmRlcj17cHJvcHMgPT4gPFByaXZhdGVSb3V0ZSB7Li4ucHJvcHN9IC8+fSAvPlxuICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiY2FiYzMwMzhhNzZjZjBkYzIxMzZcIjsgfSJdLCJzb3VyY2VSb290IjoiIn0=