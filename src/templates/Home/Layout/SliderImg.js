import React from "react";
import Slider from "react-slick";

const SliderImg = ({ className, children}) => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
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
            swipeToSlide={true}
            focusOnSelect={true}>
            {children.map((item, index) =>
            <div className="item" key={index}>
                <figure className="image">
                    <img style={{ width: '100%' }} src={item.image_url} alt='Heli' />
                    <a className="link">Chi Tiết</a>
                </figure>
            </div>
            )}
        </Slider>
    )
}

export default SliderImg
