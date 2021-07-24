import React, { useEffect, useState } from 'react';
import CardWrap from 'components/common/Card/CardWarp';
import { useDispatch, useSelector } from 'react-redux';
import { homeAction } from 'store/action';
import { DropdownBase } from 'components/base/Dropdown';
import { Link } from 'react-router-dom';
import { PAGES_URL } from 'contant';
import { ModalDeleteBook } from './Layout'; 

const ManageBook = () => {

    const dispatch = useDispatch();
    const [state, setState] = useState()
    const [stateLocal, setStateLocal] = useState({
        saveParams: null,
        saveData: null,
        isShowModal: false,
    })
    const store = useSelector(state => state)
    const { listBook } = store.homeReducer
    const { deleteBook } = store.bookReducer

    useEffect(() => {
        dispatch(homeAction.loadListBook())
    }, [])

    useEffect(() => {
        if (listBook) {
            if (listBook.success) {
                setState(listBook.detail)
            }
        }

    }, [listBook])

    useEffect(() => {
        if (deleteBook) {
            if (deleteBook.success) {
                setState(stateLocal.saveData)
                setStateLocal(e => ({...e, isShowModal: false}))
            }
        }

    }, [deleteBook])


    const handleDeleteUser = (id) => {
        const newArray = [].concat(state)
        const newData = newArray.filter(i => i.id !== id)
        let params = {
            id: null,
            name: null,
        }
        for (let i = 0 ; i< newArray.length; i++) {
            if (newArray[i].id === id) {
                params.id = newArray[i].id
                params.name = newArray[i].name
            }
        }
        setStateLocal(e => ({...e, saveParams: params, saveData: newData, isShowModal: true }))
    } 

    const optionsAction = [
        {
            label: <div className='d-flex'>
                <Link to={PAGES_URL.book.url + '/add'}> + Thêm sách</Link>
            </div>,
        },
    ]

    

    const onChangeMenuAction = (e) => {
    }


    const Heading = () => {
        return (
            <>
                <div className="exchange-rate ml-auto">
                    <DropdownBase
                        className=""
                        options={optionsAction}
                        onChangeMenu={(e) => onChangeMenuAction(e)}
                        placement="bottomRight"
                        overlayClassName="dropdown-blue-overlay"
                    >
                        <button type="button" class="btn_blue_outline dropdown-toggle">Hành động</button>
                    </DropdownBase>
                </div>
            </>
        )
    }

    return (
        <CardWrap isHeight title="Sách" childrenHeading={Heading()}>
            <div class="cus-table table-book table-fixed">
                <table>
                    <thead>
                        <tr>
                            <th style={{width: "5%"}}>STT</th>
                            <th style={{width: "10%"}} scope="col">Tên sách</th>
                            <th style={{width: "15%"}} scope="col">Hình ảnh</th>
                            <th style={{width: "10%"}} scope="col">Giá</th>
                            <th style={{width: "10%"}} scope="col">Số lượng</th>
                            <th style={{width: "10%"}} scope="col">Thể loại</th>
                            <th style={{width: "10%"}} scope="col">Kệ sách</th>
                            <th style={{width: "10%"}} scope="col">Tác giả</th>
                            <th style={{width: "15%"}} scope="col">Nhà xuất bản</th>
                            <th style={{width: "5%"}} scope="col"><i class="fas fa-cog"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {state && state.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td style={{width: "5%"}}>{index + 1}</td>
                                    <td style={{width: "10%"}}><Link to={PAGES_URL.book.url + "/" + item.id} className="">{item.name}</Link></td>
                                    <td style={{width: "15%"}}><img width="200px" height="200px" src={`data:image/jpeg;base64,${item.image_bytes}`}/></td>
                                    <td style={{width: "10%"}}>{item.price}</td>
                                    <td style={{width: "10%"}}>{item.quantity}</td>
                                    <td style={{width: "10%"}}>{item.category_name}</td>
                                    <td style={{width: "10%"}}>{item.location}</td>
                                    <td style={{width: "10%"}}>{item.author_name}</td>
                                    <td style={{width: "15%"}}>{item.publishing_company_name}</td>
                                    <td style={{width: "5%"}}><i className="click-action fas fa-trash-alt" onClick={() => handleDeleteUser(item.id)}></i></td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
            <ModalDeleteBook state={stateLocal} setState={setStateLocal}/>
        </CardWrap>
    )
}
export default ManageBook;