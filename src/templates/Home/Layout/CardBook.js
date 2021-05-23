import { Card } from "antd";
import { ButtonStyle } from "components/base/Button";
import React from "react";

const CardBook = (props) => {
    const { title, image , totalSize, totalBorrow} = props
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
                    <ButtonStyle className="btn-white" label="Mượn sách"></ButtonStyle>
                    {totalSize ? <span>Số lượng: {totalSize}</span> : <span>Lượt mượn: {totalBorrow}</span>}
                </div>     
            </Card>
        </div>
    )
}

export default CardBook
