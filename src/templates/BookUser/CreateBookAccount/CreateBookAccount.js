import { Empty, Form } from 'antd';
import { CardWarp } from 'components/common/Card';
import React, { useEffect } from 'react';
import { InputBase, InputDatePicker } from 'components/base/Input';
import { ButtonStyle } from 'components/base/Button';
import { formatDate, removeEmptyFromObj, RULES, showNotification } from 'functions/Utils';
import { authorAction, bookAction } from 'store/action';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FORMAT_DATE_API, FORMAT_HOUR_API } from 'contant';

const CreateBookAccount = () => {

    const history = useHistory();
    const [formcreateAccountBook] = Form.useForm();
    const dispatch = useDispatch();

    const store = useSelector(state => state.bookReducer)
    const { addAccount } = store;

    useEffect(() => {
        if (addAccount) {
            if (addAccount.success) {
                showNotification.success({ message: 'Thêm thành công', title: 'success' })
                dispatch(authorAction.requestClearAction())
            } else {
                showNotification.error({ message: addAccount.detail, title: 'error' })
            }
        }
    }, [addAccount])

    const onSubmitInfo = (data) => {
        let params = {
            book_id: parseInt(data.book_id),
            user_id: parseInt(data.user_id),
            date_borrow: formatDate({ date: data.date_borrow, type: FORMAT_HOUR_API, format: FORMAT_DATE_API }),
            date_return: formatDate({ date: data.date_return, type: FORMAT_HOUR_API, format: FORMAT_DATE_API }),
        }
        // const newData = removeEmptyFromObj(params);
        if (params) {
            dispatch(bookAction.createAccountBook(params))
        }
    }

    return (
        <>
            <CardWarp title="Thêm sách người dùng">
                <Form
                    form={formcreateAccountBook}
                    onFinish={onSubmitInfo}
                >
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xl-6">
                            <div className="cus-input">
                                <Form.Item name="book_id" rules={RULES.number.form()} >
                                    <InputBase label="Mã sách" />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-6">
                            <div className="cus-input">
                                <Form.Item name="user_id" rules={RULES.number.form()}>
                                    <InputBase label="Mã người dùng" />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-6">
                            <div className="cus-input">
                                <Form.Item name="date_borrow" rules={RULES.text.form()}>
                                    <InputDatePicker label="Ngày mượn" />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-6">
                            <div className="cus-input">
                                <Form.Item name="date_return" rules={RULES.text.form()} >
                                    <InputDatePicker label="Ngày trả" />
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <ButtonStyle
                            className="btn-purple"
                            label="Thêm sách người dùng"
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

export default CreateBookAccount;