self["webpackHotUpdatequanly_thuvien"]("src_templates_Account_Register_js",{

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _contant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contant */ "./src/contant.js");
/* harmony import */ var _functions_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../functions/Utils */ "./src/functions/Utils.js");
/* harmony import */ var _components_base_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/base/Button */ "./src/components/base/Button/index.js");
/* harmony import */ var _components_base_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/base/Input */ "./src/components/base/Input/index.js");
/* harmony import */ var _components_base_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/base/Select */ "./src/components/base/Select/index.js");












var Register = function Register() {
  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_8__.default.useForm(),
      _Form$useForm2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_Form$useForm, 1),
      formCreateEditAccount = _Form$useForm2[0];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory)();
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useLocation)();
  var user = (0,_functions_Utils__WEBPACK_IMPORTED_MODULE_4__.getLocalStore)('user');
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
    gender: '',
    email: '',
    phone: '',
    birth_date: '' // permission_code: convertContant('user', PERMISSION, "label").value

  }),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      dataUser = _useState4[0],
      setDataUser = _useState4[1];

  var onSubmitInfo = function onSubmitInfo(data) {
    console.log(data);
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
    className: "login__form"
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
    rules: _functions_Utils__WEBPACK_IMPORTED_MODULE_4__.RULES.textFullName.form()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Input__WEBPACK_IMPORTED_MODULE_6__.InputBase, {
    label: "Name"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-12 col-sm-6 col-xl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "cus-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    name: "userName",
    rules: _functions_Utils__WEBPACK_IMPORTED_MODULE_4__.RULES.textFullName.form()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Input__WEBPACK_IMPORTED_MODULE_6__.InputBase, {
    label: "User Name"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-12 col-sm-6 col-xl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "cus-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    name: "birthDate",
    rules: _functions_Utils__WEBPACK_IMPORTED_MODULE_4__.RULES.birthday.form()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Input__WEBPACK_IMPORTED_MODULE_6__.InputDatePicker, {
    label: "Birth Date"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-12 col-sm-6 col-xl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "cus-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    name: "gender",
    rules: _functions_Utils__WEBPACK_IMPORTED_MODULE_4__.RULES.text.form()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Select__WEBPACK_IMPORTED_MODULE_7__.SelectSingle, {
    label: "Gender"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-12 col-sm-6 col-xl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "cus-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    name: "email",
    rules: _functions_Utils__WEBPACK_IMPORTED_MODULE_4__.RULES.email.form()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Input__WEBPACK_IMPORTED_MODULE_6__.InputBase, {
    label: "Email"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-12 col-sm-6 col-xl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "cus-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    name: "phone",
    rules: _functions_Utils__WEBPACK_IMPORTED_MODULE_4__.RULES.phone.form()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Input__WEBPACK_IMPORTED_MODULE_6__.InputBase, {
    label: "Phone"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-12 col-sm-6 col-xl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "cus-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    name: "password",
    rules: _functions_Utils__WEBPACK_IMPORTED_MODULE_4__.RULES.password.form()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Input__WEBPACK_IMPORTED_MODULE_6__.InputPassword, {
    label: "Password"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-12 col-sm-6 col-xl-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "cus-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {
    name: "rePassword",
    rules: _functions_Utils__WEBPACK_IMPORTED_MODULE_4__.RULES.password.form()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Input__WEBPACK_IMPORTED_MODULE_6__.InputPassword, {
    label: "Retype password"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_base_Button__WEBPACK_IMPORTED_MODULE_5__.ButtonStyle, {
    className: "btn-blue",
    label: "Sign in",
    htmlType: "submit"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "support-login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Or "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
    to: "".concat(_contant__WEBPACK_IMPORTED_MODULE_3__.PAGES_URL.login.url)
  }, "Sign in your account"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFubHktdGh1dmllbi8uL3NyYy90ZW1wbGF0ZXMvQWNjb3VudC9SZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsIkZvcm0iLCJmb3JtQ3JlYXRlRWRpdEFjY291bnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJsb2NhdGlvbiIsInVzZUxvY2F0aW9uIiwidXNlciIsImdldExvY2FsU3RvcmUiLCJhY2NvdW50UmVkdWNlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJuZXdBY2NvdW50IiwidXNlU3RhdGUiLCJpc2xvYWRpbmciLCJzZXRMb2FkaW5nIiwibmFtZSIsInVzZXJfbmFtZSIsInBhc3N3b3JkIiwicGFzc3dvcmRfcmVwZWF0IiwiZ2VuZGVyIiwiZW1haWwiLCJwaG9uZSIsImJpcnRoX2RhdGUiLCJkYXRhVXNlciIsInNldERhdGFVc2VyIiwib25TdWJtaXRJbmZvIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJSVUxFUyIsIlBBR0VTX1VSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQSxzQkFFYUMsaURBQUEsRUFGYjtBQUFBO0FBQUEsTUFFWkMscUJBRlk7O0FBR25CLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLDREQUFVLEVBQTFCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyw2REFBVyxFQUE1QjtBQUNBLE1BQU1DLElBQUksR0FBR0MsK0RBQWEsQ0FBQyxNQUFELENBQTFCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHQyx3REFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNGLGNBQVY7QUFBQSxHQUFOLENBQWxDO0FBUG1C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REEsQ0FyQ0EsZUE0Q0E7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLGlEQUFDLDhDQUFEO0FBQVcsUUFBSSxFQUFDLFVBQWhCO0FBQTJCLFNBQUssRUFBRUEsaUVBQUE7QUFBbEMsa0JBQ0ksaURBQUMsaUVBQUQ7QUFBZSxTQUFLLEVBQUM7QUFBckIsSUFESixDQURKLENBREEsQ0E1Q0EsZUFtREE7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLGlEQUFDLDhDQUFEO0FBQVcsUUFBSSxFQUFDLFlBQWhCO0FBQTZCLFNBQUssRUFBRUEsaUVBQUE7QUFBcEMsa0JBQ0ksaURBQUMsaUVBQUQ7QUFBZSxTQUFLLEVBQUM7QUFBckIsSUFESixDQURKLENBREEsQ0FuREEsZUEwREE7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQSxpREFBQyxnRUFBRDtBQUNJLGFBQVMsRUFBQyxVQURkO0FBRUksU0FBSyxFQUFDLFNBRlY7QUFHSSxZQUFRLEVBQUM7QUFIYixJQURBLENBMURBLENBSkosQ0FGUixlQXlFUTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNRLHFFQURSLGVBRVEsaURBQUMsbURBQUQ7QUFBTSxNQUFFLFlBQUtDLHlEQUFMO0FBQVIsNEJBRlIsQ0F6RVIsQ0FEQSxDQURBLENBRkosQ0FESjtBQXlGSCxDQWxIRDs7QUFvSEEsK0RBQWVqQyxRQUFmLEUiLCJmaWxlIjoic3JjX3RlbXBsYXRlc19BY2NvdW50X1JlZ2lzdGVyX2pzLmQ3MDcwYTU3OGZjM2M3ZWY3NmFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnksIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IFBBR0VTX1VSTCwgUEVSTUlTU0lPTiB9IGZyb20gXCIuLi8uLi9jb250YW50XCI7XHJcbmltcG9ydCB7IGNvbnZlcnRDb250YW50LCBnZXRMb2NhbFN0b3JlLCBSVUxFUyB9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvVXRpbHNcIjtcclxuaW1wb3J0IHsgQnV0dG9uU3R5bGUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9iYXNlL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBJbnB1dEJhc2UsIElucHV0RGF0ZVBpY2tlciwgSW5wdXRQYXNzd29yZCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvSW5wdXRcIjtcclxuaW1wb3J0IHsgU2VsZWN0U2luZ2xlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9TZWxlY3RcIjtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtmb3JtQ3JlYXRlRWRpdEFjY291bnRdID0gRm9ybS51c2VGb3JtKClcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgICBjb25zdCB1c2VyID0gZ2V0TG9jYWxTdG9yZSgndXNlcicpXHJcbiAgICBjb25zdCBhY2NvdW50UmVkdWNlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFjY291bnRSZWR1Y2VyKVxyXG4gICAgY29uc3QgeyBuZXdBY2NvdW50IH0gPSBhY2NvdW50UmVkdWNlcjtcclxuICAgIGNvbnN0IFtpc2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2RhdGFVc2VyLCBzZXREYXRhVXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgdXNlcl9uYW1lOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgcGFzc3dvcmRfcmVwZWF0OiAnJyxcclxuICAgICAgICBnZW5kZXI6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgYmlydGhfZGF0ZTogJycsXHJcbiAgICAgICAgLy8gcGVybWlzc2lvbl9jb2RlOiBjb252ZXJ0Q29udGFudCgndXNlcicsIFBFUk1JU1NJT04sIFwibGFiZWxcIikudmFsdWVcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNvbnN0IG9uU3VibWl0SW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4gc2NiLWxvZ2luXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5fX2JnXCIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luX19yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wteGwtOVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luX19mb3JtXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm09e2Zvcm1DcmVhdGVFZGl0QWNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25GaW5pc2g9e29uU3VibWl0SW5mb31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5SZWdpc3RlcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wteGwtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cy1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwibmFtZVwiIHJ1bGVzPXtSVUxFUy50ZXh0RnVsbE5hbWUuZm9ybSgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QmFzZSBsYWJlbD1cIk5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLXhsLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXMtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInVzZXJOYW1lXCIgcnVsZXM9e1JVTEVTLnRleHRGdWxsTmFtZS5mb3JtKCl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRCYXNlIGxhYmVsPVwiVXNlciBOYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC14bC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJiaXJ0aERhdGVcIiBydWxlcz17UlVMRVMuYmlydGhkYXkuZm9ybSgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0RGF0ZVBpY2tlciBsYWJlbD1cIkJpcnRoIERhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLXhsLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXMtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImdlbmRlclwiIHJ1bGVzPXtSVUxFUy50ZXh0LmZvcm0oKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RTaW5nbGUgbGFiZWw9XCJHZW5kZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLXhsLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXMtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImVtYWlsXCIgcnVsZXM9e1JVTEVTLmVtYWlsLmZvcm0oKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEJhc2UgbGFiZWw9XCJFbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wteGwtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cy1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwicGhvbmVcIiBydWxlcz17UlVMRVMucGhvbmUuZm9ybSgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QmFzZSBsYWJlbD1cIlBob25lXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLXhsLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXMtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInBhc3N3b3JkXCIgcnVsZXM9e1JVTEVTLnBhc3N3b3JkLmZvcm0oKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFBhc3N3b3JkIGxhYmVsPVwiUGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLXhsLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXMtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInJlUGFzc3dvcmRcIiBydWxlcz17UlVMRVMucGFzc3dvcmQuZm9ybSgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0UGFzc3dvcmQgbGFiZWw9XCJSZXR5cGUgcGFzc3dvcmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uU3R5bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1ibHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2lnbiBpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdXBwb3J0LWxvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5PciA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YCR7UEFHRVNfVVJMLmxvZ2luLnVybH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIGluIHlvdXIgYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=