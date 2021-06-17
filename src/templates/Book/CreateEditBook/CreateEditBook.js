import React, { useState } from 'react';
import { useParams } from 'react-router';
import { CardWarp } from 'components/common/Card';
import { Form, Upload } from 'antd';
import { ButtonStyle } from 'components/base/Button';

const CreateEditBook = () => {
    const { bookId } = useParams()

    const [formInfo] = Form.useForm();

    const [stateLocal, setStateLocal] = useState({
        saveParams: null,
        saveStatus: null,
        isDisabled: false,
        statusId: null,
        statusType: [],
    })

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

    const submitInfor = (values) => {
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
                                    <Upload onChange={onChangeFile} className="img_upload_database" disabled={stateLocal.isDisabled}>
                                        Cập nhật hình ảnh
                                    </Upload>
                                </div>
                                :
                                <div className="m_drag-images cursor-pointer" style={{ minHeight: "310px" }} >
                                    <Upload onChange={onChangeFile} className="img_upload_database" disabled={stateLocal.isDisabled}>
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
                                    name="news_name"
                                    className="form-group"
                                    label="news_name"
                                    rules={[{ required: true }]}
                                >
                                </Form.Item>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <Form.Item
                                    name="news_name"
                                    className="form-group"
                                    label="news_name"
                                    rules={[{ required: true }]}
                                >
                                </Form.Item>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <Form.Item
                                    name="news_categories"
                                    className="form-group"
                                    label="categories"
                                    rules={[{ required: true }]}
                                >
                                </Form.Item>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <Form.Item
                                    name="to_date"
                                    className="form-group"
                                    label="to_date"
                                >
                                </Form.Item>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <Form.Item
                                    name="news_key"
                                    className="form-group"
                                    label="key_word"
                                >

                                </Form.Item>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <Form.Item
                                    name="news_key"
                                    className="form-group"
                                    label="key_word"
                                >

                                </Form.Item>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <Form.Item
                                    name="news_key"
                                    className="form-group"
                                    label="key_word"
                                >

                                </Form.Item>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <Form.Item
                                    name="news_key"
                                    className="form-group"
                                    label="key_word"
                                >

                                </Form.Item>
                            </div>
                        </div>
                    </div>
                </div>
                <Form.Item name="news_key"
                    className="form-group"
                    label="key_word">

                </Form.Item>
                {!stateLocal.isDisabled &&
                    <div class="text-right mt-4">
                        <ButtonStyle
                            label="button_update"
                            className='btn-purple'
                            style={{ minWidth: "190px" }}
                            htmlTyple='submit'
                        />
                    </div>
                }
            </Form>
        </CardWarp>
    )
}

export default CreateEditBook;