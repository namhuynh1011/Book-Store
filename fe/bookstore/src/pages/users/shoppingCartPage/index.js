import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { formatter } from "utils/fomater";
import { Quantity } from "component";
import { AiOutlineClose } from "react-icons/ai";

const ShoppingCartPage = () => {
  return (
    <>
      <Breadcrumb name="Giỏ Hàng" />
      <div className="container">
        <div className="table_cart">
          <table>
            <thead>
              <tr>
                <th>Tên</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Thành Tiền</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="shopping_cart_item">
                  <img src="https://via.placeholder.com/50"
                   alt="product_pic" />
                  <h4>Ten San Pham 1</h4>
                </td>
                <td>{formatter(200000)}</td>
                <td><Quantity quantity="2" hasAddToCart={false}/></td>
                <td>{formatter(400000)}</td>
                <td className="icon_close">
                  <AiOutlineClose/>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default memo(ShoppingCartPage);
