"use client";

import "../styles/cartProduct.css";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeToCart } from "./redux/productSlice";
import { Tooltip } from "react-tooltip";

const CartProduct = (props) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const quanterHandler = (e, product, op) => {
    const parentElement =
      e.currentTarget.parentElement.parentElement;

      const newData = {
        name: parentElement.querySelector(".brandName").innerText,
        id: product.id,
        operation: op,
        quantity: Number(parentElement.querySelector(".values").value),
        price: product.price,
        IsYetInCart: true,
        totalPirce: Number(product.price) * Number(parentElement.querySelector(".values").value),
      };
      dispatch(addToCart(newData));
  };

  return (
    <>
      {products &&
        products.map((product) => (
          <div key={product.id} className="cartProduct">
            <div className="imgCart">
              <img src={product.image} alt={product.id} />
            </div>

            <div className="nameCart">
              <p className="brandName">{product.name}</p>
            </div>

            <div className="priceCart">
              <p className="fw-700">{numberWithCommas(product.price)} تومان</p>
            </div>

            <div className="quanityCart">

              <button onClick={(e)=>{quanterHandler(e,product, 1)}}>
                <LuPlusCircle size={21} className="text-danger" />
              </button>

              <p>
                {products.find((p) => p.id === product.id)
                  ?.quantity || 0}
              </p>
              <input
                type="text"
                className="values  visually-hidden hidden"
                defaultValue="1"
              />

              <button onClick={(e)=>{quanterHandler(e,product, -1)}}>
                <LuMinusCircle size={21} className="text-danger"  />
              </button>

            </div>

            <div
              className="removeCart bg-danger"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="حذف از سبد خرید">
              <button onClick={()=>{dispatch(removeToCart(product))}}>x</button>
            </div>
          </div>
        ))}
      <Tooltip
        id="my-tooltip"
        className="custom-tooltip"
        style={{
          backgroundColor: "var(--bs-danger)",
          color: "var(--bs-light)",
          direction: "ltr",
          borderRadius: "14px",
          padding: "8px",
          fontSize: "12px",
          zIndex: "999",
        }}
        opacity={"0.95"}
        border={"1px solid #ddd"}
      ></Tooltip>
    </>
  );
};

export default CartProduct;
