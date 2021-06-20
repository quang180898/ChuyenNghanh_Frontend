import { CardStyle } from "components/base/Card";
import { StaticLoading } from "components/base/Loading";
import { PaginationSingle } from "components/base/Pagination";
import { PAGES_URL } from "contant";
import { LoadDataPaging } from "functions/Utils";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useHistory, useLocation } from "react-router-dom";
import { homeAction } from "store/action";
import { CardBook, SliderImg } from "./Layout";
import { CardNodata } from "components/common/Card";

const Home = () => {
    const dispatch = useDispatch()
    const paramss = useParams();
    const history = useHistory();
    let location = useLocation();
    let listLocation = location.search.split("&")[11];
    const { categoryId } = paramss;
    const [state, setState] = useState({
        listBook: null,
        total_record: 0,
        total_page: 0,
        page: 1
    })

    const [isLoading, setLoading] = useState(false);

    const store = useSelector(state => state);
    const { filterHeader } = store.commonReducer;
    const { listBook } = store.homeReducer;

    const limit = 6;

    useEffect(() => {
        if (listLocation === "errorCode=49") {
            history.push(PAGES_URL.home.url)
        }

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
        if (filterHeader) {
            console.log(filterHeader)
            dispatch(homeAction.loadListBook({ limit: limit, page: state.page, category_id: categoryId, book_name: filterHeader }))
        } else {
            dispatch(homeAction.loadListBook({ limit: limit, page: state.page, category_id: categoryId }))
        }
    }, [filterHeader])

    useEffect(() => {
        if (categoryId) {
            loadListBook()
        }
    }, [categoryId])

    let loadListBook = () => {
        let page = state.page
        let category_id = categoryId
        setState({ ...state, page })
        callListBook({ page: page, category_id: category_id })
    }

    const callListBook = ({ page = state.page, category_id = categoryId }) => {
        dispatch(homeAction.loadListBook({ limit: limit, page: page, category_id: category_id }))
        setLoading(true)
    }

    const onPageChange = (value) => {
        setState({ ...state, page: value })
        callListBook({ page: value })
    }
    return (
        <div className="home">
            {!filterHeader ?
                <SliderImg />
                : null
            }
            <div className="home__content">
                <CardStyle title="Danh sách">
                    <div className="row">
                        {isLoading && <StaticLoading />}
                        {state.listBook && state.listBook.length > 0 ? state.listBook.map((value) => {
                            return (
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={value.id}>
                                    <CardBook
                                        product={value}
                                        id={value.id}
                                        title={value.name}
                                        image={value.image_bytes}
                                        totalSize={value.quantity}
                                    />
                                </div>
                            )
                        })
                    :
                    <CardNodata/>
                    }
                    </div>
                    {state.listBook?.length > 0 && <PaginationSingle data={LoadDataPaging(state.total_record, state.page, state.total_page, limit)} onChange={onPageChange} />}

                </CardStyle>
            </div>
        </div>
    )
}

export default Home
