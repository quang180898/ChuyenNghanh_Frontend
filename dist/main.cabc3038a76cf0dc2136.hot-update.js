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
        TOKEN ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_MainPage__WEBPACK_IMPORTED_MODULE_8__.default, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Redirect, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/withTranslation.js");
/* harmony import */ var _ContainerLogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContainerLogin */ "./src/App/ContainerLogin.js");


 //components

var MainLogin = function MainLogin(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ContainerLogin__WEBPACK_IMPORTED_MODULE_1__.default, null);
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.withTranslation)()(MainLogin));

/***/ }),

/***/ "./node_modules/react-i18next/dist/es/useTranslation.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/useTranslation.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTranslation": function() { return /* binding */ useTranslation; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/es/context.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/es/utils.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function useTranslation(ns) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var i18nFromProps = props.i18n;

  var _ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.I18nContext) || {},
      i18nFromContext = _ref.i18n,
      defaultNSFromContext = _ref.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || (0,_context__WEBPACK_IMPORTED_MODULE_3__.getI18n)();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new _context__WEBPACK_IMPORTED_MODULE_3__.ReportNamespaces();

  if (!i18n) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.warnOnce)('You will need to pass in an i18next instance by using initReactI18next');

    var notReadyT = function notReadyT(k) {
      return Array.isArray(k) ? k[k.length - 1] : k;
    };

    var retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }

  if (i18n.options.react && i18n.options.react.wait !== undefined) (0,_utils__WEBPACK_IMPORTED_MODULE_4__.warnOnce)('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');

  var i18nOptions = _objectSpread(_objectSpread(_objectSpread({}, (0,_context__WEBPACK_IMPORTED_MODULE_3__.getDefaults)()), i18n.options.react), props);

  var useSuspense = i18nOptions.useSuspense;
  var namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
  if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces);
  var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function (n) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.hasLoadedNamespace)(n, i18n, i18nOptions);
  });

  function getT() {
    return i18n.getFixedT(null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0]);
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(getT),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      t = _useState2[0],
      setT = _useState2[1];

  var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var bindI18n = i18nOptions.bindI18n,
        bindI18nStore = i18nOptions.bindI18nStore;
    isMounted.current = true;

    if (!ready && !useSuspense) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_4__.loadNamespaces)(i18n, namespaces, function () {
        if (isMounted.current) setT(getT);
      });
    }

    function boundReset() {
      if (isMounted.current) setT(getT);
    }

    if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
    if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset);
    return function () {
      isMounted.current = false;
      if (bindI18n && i18n) bindI18n.split(' ').forEach(function (e) {
        return i18n.off(e, boundReset);
      });
      if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(function (e) {
        return i18n.store.off(e, boundReset);
      });
    };
  }, [i18n, namespaces.join()]);
  var isInitial = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (isMounted.current && !isInitial.current) {
      setT(getT);
    }

    isInitial.current = false;
  }, [i18n]);
  var ret = [t, i18n, ready];
  ret.t = t;
  ret.i18n = i18n;
  ret.ready = ready;
  if (ready) return ret;
  if (!ready && !useSuspense) return ret;
  throw new Promise(function (resolve) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.loadNamespaces)(i18n, namespaces, function () {
      resolve();
    });
  });
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/es/withTranslation.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-i18next/dist/es/withTranslation.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withTranslation": function() { return /* binding */ withTranslation; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useTranslation */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/es/utils.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function withTranslation(ns) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function Extend(WrappedComponent) {
    function I18nextWithTranslation(_ref) {
      var forwardedRef = _ref.forwardedRef,
          rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, ["forwardedRef"]);

      var _useTranslation = (0,_useTranslation__WEBPACK_IMPORTED_MODULE_4__.useTranslation)(ns, rest),
          _useTranslation2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useTranslation, 3),
          t = _useTranslation2[0],
          i18n = _useTranslation2[1],
          ready = _useTranslation2[2];

      var passDownProps = _objectSpread(_objectSpread({}, rest), {}, {
        t: t,
        i18n: i18n,
        tReady: ready
      });

      if (options.withRef && forwardedRef) {
        passDownProps.ref = forwardedRef;
      } else if (!options.withRef && forwardedRef) {
        passDownProps.forwardedRef = forwardedRef;
      }

      return react__WEBPACK_IMPORTED_MODULE_3__.createElement(WrappedComponent, passDownProps);
    }

    I18nextWithTranslation.displayName = "withI18nextTranslation(".concat((0,_utils__WEBPACK_IMPORTED_MODULE_5__.getDisplayName)(WrappedComponent), ")");
    I18nextWithTranslation.WrappedComponent = WrappedComponent;

    var forwardRef = function forwardRef(props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_3__.createElement(I18nextWithTranslation, Object.assign({}, props, {
        forwardedRef: ref
      }));
    };

    return options.withRef ? react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(forwardRef) : I18nextWithTranslation;
  };
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "59ab8f161460b2308159"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi8uL3NyYy9BcHAvQXBwLmpzIiwid2VicGFjazovL3F1YW5seS10aHV2aWVuLy4vc3JjL0FwcC9NYWluUGFnZS5qcyIsIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi8uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvdXNlVHJhbnNsYXRpb24uanMiLCJ3ZWJwYWNrOi8vcXVhbmx5LXRodXZpZW4vLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL3dpdGhUcmFuc2xhdGlvbi5qcyIsIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOlsiVE9LRU4iLCJQcml2YXRlTG9naW5Sb3V0ZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsInJlc3QiLCJwcm9wcyIsIlRSVUUiLCJQcml2YXRlUm91dGUiLCJBcHAiLCJzdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwiZ2V0UGF0aExpc3QiLCJMT0dJTlMiLCJNQUlOIiwiTWFpbkxvZ2luIiwid2l0aFRyYW5zbGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsS0FBZDs7QUFFQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsTUFBY0MsU0FBZCxRQUFHQyxTQUFIO0FBQUEsTUFBNEJDLElBQTVCOztBQUFBLHNCQUN0QixpREFBQyxtREFBRCw4RUFBV0EsSUFBWDtBQUFpQixVQUFNLEVBQUUsZ0JBQUNDLEtBQUQ7QUFBQSxhQUNyQkwsS0FBSyxLQUFLLElBQVYsQ0FDQTtBQURBLFNBRUcsK0RBQUMsK0NBQUQsU0FBZUEsS0FBSyw0RkFBR00sSUFBSCxDQUZ2QixpQkFHRSxpREFBQyxzREFBRDtBQUFVLFVBQUUsRUFBQztBQUFiLFFBSm1C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MTM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IGdldFBhdGhMaXN0LCBMT0dJTlMgfSBmcm9tICcuLi9yb3V0ZXMnO1xuaW1wb3J0IE1haW5Mb2dpbiBmcm9tICcuL01haW5Mb2dpbic7XG5pbXBvcnQgTWFpblBhZ2UgZnJvbSBcIi4vTWFpblBhZ2VcIjtcbi8vIGltcG9ydCB7IFRPS0VOIH0gZnJvbSAnLi4vZnVuY3Rpb25zL1V0aWxzJztcbmNvbnN0IFRPS0VOID0gZmFsc2VcblxuY29uc3QgUHJpdmF0ZUxvZ2luUm91dGUgPSAoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucmVzdCB9KSA9PiAoXG4gICAgPFJvdXRlIHsuLi5yZXN0fSByZW5kZXI9eyhwcm9wcykgPT4gKFxuICAgICAgICBUT0tFTiA9PT0gbnVsbFxuICAgICAgICAvLyB0cnVlXG4gICAgICAgID8gKDxNYWluTG9naW4gLz4sIFRPS0VOID0gVFJVRSlcbiAgICAgICAgOiA8UmVkaXJlY3QgdG89Jy8nIC8+XG4gICAgKX0gLz5cbilcbmNvbnN0IFByaXZhdGVSb3V0ZSA9ICh7IGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5yZXN0IH0pID0+IChcbiAgICA8Um91dGUgey4uLnJlc3R9IHJlbmRlcj17KHByb3BzKSA9PiAoXG4gICAgICAgIC8vY2hlY2sgbuG6v3UgY2jGsGEgbG9naW4gdGjDrCBrbyDEkcaw4bujYyB2w6BvIG1haW5QYWdlXG4gICAgICAgIFRPS0VOXG4gICAgICAgICAgICA/IDxNYWluUGFnZSAvPlxuICAgICAgICAgICAgOiA8UmVkaXJlY3QgdG89Jy9sb2dpbicgLz5cbiAgICApfSAvPlxuKVxuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgICAgICA8U3dpdGNoID5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2dldFBhdGhMaXN0KExPR0lOUyl9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSByZW5kZXI9e3Byb3BzID0+IDxQcml2YXRlTG9naW5Sb3V0ZSB7Li4ucHJvcHN9IC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17Z2V0UGF0aExpc3QoTUFJTil9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSByZW5kZXI9e3Byb3BzID0+IDxQcml2YXRlUm91dGUgey4uLnByb3BzfSAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHJlbmRlcj17cHJvcHMgPT4gPFByaXZhdGVSb3V0ZSB7Li4ucHJvcHN9IC8+fSAvPlxuICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCBDb250YWluZXJMb2dpbiBmcm9tICcuL0NvbnRhaW5lckxvZ2luJztcclxuLy9jb21wb25lbnRzXHJcblxyXG5jb25zdCBNYWluTG9naW4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lckxvZ2luIC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oKShNYWluTG9naW4pOyIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRJMThuLCBnZXREZWZhdWx0cywgUmVwb3J0TmFtZXNwYWNlcywgSTE4bkNvbnRleHQgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IHsgd2Fybk9uY2UsIGxvYWROYW1lc3BhY2VzLCBoYXNMb2FkZWROYW1lc3BhY2UgfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VUcmFuc2xhdGlvbihucykge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgaTE4bkZyb21Qcm9wcyA9IHByb3BzLmkxOG47XG5cbiAgdmFyIF9yZWYgPSB1c2VDb250ZXh0KEkxOG5Db250ZXh0KSB8fCB7fSxcbiAgICAgIGkxOG5Gcm9tQ29udGV4dCA9IF9yZWYuaTE4bixcbiAgICAgIGRlZmF1bHROU0Zyb21Db250ZXh0ID0gX3JlZi5kZWZhdWx0TlM7XG5cbiAgdmFyIGkxOG4gPSBpMThuRnJvbVByb3BzIHx8IGkxOG5Gcm9tQ29udGV4dCB8fCBnZXRJMThuKCk7XG4gIGlmIChpMThuICYmICFpMThuLnJlcG9ydE5hbWVzcGFjZXMpIGkxOG4ucmVwb3J0TmFtZXNwYWNlcyA9IG5ldyBSZXBvcnROYW1lc3BhY2VzKCk7XG5cbiAgaWYgKCFpMThuKSB7XG4gICAgd2Fybk9uY2UoJ1lvdSB3aWxsIG5lZWQgdG8gcGFzcyBpbiBhbiBpMThuZXh0IGluc3RhbmNlIGJ5IHVzaW5nIGluaXRSZWFjdEkxOG5leHQnKTtcblxuICAgIHZhciBub3RSZWFkeVQgPSBmdW5jdGlvbiBub3RSZWFkeVQoaykge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaykgPyBrW2subGVuZ3RoIC0gMV0gOiBrO1xuICAgIH07XG5cbiAgICB2YXIgcmV0Tm90UmVhZHkgPSBbbm90UmVhZHlULCB7fSwgZmFsc2VdO1xuICAgIHJldE5vdFJlYWR5LnQgPSBub3RSZWFkeVQ7XG4gICAgcmV0Tm90UmVhZHkuaTE4biA9IHt9O1xuICAgIHJldE5vdFJlYWR5LnJlYWR5ID0gZmFsc2U7XG4gICAgcmV0dXJuIHJldE5vdFJlYWR5O1xuICB9XG5cbiAgaWYgKGkxOG4ub3B0aW9ucy5yZWFjdCAmJiBpMThuLm9wdGlvbnMucmVhY3Qud2FpdCAhPT0gdW5kZWZpbmVkKSB3YXJuT25jZSgnSXQgc2VlbXMgeW91IGFyZSBzdGlsbCB1c2luZyB0aGUgb2xkIHdhaXQgb3B0aW9uLCB5b3UgbWF5IG1pZ3JhdGUgdG8gdGhlIG5ldyB1c2VTdXNwZW5zZSBiZWhhdmlvdXIuJyk7XG5cbiAgdmFyIGkxOG5PcHRpb25zID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGdldERlZmF1bHRzKCkpLCBpMThuLm9wdGlvbnMucmVhY3QpLCBwcm9wcyk7XG5cbiAgdmFyIHVzZVN1c3BlbnNlID0gaTE4bk9wdGlvbnMudXNlU3VzcGVuc2U7XG4gIHZhciBuYW1lc3BhY2VzID0gbnMgfHwgZGVmYXVsdE5TRnJvbUNvbnRleHQgfHwgaTE4bi5vcHRpb25zICYmIGkxOG4ub3B0aW9ucy5kZWZhdWx0TlM7XG4gIG5hbWVzcGFjZXMgPSB0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBbbmFtZXNwYWNlc10gOiBuYW1lc3BhY2VzIHx8IFsndHJhbnNsYXRpb24nXTtcbiAgaWYgKGkxOG4ucmVwb3J0TmFtZXNwYWNlcy5hZGRVc2VkTmFtZXNwYWNlcykgaTE4bi5yZXBvcnROYW1lc3BhY2VzLmFkZFVzZWROYW1lc3BhY2VzKG5hbWVzcGFjZXMpO1xuICB2YXIgcmVhZHkgPSAoaTE4bi5pc0luaXRpYWxpemVkIHx8IGkxOG4uaW5pdGlhbGl6ZWRTdG9yZU9uY2UpICYmIG5hbWVzcGFjZXMuZXZlcnkoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gaGFzTG9hZGVkTmFtZXNwYWNlKG4sIGkxOG4sIGkxOG5PcHRpb25zKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZ2V0VCgpIHtcbiAgICByZXR1cm4gaTE4bi5nZXRGaXhlZFQobnVsbCwgaTE4bk9wdGlvbnMubnNNb2RlID09PSAnZmFsbGJhY2snID8gbmFtZXNwYWNlcyA6IG5hbWVzcGFjZXNbMF0pO1xuICB9XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGdldFQpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICB0ID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldFQgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBpc01vdW50ZWQgPSB1c2VSZWYodHJ1ZSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJpbmRJMThuID0gaTE4bk9wdGlvbnMuYmluZEkxOG4sXG4gICAgICAgIGJpbmRJMThuU3RvcmUgPSBpMThuT3B0aW9ucy5iaW5kSTE4blN0b3JlO1xuICAgIGlzTW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcblxuICAgIGlmICghcmVhZHkgJiYgIXVzZVN1c3BlbnNlKSB7XG4gICAgICBsb2FkTmFtZXNwYWNlcyhpMThuLCBuYW1lc3BhY2VzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc01vdW50ZWQuY3VycmVudCkgc2V0VChnZXRUKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJvdW5kUmVzZXQoKSB7XG4gICAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQpIHNldFQoZ2V0VCk7XG4gICAgfVxuXG4gICAgaWYgKGJpbmRJMThuICYmIGkxOG4pIGkxOG4ub24oYmluZEkxOG4sIGJvdW5kUmVzZXQpO1xuICAgIGlmIChiaW5kSTE4blN0b3JlICYmIGkxOG4pIGkxOG4uc3RvcmUub24oYmluZEkxOG5TdG9yZSwgYm91bmRSZXNldCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlzTW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICBpZiAoYmluZEkxOG4gJiYgaTE4bikgYmluZEkxOG4uc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBpMThuLm9mZihlLCBib3VuZFJlc2V0KTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGJpbmRJMThuU3RvcmUgJiYgaTE4bikgYmluZEkxOG5TdG9yZS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGkxOG4uc3RvcmUub2ZmKGUsIGJvdW5kUmVzZXQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSwgW2kxOG4sIG5hbWVzcGFjZXMuam9pbigpXSk7XG4gIHZhciBpc0luaXRpYWwgPSB1c2VSZWYodHJ1ZSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzTW91bnRlZC5jdXJyZW50ICYmICFpc0luaXRpYWwuY3VycmVudCkge1xuICAgICAgc2V0VChnZXRUKTtcbiAgICB9XG5cbiAgICBpc0luaXRpYWwuY3VycmVudCA9IGZhbHNlO1xuICB9LCBbaTE4bl0pO1xuICB2YXIgcmV0ID0gW3QsIGkxOG4sIHJlYWR5XTtcbiAgcmV0LnQgPSB0O1xuICByZXQuaTE4biA9IGkxOG47XG4gIHJldC5yZWFkeSA9IHJlYWR5O1xuICBpZiAocmVhZHkpIHJldHVybiByZXQ7XG4gIGlmICghcmVhZHkgJiYgIXVzZVN1c3BlbnNlKSByZXR1cm4gcmV0O1xuICB0aHJvdyBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIGxvYWROYW1lc3BhY2VzKGkxOG4sIG5hbWVzcGFjZXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfSk7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4vdXNlVHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgZ2V0RGlzcGxheU5hbWUgfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCBmdW5jdGlvbiB3aXRoVHJhbnNsYXRpb24obnMpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gRXh0ZW5kKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBJMThuZXh0V2l0aFRyYW5zbGF0aW9uKF9yZWYpIHtcbiAgICAgIHZhciBmb3J3YXJkZWRSZWYgPSBfcmVmLmZvcndhcmRlZFJlZixcbiAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImZvcndhcmRlZFJlZlwiXSk7XG5cbiAgICAgIHZhciBfdXNlVHJhbnNsYXRpb24gPSB1c2VUcmFuc2xhdGlvbihucywgcmVzdCksXG4gICAgICAgICAgX3VzZVRyYW5zbGF0aW9uMiA9IF9zbGljZWRUb0FycmF5KF91c2VUcmFuc2xhdGlvbiwgMyksXG4gICAgICAgICAgdCA9IF91c2VUcmFuc2xhdGlvbjJbMF0sXG4gICAgICAgICAgaTE4biA9IF91c2VUcmFuc2xhdGlvbjJbMV0sXG4gICAgICAgICAgcmVhZHkgPSBfdXNlVHJhbnNsYXRpb24yWzJdO1xuXG4gICAgICB2YXIgcGFzc0Rvd25Qcm9wcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcmVzdCksIHt9LCB7XG4gICAgICAgIHQ6IHQsXG4gICAgICAgIGkxOG46IGkxOG4sXG4gICAgICAgIHRSZWFkeTogcmVhZHlcbiAgICAgIH0pO1xuXG4gICAgICBpZiAob3B0aW9ucy53aXRoUmVmICYmIGZvcndhcmRlZFJlZikge1xuICAgICAgICBwYXNzRG93blByb3BzLnJlZiA9IGZvcndhcmRlZFJlZjtcbiAgICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMud2l0aFJlZiAmJiBmb3J3YXJkZWRSZWYpIHtcbiAgICAgICAgcGFzc0Rvd25Qcm9wcy5mb3J3YXJkZWRSZWYgPSBmb3J3YXJkZWRSZWY7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIHBhc3NEb3duUHJvcHMpO1xuICAgIH1cblxuICAgIEkxOG5leHRXaXRoVHJhbnNsYXRpb24uZGlzcGxheU5hbWUgPSBcIndpdGhJMThuZXh0VHJhbnNsYXRpb24oXCIuY29uY2F0KGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpLCBcIilcIik7XG4gICAgSTE4bmV4dFdpdGhUcmFuc2xhdGlvbi5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcblxuICAgIHZhciBmb3J3YXJkUmVmID0gZnVuY3Rpb24gZm9yd2FyZFJlZihwcm9wcywgcmVmKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJMThuZXh0V2l0aFRyYW5zbGF0aW9uLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICBmb3J3YXJkZWRSZWY6IHJlZlxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gb3B0aW9ucy53aXRoUmVmID8gUmVhY3QuZm9yd2FyZFJlZihmb3J3YXJkUmVmKSA6IEkxOG5leHRXaXRoVHJhbnNsYXRpb247XG4gIH07XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjU5YWI4ZjE2MTQ2MGIyMzA4MTU5XCI7IH0iXSwic291cmNlUm9vdCI6IiJ9