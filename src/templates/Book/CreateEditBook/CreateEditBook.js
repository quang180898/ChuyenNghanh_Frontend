import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CardWarp } from 'components/common/Card';
import { Form, Upload } from 'antd';
import { ButtonStyle } from 'components/base/Button';
import { InputBase, InputTextArea } from 'components/base/Input';
import { SelectSingle } from 'components/base/Select';
import { useDispatch, useSelector } from 'react-redux';
import { authorAction, bookAction, homeAction, publishingAction } from 'store/action';
import { ListAuthorMapping, ListCategoryMapping, ListPublishingMapping } from './MapData';
import { b64toBlob, RULES, showNotification } from 'functions/Utils';
import { useHistory } from 'react-router-dom';

const CreateEditBook = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { bookId } = useParams()
    const [formInfo] = Form.useForm();

    const [isAvatar, setAvatar] = useState({
        fileUrl: null, //avatar
        file: {
            file_name: null,
            file_url: null,
            file_size: null,
            file_type: null,
        },
        fileUpload: null,
    })

    const [stateLocal, setStateLocal] = useState({
        listCategory: null,
        listPublishing: null,
        listAuthor: null,
    })

    const store = useSelector(state => state)
    const { listCategory } = store.homeReducer
    const { listAuthor } = store.authorReducer
    const { listPublishing } = store.publishingReducer
    const { createUpdateBook, detailBook } = store.bookReducer

    useEffect(() => {
        if (bookId) {
            dispatch(bookAction.getDetailBook({ book_id: bookId }))
        } else {
            formInfo.resetFields();
        }
        dispatch(homeAction.loadListCategory())
        dispatch(authorAction.getListAuthor())
        dispatch(publishingAction.getListPublishing())
    }, [])

    useEffect(() => {
        if (detailBook) {
            if (detailBook.success) {
                setAvatar(e => ({ ...e, fileUrl: b64toBlob(detailBook.detail.image_bytes) }))
                formInfo.setFieldsValue({
                    author_id: detailBook.detail.author_id,
                    category_id: detailBook.detail.category_id,
                    publishing_company_id: detailBook.detail.publishing_company_id,
                    description: detailBook.detail.description,
                    location: detailBook.detail.location,
                    name: detailBook.detail.name,
                    price: parseInt(detailBook.detail.price),
                    quantity: parseInt(detailBook.detail.quantity)
                })
                dispatch(bookAction.requestClearAction())
            }
        }
    }, [detailBook])

    useEffect(() => {
        if (listCategory) {
            if (listCategory.success) {
                const newCategory = ListCategoryMapping(listCategory.detail)
                setStateLocal(e => ({ ...e, listCategory: newCategory }))
            }
        }
    }, [listCategory])

    useEffect(() => {
        if (listAuthor) {
            if (listAuthor.success) {
                const newAuthor = ListAuthorMapping(listAuthor.detail)
                setStateLocal(e => ({ ...e, listAuthor: newAuthor }))
            }
        }
    }, [listAuthor])

    useEffect(() => {
        if (listPublishing) {
            if (listPublishing.success) {
                const newPublishing = ListPublishingMapping(listPublishing.detail)
                setStateLocal(e => ({ ...e, listPublishing: newPublishing }))
            }
        }
    }, [listPublishing])

    useEffect(() => {
        if (createUpdateBook) {
            if (createUpdateBook.success) {
                showNotification.success({ title: "Thành công", message: 'Cập nhật thành công' })
                dispatch(bookAction.requestClearAction())
            }
        }
    }, [createUpdateBook])

    const submitInfor = (values) => {
        if (isAvatar.fileUpload !== null) {
            let params = {
                image: isAvatar.fileUpload,
                image_name: Date.now() + "imagebook.png",
                author_id: values.author_id,
                category_id: values.category_id,
                publishing_company_id: values.publishing_company_id,
                description: values.description,
                location: values.location,
                name: values.name,
                price: parseInt(values.price),
                quantity: parseInt(values.quantity)

            }
            dispatch(bookAction.createUpdateBook(params))
        } else {
            showNotification.error({ title: "Lỗi", message: 'Vui lòng chọn hình!' })
        }
    }

    const onChangeFile = (e) => {
        if (e) {
            let files = e.file.originFileObj
            if (files) {
                setAvatar({
                    ...isAvatar,
                    fileUrl: URL.createObjectURL(files),
                    fileUpload: files,
                })
            }
        }
    }

    return (
        <>
            <CardWarp title="Thông tin sách">
                <Form
                    form={formInfo}
                    onFinish={submitInfor}
                    layout="vertical"
                >
                    <div className="row ">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 d-flex flex-column">
                            {
                                isAvatar.fileUrl
                                    ? <div id="div_image_preview">
                                        <img className="img-thumbnail user_avatar" src={isAvatar.fileUrl} />
                                        <Upload onChange={onChangeFile} className="img_upload_database">
                                            Cập nhật hình ảnh
                                        </Upload>
                                    </div>
                                    :
                                    <div className="m_drag-images cursor-pointer" style={{ minHeight: "310px" }} >
                                        <Upload onChange={onChangeFile} className="img_upload_database">
                                            <p className="text change_avatar_profile">
                                                <i class="fas fa-images"></i>
                                                <span>Cập nhật hình ảnh</span>
                                            </p>
                                        </Upload>
                                    </div>
                            }
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12">
                            <div className="row mt-3">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <Form.Item
                                        name="name"
                                        className="form-group"
                                        label="Tên sách"
                                        rules={RULES.text.form()}
                                    >
                                        <InputBase></InputBase>
                                    </Form.Item>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <Form.Item
                                        name="price"
                                        className="form-group"
                                        label="Giá sách"
                                        rules={RULES.number.form()}
                                    >
                                        <InputBase></InputBase>
                                    </Form.Item>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                    <Form.Item
                                        name="category_id"
                                        className="form-group"
                                        label="Danh mục sản phẩm"
                                        rules={RULES.text.form()}
                                    >
                                        <SelectSingle options={stateLocal.listCategory}></SelectSingle>
                                    </Form.Item>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                    <Form.Item
                                        name="author_id"
                                        className="form-group"
                                        label="Tác giả"
                                        rules={RULES.text.form()}
                                    >
                                        <SelectSingle options={stateLocal.listAuthor}></SelectSingle>
                                    </Form.Item>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                    <Form.Item
                                        name="publishing_company_id"
                                        className="form-group"
                                        label="Nhà xuất bản"
                                        rules={RULES.text.form()}
                                    >
                                        <SelectSingle options={stateLocal.listPublishing}></SelectSingle>
                                    </Form.Item>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <Form.Item
                                        name="location"
                                        className="form-group"
                                        label="Kệ sách"
                                        rules={RULES.text.form()}
                                    >
                                        <InputBase></InputBase>
                                    </Form.Item>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <Form.Item
                                        name="quantity"
                                        className="form-group"
                                        label="Số lượng"
                                        rules={RULES.number.form()}
                                    >
                                        <InputBase></InputBase>
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Form.Item
                        name="description"
                        className="form-group"
                        label="Mô tả"
                        rules={RULES.text.form()}
                    >
                        <InputTextArea />
                    </Form.Item>
                    <div class="text-right mt-4">
                        <ButtonStyle
                            label="Cập nhật"
                            className='btn-purple'
                            style={{ minWidth: "190px" }}
                            htmlTyple='submit'
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

export default CreateEditBook;