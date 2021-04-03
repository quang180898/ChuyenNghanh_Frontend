import React from "react";
import { getValueAndSetDefault } from '../../../functions/Utils.js';

const TableSingle = (props) => {
    const { className, tableFixed = true } = props;
    return (
        <div className={`cus-table mb-3 ${tableFixed ? 'table-fixed' : ''} ${getValueAndSetDefault(className, '')}`}>
            <table className="w-100">
                {props.children}
            </table>
        </div>
    )
}

export default TableSingle;