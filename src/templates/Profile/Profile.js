import { CARD_EQUAL } from 'contant';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { accountAction } from 'store/action';
import { Avatar, Information } from './Layout';

const Profiles = () => {

    const dispatch = useDispatch();

    const {accountId} = useParams();

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

    return (
        <>
        <div className="profile">
            <div className="row">
                <div className={`col-lg-3 col-md-12 col-sm-12 ${CARD_EQUAL}`}>
                    <Avatar data={profileData}/>
                </div>
                <div className={`col-lg-9 col-md-12 col-sm-12 ${CARD_EQUAL}`}>    
                    <Information data={profileData} disabled={disableUpdate} setDisabled={setDisableUpdate}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profiles;