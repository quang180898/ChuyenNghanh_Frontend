import React, { useState } from 'react';

const CardHeader = ({ classHeading = "m_heading", title, children }) => {

    return (
        <div className={classHeading}>
            <button className="m_button no-event">
                <span>{title}</span>
            </button>
            {children}
        </div>
    );
}

export default CardHeader;