import React, { useEffect, useState, useRef } from "react";
import { Form } from 'antd';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { accountAction } from '../../store/action';
import { PAGES_URL } from "../../contant";
import { RULES, showNotification } from "../../functions/Utils";
import { FILE_CONTENT_TYPE, MAX_SIZE_IMAGE, NOTIFICATION_TYPE } from "../../contant";
import { ButtonStyle } from "../../components/base/Button";
import { InputBase, InputPassword } from "../../components/base/Input";

const Register = () => {

    const [formCreateEditAccount] = Form.useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const accountReducer = useSelector(state => state.accountReducer)
    const { newAccount } = accountReducer;
    const refFile = useRef()
    const [isloading, setLoading] = useState(false);
    const [state, setState] = useState({ file: null, data: null, showPassword: false })
    const [isShowAlert, setShowAlert] = useState(false)
    const [dataUser, setDataUser] = useState({
        name: '',
        user_name: '',
        password: '',
        password_repeat: '',
        email: '',
        phone: '',
    })

    useEffect(() => {
        if (newAccount) {
            if (newAccount.success) {
                showNotification.success({ message: 'Thêm thành công', title: 'Thành công' })
                history.push(PAGES_URL.login.url)
            } else {
                showNotification.error({ message: newAccount.detail, title: 'Thất bại' })
            }
            dispatch(accountAction.requestClearAction())
        }
    }, [newAccount])

    const onClickCreateUser = () => {
        if (state.file == null) {
            setShowAlert(true)
        }
        formCreateEditAccount.submit()
    }

    const onSubmitInfo = (data) => {
        if (data) {
            const { name, userName, email, password, rePassword, phone } = data
            const params = {
                name: name,
                user_name: userName,
                pass_word: password,
                password_repeat: rePassword,
                mobile: phone,
                mail: email,
            }
            if (state.file) {
                params.image = state.file
                params.image_name = state.file.name
            }
            if (password === rePassword && state.file) {
                dispatch(accountAction.createOrUpdateAccount(params))
            }
        }
        setLoading(true)
    }

    const onChangeFile = (e) => {
        if (e) {
            let files = e.target.files
            if (files.size > MAX_SIZE_IMAGE) {
                return
            }
            if (files && files.length > 0) {
                setState({ ...state, file: files[0] })
                setShowAlert(false)
            } else {
                setShowAlert(true)
            }
        }
    }

    return (
        <div className="login scb-login">
            <div className="login__bg" />
            <div className="login__right">
                <div className="col-12 col-md-7 col-xl-9">
                    <div className="login__form register">
                        <Form
                            form={formCreateEditAccount}
                            onFinish={onSubmitInfo}
                            layout="vertical"
                        >
                            <div className="row">
                                <div className="title">Register</div>
                                <div className="col-12 col-sm-6 col-xl-4">
                                    <Form.Item name="name" label="Họ tên" className="form-group" rules={RULES.textFullName.form()} >
                                        <InputBase />
                                    </Form.Item>
                                </div>
                                <div className="col-12 col-sm-6 col-xl-4">
                                    <Form.Item name="userName" label="Tên tài khoản" className="form-group" rules={RULES.text.form(true)} >
                                        <InputBase />
                                    </Form.Item>
                                </div>
                                <div className="col-12 col-sm-6 col-xl-4">
                                    <Form.Item name="email" label="Email" className="form-group" rules={RULES.email.form(true)} >
                                        <InputBase />
                                    </Form.Item>
                                </div>
                                <div className="col-12 col-sm-6 col-xl-4">
                                    <Form.Item name="phone" label="Số điện thoại" className="form-group" rules={RULES.phone.form(true)} >
                                        <InputBase />
                                    </Form.Item>
                                </div>
                                <div className="col-12 col-sm-6 col-xl-4">
                                    <Form.Item name="password" label="Mật khẩu" className="form-group" rules={RULES.password.form(true)} >
                                        <InputPassword />
                                    </Form.Item>
                                </div>
                                <div className="col-12 col-sm-6 col-xl-4">
                                    <Form.Item name="rePassword" label="Nhập lại mật khẩu" className="form-group" rules={RULES.password.form(true)} >
                                        <InputPassword />
                                    </Form.Item>
                                </div>
                                <div className="col-12 mb-3">
                                    <div class="fw-medium mb-1">Hình ảnh<span class="uni_star_e94c4c"> *</span></div>
                                    <input type="file"
                                        ref={refFile}
                                        onChange={onChangeFile}
                                        accept={`${FILE_CONTENT_TYPE.XPNG, FILE_CONTENT_TYPE.GIF, FILE_CONTENT_TYPE.JPEG}`}
                                    />
                                    <div className={`show-alert-upload ${isShowAlert ? "active" : ""}`}>Vui lòng chọn hình!</div>
                                </div>
                            </div>
                        </Form>
                        <div className="col-12">
                            <ButtonStyle
                                className="btn-purple"
                                label="Sign in"
                                onClick={onClickCreateUser}
                            />
                        </div>
                        <div className="support-login">
                            <span>Or </span>
                            <Link to={`${PAGES_URL.login.url}`}>
                                Sign in your account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Register;
