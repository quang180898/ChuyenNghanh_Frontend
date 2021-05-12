import React from "react";
import { Pagination as PaginationAntd } from 'antd';
import { getValueAndSetDefault } from '../../../functions/Utils.js';

const PaginationSingle = (props) => {
    let { data, onChange, onSearchPage, className, itemRenderProp, showTotal = false, showSizeChanger = false, showLessItems = false } = props;

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0) {
            if (onChange) {
                onChange(pageNumber)
            }
        }
    }

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
            pageSize={data.limit}
            current={data.page}
            onChange={handlePageChange}
            showTotal={showTotal ? (total, range) => `${range[0]} tới ${range[1]} của ${total} mục`
                :
                ''
            }
            itemRender={itemRenderProp ? itemRenderProp : itemRender}
            total={data.total_record}
            responsive={true}
            showLessItems={showLessItems}
            showSizeChanger={showSizeChanger}
        />
    )
}

export default PaginationSingle;

