import { Card } from 'antd';
import React from 'react';
import ReactStars from "react-rating-stars-component";

const CardRelated = ({title, image, price}) => {
    return (
        <div className="card-related">
            <Card 
                hoverable
                cover
            >
            <figure className="image">
            <img src={`data:image/jpeg;base64,${image}`}/>
            </figure>
            <label class="title">{title}</label>
            <div className="detail-product__rate-star">
                <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                />
                <span className="feedback">(Xem {123} đánh giá)</span>
            </div>
            <span className="price">{price}</span> 
            </Card>
        </div>
    )
}

export default CardRelated;