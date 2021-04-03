import React from "react";
import { Select } from "antd";
import { getValueAndSetDefault } from "../../../functions/Utils";

const { Option } = Select;

const SelectSingle = (props) => {
    const { selectClassName, options, placeholder, defaultValue, onChange, value, dropdownClassName, classNameGroup, labelClassName, label, onSearch, showSearch = false } = props;

    return (
        <div className={getValueAndSetDefault(classNameGroup, 'form-group')}>
            <label className={getValueAndSetDefault(labelClassName, 'label')}>
                {label}
            </label>
            <Select
                className={getValueAndSetDefault(selectClassName, '')}
                dropdownClassName={getValueAndSetDefault(dropdownClassName, '')}
                placeholder={getValueAndSetDefault(placeholder, 'Chọn')}
                showArrow={true}
                showSearch={showSearch}
                value={value}
                defaultValue={defaultValue}
                onSearch={onSearch}
                onChange={(e) => onChange && onChange(e)}
                mode="single">
                {options && options.length && options.map((item, index) => {
                    return (
                        <Option key={index} value={item.value}> {item.label} </Option>
                    )
                })}
            </Select>
        </div>
    )
}
export default SelectSingle;
