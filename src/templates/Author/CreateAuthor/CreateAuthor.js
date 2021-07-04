import { Empty, Form } from 'antd';
import { CardWarp } from 'components/common/Card';
import React, { useEffect } from 'react';
import { InputBase } from 'components/base/Input';
import { ButtonStyle } from 'components/base/Button';
import { removeEmptyFromObj, RULES, showNotification } from 'functions/Utils';
import { authorAction } from 'store/action';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PAGES_URL } from 'contant';

const CreateAuthor = () => {

    const history = useHistory();
    const [formCreateAuthor] = Form.useForm();
    const dispatch = useDispatch();

    const accountReducer = useSelector(state => state.authorReducer)
    const { createAuthor } = accountReducer;

    useEffect(() => {
        if (createAuthor) {
            if (createAuthor.success) {
                showNotification.success({ message: 'Thêm thành công', title: 'Thành công' })
                history.push(PAGES_URL.author.url)    
            }
            else {
                showNotification.error({ message: createAuthor.detail, title: 'Thất bại' })
            }
            dispatch(authorAction.requestClearAction())
        }
    }, [createAuthor])

    const onSubmitInfo = (data) => {
        const params = removeEmptyFromObj(data);
        if (params) {
            dispatch(authorAction.createAuthor(params))
        }
    }

    return (
        <>
            <CardWarp title="Thêm tác giả">
                <Form
                    form={formCreateAuthor}
                    onFinish={onSubmitInfo}
                    layout="vertical"
                >
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xl-4">
                                <Form.Item name="name" label="Họ tên" className="form-group" rules={RULES.textFullName.form()} >
                                    <InputBase />
                                </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                                <Form.Item name="mobile" label="Số điện thoại" className="form-group" rules={RULES.phone.form()}>
                                    <InputBase  />
                                </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                                <Form.Item name="mail" label="Email" className="form-group" rules={RULES.email.form()}>
                                    <InputBase  />
                                </Form.Item>
                        </div>
                    </div>
                    <div className="text-right">
                        <ButtonStyle
                            className="btn-purple"
                            label="Thêm tác giả"
                            htmlType="submit"
                            style={{ minWidth: "190px" }}
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

export default CreateAuthor;