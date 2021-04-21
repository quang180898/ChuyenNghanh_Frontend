import React from "react";
import { Link } from "react-router-dom";
import { Form } from 'antd';
import { RULES } from "functions/Utils";
import { PAGES_URL } from "contant";
import { InputBase, InputPassword } from "components/base/Input";
import { useDispatch, useSelector } from "react-redux";
import { ButtonStyle } from "components/base/Button";

const Login = () => {
    const dispatch = useDispatch();
    const [formLogin] = Form.useForm();
    const dataLogin = useSelector(state => state.accountReducer);
    const { error, login } = dataLogin;
    const [state, setState] = useState({
        isWarning: false,
        isSave: false
    })

    const [loading, setLoading] = useState(false)
    const [time, setTime] = useState()

    // check login fail and off loading
    useEffect(()=>{
        if(dataLogin && dataLogin.error && dataLogin.error.err){
            setLoading(false);
        }
    },[dataLogin])


    const onSubmitInfo = (data) => {
        const { username, password } = data
        dispatch(accountAction.loadLogin({ username: username, password: password }))
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
                            <Form.Item name="username" rules={RULES.text.form()} >
                                <InputBase label="Username" />
                            </Form.Item>
                        </div>
                        <div className="cus-input">
                            <Form.Item name="password" rules={RULES.password.form()} >
                                <InputPassword label="Password" />
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
