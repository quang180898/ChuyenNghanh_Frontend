import React from 'react';

const FooterTable = (props) => {
    const { number } = props;
    return (
        <div className="footer-table">
            <div className="footer-table__total">
                Tổng số người tham gia:
                    <span className="text-primary ml-1">
                    {number}
                </span>
            </div>
            {props.children}
        </div>
    )
}

export default FooterTable;