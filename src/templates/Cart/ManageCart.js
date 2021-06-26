import { ButtonStyle } from "components/base/Button";
import { InputUpDown } from "components/base/Input";
import { CardWarp } from "components/common/Card";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { momoAction } from "store/action";

const ManageCart = () => {

    const dispatch = useDispatch();
    const [state, setState] = useState()

    const store = useSelector(state => state)
    const { linkMomo } = store.momoReducer

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('cart'));
        setState(products);
    }, [])

    useEffect(() => {
        if (linkMomo) {
            if (linkMomo.success) {
                window.location.replace(`${linkMomo.detail.payUrl}`);
            }
        }
    }, [linkMomo])

    const payMomo = (item) => {
        let params = {
            amount: item.price,
            orderInfo: item.name,
        }
        let dataMomo = JSON.stringify(item)
        localStorage.setItem('payment', dataMomo)
        dispatch(momoAction.payToMomo(params))
    }

    const removeItem = (itemId) => {
        let cartCopy = [].concat(state)
        cartCopy = cartCopy.filter(item => item.id != itemId);
        setState(cartCopy);
        let cartString = JSON.stringify(cartCopy)
        localStorage.setItem('cart', cartString)
      }

    return (
        <CardWarp title="Giỏ hàng">
            {state && state.map((item, index) => {
                return (
                    <div className="cart-product" key={index}>
                        <div className="cart-product__img">
                            <img src={`data:image/jpeg;base64,${item?.image_bytes}`}/>
                        </div>
                        <div className="cart-product__content">
                            <div className="cart-product__content--inner">
                                <div className="cart-product__desc">
                                    <div className="cart-product__name">{item?.name}</div>
                                    <p className="cart-product__author"><span>Tác giả: </span><a>{item?.author_name}</a></p>
                                    <div className="cart-product__price">
                                        {item?.price}đ
                                    </div>
                                    <p className="cart-product__action" onClick={() => removeItem(item?.id)}>Xoá</p>
                                </div>
                                <div className="cart-product__detail">
                                    <div className="qty">
                                        <ButtonStyle className="btn-blue-outline" label="Thanh toán" onClick={() => payMomo(item)}></ButtonStyle>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </CardWarp>
    )
}
export default ManageCart;
