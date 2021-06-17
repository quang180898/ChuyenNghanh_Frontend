import { CardWarp } from 'components/common/Card';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const InfoProduct = () => {

    const [state, setState] = useState()

    const store = useSelector(state => state.bookReducer)
    const { detailBook } = store

    useEffect(() => {
        if(detailBook) {
            if(detailBook.success) {
                setState(detailBook.detail)
            }
        }
    }, [detailBook])

    return (
        <CardWarp isHeigth title="Thông tin chi tiết">
            <div class="content-has-table">
                <table>
                    <tbody>
                        <tr>
                            <td>Tác giả</td>
                            <td>{state && state.author_name}</td>
                        </tr>
                        <tr>
                            <td>Thể loại</td>
                            <td>{state && state.category_name}</td>
                        </tr>
                        <tr>
                            <td>Kệ sách</td>
                            <td>{state && state.location}</td>
                        </tr>
                        <tr>
                            <td>Số lượng</td>
                            <td>{state && state.quantity}</td>
                        </tr>
                        <tr>
                            <td>Nhà xuất bản</td>
                            <td>{state && state.publishing_company_name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </CardWarp>
    )
}

export default InfoProduct;