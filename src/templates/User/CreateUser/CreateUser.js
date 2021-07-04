import React, { useEffect, useState, useRef } from "react";
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import CardWrap from "components/common/Card/CardWarp";
import { RULES, showNotification } from "functions/Utils";
import { InputBase, InputPassword } from "components/base/Input";
import { ButtonStyle } from "components/base/Button";
import { FILE_CONTENT_TYPE, MAX_SIZE_IMAGE, NOTIFICATION_TYPE, PAGES_URL } from "contant";
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
                formCreateEditAccount.resetFields()
                setState(e => ({ ...e, file: null }))
                history.push(PAGES_URL.user.url)
                showNotification.success({ message: 'Đăng ký thành công', title: 'Thành công' })
            }
            else {
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
        <>
            <CardWrap title="Thêm người dùng">
                <Form
                    form={formCreateEditAccount}
                    onFinish={onSubmitInfo}
                    layout="vertical"
                >
                    <div className="row">
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
                <div className="text-right">
                    <ButtonStyle
                        className="btn-purple btn-create-user"
                        label="Tạo tài khoản"
                        onClick={onClickCreateUser}
                        style={{ minWidth: "190px" }}
                    />
                </div>
            </CardWrap>
            <div class="text-right mt-3">
                <ButtonStyle className="btn-white" label="Trở về" onClick={() => history.goBack()} style={{ minWidth: "190px" }} />
            </div>
        </>
    )
}

export default CreateUser;
