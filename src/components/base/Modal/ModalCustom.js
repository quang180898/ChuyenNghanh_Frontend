import React, { useState } from 'react';
import { Modal } from 'antd';
import { ButtonStyle } from '../Button';

const ModalCustom = (props) => {
    const { visible, widthModal, title, classBody, classModal, onCancel, onSubmit, hideButton, onCancelBtn } = props

    return (
        <Modal
            forceRender
            visible={visible}
            //className={classModal ? classModal : ''}
            onCancel={onCancel}
            width={widthModal}
        >
            <div className="">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                </div>
                <div className={`modal-body ${classBody ? classBody : ''}`}>
                    {props.children}
                    {!hideButton &&
                        <div className="modal-footer">
                            <ButtonStyle className=" btn btn-blue" data-dismiss="modal" label="Lưu" onClick={onSubmit} />
                            <ButtonStyle className=" btn-red-outline" data-dismiss="modal" label="Huỷ bỏ" onClick={onCancelBtn} />
                        </div>
                    }
                </div>
            </div>
        </Modal>
    )
}

export default ModalCustom;
