import { memo } from "react"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import imgCat1 from "assets/users/image/categories/truyen.jpg";
import imgCat2 from "assets/users/image/categories/giaokhoa.jpg";
import imgCat3 from "assets/users/image/categories/lichsu.jpg";
import imgCat4 from "assets/users/image/categories/tieusu.jpg";
import imgCat5 from "assets/users/image/categories/vanhoc.jpg";
import "./style.scss";

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

    ]
    return (
       <>
        {/*categories begin*/}
        <div className="container container_categories_slider">
            <Carousel responsive={responsive} className="categories_slider">
                {slideItems.map((item, key) => (
                    <div className="categories_slider_item" key={key}>
                         <img src={item.bgImg} alt={item.name} className="category-image"/>
                        <p>{item.name}</p>
                    </div>
                ))}
               
            </Carousel>
        </div>
        {/*categories end*/}
       </>
    );
};

export default memo(HomePage);