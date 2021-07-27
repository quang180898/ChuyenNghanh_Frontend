import React, { useEffect, useState } from 'react';
import CardWrap from 'components/common/Card/CardWarp';
import { useDispatch, useSelector } from 'react-redux';
import { DropdownBase } from 'components/base/Dropdown';
import { Link } from 'react-router-dom';
import { PAGES_URL } from 'contant';
import { authorAction } from 'store/action';
import { ModalDeleteAuthor } from './Layout';
import { showNotification } from 'functions/Utils';

const ManageAuthor = () => {

    const dispatch = useDispatch();
    const [state, setState] = useState()
    const [stateLocal, setStateLocal] = useState({
        saveParams: null,
        saveData: null,
        isShowModal: false,
    })
    const store = useSelector(state => state.authorReducer)
    const { listAuthor, deleteAuthor } = store

    useEffect(() => {
        dispatch(authorAction.getListAuthor())
    }, [])

    useEffect(() => {
        if (listAuthor) {
            if (listAuthor.success) {
                setState(listAuthor.detail)
            }
        }
    }, [listAuthor])

    useEffect(() => {
        if (deleteAuthor) {
            if (deleteAuthor.success) {
                setState(stateLocal.saveData)
                setStateLocal(e => ({...e, isShowModal: false}))
                showNotification.success({ message: 'Xoá thành công', title: 'success' })
            }
            dispatch(authorAction.requestClearAction())
        }

    }, [deleteAuthor])


    const handleDeleteAuthor = (id) => {
        const newArray = [].concat(state)
        const newData = newArray.filter(i => i.author_id !== id)
        let params = {
            id: null,
            name: null,
        }
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].author_id === id) {
                params.id = newArray[i].author_id
                params.name = newArray[i].author_name
            }
        }
        setStateLocal(e => ({ ...e, saveParams: params, saveData: newData, isShowModal: true }))
    }

    const optionsAction = [
        {
            label: <div className='d-flex'>
                <Link to={PAGES_URL.author.url + '/add'}> + Thêm tác giả</Link>
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
        <CardWrap isHeight title="Tác giả" childrenHeading={Heading()}>
            <div class="cus-table">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th scope="col">Tên tác giả</th>
                            <th scope="col">Email</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col"><i class="fas fa-cog"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {state && state.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.author_name}</td>
                                    <td>{item.author_mail}</td>
                                    <td>{item.author_mobile}</td>
                                    <td><i className="click-action fas fa-trash-alt" onClick={() => handleDeleteAuthor(item.author_id)}></i></td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
            <ModalDeleteAuthor state={stateLocal} setState={setStateLocal}/>
        </CardWrap>
    )
}
export default ManageAuthor;