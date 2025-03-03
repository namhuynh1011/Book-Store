import { memo } from "react"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import imgCat1 from "assets/users/image/categories/truyen.jpg";
import imgCat2 from "assets/users/image/categories/giaokhoa.jpg";
import imgCat3 from "assets/users/image/categories/lichsu.jpg";
import imgCat4 from "assets/users/image/categories/tieusu.jpg";
import imgCat5 from "assets/users/image/categories/vanhoc.jpg";
import img1Feat from "assets/users/image/featured/kinhte.jpg";
import img2Feat from "assets/users/image/featured/kinhte.jpg";
import "./style.scss";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

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
                    name: "Sách 1",
                    price: 10000
                },
                {
                    img: img2Feat,
                    name: "Sách 2",
                    price: 10000
                },
            ],
        },
        TieuThuye: {
            title: "Tiểu Thuyết",
            products: [
                {
                    img: img1Feat,
                    name: "Sách 1",
                    price: 10000
                },
            ],
        },
    };

    const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];
        
        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>);
            const tabPanel = [];
            data[key].products.forEach((item, j) => {
                tabPanel.push(<div key={j}>{item.name}</div>);
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
        </>
    );
};

export default memo(HomePage);