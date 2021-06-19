import { Empty, Form } from 'antd';
import { CardWarp } from 'components/common/Card';
import React, { useEffect } from 'react';
import { InputBase, InputTextArea } from 'components/base/Input';
import { ButtonStyle } from 'components/base/Button';
import { removeEmptyFromObj, RULES, showNotification } from 'functions/Utils';
import { publishingAction } from 'store/action';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const CreatePublishing = () => {

    const history = useHistory();
    const [formCreateAuthor] = Form.useForm();
    const dispatch = useDispatch();

    const store = useSelector(state => state.publishingReducer)
    const { createPublishing } = store;

    useEffect(() => {
        if (createPublishing) {
            if (createPublishing.success) {
                showNotification.success({ message: 'Thêm thành công', title: 'success' })
                dispatch(publishingAction.requestClearAction())
            }
        }
    }, [createPublishing])

    const onSubmitInfo = (data) => {
        const params = removeEmptyFromObj(data);
        if (params) {
            dispatch(publishingAction.createPublishing(params))
        }
    }

    return (
        <>
            <CardWarp title="Thêm nhà xuất bản">
                <Form
                    form={formCreateAuthor}
                    onFinish={onSubmitInfo}
                >
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xl-4">
                            <div className="cus-input">
                                <Form.Item name="name" rules={RULES.textFullName.form()} >
                                    <InputBase label="Tên nhà xuất bản" />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <div className="cus-input">
                                <Form.Item name="mobile" rules={RULES.phone.form()}>
                                    <InputBase label="Số điện thoại" />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <div className="cus-input">
                                <Form.Item name="mail">
                                    <InputBase label="Email" />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <div className="cus-input">
                                <Form.Item name="address" rules={RULES.text.form()}>
                                    <InputBase label="Địa chỉ" />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <div className="cus-input">
                                <Form.Item name="fax">
                                    <InputBase label="Fax" />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <div className="cus-input">
                                <Form.Item name="website">
                                    <InputBase label="Website" />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="cus-input">
                                <Form.Item name="description">
                                    <InputTextArea label="Mô tả" />
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <ButtonStyle
                            className="btn-purple"
                            label="Thêm nhà xuất bản"
                            htmlType="submit"
                        />
                    </div>
                </Form>
            </CardWarp>
            <div class="text-right mt-3">
                <ButtonStyle className="btn-white" label="Trở về" onClick={() => history.goBack()} style={{ minWidth: "190px" }} />
            </div>
        </>
    )
}

export default CreatePublishing;