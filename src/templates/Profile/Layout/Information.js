import { Form} from 'antd';
import { InputBase } from 'components/base/Input';
import CardWrap from 'components/common/Card/CardWarp';
import e from 'cors';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { accountAction } from 'store/action';
import { ModalChangePass } from './index';

const Information = ({ data, formInfo, disabled}) => {
    const dispatch = useDispatch()
    
    const [visibleChangePass, setVisibleChangePass] = useState(false)
    

    const {accountId} = useParams();

    const store = useSelector(state => state.accountReducer);

    useEffect(() => {
        if (data) {
            formInfo.setFieldsValue({
                fullname: data.name,
                username: data.username,
                password: "******",
                email: data.mail,
                phone: data.mobile
            })
        }
    },[data])

    const onSubmitInfo = (values) => {
        if (values) {
            const {fullname, email, phone , address} = values
            let params = {
                user_id: parseInt(accountId),
                name: fullname ? fullname : null,
                mail : email ? email : null,
                mobile: phone ? phone : null,
            }
            dispatch(accountAction.updateInfoProfile(params))
        } 
    }

    return (
        <CardWrap isHeigth title="Information">
            <Form 
                layout="vertical"
                form={formInfo}
                onFinish={onSubmitInfo}
            >
                <div className="row">
                    <div className="col-12 col-sm-6 col-xl-6">
                        <Form.Item label="Họ tên" name="fullname">
                            <InputBase disabled={disabled}/>
                        </Form.Item>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-6">
                        <Form.Item label="Tên tài khoản" name="username">
                            <InputBase disabled={true}/>
                        </Form.Item>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-6">
                        <div className="two-label">
                            <label>Mật khẩu</label>
                            <label className="text-underline uni_text_6d30ab" onClick={() => setVisibleChangePass(true)}>Đổi mật khẩu</label>
                        </div>
                        <Form.Item name="password">
                            <InputBase disabled={true}/>
                        </Form.Item>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-6">
                        <Form.Item label="Email" name="email">
                            <InputBase disabled={disabled}/>
                        </Form.Item>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-6">
                        <Form.Item label="Địa chỉ" name="address">
                            <InputBase disabled={disabled}/>
                        </Form.Item>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-6">
                        <Form.Item label="Số điện thoại" name="phone">
                            <InputBase disabled={disabled}/>
                        </Form.Item>
                    </div>
                </div>
            </Form>
            <ModalChangePass visible={visibleChangePass} setVisible={setVisibleChangePass}/>
        </CardWrap>
    )
}

export default Information;