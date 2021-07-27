import React, { useEffect, useState } from 'react';
import CardWrap from 'components/common/Card/CardWarp';
import { useDispatch, useSelector } from 'react-redux';
import { DropdownBase } from 'components/base/Dropdown';
import { Link } from 'react-router-dom';
import { PAGES_URL } from 'contant';
import { showNotification } from 'functions/Utils';
import { categoryAction, homeAction } from 'store/action';
import { ModalDeleteCategory } from './Layout';

const ManageCategory = () => {

    const dispatch = useDispatch();
    const [state, setState] = useState()
    const [stateLocal, setStateLocal] = useState({
        saveParams: null,
        saveData: null,
        isShowModal: false,
    })
    const store = useSelector(state => state)
    const { listCategory } = store.homeReducer
    const { deleteCategory } = store.categoryReducer

    useEffect(() => {
        dispatch(homeAction.loadListCategory())
    }, [])

    useEffect(() => {
        if (listCategory) {
            if (listCategory.success) {
                setState(listCategory.detail)
            }
        }
    }, [listCategory])

    useEffect(() => {
        if (deleteCategory) {
            if (deleteCategory.success) {
                setState(stateLocal.saveData)
                setStateLocal(e => ({...e, isShowModal: false}))
                showNotification.success({ message: 'Xoá thành công', title: 'success' })
            }
            dispatch(categoryAction.requestClearAction())
        }
    }, [deleteCategory])


    const handleDeleteCategory = (id) => {
        const newArray = [].concat(state)
        const newData = newArray.filter(i => i.category_id !== id)
        let params = {
            id: null,
            name: null,
        }
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].category_id === id) {
                params.id = newArray[i].category_id
                params.name = newArray[i].category_name
            }
        }
        setStateLocal(e => ({ ...e, saveParams: params, saveData: newData, isShowModal: true }))
    }

    const optionsAction = [
        {
            label: <div className='d-flex'>
                <Link to={PAGES_URL.category.url + '/add'}> + Thêm danh mục</Link>
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
        <CardWrap isHeight title="Danh mục" childrenHeading={Heading()}>
            <div class="cus-table">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th scope="col">Tên danh mục</th>
                            <th scope="col">Mô tả</th>
                            <th scope="col"><i class="fas fa-cog"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {state && state.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.category_name}</td>
                                    <td>{item.category_description}</td>
                                    <td><i className="click-action fas fa-trash-alt" onClick={() => handleDeleteCategory(item.category_id)}></i></td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
            <ModalDeleteCategory state={stateLocal} setState={setStateLocal}/>
        </CardWrap>
    )
}
export default ManageCategory;