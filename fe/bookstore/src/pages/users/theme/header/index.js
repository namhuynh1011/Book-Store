import "./style.scss";
import { AiOutlineShoppingCart,AiTwotoneMail ,AiOutlineUser ,AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineMenu, AiOutlinePhone} from "react-icons/ai";
import { memo, useState } from "react"
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
import { ROUTERS } from "utils/router";

const Header = () => {
    const [isShowCatergories, getShowCategories] = useState(true);


    const [menus] = useState([
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
                    name: "Sách",
                    path: "",
                },
                {
                    name: "Truyện Tranh",
                    path: "",
                },
                {
                    name: "Tiểu Thuyết",
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
            <div className="container">
                <div className="row hero_categories_container">
                    <div className="col-lg-3 hero_categories">
                        <div className="hero_categories_all" onClick={() => getShowCategories(!isShowCatergories)}>
                            <AiOutlineMenu />
                            Danh Sách Sản Phẩm
                        </div>
                            <ul className={isShowCatergories ? "" : "hidden"}>
                                <li>
                                    <Link to="#">Truyện Tranh</Link>
                                </li>
                                <li>
                                    <Link to="#">Truyện Ngắn</Link>
                                </li>
                                <li>
                                    <Link to="#">Kinh Dị</Link>
                                </li>
                                <li>
                                    <Link to="#">Lịch Sử</Link>
                                </li>
                                <li>
                                    <Link to="#">Tiểu Thuyết</Link>
                                </li>
                            </ul>
                    </div>
                    <div className="col-lg-9 hero_search_container">
                        <div className="hero_search">
                                <div className="hero_search_form">
                                    <form>
                                        <input type="text" name="" placeholder="Tìm kiếm sản phẩm" />
                                        <button type="submit" className="">Tìm kiếm</button>
                                    </form>
                                </div>
                                <div className="hero_search_phone">
                                    <div className="hero_search_phone_icon">
                                        <AiOutlinePhone />
                                    </div>
                                    <div className="hero_search_phone_text">
                                        <p>037.478.6427</p>
                                        <span>Hỗ Trợ 16/6</span>
                                    </div>
                                </div>
                        </div>
                        <div className="hero_item">
                            <div className="hero_text">
                                <span>Sách Hay Sách Đẹp</span>
                                <h2>
                                    Sách<br />
                                    Cũ 100%
                                </h2>
                                <p>Lấy Phí Giao Hàng Tận Nơi</p>
                                <Link to="" className="primary_btn">
                                        Mua Ngay
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    );
};

export default memo(Header);