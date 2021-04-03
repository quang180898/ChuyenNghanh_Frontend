import React from "react";
import { Checkbox } from 'antd';
import { getValueAndSetDefault } from '../../../functions/Utils.js';

const CheckBoxStyle = (props) => {
    const { className, onChange, disabled, checked, children, } = props

    return (
        <Checkbox
            className={getValueAndSetDefault(className, '')}
            onChange={(e) => onChange && onChange(e.target.checked)}>
            {children}
        </Checkbox>
    )
}

export default CheckBoxStyle;