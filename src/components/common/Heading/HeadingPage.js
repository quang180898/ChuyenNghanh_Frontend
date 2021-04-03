import React from 'react';

const HeadingPage = (props) => {
    return (
        <div className="header-page" >
            <div className="header-page__title">
                {props.title}
            </div>
            <div className="header-page__action">
                {props.children}
            </div>
        </div >
    )
}

export default HeadingPage;