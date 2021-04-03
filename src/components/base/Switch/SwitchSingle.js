import React from "react";
import { Switch as SwitchAntd } from 'antd';
import { getValueAndSetDefault } from '../../../functions/Utils.js';

const SwitchSingle = (props) => {
    const { className, onChange, checked } = props
    return (
        <SwitchAntd
            className={`scb-switch ${getValueAndSetDefault(className, '')}`}
            onChange={onChange}
            checked={checked}
        />
    )
}

export default SwitchSingle;