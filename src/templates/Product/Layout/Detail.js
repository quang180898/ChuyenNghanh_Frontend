
import ReactStars from "react-rating-stars-component";
import React, { useState } from 'react';
import { ButtonStyle } from "components/base/Button";
import { CARD_EQUAL } from "contant";
import { InputUpDown } from "components/base/Input";
import CardWrap from "components/common/Card/CardWarp";

const Detail = () => {


    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <CardWrap isHeigth title="Sản phẩm">
            <div className='row'>
                <div className={`col-lg-5 col-md-5 col-sm-12 ${CARD_EQUAL}`}>
                    <div className="list-image">
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </div>
                </div>
                <div className={`col-lg-7 col-md-7 col-sm-12 ${CARD_EQUAL}`}>
                    <div className="detail-product">
                        <div className="detail-product__header">
                            <span className="label-author">Tác giả: </span>
                            <span className="author-name"> Nguyễn Đăng Quang</span>
                        </div>
                        <div className="detail-product__body">
                            <div className="detail-product__name">
                                Một Cuốn Sách Buồn… Cười - Vui Vẻ Không Quạu Nha 2
                            </div>
                            <div className="detail-product__icon-heart-share">
                                <i class="icon far fa-heart"></i>
                                <i class="icon fas fa-share-alt"></i>
                            </div>
                        </div>
                        <div className="detail-product__rate-star">
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                            />
                            <span className="feedback">(Xem {123} đánh giá)</span>
                        </div>
                        <div className="detail-product__price-icon">
                            <span className="curent-price">50.000 đ</span>
                        </div>
                        <div className="detail-product__edition">
                            <div className="edition-product ed_1 active">Bản thường</div>
                            <div className="edition-product ed_2">Bản đặc biệt</div>
                            <div className="edition-product ed_3">Bản giới hạn</div>
                        </div>

                        <div>
                            <div>Số lượng</div>
                        </div>

                        <InputUpDown />

                        <ButtonStyle
                            className="btn-red"
                            label="Chọn sách"
                        >

                        </ButtonStyle>
                    </div>
                </div>
            </div>
        </CardWrap>
    )
}

export default Detail;