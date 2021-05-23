import React, { useState } from 'react';
import { Button, Upload } from 'antd';
import { getBase64, getValueAndSetDefault } from 'functions/Utils';
import { useDispatch } from "react-redux";
import { IMAGE_URL } from 'contant';

const UploadAvatar = (props) => {
    const dispatch = useDispatch();
    const { className, onChange, oldUrl, hasUpdateAvatar = true } = props;
    const [image, setImage] = useState()
    // const newUrl = oldUrl ? oldUrl : IMAGE_URL + 'noavatar.png';
    var newUrl = false;

    const onChangeImage = ({ file }) => {
        console.log(file)
        getBase64(file.originFileObj, imageUrl => {
            let params = {
                name: file.name,
                originFileObj: file.originFileObj,
                size: file.size,
                type: file.type,
                blob: URL.createObjectURL(file.originFileObj)
            }
            setImage(imageUrl)
            if (onChange) {
                console.log(params)
                onChange(params)
            }
        }
        );
    }

    const customRequest = () => {

    }

    const callApi = () => {
        newUrl = true
    }
    return (
        <div className={`upload-avatar ${getValueAndSetDefault(className, '')}`} name-c="upload-avatar">
            {newUrl ? <>
                <img alt='avatar' src={newUrl} style={{ width: '100%', height: '100%' }} />
            </>
                :
                <div>
                    {image ?
                        <img alt='avatar' src={image} style={{ width: '100%', height: '100%' }} />
                        :
                        <>
                            <div class="m_drag-images">
                                <p class="text">
                                    <i class="lar la-images"></i>
                                    <span>Cập nhật hình ảnh kênh phân phối </span>
                                </p>
                            </div>
                        </>
                    }
                    <Upload
                        onChange={onChangeImage}
                        showUploadList={false}
                        customRequest={customRequest}
                    >
                        a
                    </Upload>
                </div>
            }
            <Upload
                onChange={onChangeImage}
                showUploadList={false}
                customRequest={customRequest}
            >
                {image ?
                    (hasUpdateAvatar ? <span className="change-avatar" >Change Avatar</span> : null)
                    :
                    null
                }
            </Upload>

        </div >
    )
}

export default UploadAvatar;