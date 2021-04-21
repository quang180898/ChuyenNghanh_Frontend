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

var PrivateRoute = function PrivateRoute(_ref2) {
  var Component = _ref2.component,
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, ["component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, rest, {
    render: function render(props) {
      return (//check nếu chưa login thì ko được vào mainPage
        _functions_Utils__WEBPACK_IMPORTED_MODULE_7__.TOKEN ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(MainPage, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Redirect, {
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
/******/ 	__webpack_require__.h = function() { return "796cf63a279958796837"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi8uL3NyYy9BcHAvQXBwLmpzIiwid2VicGFjazovL3F1YW5seS10aHV2aWVuL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6WyJQcml2YXRlTG9naW5Sb3V0ZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsInJlc3QiLCJwcm9wcyIsIlRPS0VOIiwiUHJpdmF0ZVJvdXRlIiwiQXBwIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsImdldFBhdGhMaXN0IiwiTE9HSU5TIiwiTUFJTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxNQUFjQyxTQUFkLFFBQUdDLFNBQUg7QUFBQSxNQUE0QkMsSUFBNUI7O0FBQUEsc0JBQ3RCLGlEQUFDLG1EQUFELDhFQUFXQSxJQUFYO0FBQWlCLFVBQU0sRUFBRSxnQkFBQ0MsS0FBRDtBQUFBLGFBQ3JCQyxtREFBSyxLQUFLLElBQVYsQ0FDQTtBQURBO0FBQUE7QUFFRSx1REFBQywrQ0FBRCxPQUZGLGdCQUdFLGlEQUFDLHNEQUFEO0FBQVUsVUFBRSxFQUFDO0FBQWIsUUFKbUI7QUFBQTtBQUF6QixLQURzQjtBQUFBLENBQTFCOztBQVFBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsTUFBY0wsU0FBZCxTQUFHQyxTQUFIO0FBQUEsTUFBNEJDLElBQTVCOztBQUFBLHNCQUNqQixpREFBQyxtREFBRCw4RUFBV0EsSUFBWDtBQUFpQixVQUFNLEVBQUUsZ0JBQUNDLEtBQUQ7QUFBQSxhQUNyQjtBQUNBQywyREFBSyxnQkFDQyxpREFBQyxRQUFELE9BREQsZ0JBRUMsaURBQUMsc0RBQUQ7QUFBVSxZQUFFLEVBQUM7QUFBYjtBQUplO0FBQUE7QUFBekIsS0FEaUI7QUFBQSxDQUFyQjs7QUFTQSxJQUFNRSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQ2QsTUFBTUMsS0FBSyxHQUFHQywrQ0FBYyxFQUE1QjtBQUNBLHNCQUNJLGlEQUFDLGlEQUFEO0FBQVUsU0FBSyxFQUFFRDtBQUFqQixrQkFDSSxpREFBQywyREFBRCxxQkFDSSxpREFBQyxvREFBRCxxQkFDSSxpREFBQyxtREFBRDtBQUFPLFNBQUssTUFBWjtBQUFhLFFBQUksRUFBRUUsb0RBQVcsQ0FBQ0MsMkNBQUQ7QUFBOUIsa0JBQ0ksaURBQUMsbURBQUQ7QUFBTyxVQUFNLEVBQUUsZ0JBQUFQLEtBQUs7QUFBQSwwQkFBSSxpREFBQyxpQkFBRCxFQUF1QkEsS0FBdkIsQ0FBSjtBQUFBO0FBQXBCLElBREosQ0FESixlQUlJLGlEQUFDLG1EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFFTSxvREFBVyxDQUFDRSxJQUFEO0FBQTlCLGtCQUNJLGlEQUFDLG1EQUFEO0FBQU8sVUFBTSxFQUFFLGdCQUFBUixLQUFLO0FBQUEsMEJBQUksaURBQUMsWUFBRCxFQUFrQkEsS0FBbEIsQ0FBSjtBQUFBO0FBQXBCLElBREosQ0FKSixlQU9JLGlEQUFDLG1EQUFEO0FBQU8sVUFBTSxFQUFFLGdCQUFBQSxLQUFLO0FBQUEsMEJBQUksaURBQUMsWUFBRCxFQUFrQkEsS0FBbEIsQ0FBSjtBQUFBO0FBQXBCLElBUEosQ0FESixDQURKLENBREo7QUFlSCxDQWpCRDs7QUFvQkEsK0RBQWVHLEdBQWYsRTs7Ozs7Ozs7OztVQzdDQSxvQ0FBb0MsK0JBQStCLEUiLCJmaWxlIjoibWFpbi43YTc3OWQxNTU2MDcwOTgyMTkwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBnZXRQYXRoTGlzdCwgTE9HSU5TIH0gZnJvbSAnLi4vcm91dGVzJztcbmltcG9ydCBNYWluTG9naW4gZnJvbSAnLi9NYWluTG9naW4nO1xuaW1wb3J0IHsgVE9LRU4gfSBmcm9tICcuLi9mdW5jdGlvbnMvVXRpbHMnO1xuXG5jb25zdCBQcml2YXRlTG9naW5Sb3V0ZSA9ICh7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pID0+IChcbiAgICA8Um91dGUgey4uLnJlc3R9IHJlbmRlcj17KHByb3BzKSA9PiAoXG4gICAgICAgIFRPS0VOID09PSBudWxsXG4gICAgICAgIC8vIHRydWVcbiAgICAgICAgPyA8TWFpbkxvZ2luIC8+XG4gICAgICAgIDogPFJlZGlyZWN0IHRvPScvJyAvPlxuICAgICl9IC8+XG4pXG5jb25zdCBQcml2YXRlUm91dGUgPSAoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPFJvdXRlIHsuLi5yZXN0fSByZW5kZXI9eyhwcm9wcykgPT4gKFxuICAgICAgICAvL2NoZWNrIG7hur91IGNoxrBhIGxvZ2luIHRow6wga28gxJHGsOG7o2MgdsOgbyBtYWluUGFnZVxuICAgICAgICBUT0tFTlxuICAgICAgICAgICAgPyA8TWFpblBhZ2UgLz5cbiAgICAgICAgICAgIDogPFJlZGlyZWN0IHRvPScvbG9naW4nIC8+XG4gICAgKX0gLz5cbilcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICAgICAgPFN3aXRjaCA+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXtnZXRQYXRoTGlzdChMT0dJTlMpfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcmVuZGVyPXtwcm9wcyA9PiA8UHJpdmF0ZUxvZ2luUm91dGUgey4uLnByb3BzfSAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2dldFBhdGhMaXN0KE1BSU4pfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcmVuZGVyPXtwcm9wcyA9PiA8UHJpdmF0ZVJvdXRlIHsuLi5wcm9wc30gLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSByZW5kZXI9e3Byb3BzID0+IDxQcml2YXRlUm91dGUgey4uLnByb3BzfSAvPn0gLz5cbiAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjc5NmNmNjNhMjc5OTU4Nzk2ODM3XCI7IH0iXSwic291cmNlUm9vdCI6IiJ9