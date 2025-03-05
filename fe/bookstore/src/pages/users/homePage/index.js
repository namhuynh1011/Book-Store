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
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductCard from "component/ProductCard";

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
                tabPanel.push(
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={j}>
                        <ProductCard name={item.name} img={item.img} price={item.price}  />
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
                            <h3>Truyện hay</h3>
                            <p>100% xuất bản<br />chính gốc.</p>
                            <button className="buy_now">
                                <AiOutlineShoppingCart className="icon" />
                                MUA NGAY
                            </button>
                        </div>
                        <div className="banner_pic">
                            <img src={img1Feat} alt="Trái cây tươi" />
                        </div>
                    </div>
                    <div className="banner_item">
                        <div className="banner_content">
                            <h3>Tiểu Thuyết</h3>
                            <p>Ý nghĩa<br />sâu sắc .</p>
                            <button className="buy_now">
                                <AiOutlineShoppingCart className="icon" />
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