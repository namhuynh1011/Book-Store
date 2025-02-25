import "./style.scss";
import {AiTwotoneMail ,AiOutlineUser ,AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter} from "react-icons/ai";
import { memo } from "react"
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";

const Header = () => {
    return (
        <div className="header_top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header_top_left">
                        <ul>
                            <li>
                                <AiTwotoneMail />
                                bookstore@gmail.com
                            </li>
                            <li>Miễn phí giao hàng cho đơn trên {formatter(200000)}</li>
                        </ul>
                    </div>
                    <div className="col-6 header_top_right">
                        <ul>
                            <li>
                                <Link to="https://www.facebook.com/huynhquocnom/" target="_blank">
                                    <AiOutlineFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <AiOutlineInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to="">    
                                <AiOutlineLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link to="">    
                                <AiOutlineTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link to="">    
                                <AiOutlineUser />
                                </Link>
                                <span> Đăng Nhập </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Header);