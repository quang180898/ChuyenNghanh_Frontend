import React from 'react'
import { Button, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';

const UploadImage = ({ onChange, children }) => {

    const onChangeImage = ({ file }) => {
        let params = {
            name: file.name,
            originFileObj: file.originFileObj,
            size: file.size,
            type: file.type,
            blob: URL.createObjectURL(file.originFileObj)
        }
        if (onChange) {
            onChange(params)
        }
    }

    const customRequest = () => {

    }
    return (
        <Upload
            onChange={onChangeImage}
            showUploadList={false}
            customRequest={customRequest}
        // listType="picture-card"
        >
            {children}
        </Upload>
    )
}

export default UploadImage;