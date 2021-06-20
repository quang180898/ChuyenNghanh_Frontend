import { Card } from "antd";
import { ButtonStyle } from "components/base/Button";
import { PAGES_URL } from "contant";
import { getLocalStore, showNotification } from "functions/Utils";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { cartAction } from "store/action";

const CardBook = ({ title, image, totalSize, id, totalBorrow, product }) => {

    const dispath = useDispatch();
    const history = useHistory();

    const [state, setState] = useState()

    const store = useSelector(state => state);
    const { addCart } = store.cartReducer

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('cart'));
        setState(products);
    }, [])

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('cart'));
        setState(products);
    }, [addCart])

    const addProductToCart = (id) => {

        let cartCopy = [...state];

        const oldproduct = localStorage.getItem('cart') ? localStorage.getItem('cart') : "[]";
        const arrayproduct =  JSON.parse(oldproduct);  
        let products = product

        let existingItem = cartCopy.find(cartItem => cartItem.id == id);

        if (existingItem) {
            showNotification.error({ message: 'Sách đã có trong giỏ', title: 'waring' })
        } else { 
            showNotification.success({ message: 'Sách đã được thêm vào giỏ hàng', title: 'success' })
            arrayproduct.push(products);
        }
    
        localStorage.setItem('cart', JSON.stringify(arrayproduct));
        dispath(cartAction.addToCart(arrayproduct))                   
    } 

    const onMoveDetail = (id) => {
        history.push(PAGES_URL.product.url + "/" + id);
    }

    return (
        <div className="book">
            <Card
                hoverable
                cover
            >
                <div className="item">
                    <figure className="image">
                        <img src={`data:image/jpeg;base64,${image}`} />
                        <a className="link" onClick={() => onMoveDetail(id)}>Chi Tiết</a>
                    </figure>
                </div>
                <div className="text-center">{title}</div>
                <div className="support-book">
                    <ButtonStyle className="btn-white" label="Mượn sách" onClick={() => addProductToCart(id)}></ButtonStyle>
                    {totalSize ? <span>Số lượng: {totalSize}</span> : <span>Lượt mượn: {totalBorrow}</span>}
                </div>
            </Card>
        </div>
    )
}

export default CardBook
