import React from "react";
import { Pagination as PaginationAntd } from 'antd';
import { getValueAndSetDefault } from '../../../functions/Utils.js';

const PaginationSingle = (props) => {
    const { className, showTotal=true, defaultPageSize, total, onChange, current, pageSize, itemRenderProp,showLessItems } = props

    const itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <a>Trước</a>;
        }
        if (type === 'next') {
            return <a>Kế tiếp</a>;
        }
        return originalElement;
    }

    return (
        <PaginationAntd
            className={`scb-pagination ${getValueAndSetDefault(className, '')}`}
            defaultCurrent={1}
            pageSize={pageSize ? pageSize : 0}
            current={current}
            defaultPageSize={defaultPageSize}
            onChange={onChange}
            showTotal={showTotal ? (total, range) => `${range[0]} tới ${range[1]} của ${total} mục`
                :
                ''
            }
            itemRender={itemRenderProp ? itemRenderProp : itemRender}
            total={total}
            responsive={true}
            showLessItems={showLessItems}
        />
    )
}

export default PaginationSingle;

