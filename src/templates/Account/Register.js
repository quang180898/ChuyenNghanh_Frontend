import React from "react";
import { Form } from 'antd';
import { Link } from "react-router-dom";
import { IMAGE_URL, PAGES_URL } from "../../contant";
import { RULES } from "../../functions/Utils";
import { ButtonStyle } from "../../components/base/Button";
import { InputBase, InputPassword } from "../../components/base/Input";

const Register = () => {

    //tên form
    const [formRegister] = Form.useForm();

    //submit form lấy hết data từ form.item (e)
    const onSubmitInfo = (e) => {
        console.log(e);
    }
    return (
        <div className="login scb-login">
            <div className="login__bg"/>
            <div className="login__right">
            <div className="col-12 col-md-7 col-xl-9 d-flex flex-column">
                <div className="login__form">
                    <Form
                        form={formRegister}
                        onFinish={onSubmitInfo}
                    >
                        <div className="row">
                        <div className="title">Register</div>
                        <div className="col-12 col-md-6">
                        <div className="cus-input">
                            <Form.Item name="name" rules={RULES.textFullName.form()} >
                                <InputBase label="Name" />
                            </Form.Item>
                        </div>
                        </div>
                        <div className="col-12 col-md-6">
                        <div className="cus-input">
                            <Form.Item name="userName" rules={RULES.textFullName.form()} >
                                <InputBase label="User Name" />
                            </Form.Item>
                        </div>
                        </div>
                        <div className="col-12 col-md-6">
                        <div className="cus-input">
                            <Form.Item name="email" rules={RULES.email.form()} >
                                <InputBase label="Email" />
                            </Form.Item>
                        </div>
                        </div>
                        <div className="col-12 col-md-6">
                        <div className="cus-input">
                            <Form.Item name="phone" rules={RULES.phone.form()} >
                                <InputBase label="Số điện thoại"/>
                            </Form.Item>
                        </div>
                        </div>
                        <div className="col-12 col-md-6">
                        <div className="cus-input">
                            <Form.Item name="password" rules={RULES.password.form()} >
                                <InputPassword label="Password" />
                            </Form.Item>
                        </div>
                        </div>
                        <div className="col-12 col-md-6">
                        <div className="cus-input">
                            <Form.Item name="rePassword" rules={RULES.password.form()} >
                                <InputPassword label="Nhập lại password"/>
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

export default Register
