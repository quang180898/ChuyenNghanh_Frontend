import React from 'react';
import { Input } from 'antd';
import { getValueAndSetDefault } from "../../../functions/Utils";

const InputPassword = (props) => {
    const { prefix, inputClassName, label, value, onChange,classNameGroup, labelClassName } = props
    return (
        <div className={classNameGroup ? classNameGroup : "form-group"}>
            <label className={getValueAndSetDefault(labelClassName, 'label')}>
                {label}
            </label>
            < Input.Password
                className={getValueAndSetDefault(inputClassName, '')}
                onChange={onChange}
                value={value}
                prefix={prefix}
            />
        </div >
    )
}
export default InputPassword;