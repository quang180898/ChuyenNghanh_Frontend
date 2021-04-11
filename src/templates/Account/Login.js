import React from "react";
import { Link } from "react-router-dom";
import { Form } from 'antd';
import { RULES } from "functions/Utils";
import { IMAGE_URL, PAGES_URL } from "contant";
import { InputBase, InputPassword } from "components/base/Input";
import { ButtonStyle } from "components/base/Button";

const Login = () => {

    //tên form
    const [formLogin] = Form.useForm();

    //submit form lấy hết data từ form.item (e)
    const onSubmitInfo = (e) => {
        console.log(e);
    }
    return (
        <div className="login scb-login">
            <div className="login__bg"/>
            <div className="login__right">
                <div className="login__form">
                    <Form
                        form={formLogin}
                        onFinish={onSubmitInfo}
                    >
                        <div className="title">Sign in</div>
                        <div className="cus-input">
                            <Form.Item name="email" rules={RULES.email.form()} >
                                <InputBase label="Email" />
                            </Form.Item>
                        </div>
                        <div className="cus-input">
                            <Form.Item name="password" rules={RULES.password.form()} >
                                <InputPassword label="PassWord" />
                            </Form.Item>
                        </div>
                        <div className="forgot-password">
                            <Link to={`${PAGES_URL.forgotPassword.url}`}>
                                Forgot your password?
                            </Link>
                        </div>
                        <ButtonStyle
                            className="btn-blue"
                            label="Sign in"
                            htmlType="submit"
                        />
                        <div className="support-login">
                            <span>Don't have an account ?</span>
                            <Link to={`${PAGES_URL.register.url}`}>
                                Register
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>

        </div>
    )
}

export default Login
