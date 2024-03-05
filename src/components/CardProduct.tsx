import React from "react";
import Link from "next/link";
import { Products } from "@/app/lib/interface/type";

const CardProduct = ({ Item }: { Item: Products[] }) => {
  const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  
  return (
    <section className="mx-1 g-3 align-items-center  sectionAllProduct">
      {Item.map((product, index) => {
        const truncatedTitle = product.title.substring(0, 20);
        return(
        <div className="collectionProduct mt-4" key={index}>
          <Link
            href={`/${product.category.url}/${product.category.subitems?.[0]?.urlItems || product.id }/${product.title.replace(/\s/g, '-')}`}
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
      )})}
    </section>
  );
};
export default CardProduct;
