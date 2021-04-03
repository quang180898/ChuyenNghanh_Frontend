import React from 'react'
import { Input } from 'antd';
import { getValueAndSetDefault } from "../../../functions/Utils";

const dateFormatBase = "DD/MM/YYYY"

const InputBase = (props) => {
    const { prefix, suffix, label, value, placeholder, onChange, inputClassName, labelClassName, classNameGroup, allowClear = true, disabled, dateFormat } = props;
    return (
        <div className={getValueAndSetDefault(classNameGroup, 'form-group')}>
            <label className={getValueAndSetDefault(labelClassName, 'label')}>
                {label}
            </label>
            <Input
                className={getValueAndSetDefault(inputClassName, '')}
                placeholder={getValueAndSetDefault(placeholder, 'Nhập')}
                onChange={onChange}
                value={value}
                format={dateFormat ? dateFormat : dateFormatBase}
                allowClear={allowClear ? allowClear : allowClear}
                disabled={disabled}
                suffix={suffix}
                prefix={prefix}>
            </Input>
        </div >
    )
}

export default InputBase;