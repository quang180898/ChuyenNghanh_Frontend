(self["webpackChunkquanly_thuvien"] = self["webpackChunkquanly_thuvien"] || []).push([["src_templates_Account_Register_js"],{

/***/ "./src/templates/Account/Register.js":
/*!*******************************************!*\
  !*** ./src/templates/Account/Register.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/form/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/action */ "./src/store/action/index.js");
/* harmony import */ var _contant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contant */ "./src/contant.js");
/* harmony import */ var _functions_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../functions/Utils */ "./src/functions/Utils.js");
/* harmony import */ var _components_base_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/base/Button */ "./src/components/base/Button/index.js");
/* harmony import */ var _components_base_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/base/Input */ "./src/components/base/Input/index.js");











var Register = function Register() {
  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_8__.default.useForm(),
      _Form$useForm2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_Form$useForm, 1),
      formCreateEditAccount = _Form$useForm2[0];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var dateFormat = "DD/MM/YYYY";
  var accountReducer = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.accountReducer;
  });
  var newAccount = accountReducer.newAccount;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      isloading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    name: '',
    user_name: '',
    password: '',
    password_repeat: '',
    email: '',
    phone: '' // permission_code: convertContant('user', PERMISSION, "label").value

  }),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      dataUser = _useState4[0],
      setDataUser = _useState4[1];

  var onSubmitInfo = function onSubmitInfo(data) {
    if (data) {
      var name = data.name,
          userName = data.userName,
          email = data.email,
          password = data.password,
          rePassword = data.rePassword,
          phone = data.phone;
      var params = {
        name: name,
        user_name: userName,
        pass_word: password,
        password_repeat: rePassword,
        mobile: phone,
        mail: email
      };
      dispatch(_store_action__WEBPACK_IMPORTED_MODULE_3__.accountAction.createOrUpdateAccount(params));
    }

    setLoading(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "login scb-login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "login__bg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "login__right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-12 col-md-7 col-xl-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "login__form register"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default, {
    form: formCreateEditAccount,
    onFinish: onSubmitInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "title"
  }, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-12 col-sm-6 col-xl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "cus-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    name: "name",
    rules: _functions_Utils__WEBPACK_IMPORTED_MODULE_5__.RULES.textFullName.form()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Input__WEBPACK_IMPORTED_MODULE_7__.InputBase, {
    label: "Name"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-12 col-sm-6 col-xl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "cus-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    name: "userName",
    rules: _functions_Utils__WEBPACK_IMPORTED_MODULE_5__.RULES.text.form()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Input__WEBPACK_IMPORTED_MODULE_7__.InputBase, {
    label: "User Name"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-12 col-sm-6 col-xl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "cus-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    name: "email",
    rules: _functions_Utils__WEBPACK_IMPORTED_MODULE_5__.RULES.email.form()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Input__WEBPACK_IMPORTED_MODULE_7__.InputBase, {
    label: "Email"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-12 col-sm-6 col-xl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "cus-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    name: "phone",
    rules: _functions_Utils__WEBPACK_IMPORTED_MODULE_5__.RULES.phone.form()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Input__WEBPACK_IMPORTED_MODULE_7__.InputBase, {
    label: "Phone"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-12 col-sm-6 col-xl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "cus-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    name: "password",
    rules: _functions_Utils__WEBPACK_IMPORTED_MODULE_5__.RULES.password.form()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Input__WEBPACK_IMPORTED_MODULE_7__.InputPassword, {
    label: "Password"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-12 col-sm-6 col-xl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "cus-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    name: "rePassword",
    rules: _functions_Utils__WEBPACK_IMPORTED_MODULE_5__.RULES.password.form()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Input__WEBPACK_IMPORTED_MODULE_7__.InputPassword, {
    label: "Retype password"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Button__WEBPACK_IMPORTED_MODULE_6__.ButtonStyle, {
    className: "btn-blue",
    label: "Sign in",
    htmlType: "submit"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "support-login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Or "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
    to: "".concat(_contant__WEBPACK_IMPORTED_MODULE_4__.PAGES_URL.login.url)
  }, "Sign in your account"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi8uL3NyYy90ZW1wbGF0ZXMvQWNjb3VudC9SZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsIkZvcm0iLCJmb3JtQ3JlYXRlRWRpdEFjY291bnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZGF0ZUZvcm1hdCIsImFjY291bnRSZWR1Y2VyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIm5ld0FjY291bnQiLCJ1c2VTdGF0ZSIsImlzbG9hZGluZyIsInNldExvYWRpbmciLCJuYW1lIiwidXNlcl9uYW1lIiwicGFzc3dvcmQiLCJwYXNzd29yZF9yZXBlYXQiLCJlbWFpbCIsInBob25lIiwiZGF0YVVzZXIiLCJzZXREYXRhVXNlciIsIm9uU3VibWl0SW5mbyIsImRhdGEiLCJ1c2VyTmFtZSIsInJlUGFzc3dvcmQiLCJwYXJhbXMiLCJwYXNzX3dvcmQiLCJtb2JpbGUiLCJtYWlsIiwiYWNjb3VudEFjdGlvbiIsIlJVTEVTIiwiUEFHRVNfVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBLHNCQUVhQyxpREFBQSxFQUZiO0FBQUE7QUFBQSxNQUVaQyxxQkFGWTs7QUFHbkIsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1QjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxZQUFuQjtBQUNBLE1BQU1DLGNBQWMsR0FBR0Msd0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRixjQUFWO0FBQUEsR0FBTixDQUFsQztBQUxtQixNQU1YRyxVQU5XLEdBTUlILGNBTkosQ0FNWEcsVUFOVzs7QUFBQSxrQkFPYUMsK0NBQVEsQ0FBQyxLQUFELENBUHJCO0FBQUE7QUFBQSxNQU9aQyxTQVBZO0FBQUEsTUFPREMsVUFQQzs7QUFB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ZixrQkFDQTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLGlEQUFDLDhDQUFEO0FBQVcsUUFBSSxFQUFDLFVBQWhCO0FBQTJCLFNBQUssRUFBRUEsaUVBQUE7QUFBbEMsa0JBQ0ksaURBQUMsaUVBQUQ7QUFBZSxTQUFLLEVBQUM7QUFBckIsSUFESixDQURKLENBREEsQ0E5QkEsZUFxQ0E7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLGlEQUFDLDhDQUFEO0FBQVcsUUFBSSxFQUFDLFlBQWhCO0FBQTZCLFNBQUssRUFBRUEsaUVBQUE7QUFBcEMsa0JBQ0ksaURBQUMsaUVBQUQ7QUFBZSxTQUFLLEVBQUM7QUFBckIsSUFESixDQURKLENBREEsQ0FyQ0EsZUE0Q0E7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQSxpREFBQyxnRUFBRDtBQUNJLGFBQVMsRUFBQyxVQURkO0FBRUksU0FBSyxFQUFDLFNBRlY7QUFHSSxZQUFRLEVBQUM7QUFIYixJQURBLENBNUNBLENBSkosQ0FEUixlQTBEUTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNRLHFFQURSLGVBRVEsaURBQUMsa0RBQUQ7QUFBTSxNQUFFLFlBQUtDLHlEQUFMO0FBQVIsNEJBRlIsQ0ExRFIsQ0FEQSxDQURBLENBRkosQ0FESjtBQTBFSCxDQTVHRDs7QUE4R0EsK0RBQWUvQixRQUFmLEUiLCJmaWxlIjoic3JjX3RlbXBsYXRlc19BY2NvdW50X1JlZ2lzdGVyX2pzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgYWNjb3VudEFjdGlvbiB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbic7XHJcbmltcG9ydCB7IFBBR0VTX1VSTCwgR0VOREVSX1RZUEUgLFBFUk1JU1NJT04gfSBmcm9tIFwiLi4vLi4vY29udGFudFwiO1xyXG5pbXBvcnQgeyBjb252ZXJ0Q29udGFudCwgZ2V0TG9jYWxTdG9yZSwgUlVMRVMgfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL1V0aWxzXCI7XHJcbmltcG9ydCB7IEJ1dHRvblN0eWxlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9CdXR0b25cIjtcclxuaW1wb3J0IHsgSW5wdXRCYXNlLCBJbnB1dFBhc3N3b3JkIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9JbnB1dFwiO1xyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2Zvcm1DcmVhdGVFZGl0QWNjb3VudF0gPSBGb3JtLnVzZUZvcm0oKVxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgZGF0ZUZvcm1hdCA9IFwiREQvTU0vWVlZWVwiO1xyXG4gICAgY29uc3QgYWNjb3VudFJlZHVjZXIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hY2NvdW50UmVkdWNlcilcclxuICAgIGNvbnN0IHsgbmV3QWNjb3VudCB9ID0gYWNjb3VudFJlZHVjZXI7XHJcbiAgICBjb25zdCBbaXNsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtkYXRhVXNlciwgc2V0RGF0YVVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIHVzZXJfbmFtZTogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkX3JlcGVhdDogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAvLyBwZXJtaXNzaW9uX2NvZGU6IGNvbnZlcnRDb250YW50KCd1c2VyJywgUEVSTUlTU0lPTiwgXCJsYWJlbFwiKS52YWx1ZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEluZm8gPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtuYW1lICwgdXNlck5hbWUsIGVtYWlsLCBwYXNzd29yZCwgcmVQYXNzd29yZCwgcGhvbmV9ID0gZGF0YVxyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9uYW1lOiB1c2VyTmFtZSxcclxuICAgICAgICAgICAgICAgIHBhc3Nfd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZF9yZXBlYXQ6IHJlUGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICBtb2JpbGU6IHBob25lLFxyXG4gICAgICAgICAgICAgICAgbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goYWNjb3VudEFjdGlvbi5jcmVhdGVPclVwZGF0ZUFjY291bnQocGFyYW1zKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbiBzY2ItbG9naW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbl9fYmdcIi8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5fX3JpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC14bC05XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5fX2Zvcm0gcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtPXtmb3JtQ3JlYXRlRWRpdEFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdEluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+UmVnaXN0ZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLXhsLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXMtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIm5hbWVcIiBydWxlcz17UlVMRVMudGV4dEZ1bGxOYW1lLmZvcm0oKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEJhc2UgbGFiZWw9XCJOYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC14bC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJ1c2VyTmFtZVwiIHJ1bGVzPXtSVUxFUy50ZXh0LmZvcm0oKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEJhc2UgbGFiZWw9XCJVc2VyIE5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLXhsLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXMtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImVtYWlsXCIgcnVsZXM9e1JVTEVTLmVtYWlsLmZvcm0oKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEJhc2UgbGFiZWw9XCJFbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wteGwtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cy1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwicGhvbmVcIiBydWxlcz17UlVMRVMucGhvbmUuZm9ybSgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QmFzZSBsYWJlbD1cIlBob25lXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLXhsLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXMtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInBhc3N3b3JkXCIgcnVsZXM9e1JVTEVTLnBhc3N3b3JkLmZvcm0oKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFBhc3N3b3JkIGxhYmVsPVwiUGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLXhsLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXMtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInJlUGFzc3dvcmRcIiBydWxlcz17UlVMRVMucGFzc3dvcmQuZm9ybSgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0UGFzc3dvcmQgbGFiZWw9XCJSZXR5cGUgcGFzc3dvcmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uU3R5bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1ibHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2lnbiBpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdXBwb3J0LWxvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5PciA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YCR7UEFHRVNfVVJMLmxvZ2luLnVybH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIGluIHlvdXIgYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=