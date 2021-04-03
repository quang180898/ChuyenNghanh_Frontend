import React from "react";
import { getValueAndSetDefault } from '../../../functions/Utils';
import InputBase from "../Input/InputBase";
import { Radio } from "antd";

const RadioNote = (props) => {
    const { className, onChange, disabled, checked, value } = props
    return (
        <div className={`scb-checkbox-note ${getValueAndSetDefault(className, '')}`}>
            <Radio value={value}>Khác</Radio>
            <InputBase />
        </div>

    )
}

export default RadioNote;