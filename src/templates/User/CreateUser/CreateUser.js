import React, { useEffect, useState, useRef } from "react";
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import CardWrap from "components/common/Card/CardWarp";
import { RULES, showNotification } from "functions/Utils";
import { InputBase, InputPassword } from "components/base/Input";
import { ButtonStyle } from "components/base/Button";
import { FILE_CONTENT_TYPE, MAX_SIZE_IMAGE, NOTIFICATION_TYPE } from "contant";
import { accountAction } from "store/action";
import { useHistory } from "react-router";

const CreateUser = () => {
    const history = useHistory();
    const [formCreateEditAccount] = Form.useForm();
    const dispatch = useDispatch();
    const accountReducer = useSelector(state => state.accountReducer)
    const { newAccount } = accountReducer;
    const refFile = useRef()
    const [state, setState] = useState({ file: null, data: null, showPassword: false })
    const [dataUser, setDataUser] = useState({
        name: '',
        user_name: '',
        password: '',
        password_repeat: '',
        email: '',
        phone: '',
    })

    useEffect(() => {
        if(newAccount) {
            if(newAccount.success) {
                formCreateEditAccount.resetFields()
                setState(e => ({...e, file: null}))
                showNotification({ message: 'Đăng ký thành công', title: 'Thành công', type: NOTIFICATION_TYPE.error })
            }
        }

    }, [newAccount])

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
            if (password === rePassword) {
                dispatch(accountAction.createOrUpdateAccount(params))
            } else {
                showNotification({ message: 'Mật khẩu không trùng nhau', title: 'waring', type: NOTIFICATION_TYPE.error })
            }
        }
    }

    const onChangeFile = (e) => {
        if (e) {
            let files = e.target.files
            if (files.size > MAX_SIZE_IMAGE) {
                return
            }
            if (files && files.length > 0) {
                setState({ ...state, file: files[0] })
            }
        }
    }

    return (
        <>
        <CardWrap title="Thêm người dùng">
            <div className="login__form register">
                <Form
                    form={formCreateEditAccount}
                    onFinish={onSubmitInfo}
                >
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xl-4">
                            <div className="cus-input">
                                <Form.Item name="name" rules={RULES.textFullName.form()} >
                                    <InputBase label="Họ tên" />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <div className="cus-input">
                                <Form.Item name="userName" rules={RULES.text.form()} >
                                    <InputBase label="Tên tài khoản" />
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
                                    <InputBase label="Số điện thoại" />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <div className="cus-input">
                                <Form.Item name="password" rules={RULES.password.form()} >
                                    <InputPassword label="Mật khẩu" />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <div className="cus-input">
                                <Form.Item name="rePassword" rules={RULES.password.form()} >
                                    <InputPassword label="Nhập lại mật khẩu" />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="cus-input mb-3">
                                <input type="file"
                                    ref={refFile}
                                    onChange={onChangeFile}
                                    accept={`${FILE_CONTENT_TYPE.XPNG, FILE_CONTENT_TYPE.GIF, FILE_CONTENT_TYPE.JPEG}`}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <ButtonStyle
                            className="btn-purple btn-create-user"
                            label="Tạo tài khoản"
                            htmlType="submit"
                        />
                    </div>
                </Form>
            </div>
        </CardWrap>
        <div class="text-right mt-3">
            <ButtonStyle className="btn-white" label="Trở về" onClick={() => history.goBack()} style={{ minWidth: "190px" }} />
    </div>
    </>
    )
}

export default CreateUser;
