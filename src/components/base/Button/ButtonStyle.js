import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from "antd";
import { getValueAndSetDefault } from '../../../functions/Utils';

const ButtonStyle = (props) => {

    //className button :   btn-white, btn-red, btn-blue, btn-red-outline, btn-white-outline, 
    //                     btn-blue-outline, btn-red-bd-none, btn-light-blue
    const { className, label, onClick, isButton = true, iconClassname, url, htmlType } = props
    return (
        isButton    //check có phải là loại nút (isButton = true (mặc định)) hay link (isButton = true) )
            ?
            <Button
                className={`btn ${getValueAndSetDefault(className, '')}`}
                onClick={onClick}
                htmlType={getValueAndSetDefault(htmlType, '')}
            //classname icon exp: fas fa-folder-open
            >
                {iconClassname && <i className={`btn-icon ${getValueAndSetDefault(iconClassname, '')}`} />}
                {label}
            </Button>
            :
            <Link
                className={`btn ${getValueAndSetDefault(className, '')}`}
                to={getValueAndSetDefault(url, '#')}
            >
                {iconClassname && <i className={`btn-icon ${getValueAndSetDefault(iconClassname, '')}`} />}
                {getValueAndSetDefault(label, '')}
            </Link>
    )
}

export default ButtonStyle;