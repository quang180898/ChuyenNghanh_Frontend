import { CardStyle } from "components/base/Card";
import { StaticLoading } from "components/base/Loading";
import { PaginationSingle } from "components/base/Pagination";
import { getLocalStore, LoadDataPaging } from "functions/Utils";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { homeAction } from "store/action";
import { CardBook, SliderImg } from "./Layout";

const Home = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const pathName = location.pathname;
    const pathCurrent = pathName.split("/")[1];
    const homeReducer = useSelector(state => state.homeReducer);
    const [state, setState] = useState({
        listBook: null,
        total_record: 0,
        total_page: 0,
        page: 1
    })

    const [isLoading, setLoading] = useState(false);
    const { listBook, total_page, total_record, page } = homeReducer;

    const limit = 6;

    useEffect(() => {
        loadListBook()
    }, [])

    useEffect(() => {
        if (listBook && listBook.success) {
            let data = listBook.detail;
            setState({
                ...state,
                listBook: data,
                total_page: listBook.total_page,
                total_record: listBook.total_record,
                page: listBook.page,
            })
            setLoading(false)
        }
    }, [listBook])

    useEffect(() => {
        if (state) {
            console.log({state})
        }
    }, [state])
    
    useEffect(() => {
        if (pathCurrent) {
            loadListBook()
        }
    }, [pathCurrent])

    let loadListBook = () => {
        let page = state.page
        let category_id = pathCurrent
        setState({ ...state, page })
        callListBook({ page: page, category_id: category_id})
    }

    const callListBook = ({ page = state.page, category_id = pathCurrent }) => {
        dispatch(homeAction.loadListBook({ limit: limit , page: page, category_id: category_id}))
        setLoading(true)
    }

    const onPageChange = (value) => {
        setState({ ...state, page: value })
        callListBook({ page: value})
    }
    return (
        <div className="home">  
            <SliderImg />
            <div className="home__content">
            <CardStyle title="Danh sách">
                <div className="row">
                {isLoading && <StaticLoading />}          
                {state.listBook && state.listBook.map((value, index)  => {
                    return (
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={index}>
                            <CardBook
                                title={value.name}
                                image={value.image_bytes}
                                total={value.quantity}
                            />
                        </div>
                )})}  
                </div>
                <PaginationSingle data={LoadDataPaging(state.total_record, state.page, state.total_page, limit)} onChange={onPageChange}/>
            </CardStyle>
            </div>
        </div>
    )
}

export default Home
