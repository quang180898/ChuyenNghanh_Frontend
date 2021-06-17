import { Card } from "antd";
import { ButtonStyle } from "components/base/Button";
import { PAGES_URL } from "contant";
import React from "react";
import { useHistory } from "react-router-dom";

const CardBook = (props) => {

    const history = useHistory();

    const { title, image , totalSize , id, totalBorrow} = props

    const onMoveDetail = (id) => {
        history.push(PAGES_URL.product.url + "/" + id);
    }
    return (
        <div className="book">
            <Card
                hoverable
                cover
            >
                <div className="item">
                    <figure className="image">
                    <img src={`data:image/jpeg;base64,${image}`}/>
                        <a className="link" onClick={() => onMoveDetail(id)}>Chi Tiết</a>
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
