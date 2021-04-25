(self["webpackChunkquanly_thuvien"] = self["webpackChunkquanly_thuvien"] || []).push([["src_templates_Account_Login_js"],{

/***/ "./src/templates/Account/Login.js":
/*!****************************************!*\
  !*** ./src/templates/Account/Login.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/form/index.js");
/* harmony import */ var _functions_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/Utils */ "./src/functions/Utils.js");
/* harmony import */ var _contant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contant */ "./src/contant.js");
/* harmony import */ var _components_base_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/base/Input */ "./src/components/base/Input/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_base_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/base/Button */ "./src/components/base/Button/index.js");










var Login = function Login() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_7__.default.useForm(),
      _Form$useForm2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_Form$useForm, 1),
      formLogin = _Form$useForm2[0];

  var dataLogin = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.accountReducer;
  });
  var error = dataLogin.error,
      login = dataLogin.login;

  var _useState = useState({
    isWarning: false,
    isSave: false
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = useState(),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState5, 2),
      time = _useState6[0],
      setTime = _useState6[1]; // check login fail and off loading


  useEffect(function () {
    if (dataLogin && dataLogin.error && dataLogin.error.err) {
      setLoading(false);
    }
  }, [dataLogin]);

  var onSubmitInfo = function onSubmitInfo(data) {
    var username = data.username,
        password = data.password;
    dispatch(accountAction.loadLogin({
      username: username,
      password: password
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "login scb-login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "login__bg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "login__right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "login__form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, {
    form: formLogin,
    onFinish: onSubmitInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "title"
  }, "Sign in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "cus-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default.Item, {
    name: "username",
    rules: _functions_Utils__WEBPACK_IMPORTED_MODULE_2__.RULES.text.form()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Input__WEBPACK_IMPORTED_MODULE_4__.InputBase, {
    label: "Username"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "cus-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default.Item, {
    name: "password",
    rules: _functions_Utils__WEBPACK_IMPORTED_MODULE_2__.RULES.password.form()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Input__WEBPACK_IMPORTED_MODULE_4__.InputPassword, {
    label: "Password"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "forgot-password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
    to: "".concat(_contant__WEBPACK_IMPORTED_MODULE_3__.PAGES_URL.forgotPassword.url)
  }, "Forgot your password?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Button__WEBPACK_IMPORTED_MODULE_6__.ButtonStyle, {
    className: "btn-blue",
    label: "Sign in",
    htmlType: "submit"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "support-login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Don't have an account ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
    to: "".concat(_contant__WEBPACK_IMPORTED_MODULE_3__.PAGES_URL.register.url)
  }, "Register"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi8uL3NyYy90ZW1wbGF0ZXMvQWNjb3VudC9Mb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJGb3JtIiwiZm9ybUxvZ2luIiwiZGF0YUxvZ2luIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImFjY291bnRSZWR1Y2VyIiwiZXJyb3IiLCJsb2dpbiIsInVzZVN0YXRlIiwiaXNXYXJuaW5nIiwiaXNTYXZlIiwic2V0U3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRpbWUiLCJzZXRUaW1lIiwidXNlRWZmZWN0IiwiZXJyIiwib25TdWJtaXRJbmZvIiwiZGF0YSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJhY2NvdW50QWN0aW9uIiwibG9hZExvZ2luIiwiUlVMRVMiLCJQQUdFU19VUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2hCLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7O0FBRGdCLHNCQUVJQyxpREFBQSxFQUZKO0FBQUE7QUFBQSxNQUVUQyxTQUZTOztBQUdoQixNQUFNQyxTQUFTLEdBQUdDLHdEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsY0FBVjtBQUFBLEdBQU4sQ0FBN0I7QUFIZ0IsTUFJUkMsS0FKUSxHQUlTSixTQUpULENBSVJJLEtBSlE7QUFBQSxNQUlEQyxLQUpDLEdBSVNMLFNBSlQsQ0FJREssS0FKQzs7QUFBQSxrQkFLVUMsUUFBUSxDQUFDO0FBQy9CQyxhQUFTLEVBQUUsS0FEb0I7QUFFL0JDLFVBQU0sRUFBRTtBQUZ1QixHQUFELENBTGxCO0FBQUE7QUFBQSxNQUtUTixLQUxTO0FBQUEsTUFLRk8sUUFMRTs7QUFBQSxtQkFVY0gsUUFBUSxDQUFDLEtBQUQsQ0FWdEI7QUFBQTtBQUFBLE1BVVRJLE9BVlM7QUFBQSxNQVVBQyxVQVZBOztBQUFBLG1CQVdRTCxRQUFRLEVBWGhCO0FBQUE7QUFBQSxNQVdUTSxJQVhTO0FBQUEsTUFXSEMsT0FYRyxrQkFhaEI7OztBQUNBQyxXQUFTLENBQUMsWUFBSTtBQUNWLFFBQUdkLFNBQVMsSUFBSUEsU0FBUyxDQUFDSSxLQUF2QixJQUFnQ0osU0FBUyxDQUFDSSxLQUFWLENBQWdCVyxHQUFuRCxFQUF1RDtBQUNuREosZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDSDtBQUNKLEdBSlEsRUFJUCxDQUFDWCxTQUFELENBSk8sQ0FBVDs7QUFPQSxNQUFNZ0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFVO0FBQUEsUUFDbkJDLFFBRG1CLEdBQ0lELElBREosQ0FDbkJDLFFBRG1CO0FBQUEsUUFDVEMsUUFEUyxHQUNJRixJQURKLENBQ1RFLFFBRFM7QUFFM0J2QixZQUFRLENBQUN3QixhQUFhLENBQUNDLFNBQWQsQ0FBd0I7QUFBRUgsY0FBUSxFQUFFQSxRQUFaO0FBQXNCQyxjQUFRLEVBQUVBO0FBQWhDLEtBQXhCLENBQUQsQ0FBUjtBQUNILEdBSEQ7O0FBSUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLElBREosZUFFSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0ksaURBQUMseUNBQUQ7QUFDSSxRQUFJLEVBQUVwQixTQURWO0FBRUksWUFBUSxFQUFFaUI7QUFGZCxrQkFJSTtBQUFLLGFBQVMsRUFBQztBQUFmLGVBSkosZUFLSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLGlEQUFDLDhDQUFEO0FBQVcsUUFBSSxFQUFDLFVBQWhCO0FBQTJCLFNBQUssRUFBRU0sNkRBQUE7QUFBbEMsa0JBQ0ksaURBQUMsNkRBQUQ7QUFBVyxTQUFLLEVBQUM7QUFBakIsSUFESixDQURKLENBTEosZUFVSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLGlEQUFDLDhDQUFEO0FBQVcsUUFBSSxFQUFDLFVBQWhCO0FBQTJCLFNBQUssRUFBRUEsaUVBQUE7QUFBbEMsa0JBQ0ksaURBQUMsaUVBQUQ7QUFBZSxTQUFLLEVBQUM7QUFBckIsSUFESixDQURKLENBVkosZUFlSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLGlEQUFDLGtEQUFEO0FBQU0sTUFBRSxZQUFLQyxrRUFBTDtBQUFSLDZCQURKLENBZkosZUFvQkksaURBQUMsZ0VBQUQ7QUFDSSxhQUFTLEVBQUMsVUFEZDtBQUVJLFNBQUssRUFBQyxTQUZWO0FBR0ksWUFBUSxFQUFDO0FBSGIsSUFwQkosZUF5Qkk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSx5RkFESixlQUVJLGlEQUFDLGtEQUFEO0FBQU0sTUFBRSxZQUFLQSw0REFBTDtBQUFSLGdCQUZKLENBekJKLENBREosQ0FESixDQUZKLENBREo7QUEwQ0gsQ0FuRUQ7O0FBcUVBLCtEQUFlNUIsS0FBZixFIiwiZmlsZSI6InNyY190ZW1wbGF0ZXNfQWNjb3VudF9Mb2dpbl9qcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFJVTEVTIH0gZnJvbSBcImZ1bmN0aW9ucy9VdGlsc1wiO1xyXG5pbXBvcnQgeyBQQUdFU19VUkwgfSBmcm9tIFwiY29udGFudFwiO1xyXG5pbXBvcnQgeyBJbnB1dEJhc2UsIElucHV0UGFzc3dvcmQgfSBmcm9tIFwiY29tcG9uZW50cy9iYXNlL0lucHV0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBCdXR0b25TdHlsZSB9IGZyb20gXCJjb21wb25lbnRzL2Jhc2UvQnV0dG9uXCI7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtmb3JtTG9naW5dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgICBjb25zdCBkYXRhTG9naW4gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hY2NvdW50UmVkdWNlcik7XHJcbiAgICBjb25zdCB7IGVycm9yLCBsb2dpbiB9ID0gZGF0YUxvZ2luO1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaXNXYXJuaW5nOiBmYWxzZSxcclxuICAgICAgICBpc1NhdmU6IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIC8vIGNoZWNrIGxvZ2luIGZhaWwgYW5kIG9mZiBsb2FkaW5nXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZihkYXRhTG9naW4gJiYgZGF0YUxvZ2luLmVycm9yICYmIGRhdGFMb2dpbi5lcnJvci5lcnIpe1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtkYXRhTG9naW5dKVxyXG5cclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEluZm8gPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBkYXRhXHJcbiAgICAgICAgZGlzcGF0Y2goYWNjb3VudEFjdGlvbi5sb2FkTG9naW4oeyB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZCB9KSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbiBzY2ItbG9naW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbl9fYmdcIi8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5fX3JpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luX19mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybT17Zm9ybUxvZ2lufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXRJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlNpZ24gaW48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXMtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInVzZXJuYW1lXCIgcnVsZXM9e1JVTEVTLnRleHQuZm9ybSgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QmFzZSBsYWJlbD1cIlVzZXJuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXMtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInBhc3N3b3JkXCIgcnVsZXM9e1JVTEVTLnBhc3N3b3JkLmZvcm0oKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFBhc3N3b3JkIGxhYmVsPVwiUGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcmdvdC1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2Ake1BBR0VTX1VSTC5mb3Jnb3RQYXNzd29yZC51cmx9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yZ290IHlvdXIgcGFzc3dvcmQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uU3R5bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1ibHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2lnbiBpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VwcG9ydC1sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50ID88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YCR7UEFHRVNfVVJMLnJlZ2lzdGVyLnVybH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblxyXG4iXSwic291cmNlUm9vdCI6IiJ9