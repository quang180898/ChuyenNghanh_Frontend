import { Card } from 'antd';
import { PAGES_URL } from 'contant';
import React from 'react';
import ReactStars from "react-rating-stars-component";
import { useHistory } from 'react-router-dom';

const CardRelated = ({id, title, image, price}) => {

    const history = useHistory();

    const onChangeBook = (id) => {
        history.push(PAGES_URL.product.url + "/" + id)
    }

    return (
        <div className="card-related" onClick={() => onChangeBook(id)}>
            <Card 
                hoverable
                cover
            >
            <div className="image mb-2">
                <img src={`data:image/jpeg;base64,${image}`}/>
            </div>
            <div class="title">{title}</div>
            <div className="detail-product__rate-star">
                <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                />
                <span className="feedback">(Xem {123} đánh giá)</span>
            </div>
            <span className="price">{price}</span> 
            </Card>
        </div>
    )
}

export default CardRelated;