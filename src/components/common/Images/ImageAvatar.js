import React, { useEffect, useRef, useState } from "react";
import { getBase64, showNotification } from "../../../functions/Utils";
import { Button, message, Upload } from "antd";

const ImageAvatar = ({ img, onChangeFile, disabled }) => {

    const [state, setState] = useState({
        imageUrl: null,
        loading: false,
    })

    useEffect(() => {
        if (img) setState({ imageUrl: img, })
    }, [img])

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            showNotification.error({ title: "error", message: 'You can only upload JPG/PNG file!' })
        }

        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            showNotification.error({ title: "error", message: 'Image must smaller than 2MB!' })
        }
        return isJpgOrPng && isLt2M;
    }


    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setState({ loading: true });
            return;
        }
        if (info.file) {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                return (
                    setState({
                        imageUrl: imageUrl,
                        loading: false,
                    }),
                    onChangeFile(imageUrl)
                ) 
            });
        }
    }

    return (
        <div className="ImageAvatar" >
            {state?.imageUrl ? <>
                <div id="div_image_preview">
                    <img className="img-thumbnail user_avatar" src={state.imageUrl} />
                    <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    beforeUpload={(e) => beforeUpload(e)}
                    onChange={(e) => handleChange(e)}
                    disabled={disabled}
                >
                    <Button className="fw-medium uni_text_6d30ab">Cập nhật hình ảnh</Button>
                </Upload>
            </div>
            </>
            :
                <div className="m_drag-images">
                    <p className="text">
                        <i className='fas fa-images' aria-hidden="true" />
                        <span>Cập nhật hình ảnh</span>
                    </p>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    beforeUpload={(e) => beforeUpload(e)}
                    onChange={(e) => handleChange(e)}
                    disabled={disabled}
                >
                    <Button className="fw-medium uni_text_6d30ab">Cập nhật hình ảnh</Button>
                </Upload>
                </div>
            }
        </div>
    );
};

export default ImageAvatar