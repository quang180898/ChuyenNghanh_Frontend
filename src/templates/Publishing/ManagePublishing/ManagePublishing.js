import React, { useEffect, useState } from 'react';
import CardWrap from 'components/common/Card/CardWarp';
import { useDispatch, useSelector } from 'react-redux';
import { DropdownBase } from 'components/base/Dropdown';
import { Link } from 'react-router-dom';
import { PAGES_URL } from 'contant';
import { publishingAction } from 'store/action';
import { showNotification } from 'functions/Utils';
import { ModalDeletePublishing } from './Layout';

const ManagePublishing = () => {

    const dispatch = useDispatch();
    const [state, setState] = useState()
    const [stateLocal, setStateLocal] = useState({
        saveParams: null,
        saveData: null,
        isShowModal: false,
    })
    const store = useSelector(state => state.publishingReducer)
    const { listPublishing, deletePublishing } = store

    useEffect(() => {
        dispatch(publishingAction.getListPublishing())
    }, [])

    useEffect(() => {
        if (listPublishing) {
            console.log(listPublishing)
            if (listPublishing.success) {
                setState(listPublishing.detail)
            }
        }
    }, [listPublishing])

    useEffect(() => {
        if (deletePublishing) {
            if (deletePublishing.success) {
                setState(stateLocal.saveData)
                setStateLocal(e => ({...e, isShowModal: false}))
                showNotification.success({ message: 'Xoá thành công', title: 'success' })
            }
            dispatch(publishingAction.requestClearAction())
        }

    }, [deletePublishing])


    const handleDeletePublishing = (id) => {
        const newArray = [].concat(state)
        const newData = newArray.filter(i => i.publishing_company_id !== id)
        let params = {
            id: null,
            name: null,
        }
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].publishing_company_id === id) {
                params.id = newArray[i].publishing_company_id
                params.name = newArray[i].publishing_company_name
            }
        }
        setStateLocal(e => ({ ...e, saveParams: params, saveData: newData, isShowModal: true }))
    }

    const optionsAction = [
        {
            label: <div className='d-flex'>
                <Link to={PAGES_URL.publishing.url + '/add'}> + Thêm nhà xuất bản</Link>
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
        <CardWrap isHeight title="Nhà xuất bản" childrenHeading={Heading()}>
            <div class="cus-table">
                <table>
                    <thead>
                        <tr>
                            <th style={{width: '5%'}}>STT</th>
                            <th style={{width: '15%'}} scope="col">Tên nhà xuất bản</th>
                            <th style={{width: '10%'}} scope="col">Số điện thoại</th>
                            <th style={{width: '15%'}} scope="col">Email</th>
                            <th style={{width: '20%'}} scope="col">Địa chỉ</th>
                            <th style={{width: '20%'}} scope="col">Mô tả</th>
                            <th style={{width: '10%'}} scope="col"><i class="fas fa-cog"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {state && state.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td style={{width: '5%'}}>{index + 1}</td>
                                    <td style={{width: '15%'}}>{item.publishing_company_name}</td>
                                    <td style={{width: '10%'}}>{item.publishing_company_mobile}</td>
                                    <td style={{width: '15%'}}>{item.publishing_company_mail}</td>
                                    <td style={{width: '20%'}}>{item.publishing_company_address}</td>
                                    <td style={{width: '20%'}}>{item.publishing_company_description}</td>
                                    <td style={{width: '10%'}}><i className="click-action fas fa-trash-alt" onClick={() => handleDeletePublishing(item.publishing_company_id)}></i></td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
            <ModalDeletePublishing state={stateLocal} setState={setStateLocal}/>
        </CardWrap>
    )
}
export default ManagePublishing;