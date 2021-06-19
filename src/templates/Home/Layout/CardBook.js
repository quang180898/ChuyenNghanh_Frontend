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

    const addProductToCart = () => {
        const oldproduct = localStorage.getItem('cart') ? localStorage.getItem('cart') : "[]";
        const arrayproduct =  JSON.parse(oldproduct);  
        let products = product
        arrayproduct.push(products);
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
                    <span>{title}</span>
                </div>
                <div className="support-book">
                    <ButtonStyle className="btn-white" label="Mượn sách" onClick={addProductToCart}></ButtonStyle>
                    {totalSize ? <span>Số lượng: {totalSize}</span> : <span>Lượt mượn: {totalBorrow}</span>}
                </div>
            </Card>
        </div>
    )
}

export default CardBook
