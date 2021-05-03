import React from "react";
import { CardBook, SliderImg } from "./Layout";

const data = [
    {
        image_url: '../images/library.jpg',
    },
    {
        image_url: '../images/library.jpg',
    },
    {
        image_url: '../images/library.jpg',
    },
    {
        image_url: '../images/library.jpg',
    },
    {
        image_url: 'http://placekitten.com/g/400/200',
    },
]

const Home = () => {

    return (
        <div className="home">
            <div className="home__slider">
                <SliderImg
                    datas={data}
                />
            </div>
            <div className="home__content">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <CardBook
                            title="Ten Sach"
                            book_content=" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                        />
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6  col-sm-12">
                        <CardBook
                            title="Ten Sach"
                            book_content=" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                        />
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6  col-sm-12">
                        <CardBook
                            title="Ten Sach"
                            book_content=" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                        />
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <CardBook
                            title="Ten Sach"
                            book_content=" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                        />
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <CardBook
                            title="Ten Sach"
                            book_content=" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                        />
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <CardBook
                            title="Ten Sach"
                            book_content=" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
