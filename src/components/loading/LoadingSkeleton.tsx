import React from 'react'
import "../../styles/skeleton.css";
import Moshavere from '../Moshavere';
import ResualtCat from '../ResualtCat';
import PriceRange from '../PriceBox';

function LoadingSkeleton() {
  return (
    <div className="mt-5 d-flex justify-content-center container-lg">
    <section className="article me-3 w3-animate-right">
    <Moshavere />
    <PriceRange />
  </section>
      <section className="card-prudoct me-sm-5 me-0 rounded mb-5 ">
      <div className="container-sm">
        <div className="d-flex align-items-baseline">
        <p className="skeleton-text skeleton ms-2"></p>
        <p className="skeleton-text skeleton"></p>
        </div>
        <hr className="m-0" />
        <p className="skeleton-text skeleton mt-2"></p>
      </div>
      <section className="mx-1 g-3 align-items-center  sectionAllProduct">
        {[...new Array(6)].map((product, index) => (
          <div className="collectionProduct  mt-4" key={index}>
            <div className="cardProductLink">
              <div className="skeleton-card   rounded-3 bg-white">
                <div className="skeleton-card-img skeleton"></div>

                <div className="">
                  <p className="skeleton-text skeleton"></p>
                  <p className="skeleton-text skeleton"></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
    </div>
  )
}

export default LoadingSkeleton