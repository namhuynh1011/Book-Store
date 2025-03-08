import { memo } from "react"
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";

const ProductDetailPage = () => {

    return (
        <>
            <Breadcrumb name="Chi Tiết Sản Phẩm" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        Hinh Ảnh
                    </div>
                    <div className="col-lg-6">
                        Chi Tiết
                    </div>
                </div>
            </div>
        </>
    );
        
};

export default memo(ProductDetailPage);