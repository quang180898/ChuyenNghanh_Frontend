import React from 'react';
import { Spin } from "antd";
import { Loading3QuartersOutlined } from '@ant-design/icons';

const SpinLoading = ({ className, spinning, style, children }) => {
    const antIcon = <div className="d-flex flex-column">
        <Loading3QuartersOutlined style={{ fontSize: 50, color: '#fff' }} spin />
        <div><span class="spinner-text">Loading...</span></div>

    </div>;
    return (
        <Spin className={className ? className : "loading_full"} spinning={spinning ? true : false} style={style} indicator={antIcon}>
            {children}
        </Spin>
    )
}
export default SpinLoading;