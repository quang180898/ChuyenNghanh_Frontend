import React from 'react';

const Profiles = () => {

    const [visibleModal, setVisibleModal] = useState(false)
    const [imageCurrent, setImageCurrent] = useState()
    const [openCropper, setOpenCropper] = useState(false)

    return (
        <CardWrap isHeigth title="setting_heading_avatar">
            <div id="div_image_preview">
                <img className="img-thumbnail user_avatar" src={data?.avatar} />
                <small className="mt-2 mb-1 fs-13">
                    <u onClick={changeAvatar} className="cursor-pointer fw-medium uni_text_6d30ab change_avatar_profile">{t('setting_change_avatar')}</u>
                </small>
            </div>
            {
                !data?.avatar &&
                <div className="m_drag-images cursor-pointer" onClick={changeAvatar}>
                    <p className="text change_avatar_profile">
                        <i class="fas fa-images"></i>
                        <span>{t('setting_change_avatar')}</span>
                    </p>
                </div>
            }
            <ModalCustom widthModal="800px" classModal="modal-update-avatar" visible={visibleModal} title={t('setting_update_avatar_heading')}>
                <ContentUpload setVisibleModal={setVisibleModal} oldUrl={data?.avatar} />
            </ModalCustom>
        </CardWrap>
    )
}

export default Profiles;