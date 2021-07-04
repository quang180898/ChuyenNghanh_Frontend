
import ReactStars from "react-rating-stars-component";
import React, { useEffect, useState } from 'react';
import { ButtonStyle } from "components/base/Button";
import { CARD_EQUAL } from "contant";
import { InputUpDown } from "components/base/Input";
import CardWrap from "components/common/Card/CardWarp";
import { useDispatch, useSelector } from "react-redux";
import { bookAction, cartAction } from "store/action";
import { useParams } from "react-router-dom";
import { showNotification } from "functions/Utils";

const Detail = () => {

    const dispatch = useDispatch();
    const { bookId } = useParams()
    const [ state, setState ] = useState()
    const [ cartBook, setCartBook] = useState()

    const store = useSelector(state => state) 
    const { detailBook } = store.bookReducer
    const { addCart } = store.cartReducer

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('cart'));
        setCartBook(products);
    }, [])

    useEffect(() => {
        dispatch(bookAction.getDetailBook({book_id: bookId}))
    }, [bookId])

    useEffect(() => {
        if(detailBook) {
            if(detailBook.success) {
                setState(detailBook.detail)
            }
        }
    }, [detailBook])

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('cart'));
        setCartBook(products);
    }, [addCart])

    const addProductToCart = (id) => {

        let cartCopy = [...cartBook];

        const oldproduct = localStorage.getItem('cart') ? localStorage.getItem('cart') : "[]";
        const arrayproduct = JSON.parse(oldproduct);  

        let products = state

        let existingItem = cartCopy.find(cartItem => cartItem.id == id);

        if (existingItem) {
            showNotification.error({ message: 'Sách đã có trong giỏ', title: 'waring' })
        } else { 
            showNotification.success({ message: 'Sách đã được thêm vào giỏ hàng', title: 'success' })
            arrayproduct.push(products);
        }
    
        localStorage.setItem('cart', JSON.stringify(arrayproduct));
        dispatch(cartAction.addToCart(arrayproduct))                   
    } 

    return (
        <CardWrap isHeigth title="Sản phẩm">
            <div className='row'>
                <div className={`col-lg-5 col-md-5 col-sm-12 ${CARD_EQUAL}`}>
                    <div className="list-image">
                        <img src={`data:image/jpeg;base64, ${state && state.image_bytes}`}/>
                    </div>
                </div>
                <div className={`col-lg-7 col-md-7 col-sm-12 ${CARD_EQUAL}`}>
                    <div className="detail-product">
                        <div className="detail-product__header">
                            <span className="label-author">Tác giả: </span>
                            <span className="author-name"> {state && state.author_name}</span>
                        </div>
                        <div className="detail-product__body">
                            <div className="detail-product__name">
                                {state && state.name}
                            </div>
                            <div className="detail-product__icon-heart-share">
                                <i class="icon far fa-heart"></i>
                                <i class="icon fas fa-share-alt"></i>
                            </div>
                        </div>
                        <div className="detail-product__rate-star">
                            <ReactStars
                                count={5}
                                size={24}
                                activeColor="#ffd700"
                            />
                            <span className="feedback">(Xem {123} đánh giá)</span>
                        </div>
                        <div className="detail-product__price-icon">
                            <span className="curent-price">{state && state.price} đ</span>
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
                            onClick={() => addProductToCart(bookId)}
                        >

                        </ButtonStyle>
                    </div>
                </div>
            </div>
        </CardWrap>
    )
}

export default Detail;