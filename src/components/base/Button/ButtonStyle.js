import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from "antd";
import { getValueAndSetDefault } from '../../../functions/Utils';

const ButtonStyle = (props) => {

    const { className, label, onClick, isButton = true, iconClassname, url, htmlType, style } = props
    return (
        isButton    
            ?
            <Button
                className={`btn ${getValueAndSetDefault(className, '')}`}
                onClick={onClick}
                style={style}
                htmlType={getValueAndSetDefault(htmlType, '')}
            
            >
                {iconClassname && <i className={`btn-icon ${getValueAndSetDefault(iconClassname, '')}`} />}
                {label}
            </Button>
            :
            <Link
                className={`${getValueAndSetDefault(className, '')}`}
                to={getValueAndSetDefault(url, '#')}
            >
                {iconClassname && <i className={`btn-icon ${getValueAndSetDefault(iconClassname, '')}`} />}
                {getValueAndSetDefault(label, '')}
            </Link>
    )
}

export default ButtonStyle;