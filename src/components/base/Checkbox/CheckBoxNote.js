import React from "react";
import { getValueAndSetDefault } from '../../../functions/Utils';
import InputBase from "../Input/InputBase";
import { Checkbox } from "antd";

const CheckBoxNote = (props) => {
    const { className, onChange, disabled, checked, value } = props
    return (
        <div className={`scb-checkbox-note ${getValueAndSetDefault(className, '')}`}>
            <Checkbox value={value}>Khác</Checkbox>
            <InputBase />
        </div>

    )
}

export default CheckBoxNote;