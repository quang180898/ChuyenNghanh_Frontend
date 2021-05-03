import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from "antd";
import { getValueAndSetDefault } from '../../../functions/Utils';

const ButtonStyle = (props) => {

    const { className, label, onClick, isButton = true, iconClassname, url, htmlType } = props
    return (
        isButton    
            ?
            <Button
                className={`btn ${getValueAndSetDefault(className, '')}`}
                onClick={onClick}
                htmlType={getValueAndSetDefault(htmlType, '')}
            
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