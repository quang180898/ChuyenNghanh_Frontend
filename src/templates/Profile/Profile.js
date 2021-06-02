import { Form } from 'antd';
import { ButtonStyle } from 'components/base/Button';
import { CARD_EQUAL } from 'contant';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { accountAction } from 'store/action';
import { Avatar, Information } from './Layout';

const Profiles = () => {

    const dispatch = useDispatch();

    const {accountId} = useParams();

    const [formInfo] = Form.useForm();
    const [profileData, setProfileData] = useState()
    const [disableUpdate, setDisableUpdate] = useState(true)

    const store = useSelector(state => state.accountReducer);
    const { infoProfile } = store;

    useEffect(() => {
        dispatch(accountAction.getInfoProfile({ user_id: accountId }))
    },[])

    useEffect(() => {
        if (infoProfile) {
            if(infoProfile.success) {
                console.log(infoProfile.detail)
                let response = infoProfile.detail;
                setProfileData(response)
            } 
        }
    },[infoProfile])

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
                    <Avatar data={profileData}/>
                </div>
                <div className={`col-lg-9 col-md-12 col-sm-12 ${CARD_EQUAL}`}>    
                    <Information data={profileData} formInfo={formInfo} disabled={disableUpdate}/>
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