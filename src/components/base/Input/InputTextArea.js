import React from 'react';
import { Input } from 'antd';
import { getValueAndSetDefault } from "../../../functions/Utils";


const { TextArea } = Input;
const InputTextArea = (props) => {
    const { classNameGroup, value, onChange, label, name, textAreaClassName, rows ,placeholder, labelClassName } = props
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
                rows={rows}
                onChange={onChange}
            />
        </div>
    )
}
export default InputTextArea;
