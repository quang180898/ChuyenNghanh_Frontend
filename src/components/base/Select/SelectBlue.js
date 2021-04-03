import React from "react";
import { Select } from "antd";
import { getValueAndSetDefault } from "../../../functions/Utils";

const { Option } = Select;

const SelectBlue = (props) => {
    const { text, selectClassName, options, placeholder, defaultValue, onChange, value, dropdownClassName, classNameGroup, labelClassName, label, onSearch, showSearch = false, labelInValue } = props;
    return (
        <div className="header-page__action-blue">
            <span className="text">{text}</span>
            <div className={getValueAndSetDefault(classNameGroup, 'form-group')}>
                <label className={getValueAndSetDefault(labelClassName, 'label')}>
                    {label}
                </label>
                <Select
                    className={getValueAndSetDefault(selectClassName, '')}
                    dropdownClassName={getValueAndSetDefault(dropdownClassName), ''}
                    placeholder={getValueAndSetDefault(placeholder, 'Chọn')}
                    showArrow={true}
                    showSearch={showSearch}
                    value={value}
                    defaultValue={defaultValue}
                    onSearch={onSearch}
                    labelInValue={labelInValue}
                    onChange={(e) => onChange && onChange(e)}
                    mode="single">
                    {options && options.length && options.map((item, index) => {
                        return (
                            <Option key={index} value={item.value}> {item.label} </Option>
                        )
                    })}
                </Select>
            </div>
        </div>
    )
}

export default SelectBlue;