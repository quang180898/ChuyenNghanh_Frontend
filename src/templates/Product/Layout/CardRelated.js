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
            <div className="image mb-2">
                <img src={`data:image/jpeg;base64,${image}`}/>
            </div>
            <div class="title">{title}</div>
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