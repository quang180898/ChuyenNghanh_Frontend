import React from "react";
import CardStyle from "../../../components/base/Card/CardStyle";
import ButtonStyle from "../../../components/base/Button/ButtonStyle"

const CardBook = (props) => {

    const { title, book_content, image } = props
    return (
        <div className="book">
            <CardStyle
                title={title}
            >
                <div className="item">
                    <figure className="image">
                    <img src={`data:image/jpeg;base64,${image}`}/>
                        <a className="link">Chi Tiết</a>
                    </figure>
                </div>
            </CardStyle>
        </div>
    )
}

export default CardBook
