import React from 'react';
import { getValueAndSetDefault } from '../../../functions/Utils';
const HeadingCard = (props) => {
    const { className } = props
    return (
        <div className={`title__card ${getValueAndSetDefault(className, '')}`}>
            <span className="text">
                {props.title}
            </span>
            <div className="title__action-button">
                {props.children}
            </div>
        </div >

    )
}
export default HeadingCard;
