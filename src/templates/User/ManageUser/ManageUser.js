import React, { useEffect, useState } from 'react';
import CardWrap from 'components/common/Card/CardWarp';
import { useDispatch, useSelector } from 'react-redux';
import { accountAction } from 'store/action';
import { ModalDeleteCustomer } from './Layout';
import { DropdownBase } from 'components/base/Dropdown';
import { Link } from 'react-router-dom';
import { PAGES_URL } from 'contant';

const ManageUser = () => {

    const dispatch = useDispatch();
    const [state, setState] = useState()
    const [stateLocal, setStateLocal] = useState({
        saveParams: null,
        saveData: null,
        isShowModal: false,
    })
    const store = useSelector(state => state.accountReducer)
    const { listUser, deleteUser } = store

    useEffect(() => {
        dispatch(accountAction.getListUser())
    }, [])

    useEffect(() => {
        if (listUser) {
            if (listUser.success) {
                setState(listUser.detail)
            }
        }
        
    }, [listUser])

    useEffect(() => {
        if (deleteUser) {
            if (deleteUser.success) {
                setState(stateLocal.saveData)
                setStateLocal(e => ({...e, isShowModal: false}))
            }
            dispatch(accountAction.requestClearAction())
        }
        
    }, [deleteUser])
    

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
                <Link to={PAGES_URL.user.url + '/add'}> + Thêm người dùng</Link>
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
        <CardWrap isHeight title="Người dùng" childrenHeading={Heading()}>
            <div class="cus-table">
                <table>
                    <thead>
                        <tr>
                            <th style={{width: "5%"}}>STT</th>
                            <th style={{width: "15%"}} scope="col">Họ tên</th>
                            <th style={{width: "15%"}} scope="col">Số điện thoại</th>
                            <th style={{width: "15%"}} scope="col">Tên tài khoản</th>
                            <th style={{width: "20%"}} scope="col">Email</th>
                            <th style={{width: "20%"}} scope="col">Chức vụ</th>
                            <th style={{width: "25%"}} scope="col"><i class="fas fa-cog"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        { state && state.map((item, index) => {
                            if(item.permission_code != 1) {
                                return (
                                    <tr key={index}>
                                        <td style={{width: "5%"}}>{index}</td>
                                        <td style={{width: "15%"}}><Link to={PAGES_URL.user.url + "/" + item.id} className="">{item.name}</Link></td>
                                        <td style={{width: "15%"}}>{item.mobile}</td>
                                        <td style={{width: "15%"}}>{item.username}</td>
                                        <td style={{width: "20%"}}>{item.mail}</td>
                                        <td style={{width: "20%"}}>{item.permission_name}</td>
                                        <td style={{width: "25%"}}><i className="click-action fas fa-trash-alt" onClick={() => handleDeleteUser(item.id)}></i></td>
                                    </tr>
                                )       
                        }
                        })           
                        }
                    </tbody>
                </table>
            </div>
            <ModalDeleteCustomer state={stateLocal} setState={setStateLocal}/>
        </CardWrap>
    )
}
export default ManageUser;