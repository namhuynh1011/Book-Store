import { memo } from "react"
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import cat1img from "assets/users/image/categories/truyen.jpg";
import cat2img from "assets/users/image/categories/giaokhoa.jpg";
import cat3img from "assets/users/image/categories/lichsu.jpg";
import { AiOutlineCopy, AiOutlineEye, AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { formatter } from "utils/fomater";

const ProductDetailPage = () => {

    const imgs = [cat1img, cat2img, cat3img];
    return (
        <>
            <Breadcrumb name="Chi Tiết Sản Phẩm" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 product_detail_pic">
                        <img src={cat3img} alt="product-pic"/>
                        <div className="main">
                            {imgs.map((item,key) => (
                                <img src = {item} alt="product-pic" key={key} />
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6 product_detail_text">
                        <h2 className="">Truyen Hay</h2>
                        <div className="seen_icon">
                            <AiOutlineEye />
                            {` 10 lượt xem`}
                        </div>
                        <h3>{formatter(100000)}</h3>
                        <p>
                            Book Store là một hệ thống bán sách đa dạng thể loại. Các bạn hãy đến
                            với cửa hàng của chúng tôi để có thể tìm được những cuốn sách mà bạn yêu thích.
                        </p>
                        <ul>
                            <li>
                                <b>Tình Trạng: </b> <span>Còn hàng</span>
                            </li>
                            <li>
                                <b>Số Lượng: </b> <span>20</span>
                            </li>
                            <li>
                                <b>Chia Sẻ: </b>{" "}
                                <span>
                                    <AiOutlineFacebook />
                                    <AiOutlineInstagram />
                                    <AiOutlineCopy />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
        
};

export default memo(ProductDetailPage);