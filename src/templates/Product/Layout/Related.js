import CardWrap from 'components/common/Card/CardWarp';
import Slider from "react-slick";
import React, { useState } from 'react';

const Related = () => {

    const settings = {
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        autoplay: false,
        arrows: true,
        accessibility: true,
    }
    const NextArrow = ({ currentSlide, slideCount, ...props }) => (
        <div {...props}> <i class="las la-chevron-circle-right"></i></div> 
    );
    const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
        <div {...props}> <i class="las la-chevron-circle-left"></i></div>
    );

    return (
        <CardWrap isHeigth title="Sản phẩm tương tự">
            <div className="home__slider">
            <Slider {...settings}
                    className="slider"
                    nextArrow={<NextArrow />}
                    prevArrow={<PrevArrow />}
                    draggable={false}
                    >
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </Slider>
            </div>
        </CardWrap>
    )
}
export default Related;