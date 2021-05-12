import { CardStyle } from "components/base/Card";
import { StaticLoading } from "components/base/Loading";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { accountAction } from "store/action";
import { CardBook } from "../Layout";

const SliderImg = () => {
    const dispatch = useDispatch();
    const accountReducer = useSelector(state => state.accountReducer)
    const { listBorrow } = accountReducer;
    const [ mostBorrow, setMostBorrow] = useState()
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(accountAction.loadMostBorrow())
        setLoading(true)
    }, [])

    useEffect(() => {
        if (listBorrow && listBorrow.success) {
            console.log({ listBorrow })
            setMostBorrow(listBorrow.detail);
            setLoading(false)
        }
    }, [listBorrow])

    const settings = {
        dots: true,
        infinite: true,
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
        <CardStyle title="Sách nổi bật">
            {isLoading && <StaticLoading/>}
            <div className="home__slider">
                <Slider {...settings}
                    className="slider"
                    nextArrow={<NextArrow />}
                    prevArrow={<PrevArrow />}
                    swipeToSlide={true}
                    >
                    {mostBorrow && mostBorrow.map((value, index) => {
                        if (index < 5) { 
                        return (
                            <CardBook
                                key={index}
                                title={value.name}
                                image={value.image_bytes}
                                total={value.quantity}       
                            />
                        )
                        }
                    })}
                </Slider>
            </div>
        </CardStyle>
    )
}

export default SliderImg
