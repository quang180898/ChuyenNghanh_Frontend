import { CardStyle } from "components/base/Card";
import { StaticLoading } from "components/base/Loading";
import { IMAGE_URL } from "contant";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { accountAction } from "store/action";
import { CardBook } from "../Layout";
import { SpinLoading } from "components/base/Loading";

const SliderImg = ({ product }) => {
    const dispatch = useDispatch();
    const accountReducer = useSelector(state => state.accountReducer)
    const { listBorrow } = accountReducer;
    const [mostBorrow, setMostBorrow] = useState()
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(accountAction.loadMostBorrow())
        setLoading(true)
    }, [])

    useEffect(() => {
        if (listBorrow && listBorrow.success) {
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
        <div {...props}>
             <img src={IMAGE_URL + "slick-arrows.png"}></img>
        </div>
    );
    const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
        <div {...props}>
            <img src={IMAGE_URL + "slick-arrows.png"}></img>  
        </div>
    );
    return (
        <CardStyle title="Sách nổi bật">
            <SpinLoading spinning={isLoading} className="loading_full t-0 l-0">
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
                                    product={value}
                                    id={value.id}
                                    key={index}
                                    title={value.name}
                                    image={value.image_bytes}
                                    totalBorrow={value.count_borrow}
                                />
                            )
                        }
                    })}
                </Slider>
            </div>
            </SpinLoading>
        </CardStyle>
    )
}

export default SliderImg
