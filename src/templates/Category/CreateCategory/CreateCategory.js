import { Empty, Form } from 'antd';
import { CardWarp } from 'components/common/Card';
import React, { useEffect } from 'react';
import { InputBase, InputTextArea } from 'components/base/Input';
import { ButtonStyle } from 'components/base/Button';
import { removeEmptyFromObj, RULES, showNotification } from 'functions/Utils';
import { categoryAction } from 'store/action';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const CreateCategory = () => {

    const history = useHistory();
    const [formCreateCategory] = Form.useForm();
    const dispatch = useDispatch();

    const store = useSelector(state => state.categoryReducer)
    const { createCategory } = store;

    useEffect(() => {
        if (createCategory) {
            if (createCategory.success) {
                showNotification.success({ message: 'Thêm thành công', title: 'success' })
                dispatch(categoryAction.requestClearAction())
            }
        }
    }, [createCategory])

    const onSubmitInfo = (data) => {
        const params = removeEmptyFromObj(data);
        if (params) {
            dispatch(categoryAction.createCategory(params))
        }
    }

    return (
        <>
            <CardWarp title="Thêm danh mục">
                <Form
                    form={formCreateCategory}
                    onFinish={onSubmitInfo}
                >
                    <div className="cus-input">
                        <Form.Item name="name" rules={RULES.textFullName.form()} >
                            <InputBase label="Tên danh mục" />
                        </Form.Item>
                    </div>

                    <div className="cus-input">
                        <Form.Item name="desctription" >
                            <InputTextArea label="Mô tả" />
                        </Form.Item>
                    </div>
                    <div className="text-right">
                        <ButtonStyle
                            className="btn-purple"
                            label="Thêm danh mục"
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

export default CreateCategory;