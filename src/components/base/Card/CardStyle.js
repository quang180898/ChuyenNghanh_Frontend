import React from 'react';
import { Card } from "antd";
import { HeadingCard } from '../../common/Heading';
import { getValueAndSetDefault } from '../../../functions/Utils';

const CardStyle = (props) => {
    const { title, action, className } = props
    return (
        <Card>
            <HeadingCard
                className={getValueAndSetDefault(className, '')}
                title={getValueAndSetDefault(title, '')}>       {/*Text Card title  */}
                {getValueAndSetDefault(action, '')}                      {/*Action nếu có */}
            </HeadingCard>
            {props.children}                                            {/*Content card */}
        </Card>
    )
}
export default CardStyle;