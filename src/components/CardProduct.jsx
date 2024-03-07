"use client";
import Link from "next/link";
import { Products } from "@/app/lib/interface/type";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataProducts } from "./redux/productSlice";

const CardProduct = ({ params }) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const { posts, errors } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataProducts());
  }, []);

let products =[]
  if (params.url && params.urlItems === undefined) {
    products = posts.filter((i) => i.category.url === params.url);
  } else if (params.url && params.urlItems) {
    products = posts.filter((i) => {
      return (
        i.category.url === params.url &&
        i.category.subitems &&
        i.category.subitems.some(
          (subitem) => subitem.urlItems === params.urlItems
        )
      );
    });
  }


  if (errors) {
    return (
      <h1 className="text-dark d-flex justify-content-center">
        {" "}
        محصولی وجود ندارد...
      </h1>
    );
  }

  return (
    <section className="mx-1 g-3 align-items-center  sectionAllProduct">
      {products.map((product, index) => {
        const truncatedTitle = product.title.substring(0, 20);
        return (
          <div className="collectionProduct mt-4" key={index}>
            <Link
              href={`/${product.category.url}/${
                product.category.subitems?.[0]?.urlItems || product.id
              }/${product.title.replace(/\s/g, "-")}`}
              className="productcard rounded-3 bg-white "
            >
              <div className="img-card rounded-2 ">
                <img
                  src={product.images[0]}
                  className="card-img rounded-2"
                  alt={truncatedTitle}
                />
              </div>
              <div className="my-0 my-xl-4 description-pro">
                <div className="headPRO">
                  <h4 className="nameProduct h4 w3-opacity-min">
                    {truncatedTitle}
                  </h4>
                </div>
                <div className="PricePRO">
                  <span className="fw-bolder fs-4 ms-2 letter-spacing ">
                    {numberWithCommas(product.price)}
                  </span>
                  <span className="opacity-75 fs-5">تومان</span>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
};
export default CardProduct;
