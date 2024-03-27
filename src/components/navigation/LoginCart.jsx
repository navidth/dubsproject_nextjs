"use client";

import { Tooltip } from "react-tooltip";
import { BsPersonCircle, BsCart3 } from "react-icons/bs";
import { BiSearchAlt2,BiLogInCircle } from "react-icons/bi";
import { useRef, useState} from "react";
import { AiOutlineClose} from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import CartProduct from "../CartProduct";

function LoginCart() {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const { products } = useSelector((state) => state.products);
  const productCount = products.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  //func for searchbox................................................
  const [search, setSearch] = useState("");
  const searchBoxRef = useRef(null);
  const openSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    searchBoxRef.current.style.height = "100%";
  };
  const closeSearch = () => {
    searchBoxRef.current.style.height = "0%";
  };

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="nav-left mt-3">
      <button
        data-tooltip-id="my-tooltip"
        data-tooltip-content="جستجو"
        className="tt btn search"
        onClick={openSearch}
      >
        <BiSearchAlt2
          size={"25px"}
          className="icons icons-search"
        ></BiSearchAlt2>{" "}
      </button>

      <button
        data-tooltip-id="my-tooltip"
        data-tooltip-content="سبد خرید"
        className="tt btn"
        onClick={handleShowModal}
      >
        {productCount > 0 ? (
          <span
            className="badge bg-danger"
            style={{
              position: "absolute",
              left: "80px",
              top: "12px",
              opacity: "0.95",
            }}
          >
            {productCount}
          </span>
        ) : null}
        <BsCart3 size={"25px"} className="icons bsbuy icons-buy"></BsCart3>
      </button>
      {/* Modal cart */}
      <Modal show={showModal} onHide={handleShowModal} className="rounded-4">
        <Modal.Header closeButton closeVariant="black" className="d-flex">
          <Modal.Title className="mx-2 fs-3 fw-700">سبد خرید</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            maxHeight: "220px",
            overflow: "hidden",
            overflowY: "scroll",
            padding: "20px",
            paddingRight: "0px !important",
          }}
        >
          <div className="d-flex flex-column gap-2">
            <h3
              className={`${
                products && products.length < 1 ? "d-block" : "d-none"
              }`}
            >
              هیچ خریدی انجام نشده است{" "}
            </h3>
            {<CartProduct></CartProduct>}
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <div className="total">
            <div className="">
              <span className="fw-bold">مجموع کل خرید :</span>
              <span>
                {numberWithCommas(
                  products && products.map((i) => i.totalPirce)
                )}
              </span>
            </div>
          </div>
          <Button variant="danger" onClick={handleShowModal}>
            تایید و ثبت سفارش
          </Button>
        </Modal.Footer>
      </Modal>
      {/* login or register */}
      <Link
        href={"/login"}
        data-tooltip-content="عضویت"
        data-tooltip-id="my-tooltip"
        className=" tt btn "
      >
        <BiLogInCircle
          size={"27px"}
          className="icons icons-login"
        ></BiLogInCircle>
      </Link>
      <div className="overlay" id="searchbox" ref={searchBoxRef}>
        <button type="button" className="btn btnclose" onClick={closeSearch}>
          <AiOutlineClose
            color="white"
            size={"35px"}
            className="m-3"
          ></AiOutlineClose>
        </button>
        <div className="d-flex justify-content-center align-items-center overlay-coontent">
          <input
            type="text"
            placeholder="جستجو کنید "
            className="overlay-content"
            value={search}
            onChange={openSearch}
          />
        </div>
      </div>

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
        }}
        opacity={"0.95"}
        border={"1px solid #ddd"}
      ></Tooltip>
    </div>
  );
}

export default LoginCart;
