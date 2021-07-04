import { Empty, Form } from 'antd';
import { CardWarp } from 'components/common/Card';
import React, { useEffect } from 'react';
import { InputBase, InputDatePicker } from 'components/base/Input';
import { ButtonStyle } from 'components/base/Button';
import { formatDate, removeEmptyFromObj, RULES, showNotification } from 'functions/Utils';
import { authorAction, bookAction } from 'store/action';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FORMAT_DATE_API, FORMAT_HOUR_API, PAGES_URL } from 'contant';

const CreateBookAccount = () => {

    const history = useHistory();
    const [formcreateAccountBook] = Form.useForm();
    const dispatch = useDispatch();

    const store = useSelector(state => state.bookReducer)
    const { addAccount } = store;

    useEffect(() => {
        if (addAccount) {
            if (addAccount.success) {
                showNotification.success({ message: 'Thêm thành công', title: 'Thành công' })
                history.push(PAGES_URL.accountBook.url)
            } else {
                showNotification.error({ message: addAccount.detail, title: 'Thất bại' })
            }
            dispatch(authorAction.requestClearAction())
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
                    layout="vertical"
                >
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xl-6">
                            <Form.Item name="book_id" label="Mã sách" className="form-group" rules={RULES.number.form()} >
                                <InputBase />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-6">
                            <Form.Item name="user_id" label="Mã người dùng" className="form-group" rules={RULES.number.form()}>
                                <InputBase />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-6">
                            <Form.Item name="date_borrow" label="Ngày mượn" className="form-group" rules={RULES.text.form()}>
                                <InputDatePicker />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-6">
                            <Form.Item name="date_return" label="Ngày trả" className="form-group" rules={RULES.text.form()} >
                                <InputDatePicker />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="text-right">
                        <ButtonStyle
                            className="btn-purple"
                            label="Thêm sách người dùng"
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

export default CreateBookAccount;