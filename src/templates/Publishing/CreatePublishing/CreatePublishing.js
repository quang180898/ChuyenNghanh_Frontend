import { Empty, Form } from 'antd';
import { CardWarp } from 'components/common/Card';
import React, { useEffect } from 'react';
import { InputBase, InputTextArea } from 'components/base/Input';
import { ButtonStyle } from 'components/base/Button';
import { removeEmptyFromObj, RULES, showNotification } from 'functions/Utils';
import { publishingAction } from 'store/action';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PAGES_URL } from 'contant';

const CreatePublishing = () => {

    const history = useHistory();
    const [formCreateAuthor] = Form.useForm();
    const dispatch = useDispatch();

    const store = useSelector(state => state.publishingReducer)
    const { createPublishing } = store;

    useEffect(() => {
        if (createPublishing) {
            if (createPublishing.success) {
                showNotification.success({ message: 'Thêm thành công', title: 'Thành công' })
                history.push(PAGES_URL.publishing.url)

            } else {
                showNotification.error({ message: createPublishing.detail, title: 'Thất bại' })
            }
            dispatch(publishingAction.requestClearAction())
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
                    layout="vertical"
                >
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xl-4">
                            <Form.Item name="name" label="Tên nhà xuất bản" className="form-group" rules={RULES.textFullName.form()} >
                                <InputBase />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                                <Form.Item name="mobile" label="Số điện thoại" className="form-group" rules={RULES.phone.form()}>
                                    <InputBase  />
                                </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                                <Form.Item name="mail" className="form-group" label="Email">
                                    <InputBase  />
                                </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                                <Form.Item name="address" label="Địa chỉ" className="form-group" rules={RULES.text.form()}>
                                    <InputBase  />
                                </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                                <Form.Item name="fax" label="Fax" className="form-group">
                                    <InputBase  />
                                </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                                <Form.Item name="website" label="Website" className="form-group">
                                    <InputBase  />
                                </Form.Item>
                        </div>
                        <div className="col-12">
                                <Form.Item name="description" label="Mô tả" className="form-group">
                                    <InputTextArea  />
                                </Form.Item>
                        </div>
                    </div>
                    <div className="text-right">
                        <ButtonStyle
                            className="btn-purple"
                            label="Thêm nhà xuất bản"
                            style={{ minWidth: "190px" }}
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