import React, { useEffect, useState } from "react";
import { Form } from 'antd';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { accountAction } from '../../store/action';
import { PAGES_URL, GENDER_TYPE ,PERMISSION } from "../../contant";
import { convertContant, getLocalStore, RULES } from "../../functions/Utils";
import { ButtonStyle } from "../../components/base/Button";
import { InputBase, InputDatePicker, InputPassword } from "../../components/base/Input";

const Register = () => {

    const [formCreateEditAccount] = Form.useForm()
    const dispatch = useDispatch();
    const dateFormat = "DD/MM/YYYY";
    const accountReducer = useSelector(state => state.accountReducer)
    const { newAccount } = accountReducer;
    const [isloading, setLoading] = useState(false);
    const [dataUser, setDataUser] = useState({
        name: '',
        user_name: '',
        password: '',
        password_repeat: '',
        email: '',
        phone: '',
        // permission_code: convertContant('user', PERMISSION, "label").value
    })

    const onSubmitInfo = (data) => {
        if (data) {
            const {name , userName, email, password, rePassword, phone} = data
            const params = {
                name: name,
                user_name: userName,
                pass_word: password,
                password_repeat: rePassword,
                mobile: phone,
                mail: email,
            }
            dispatch(accountAction.createOrUpdateAccount(params))
        }
        setLoading(true)
    }

    return (
        <div className="login scb-login">
            <div className="login__bg"/>
            <div className="login__right">
            <div className="col-12 col-md-7 col-xl-9">
            <div className="login__form register">
                    <Form
                        form={formCreateEditAccount}
                        onFinish={onSubmitInfo}
                    >
                        <div className="row">
                        <div className="title">Register</div>
                        <div className="col-12 col-sm-6 col-xl-4">
                        <div className="cus-input">
                            <Form.Item name="name" rules={RULES.textFullName.form()} >
                                <InputBase label="Name" />
                            </Form.Item>
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                        <div className="cus-input">
                            <Form.Item name="userName" rules={RULES.text.form()} >
                                <InputBase label="User Name" />
                            </Form.Item>
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                        <div className="cus-input">
                            <Form.Item name="email" rules={RULES.email.form()} >
                                <InputBase label="Email" />
                            </Form.Item>
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                        <div className="cus-input">
                            <Form.Item name="phone" rules={RULES.phone.form()} >
                                <InputBase label="Phone"/>
                            </Form.Item>
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                        <div className="cus-input">
                            <Form.Item name="password" rules={RULES.password.form()} >
                                <InputPassword label="Password" />
                            </Form.Item>
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                        <div className="cus-input">
                            <Form.Item name="rePassword" rules={RULES.password.form()} >
                                <InputPassword label="Retype password"/>
                            </Form.Item>
                        </div>
                        </div>
                        <div className="col-12">
                        <ButtonStyle
                            className="btn-blue"
                            label="Sign in"
                            htmlType="submit"
                        />
                        </div>
                        </div>
                    </Form>      
                    <div className="support-login">
                            <span>Or </span>
                            <Link to={`${PAGES_URL.login.url}`}>
                                Sign in your account
                            </Link>
                        </div>
            </div>          
            </div>
        </div>
        </div>
    )
}

export default Register;
