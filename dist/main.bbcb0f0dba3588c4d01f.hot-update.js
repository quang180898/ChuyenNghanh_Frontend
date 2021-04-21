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
        _functions_Utils__WEBPACK_IMPORTED_MODULE_7__.TOKEN === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(MainPage, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Redirect, {
          to: "/register"
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
    path: (0,_routes__WEBPACK_IMPORTED_MODULE_5__.getPathList)(_routes__WEBPACK_IMPORTED_MODULE_5__.LOGINS)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(PrivateRoute, props);
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
/******/ 	__webpack_require__.h = function() { return "5549001edba5622d91f5"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi8uL3NyYy9BcHAvQXBwLmpzIiwid2VicGFjazovL3F1YW5seS10aHV2aWVuL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6WyJQcml2YXRlTG9naW5Sb3V0ZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsInJlc3QiLCJwcm9wcyIsIlByaXZhdGVSb3V0ZSIsIlRPS0VOIiwiQXBwIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsImdldFBhdGhMaXN0IiwiTE9HSU5TIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLE1BQWNDLFNBQWQsUUFBR0MsU0FBSDtBQUFBLE1BQTRCQyxJQUE1Qjs7QUFBQSxzQkFDdEIsaURBQUMsbURBQUQsOEVBQVdBLElBQVg7QUFBaUIsVUFBTSxFQUFFLGdCQUFDQyxLQUFEO0FBQUEsMEJBQ3JCLGlEQUFDLCtDQUFELE9BRHFCO0FBQUE7QUFBekIsS0FEc0I7QUFBQSxDQUExQjs7QUFNQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLE1BQWNKLFNBQWQsU0FBR0MsU0FBSDtBQUFBLE1BQTRCQyxJQUE1Qjs7QUFBQSxzQkFDakIsaURBQUMsbURBQUQsOEVBQVdBLElBQVg7QUFBaUIsVUFBTSxFQUFFLGdCQUFDQyxLQUFEO0FBQUEsYUFDckI7QUFDQUUsMkRBQUssS0FBSyxJQUFWLGdCQUNNLGlEQUFDLFFBQUQsT0FETixnQkFFTSxpREFBQyxzREFBRDtBQUFVLFlBQUUsRUFBQztBQUFiO0FBSmU7QUFBQTtBQUF6QixLQURpQjtBQUFBLENBQXJCOztBQVNBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDZCxNQUFNQyxLQUFLLEdBQUdDLCtDQUFjLEVBQTVCO0FBQ0Esc0JBQ0ksaURBQUMsaURBQUQ7QUFBVSxTQUFLLEVBQUVEO0FBQWpCLGtCQUNJLGlEQUFDLDJEQUFELHFCQUNJLGlEQUFDLG9EQUFELHFCQUNJLGlEQUFDLG1EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFFRSxvREFBVyxDQUFDQywyQ0FBRDtBQUE5QixrQkFDSSxpREFBQyxtREFBRDtBQUFPLFVBQU0sRUFBRSxnQkFBQVAsS0FBSztBQUFBLDBCQUFJLGlEQUFDLGlCQUFELEVBQXVCQSxLQUF2QixDQUFKO0FBQUE7QUFBcEIsSUFESixDQURKLGVBSUksaURBQUMsbURBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUVNLG9EQUFXLENBQUNDLDJDQUFEO0FBQTlCLGtCQUNJLGlEQUFDLG1EQUFEO0FBQU8sVUFBTSxFQUFFLGdCQUFBUCxLQUFLO0FBQUEsMEJBQUksaURBQUMsWUFBRCxFQUFrQkEsS0FBbEIsQ0FBSjtBQUFBO0FBQXBCLElBREosQ0FKSixDQURKLENBREosQ0FESjtBQWNILENBaEJEOztBQW1CQSwrREFBZUcsR0FBZixFOzs7Ozs7Ozs7O1VDMUNBLG9DQUFvQywrQkFBK0IsRSIsImZpbGUiOiJtYWluLmJiY2IwZjBkYmEzNTg4YzRkMDFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IGdldFBhdGhMaXN0LCBMT0dJTlMgfSBmcm9tICcuLi9yb3V0ZXMnO1xuaW1wb3J0IE1haW5Mb2dpbiBmcm9tICcuL01haW5Mb2dpbic7XG5pbXBvcnQgeyBUT0tFTiB9IGZyb20gJy4uL2Z1bmN0aW9ucy9VdGlscyc7XG5cbmNvbnN0IFByaXZhdGVMb2dpblJvdXRlID0gKHsgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnJlc3QgfSkgPT4gKFxuICAgIDxSb3V0ZSB7Li4ucmVzdH0gcmVuZGVyPXsocHJvcHMpID0+IChcbiAgICAgICAgPE1haW5Mb2dpbiAvPlxuICAgICl9IC8+XG4pXG5cbmNvbnN0IFByaXZhdGVSb3V0ZSA9ICh7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pID0+IChcbiAgICA8Um91dGUgey4uLnJlc3R9IHJlbmRlcj17KHByb3BzKSA9PiAoXG4gICAgICAgIC8vY2hlY2sgbuG6v3UgY2jGsGEgbG9naW4gdGjDrCBrbyDEkcaw4bujYyB2w6BvIG1haW5QYWdlXG4gICAgICAgIFRPS0VOID09PSBudWxsXG4gICAgICAgICAgICA/IDxNYWluUGFnZSAvPlxuICAgICAgICAgICAgOiA8UmVkaXJlY3QgdG89Jy9yZWdpc3RlcicgLz5cbiAgICApfSAvPlxuKVxuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgICAgICA8U3dpdGNoID5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2dldFBhdGhMaXN0KExPR0lOUyl9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSByZW5kZXI9e3Byb3BzID0+IDxQcml2YXRlTG9naW5Sb3V0ZSB7Li4ucHJvcHN9IC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17Z2V0UGF0aExpc3QoTE9HSU5TKX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHJlbmRlcj17cHJvcHMgPT4gPFByaXZhdGVSb3V0ZSB7Li4ucHJvcHN9IC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNTU0OTAwMWVkYmE1NjIyZDkxZjVcIjsgfSJdLCJzb3VyY2VSb290IjoiIn0=