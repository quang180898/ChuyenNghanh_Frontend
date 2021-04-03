import React from 'react';
import { Input } from 'antd';
import { getValueAndSetDefault } from "../../../functions/Utils";

const InputPassword = (props) => {
    const { prefix, inputClassName, label, classNameGroup, labelClassName } = props
    return (
        <div className={classNameGroup ? classNameGroup : "form-group"}>
            <label className={getValueAndSetDefault(labelClassName, 'label')}>
                {label}
            </label>
            < Input.Password
                className={getValueAndSetDefault(inputClassName, '')}
                prefix={prefix}
            />
        </div >
    )
}
export default InputPassword;