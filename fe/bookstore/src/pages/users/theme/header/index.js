import "./style.scss";
import { AiOutlineShoppingCart,AiTwotoneMail ,AiOutlineUser ,AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter} from "react-icons/ai";
import { memo, useState } from "react"
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
import { ROUTERS } from "utils/router";

const Header = () => {

    const [menus, setMenus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCT,

        },
        {
            //Cần Chỉnh Sửa
            name: "Sản phẩm",
            path: "",
            isShowSubMenu: false,
            child: [
                {
                    name: "Thịt",
                    path: "",
                },
                {
                    name: "Rau Củ",
                    path: "",
                },
                {
                    name: "Thức ăn nhanh",
                    path: "",
                },
            ]

        },
        {
            name: "Bài viết",
            path: "",

        },
        {
            name: "Liên hệ",
            path: "",

        }
    ])

    return (
        <>
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
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="header_logo" >
                            <h1>Book Store</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <nav className="header_menu">
                            <ul>
                                {menus?.map((menu, menukey) => (
                                        <li key ={menukey} className={menukey === 0 ? "active" : ""}>
                                            <Link to={menu?.path}>{menu?.name}</Link>
                                            {
                                                menu.child && (
                                                    <ul className="header_menu_dropdown">
                                                        {
                                                            menu.child.map((childItem, childKey) => (
                                                                <li key={`${menukey}-${childKey}`}>
                                                                    <Link to={childItem.path}>{childItem.name}</Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                )
                                            }
                                        </li>
                                ))}  
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3">
                        <div className="header_cart" >
                            <div className="header_cart_price">
                                <span>{formatter(1113000)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#">
                                        <AiOutlineShoppingCart />
                                        <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Header);