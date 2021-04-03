import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { ButtonStyle } from '../../../components/base/Button';
import { IMAGE_URL } from '../../../contant';



const ModalComfirm = (props) => {
    const { visible, setVisible, isLeave, content, onCancel, onSubmit } = props

    return (
        <Modal
            visible={visible}
            className="scb-modal"
            width={400}
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        {
                            isLeave
                                ? <img src={`${IMAGE_URL}../images/exit-m.svg`} alt="" className="modal-img" />
                                : <img src={`${IMAGE_URL}../images/delete.svg`} alt="" className="modal-img" />
                        }
                        <div className="modal-note">{content}</div>
                    </div>
                    <div className="modal-footer">
                        <ButtonStyle className={`${isLeave ? 'btn-blue' : 'btn-red'}`} data-dismiss="modal" label={`${isLeave ? 'Rời khỏi' : 'Xóa'}`} onClick={onSubmit} />
                        <ButtonStyle className=" btn-white-outline" data-dismiss="modal" label="Huỷ bỏ" onClick={onCancel} />
                    </div>
                </div>
            </div>
        </Modal>
    )
}
export default ModalComfirm;