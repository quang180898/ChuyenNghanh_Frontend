import CardWrap from 'components/common/Card/CardWarp';
import Slider from "react-slick";
import React, { useEffect, useState } from 'react';
import CardRelated from './CardRelated';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bookAction } from 'store/action';

const Related = () => {

    const dispatch = useDispatch();

    const { bookId } = useParams()
    const [state, setState] = useState()

    const store = useSelector(state => state.bookReducer)
    const { sameCategory } = store

    useEffect(() => {
        dispatch(bookAction.getSameCategory({ book_id: bookId }))
    }, [])

    useEffect(() => {
        if (sameCategory) {
            if (sameCategory.success) {
                setState(sameCategory.detail)
            }
        }
    }, [sameCategory])

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

            <div className="related-book">
                <Slider {...settings}
                    className="slider"
                    nextArrow={<NextArrow />}
                    prevArrow={<PrevArrow />}
                    draggable={false}
                >
                    {state && state.map((value, index) => {
                        return (
                            <CardRelated
                                image={value.image_bytes}
                                title={value.name}
                                price={value.price}
                                key={index}
                            />
                        )
                    })}
                </Slider>
            </div>
        </CardWrap>
    )
}
export default Related;