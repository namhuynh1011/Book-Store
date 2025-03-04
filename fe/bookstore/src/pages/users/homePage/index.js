import { memo } from "react"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import imgCat1 from "assets/users/image/categories/truyen.jpg";
import imgCat2 from "assets/users/image/categories/giaokhoa.jpg";
import imgCat3 from "assets/users/image/categories/lichsu.jpg";
import imgCat4 from "assets/users/image/categories/tieusu.jpg";
import imgCat5 from "assets/users/image/categories/vanhoc.jpg";
import img1Feat from "assets/users/image/featured/Sakamoto.jpg";
import img2Feat from "assets/users/image/featured/nhagiakim.jpg";
import img3Feat from "assets/users/image/featured/conan.jpg";
import img4Feat from "assets/users/image/featured/nikolatesla.jpg";
import img5Feat from "assets/users/image/featured/ketromsach.jpg";
import img6Feat from "assets/users/image/featured/thuchoem.jpg";
import img7Feat from "assets/users/image/featured/Atackontitan.jpg";
import img8Feat from "assets/users/image/featured/goctoiansaumoicaunoi.jpg";



import "./style.scss";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";

const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const slideItems = [
        {
            bgImg: imgCat1,
            name: "Truyện Tranh"
        },
        {
            bgImg: imgCat2,
            name: "Sách Giảo Khoa"
        },
        {
            bgImg: imgCat3,
            name: "Sách Lịch Sử"
        },
        {
            bgImg: imgCat4,
            name: "Sách Tiểu Sử"
        },
        {
            bgImg: imgCat5,
            name: "Sách Văn Học"
        },

    ];

    const featProducts = {
        all: {
            title: "Toàn Bộ",
            products: [
                {
                    img: img1Feat,
                    name: "Truyện Sakamoto",
                    price: 42750
                },
                {
                    img: img2Feat,
                    name: "Nhà Giả Kim",
                    price: 63200
                },
                {
                    img: img3Feat,
                    name: "Truyện Conan",
                    price: 22500
                },
                {
                    img: img4Feat,
                    name: "Nikola Tesla Tự Truyện",
                    price: 108000
                },
                {
                    img: img5Feat,
                    name: "Kẻ Trộm Sách",
                    price: 186750
                },
                {
                    img: img6Feat,
                    name: "Kẻ Trộm Sách",
                    price: 186750
                },
                {
                    img: img7Feat,
                    name: "Truyện Attack on Titan",
                    price: 45600
                },
                {
                    img: img8Feat,
                    name: "Góc Tối Ẩn Sau Mỗi Câu Nói",
                    price: 104250
                }
            ],
        },
        Truyen: {
            title: "Truyện",
            products: [
                {
                    img: img1Feat,
                    name: "Truyện Sakamoto",
                    price: 10000
                },
                {
                    img: img3Feat,
                    name: "Truyện Conan",
                    price: 10000
                },
                {
                    img: img7Feat,
                    name: "Truyện Attack on Titan",
                    price: 10000
                },
            ],
        },
        TieuThuyet: {
            title: "Tiểu Thuyết",
            products: [
                {
                    img: img2Feat,
                    name: "Nhà Giả Kim",
                    price: 63200
                },
                {
                    img: img6Feat,
                    name: "Kẻ Trộm Sách",
                    price: 186750
                }
            ]
        },
        HoiKy: {
            title: "Hồi Ký",
            products: [
                {
                    img: img4Feat,
                    name: "Nikola Tesla Tự Truyện",
                    price: 108000
                },
                {
                    img: img6Feat,
                    name: "Thư Cho Em",
                    price: 186750
                }
            ]
        },
        TamLy: {
            title: "Tâm Lý",
            products: [
                {
                    img: img8Feat,
                    name: "Góc Tối Ẩn Sau Mỗi Câu Nói",
                    price: 104250
                }
            ]
        }
    };

    const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];

        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>);
            const tabPanel = [];
            data[key].products.forEach((item, j) => {
                tabPanel.push(<div className="col-lg-3" key={j}>
                    <div className="featured_item">
                        <div className="featured_item_pic" >
                            <img src={item.img} alt={item.name} className="featured_image" />
                            <ul className="featured_item_pic_hover">
                                <li>
                                    <AiOutlineEye />
                                </li>
                                <li>
                                    <AiOutlineShoppingCart />
                                </li>
                            </ul>
                        </div>
                        <div className="featured_item_text">
                            <h6>
                                <Link to="">{item.name}</Link>
                            </h6>
                            <h5>{formatter(item.price)}</h5>
                        </div>
                    </div>
                </div>);
            });
            tabPanels.push(tabPanel);
        });

        return (
            <Tabs>
                <TabList>{tabList}</TabList>
                {
                    tabPanels.map((item, key) => (
                        <TabPanel key={key}>
                            <div className="row">{item}</div>
                        </TabPanel>
                    ))}
            </Tabs>
        );
    }
    return (
        <>
            {/*categories begin*/}
            <div className="container container_categories_slider">
                <Carousel responsive={responsive} className="categories_slider">
                    {slideItems.map((item, key) => (
                        <div className="categories_slider_item" key={key}>
                            <img src={item.bgImg} alt={item.name} className="category-image" />
                            <p>{item.name}</p>
                        </div>
                    ))}

                </Carousel>
            </div>
            {/*categories end*/}
            {/*Featured begin*/}
            <div className="container">
                <div className="featured">
                    <div className="section_title">
                        <h2>Sản Phẩm Nổi Bật</h2>
                    </div>
                    {renderFeaturedProducts(featProducts)}
                </div>
            </div>
            {/*Featured end*/}
            {/*Banner begin*/}
            <div className="container">
                <div className="banner">
                    <div className="banner_item">
                        <div className="banner_content">
                            <h3>Trái cây tươi</h3>
                            <p>100% tự nhiên<br />Không chất bảo quản.</p>
                            <button className="buy_now">
                                <AiOutlineShoppingCart className="icon"/>
                                MUA NGAY
                            </button>
                        </div>
                        <div className="banner_pic">
                            <img src={img1Feat} alt="Trái cây tươi" />
                        </div>
                    </div>
                    <div className="banner_item">
                        <div className="banner_content">
                            <h3>Sữa trái cây</h3>
                            <p>Hàng nhập khẩu<br />Chứng nhận an toàn thực phẩm.</p>
                            <button className="buy_now">
                                <AiOutlineShoppingCart className="icon"/>
                                MUA NGAY
                            </button>
                        </div>
                        <div className="banner_pic">
                            <img src={img2Feat} alt="Sữa trái cây" />
                        </div>
                    </div>
                </div>
            </div>


            {/*Banner end*/}
        </>
    );
};

export default memo(HomePage);