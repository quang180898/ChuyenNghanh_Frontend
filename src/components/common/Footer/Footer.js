import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-5">
            <div className="container bottom_border">
                <div className="row">
                    <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Liên hệ</h5>
                        <p className="mb10">927 Trần Hưng Đạo
                            District 5
                            Ho Chi Minh</p>
                        <p><i className="fa fa-phone" />+84-9999878398</p>
                        <p><i className="fa fa fa-envelope" /> info@example.com</p>
                    </div>
                    <div className=" col-sm-4 col-md  col-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Hỗ trợ khách hàng</h5>
                        <ul className="footer_ul_amrc">
                            <li><a href="">Câu hỏi thường gặp</a></li>
                            <li><a href="">Gửi yêu cầu hỗ trợ</a></li>
                            <li><a href="">Hướng dẫn mượn sách</a></li>
                            <li><a href="">Hỗ trợ khách hàng</a></li>
                            <li><a href="">Báo lỗi bảo mật</a></li>
                            <li><a href="">Chính sách đổi trả</a></li>
                        </ul>
                    </div>
                    <div className=" col-sm-4 col-md  col-6 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Về chúng tôi</h5>
                        <ul className="footer_ul_amrc">
                            <li><a href="">Giới thiệu thư viện</a></li>
                            <li><a href="">Tuyển dụng</a></li>
                            <li><a href="">Chính sách bảo mật thanh toán</a></li>
                            <li><a href="">Chính sách bảo mật thông tin cá nhân</a></li>
                            <li><a href="">Điều khoản sử dụng</a></li>
                            <li><a href="">Bán hàng doanh nghiệp</a></li>
                        </ul>
                    </div>
                    <div className=" col-sm-4 col-md  col-12 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">Kết nối với chúng tôi</h5>
                        <ul className="footer_ul2_amrc">
                            <li><a href=""><i className="fab fa-facebook-f"/></a></li>
                            <li><a href=""><i className="fab fa-twitter" /></a></li>
                            <li><a href=""><i className="fab fa-linkedin" /></a></li>
                            <li><a href=""><i className="fab fa-instagram" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <p className="text-center mt-3">Copyright @2021 | Designed With by <a href="">Library</a></p>
                <ul className="social_footer_ul">
                    <li><a href=""><i className="fab fa-facebook-f" /></a></li>
                    <li><a href=""><i className="fab fa-twitter" /></a></li>
                    <li><a href=""><i className="fab fa-linkedin" /></a></li>
                    <li><a href=""><i className="fab fa-instagram" /></a></li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer;
