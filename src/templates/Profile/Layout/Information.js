import { Form} from 'antd';
import { InputBase } from 'components/base/Input';
import CardWrap from 'components/common/Card/CardWarp';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { accountAction } from 'store/action';
import { ModalChangePass } from './index';

const Information = ({formInfo, disabled}) => {
    const dispatch = useDispatch()
    
    const [state, setState] = useState()
    const [visibleChangePass, setVisibleChangePass] = useState(false)
    

    const {accountId} = useParams();

    const store = useSelector(state => state.accountReducer);
    const { infoProfile } = store;

    useEffect(() => {
        dispatch(accountAction.getInfoProfile({ user_id: accountId }))
    },[])

    useEffect(() => {
        if (infoProfile) {
            formInfo.setFieldsValue({
                full_name: "hihi"
            })
        }
    },[infoProfile])

    const onSubmitInfo = (e) => {
        console.log(e)
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
                        <Form.Item label="Họ tên" name="full_name">
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
                            <InputBase disabled={true}/>
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