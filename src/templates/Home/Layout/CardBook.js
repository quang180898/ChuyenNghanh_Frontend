import { Card } from "antd";
import { ButtonStyle } from "components/base/Button";
import React from "react";

const CardBook = (props) => {
    const { title, image , total} = props
    return (
        <div className="book">
            <Card
                hoverable
                cover
            >
                <div className="item">
                    <figure className="image">
                    <img src={`data:image/jpeg;base64,${image}`}/>
                        <a className="link">Chi Tiết</a>
                    </figure>
                    <span>{title}</span>
                </div>
                <div className="support-book">
                    <ButtonStyle label="Mượn sách"></ButtonStyle>
                    <span>Số lượng: {total}</span>
                </div>
                
            </Card>
        </div>
    )
}

export default CardBook
