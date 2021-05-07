import { IMAGE_URL } from "contant";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeAction } from "store/action";
import { CardBook, SliderImg } from "./Layout";

const data = [
    {
        image_url: `${IMAGE_URL}../images/caycamngotcuatoi.jpg`,
    },
    {
        image_url: `${IMAGE_URL}../images/chienbinhcauvong.jpg`,
    },
    {
        image_url: `${IMAGE_URL}../images/dapancuathoigian.jpg`,
    },
    {
        image_url: `${IMAGE_URL}../images/yourname.jpg`,
    },
    {
        image_url: `${IMAGE_URL}../images/nhagiakim.jpg`,
    },
]

const Home = () => {
    const dispatch = useDispatch()

    const homeReducer = useSelector(state => state.homeReducer);
    const [dataBook, setDataBook] = useState()
    const [isLoading, setLoading] = useState(false)
    const { list_book} = homeReducer;

    useEffect(() => {
        dispatch(homeAction.loadListBook())
        setLoading(true)
    }, [])

    useEffect(() => {
        if (list_book && list_book.success) {
            console.log(list_book.detail)
            setDataBook(list_book.detail);
            setLoading(false)
        }
    }, [list_book])

    return (
        <div className="home">
            <div className="home__slider">
                <SliderImg>
                    {data}
                </SliderImg>
            </div>
            <div className="home__content">
                <div className="row">
                {dataBook &&  dataBook.map((value, index)  => {
                    return (
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <CardBook
                            key={index}
                            title={value.name}
                            image={value.image_bytes}
                            book_content=" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                            />
                        </div>
                            )
                            }
                        )
                    }  
                </div>
            </div>
        </div>
    )
}

export default Home
