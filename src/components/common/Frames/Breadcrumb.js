import { getBreadcrumbData } from 'functions/Utils';
import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router'
import { commonAction } from 'store/action';
import { useDispatch, useSelector } from 'react-redux';

const Breadcrumb = ({ router, title }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const pathCurrent = history.location.pathname;
    const arrUrl = pathCurrent.split("/");
    const newLabel = arrUrl[arrUrl.length - 1] > 0 ? arrUrl[arrUrl.length - 2] : arrUrl[arrUrl.length - 1]

    const [results, setResults] = React.useState([])

    const store = useSelector(state => state.commonReducer);
    const { labelHeader } = store

    React.useEffect(() => {
        let newResult = getBreadcrumbData({ router: router, url: pathCurrent })
        setResults(newResult)
    }, [pathCurrent])

    React.useEffect(() => {
        if (title) {
            //gọi để cập nhật lable header lại
            dispatch(commonAction.setTitleHeader(title))
        }
    }, [title])

    return (
        <div className="page-breadcrumb">
            <h3 className="page-title text-truncate m_text_000 font-weight-medium"> {labelHeader ? labelHeader : "Sales &amp; marketing dashboard"} </h3>
            <ol className="breadcrumb">
                {results.length > 0 ? results.map((item, index) => {
                    return (
                        <li key={index} className={`breadcrumb-item ${index == results.length - 1 ? "active" : ""}`}>

                            {index != results.length - 1 ? <>
                                <Link to={item.path}>{item.label ? item.label : newLabel}</Link>
                                <i className="icon las la-angle-right" />
                            </>
                                : item.label}
                        </li>
                    )
                }) : ""}
            </ol>
        </div>
    )
}

export default Breadcrumb