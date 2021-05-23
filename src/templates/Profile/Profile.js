import { Form } from 'antd';
import { ButtonStyle } from 'components/base/Button';
import { CARD_EQUAL } from 'contant';
import React, { useState } from 'react';
import { Avatar, Information } from './Layout';

const Profiles = () => {

    const [formInfo] = Form.useForm();
    const [disableUpdate, setDisableUpdate] = useState(true)

    const onSubmitInfo = () => {
        setDisableUpdate(true)
        formInfo.submit()
    }

    const onResetField = () => {
        setDisableUpdate(true)
        formInfo.resetFields()
    }

    return (
        <>
        <div className="profile">
            <div className="row">
                <div className={`col-lg-3 col-md-12 col-sm-12 ${CARD_EQUAL}`}>
                    <Avatar disableb={disableUpdate} disabled={disableUpdate}/>
                </div>
                <div className={`col-lg-9 col-md-12 col-sm-12 ${CARD_EQUAL}`}>    
                    <Information formInfo={formInfo} disabled={disableUpdate}/>
                </div>
            </div>
        </div>
        <div className="text-right">
            {disableUpdate ? 
            <ButtonStyle className="btn-black-outline" label="Chỉnh sửa" onClick={() => setDisableUpdate(false)} iconClassname="far fa-edit"/>
                :
            <>
            <ButtonStyle className="btn-red mr-2" label="Huỷ" onClick={onResetField}/> 
            <ButtonStyle className="btn-purple" label="Cập nhật" onClick={onSubmitInfo}/> 
            </>
            }
        </div>
        </>
    )
}

export default Profiles;