import React from "react";
import Slider from "react-slick";

const SliderImg = ({ className, datas = [] }) => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        accessibility: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const NextArrow = ({ currentSlide, slideCount, ...props }) => (
        <div {...props}> <i class="las la-chevron-circle-right"></i></div>
    );
    const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
        <div {...props}> <i class="las la-chevron-circle-left"></i></div>
    );
    return (
        <Slider {...settings}
            className="slider "
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}>
            {datas.map((item, index) =>
                <figure key={index}>
                    <img style={{ width: '100%' }} src={item.image_url} alt='Heli' />
                </figure>
            )}
        </Slider>
    )
}

export default SliderImg
