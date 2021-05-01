import React from "react";
import CardStyle from "../../../components/base/Card/CardStyle";
import ButtonStyle from "../../../components/base/Button/ButtonStyle"

const CardBook = (props) => {

    const { title, book_content } = props
    return (
        <div className="book">
            <CardStyle
                title={title}

            >
                <div className="book__img">
                    <img src='../images/library.jpg' className="img" />
                </div>
                <div className="book__content">
                    {book_content}
                </div>
                <div className="book__btn">
                    <ButtonStyle className="btn-blue mr-3" label="Detail" />
                    <ButtonStyle className="btn-blue" label="View" />
                </div>
            </CardStyle>
        </div>
    )
}

export default CardBook
