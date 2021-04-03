import React from 'react';
import { Select } from 'antd';
import { getValueAndSetDefault } from "../../../functions/Utils";

const { Option } = Select;

const SelectMultiple = (props) => {
    const { onChange, options, classNameGroup, labelClassName, label } = props
    return (
        <div className={` form-group ${getValueAndSetDefault(classNameGroup, 'rc-select')}`}>
            <label className={getValueAndSetDefault(labelClassName, 'label')}>
                {label}
            </label>
            <Select defaultValue="lucy"
                onChange={onChange}
                mode="multiple">
                {options && options.length && options.map((item, index) => {
                    return (
                        <Option key={index} value={item.value}> {item.label} </Option>
                    )
                })}
            </Select>
        </div>

    )
}

export default SelectMultiple;
