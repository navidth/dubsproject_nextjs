"use client";
import{ useState,useEffect } from "react";
import {
  BsBookmark,
  BsBookmarkFill,
  BsShare,
  BsTelegram,
} from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { LuPlus, LuMinus } from "react-icons/lu";
import { RiDeleteBin2Fill } from "react-icons/ri";
import ModalImage from "react-modal-image";
import { useDispatch, useSelector } from "react-redux";
import DesceriptionsProduct from "./DesceriptionsProduct";
import CardSimilar from "./CardSimilar";
import { addToCart, getDataProducts, removeToCart } from "./redux/productSlice";

function DetailedProduct({ params }) {
  const { posts,products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataProducts());
  }, []);

  let data = posts.filter(
    (i) => i.title.replace(/[&:]/g, "").replace(/\s/g, "-") === params.title
  );
  let similar = posts.filter((i) => i.category.url === data?.[0]?.category.url);

  const [bookMarks, setBookmarks] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showMassege, setShowMassege] = useState(false);
  const [showQuantity, setShowQuantity] = useState(false);

  const detailBlades = [
    { attr: "کشور", value: "ژاپن" },
    { attr: "سرعت", value: "78" },
    { attr: "کنترل", value: "95" },
    { attr: "کلاس", value: "off" },
    { attr: "نوع کربن", value: "آرللایت" },
    { attr: "وزن", value: "90" },
  ];
  const handleDashbordShare = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleDashbordFavorite = () => {
    setBookmarks(!bookMarks);
    setShowMassege(true);
    setTimeout(() => {
      setShowMassege(false);
    }, 2000);
  };

  const quanterHandler = (e, items, op) => {
    setShowQuantity(true);
    const parentElement =
      e.currentTarget.parentElement.parentElement.parentElement.parentElement;

      const newData = {
        name: parentElement.querySelector(".brandName").innerText,
        id: items.id,
        operation: op,
        quantity: Number(parentElement.querySelector(".values").value),
        price: items.price,
        image: items.images[0],
        IsYetInCart: true,
        totalPirce: Number(items.price) * Number(parentElement.querySelector(".values").value),
      };
      dispatch(addToCart(newData));
  };

  const removeHandler = (items) => {
    setShowQuantity(false);
    dispatch(removeToCart(items));
  };

  return (
    <div className="">
      <div className="detailed-items my-5">
        {data.map((items) => (
          <div
            key={items.id}
            className="information-product bg-white rounded-4"
          >
            {/* modal img */}
            <div className="img-products mt-md-4">
              <div className="img-asli-div">
                <img
                  src={items.images[0]}
                  alt={items.title}
                  className="me-md-3 img-asli"
                />
              </div>
              <div className="modal-img my-4 me-3">
                {items.images &&
                  items.images.map((image, index) => (
                    <ModalImage
                      key={index}
                      small={image}
                      large={image}
                      hideDownload={true}
                      hideZoom={true}
                      showRotate={true}
                      autoFocus={true}
                    />
                  ))}
              </div>
            </div>
            {/* body information products */}
            <div className="body-product mt-3">
              <section>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="fw-700 brandName">{items.title}</h4>
                  <div className=" d-flex justify-content-center align-items-center">
                    <BsShare
                      id="dashbord-svg"
                      onClick={handleDashbordShare}
                      size={"24px"}
                      className="ms-3"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="کپی لینک محصول"
                      data-tooltip-place="top"
                      style={{ cursor: "pointer" }}
                    />

                    <BsBookmark
                      id="dashbord-svg"
                      size={"24px"}
                      onClick={handleDashbordFavorite}
                      className={`ms-5 ${bookMarks ? "d-none" : "d-block"}`}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="افزودن به علاقه مندی ها"
                      data-tooltip-place="top"
                      style={{ cursor: "pointer" }}
                    />
                    <BsBookmarkFill
                      size={"24px"}
                      onClick={handleDashbordFavorite}
                      className={`ms-5 ${bookMarks ? "d-block" : "d-none"}`}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="حذف از علاقه مندی ها"
                      data-tooltip-place="top"
                      style={{ cursor: "pointer" }}
                    />
                    {/* ......................................Modal Massage............................... */}
                    <div
                      className={`alert alert-danger ${
                        showAlert ? "d-block" : "d-none"
                      }`}
                      style={{
                        position: "absolute",
                        right: "50%",
                        top: "50%",
                        width: "25%",
                        textAlign: "center",
                        opacity: "0.8",
                        color: "black",
                      }}
                    >
                      <p>با موفقیت کپی شد</p>
                    </div>
                    <div
                      className={`alert alert-danger ${
                        showMassege ? "d-block" : "d-none"
                      }`}
                      style={{
                        position: "absolute",
                        right: "50%",
                        top: "50%",
                        width: "25%",
                        textAlign: "center",
                        opacity: "0.8",
                        color: "black",
                      }}
                    >
                      <p>با موفقیت انجام شد</p>
                    </div>
                  </div>
                </div>
                <div className="brand">
                  <label htmlFor="brand" className="fw-bold mt-2 ms-2">
                    برند :{" "}
                  </label>
                  {items.category.subitems
                    ? items.category.subitems.map((i, index) => (
                        <span
                          id="brand"
                          key={index}
                          className=" letter-spacing text-muted"
                        >
                          {i.urlItems}
                        </span>
                      ))
                    : null}
                </div>
              </section>

              <section>
                <ul className="mt-2 p-0 mx-3">
                  {detailBlades.map((detail, index) => (
                    <li className="py-1 detailProduct" key={index}>
                      <div className="inform">
                        <span className="fw-bold letter-spacing">
                          {detail.attr} :{" "}
                        </span>
                        <span className="text-muted px-4">
                          {" "}
                          {detail.value}{" "}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="pb-4">
                <div className="priceSection d-flex align-items-baseline text-danger">
                  <h1 className="px-2 letter-spacing ms-2 price">
                    {numberWithCommas(items.price)}00000
                  </h1>{" "}
                  <h6 className="letter-spacing">تومان </h6>
                </div>

                {showQuantity ? (
                  <ul
                    className={`quantity align-items-center justify-content-end ${
                      showQuantity ? "animationOpcL d-flex" : "d-none"
                    }`}
                  >
                    <li>
                      <button
                        className="add border-0 border-2"
                        onClick={(e) => quanterHandler(e, items, 1)}>
                        <LuPlus size={"25px"} />
                      </button>
                    </li>
                    <li className=" mx-3">
                      <p className=" my-auto fw-bold fs-5">
                        {products.find((product) => product.id === items.id)
                          ?.quantity || 0}
                      </p>
                      <input
                        type="text"
                        className="values  visually-hidden hidden"
                        defaultValue="1"
                      />
                    </li>
                    <li>
                      {" "}
                      <button
                        className={`minus border-0 ${
                          products.find((product) => product.id === items.id)
                            ?.IsYetInCart
                            ? ""
                            : "pointer-events-none"
                        }`}
                        onClick={(e) => quanterHandler(e, items, -1)}
                      >
                        <LuMinus size={"25px"} />
                      </button>
                    </li>
                    <li>
                      {" "}
                      <RiDeleteBin2Fill
                        size={"29px"}
                        className="delete text-danger mx-3"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="حذف از سبد خرید"
                        onClick={() => {
                          removeHandler(items);
                        }}
                      />
                    </li>
                  </ul>
                ) : (
                  <div
                    className={`button-price mx-3 ${
                      showQuantity ? "d-none" : "d-block"
                    }`}
                  >
                    <button
                      className="btn btn-danger rounded-5 p-3"
                      type="button"
                      onClick={(e) => quanterHandler(e, items, 1)}
                    >
                      <MdAddShoppingCart size={"24px"}></MdAddShoppingCart>
                      <span className="mx-3">افزودن به سبد خرید</span>
                    </button>
                  </div>
                )}
              </section>

              <section className="my-1 border-0">
                <div className="stock">
                  <label htmlFor="stock" className="fw-bold fs-small">
                    موجودی :{" "}
                  </label>
                  <span className="text-danger"> موجود</span>
                </div>
              </section>
            </div>
          </div>
        ))}

        <div className="description-similar my-5">
          {/* // desceriptions...........................  */}
          <DesceriptionsProduct data={data} />

          {/* Similar Products............................ */}

          <CardSimilar similar={similar} />
        </div>
      </div>
    </div>
  );
}

export default DetailedProduct;
