import React from 'react';
import { Input } from 'antd';
import { getValueAndSetDefault } from "../../../functions/Utils";


const { TextArea } = Input;
const InputTextArea = (props) => {
    const { classNameGroup, value, handleChange, label, name, textAreaClassName, placeholder, labelClassName } = props
    return (
        <div className={classNameGroup ? classNameGroup : "form-group"}>
            <label className={getValueAndSetDefault(labelClassName, 'label')}>
                {label}
            </label>
            <TextArea
                className={getValueAndSetDefault(textAreaClassName, '')}
                placeholder={getValueAndSetDefault(placeholder, 'Nhập')}
                name={name}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}
export default InputTextArea;
