"use client";
import { Products } from "@/app/lib/interface/type";
import Image from "next/image";
import Link from "next/link";

function CardSimilar({similar }: {similar: Products[] }) {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="similar-products rounded-4 mb-3 mt-5">
      <section className="header-similar px-3 py-2">
        <h3>محصولات مشابه </h3>
      </section>
      <div className="px-5 py-4">
        <ul className="list-similar-product">
          {similar.map((item, index) => {
            return (
              <li key={index} className="list-group-item ">
                <div className="product-similar border">
                  <div className="img-similar mx-auto mb-3 border-0 pb-1 border-bottom">
                    <img
                      src={item.images[0]}
                      className="card-img-top"
                      alt={item.title}
                    />
                  </div>

                  <div className="title-prodcuts-similar">
                    <p className="fw-700 text-center"> {item.title} </p>
                  </div>

                  <div className="price-prodcuts-similar">
                    <span className="mx-2 fs-5 fw-bold my-2">{item.price}</span>
                    <span>تومان</span>
                  </div>

                  <div className="link-product-similar w-75 mx-auto">
                    <Link
                      href={`/${item.category.url}/${
                        item.category.subitems?.[0]?.urlItems || item.id
                      }/${item.title.replace(/\s/g, "-")}`}
                      onClick={handleScrollToTop}
                      className="btn btn-danger py-2 mt-2 mx-auto d-block"
                    >
                      مشاهده
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CardSimilar;
