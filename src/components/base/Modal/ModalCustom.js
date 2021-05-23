import React, { useState } from 'react';
import { Modal } from 'antd';
import { CardHeader } from 'components/common/Card';

const ModalCustom = (props) => {
    const { visible, widthModal, setVisible, title, classBody, classModal, onCancel, style, centered, strongName } = props
    const [isClearData, setClearData] = useState(false)

    const afterClearData = () => {
        setClearData(false)
    }
    return (
        <Modal
            footer={false}
            forceRender
            visible={visible}
            onCancel={onCancel}
            style={style}
            centered={centered}
            className={`modal-card ${classModal ? classModal : ''}`}
            width={widthModal ? widthModal : '390px'}>
            <div className="modal-content modal_special">
                <CardHeader title={title} strongName={strongName} />
                <div className={`modal-body ${classBody ? classBody : ''}`}>
                    {props.children}
                    {props.button}
                </div>
            </div>
        </Modal>
    )
}

export default ModalCustom;
