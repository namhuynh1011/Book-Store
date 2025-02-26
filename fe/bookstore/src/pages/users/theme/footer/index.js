import { memo } from "react"
import "./style.scss";
import { Link } from "react-router-dom";
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter} from "react-icons/ai";

const Footer = () => {
    return <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="footer_about">
                        <h1 className="footer_about_logo">Book Store</h1>
                        <ul>
                            <li>Địa Chỉ: 230 Nguyễn Văn Hưởng</li>
                            <li>Phone: 0374786427</li>
                            <li>Email: bookstore@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="footer_widget">
                        <h6>Cửa Hàng</h6>
                        <ul>
                            <li>
                                <Link to="">Liên hệ</Link>
                            </li>
                            <li>
                                <Link to="">Thông tin về chúng tôi</Link>
                            </li>
                            <li>
                                <Link to="">Sản phẩm kinh doanh</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="">Thông tin tài khoản</Link>
                            </li>
                            <li>
                                <Link to="">Giỏ hàng</Link>
                            </li>
                            <li>
                                <Link to="">Danh sách ưa thích</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer_widget">
                        <h6>Khuyến mãi & ưu đãi</h6>
                        <p>Đăng ký nhận thông tin tại đây</p>
                        <form action="#">
                            <div>
                                <input type="text" placeholder="Nhập email"/>
                                <button type="submit" className="butuon_submit">
                                    Đăng ký
                                </button>
                            </div>
                            <div className="footer_widget_social">
                                <div>
                                    <AiOutlineFacebook />
                                </div>
                                <div>
                                    <AiOutlineInstagram />
                                </div>
                                <div>
                                    <AiOutlineLinkedin />   
                                </div>
                                <div>
                                    <AiOutlineTwitter />    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>;
};

export default memo(Footer);