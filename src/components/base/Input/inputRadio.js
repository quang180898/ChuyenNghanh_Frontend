import React from "react";
import { Radio } from 'antd';
import { getValueAndSetDefault } from '../../../functions/Utils.js';

const inputRadio = (props) => {
    const { className, onChange, options, disabled, checked, value } = props

    return (
        <Radio.Group
            className={getValueAndSetDefault(className, '')}
            value={getValueAndSetDefault(value, '')}
            options={options}
            onChange={(e) => onChange && onChange(e.target.value)}>
        </Radio.Group>
    )
}

export default inputRadio;