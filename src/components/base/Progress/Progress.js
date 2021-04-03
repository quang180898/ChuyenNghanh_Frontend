import React from "react";
import { Progress } from 'antd';
import { getValueAndSetDefault } from '../../../functions/Utils.js';

const ProgressBase = (props) => {
    const { className, percent, showInfo, status } = props
    return (
        <Progress
            className={getValueAndSetDefault(className, '')}
            percent={percent}
        />
    )
}

export default ProgressBase;