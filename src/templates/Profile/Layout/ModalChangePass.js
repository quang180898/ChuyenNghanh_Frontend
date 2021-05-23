import { Form } from 'antd';
import { ButtonStyle } from 'components/base/Button';
import { InputBase } from 'components/base/Input';
import { ModalCustom } from 'components/base/Modal';
import { RULES } from 'functions/Utils';
import React from 'react';

const ModalChangePass = ({ visible, setVisible }) => {

    const handleCancel = () => {
        setVisible(false)
    }

    return (
        <ModalCustom
            title="Promotion policy"
            visible={visible}
            onCancel={handleCancel}
            widthModal={450}
            button={
                <div className="modal-card__btn">
                    <ButtonStyle
                        className='btn-white mr-2'
                        label="Đóng"
                        onClick={handleCancel}
                    />
                    <ButtonStyle
                        className='btn-purple'
                        label="Cập nhật"
                        onClick={handleCancel}
                    />
                </div>
            }
        >
            <Form 
                layout="vertical"
            >
                <div className="row">
                    <div className="col-12">
                        <Form.Item 
                            label="Mật khẩu" 
                            className="form-group" 
                            name="full_name" 
                            rules={RULES.text.form()}>
                            <InputBase 
                                placeholder="Mật khẩu"
                            />
                        </Form.Item>
                    </div>
                    <div className="col-12">
                        <Form.Item
                            label="Mật khẩu mớI"
                            className="form-group"
                             name="username"
                              rules={RULES.text.form()}>
                        <InputBase 
                                placeholder="Mật khẩu mới"
                        />
                        </Form.Item>
                    </div>
                    <div className="col-12">
                        <Form.Item 
                            label="Nhập lại mật khẩu mới"
                            className="form-group"
                            name="username"
                            rules={RULES.text.form()}>
                        <InputBase 
                                placeholder="Nhập lại mật khẩu mới"
                        />
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </ModalCustom>
    )
}

export default ModalChangePass;