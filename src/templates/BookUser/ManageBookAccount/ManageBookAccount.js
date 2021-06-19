import React, { useEffect, useState } from 'react';
import CardWrap from 'components/common/Card/CardWarp';
import { useDispatch, useSelector } from 'react-redux';
import { DropdownBase } from 'components/base/Dropdown';
import { Link } from 'react-router-dom';
import { PAGES_URL } from 'contant';
import { showNotification } from 'functions/Utils';
import { bookAction } from 'store/action';
import { ModalDeleteBookAccount } from './Layout';

const ManageBookAccount = () => {

    const dispatch = useDispatch();
    const [state, setState] = useState()
    const [stateLocal, setStateLocal] = useState({
        saveParams: null,
        saveData: null,
        isShowModal: false,
    })
    const store = useSelector(state => state)
    const { listAccountBook, deleteAccountBook } = store.bookReducer;

    useEffect(() => {
        dispatch(bookAction.listAccountBook())
    }, [])

    useEffect(() => {
        if (listAccountBook) {
            if (listAccountBook.success) {
                setState(listAccountBook.detail)
            }
        }
    }, [listAccountBook])

    useEffect(() => {
        if (deleteAccountBook) {
            if (deleteAccountBook.success) {
                setState(stateLocal.saveData)
                setStateLocal(e => ({...e, isShowModal: false}))
                showNotification.success({ message: 'Xoá thành công', title: 'success' })
            }
        }

    }, [deleteAccountBook])


    const handleDeleteAuthor = (id) => {
        const newArray = [].concat(state)
        const newData = newArray.filter(i => i.id !== id)
        let params = {
            id: null,
            name: null,
        }
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].id === id) {
                params.id = newArray[i].id
                params.name = newArray[i].user_name
            }
        }
        setStateLocal(e => ({ ...e, saveParams: params, saveData: newData, isShowModal: true }))
    }

    const optionsAction = [
        {
            label: <div className='d-flex'>
                <Link to={PAGES_URL.accountBook.url + '/add'}> + Tạo sách người dùng</Link>
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
                        <button type="button" class="btn_blue_outline dropdown-toggle" >Hành động</button>
                    </DropdownBase>
                </div>
            </>
        )
    }

    return (
        <CardWrap isHeight title="Sách người dùng" childrenHeading={Heading()}>
            <div class="cus-table">
                <table>
                    <thead>
                        <tr>
                            <th style={{width: "5%"}}>STT</th>
                            <th style={{width: "15%"}} scope="col">Tên người mượn</th>
                            <th style={{width: "15%"}} scope="col">Tên sách</th>
                            <th style={{width: "15%"}} scope="col">Mã người mượn</th>
                            <th style={{width: "10%"}} scope="col">Mã sách</th>
                            <th style={{width: "15%"}} scope="col">Ngày mượn</th>
                            <th style={{width: "10%"}} scope="col">Ngày trả</th>
                            <th style={{width: "10%"}} scope="col">Trạng thái</th>
                            <th style={{width: "10%"}} scope="col"><i class="fas fa-cog"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {state && state.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td style={{width: "5%"}}>{index + 1}</td>
                                    <td style={{width: "15%"}}>{item.user_name}</td>
                                    <td style={{width: "15%"}}>{item.book_name}</td>
                                    <td style={{width: "15%"}}>{item.user_id}</td>
                                    <td style={{width: "10%"}}>{item.book_id}</td>
                                    <td style={{width: "15%"}}>{item.date_borrow}</td>
                                    <td style={{width: "10%"}}>{item.date_return}</td>
                                    <td style={{width: "10%"}}>{item.status}</td>
                                    <td style={{width: "10%"}}><i className="click-action fas fa-trash-alt" onClick={() => handleDeleteAuthor(item.id)}></i></td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
            <ModalDeleteBookAccount state={stateLocal} setState={setStateLocal}/>
        </CardWrap>
    )
}
export default ManageBookAccount;