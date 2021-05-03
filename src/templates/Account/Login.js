import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form } from 'antd';
import { accountAction } from '../../store/action';
import { RULES , showNotification} from "functions/Utils";
import { PAGES_URL, NOTIFICATION_TYPE} from "contant";
import { InputBase, InputPassword } from "../../components/base/Input";
import { useDispatch, useSelector } from "react-redux";
import { ButtonStyle } from "components/base/Button";
import { StaticLoading } from "components/base/Loading";

const Login = () => {
    const dispatch = useDispatch();
    const [formLogin] = Form.useForm();
    const history = useHistory();
    const dataLogin = useSelector(state => state.accountReducer);
    const { error, login } = dataLogin;
    const [state, setState] = useState({
        isWarning: false,
        isSave: false
    })

    const [loading, setLoading] = useState(false)

    // check login fail and off loading
    useEffect(()=>{
        if(dataLogin && dataLogin.error && dataLogin.error.err){
            setLoading(false);
        }
    },[dataLogin])

    console.log("login", login)

    useEffect(() => {
        const auth = localStorage.getItem('auth')
        if (auth) {
            let data = new Buffer(auth, 'base64').toString('ascii').split(':')
            formLogin.setFieldsValue({ username: data[0], password: data[1] })
            setState({ ...state, username: data[0], password: data[1], isSave: true })
        }
    }, [])

    const onSubmitInfo = (e) => {
        const { username, password } = state
        if (state.isSave) {
            let auth = new Buffer(username + ":" + password).toString('base64')
            localStorage.setItem('auth', auth)
        } else {
            localStorage.removeItem('auth')
        }

        dispatch(accountAction.loadLogin({ user_name: username, pass_word: password }))

        setLoading(true)
    }

    useEffect(() => {
        if (login) {
            setTimeout(() => {
                setLoading(false)
            }, 2000)

            if (login.success === false) {
                setTimeout(() => {
                    showNotification({ type: NOTIFICATION_TYPE.error, title: "Có lỗi xảy ra", message: login && login.detail, duration: 1.8 })
                }, 2100)
            }
        }
    }, [login])

    return (
        <div className="login scb-login">
            <div className="login__bg"/>
            {loading && <StaticLoading />}
            <div className="login__right">
                <div className="login__form">
                    <Form
                        form={formLogin}
                        onFinish={onSubmitInfo}
                    >
                        <div className="title">Sign in</div>
                        <div className="cus-input">
                            <Form.Item name="username" rules={RULES.text.form()} >
                                <InputBase label="Username" onChange={e => setState({ ...state, username: e.target.value })} />
                            </Form.Item>
                        </div>
                        <div className="cus-input">
                            <Form.Item name="password" rules={RULES.password.form()} >
                                <InputPassword label="Password" onChange={e => setState({ ...state, password: e.target.value })} />
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
