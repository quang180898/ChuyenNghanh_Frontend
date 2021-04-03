import React, { useState, useEffect } from "react";
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { getValueAndSetDefault } from "../../../functions/Utils";

const dateFormat = "DD/MM/YYYY"
const InputDatePicker = (props) => {

    const { labelClassName, label, classNameGroup, placeholder, onChange, name, value, disabledDate, datePickerClassName, defaultValue } = props;
    return (
        <div className={classNameGroup ? classNameGroup : "form-group"}>
            <label className={getValueAndSetDefault(labelClassName, 'label')}>
                {label}
            </label>
            <DatePicker
                className={getValueAndSetDefault(datePickerClassName, '')}
                defaultValue={defaultValue && moment(defaultValue, "YYYY-MM-DD")}
                value={value && moment(value, "YYYY-MM-DD")}
                name={name}
                format={dateFormat}
                placeholder={getValueAndSetDefault(placeholder, 'Nhập')}
                onChange={onChange}
                disabledDate={disabledDate}
            />
        </div>
    )
}

export default InputDatePicker