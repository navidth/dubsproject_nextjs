"use client"
import { getProduct } from '@/api/GetData'
import { Products } from '@/app/lib/interface/type';
import Image from 'next/image';
import Link from 'next/link';

function CardSimilar({data,similar}:{data:Products[], similar:string}) {
  const similarData = data.filter((sim)=>sim.category.url === similar[0])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
  return (
    <div className="similar-products rounded-4 mb-3 mt-5">
    <section className='header-similar px-3 py-2 mx-auto bg-danger text-white text-center'>
        <h3>محصولات مشابه </h3>
    </section>
    <div className='px-5 py-4'>
        <ul className='list-similar-product'>
            {similarData.map((item, index)=>{
              const truncatedTitle = item.title.substring(0, 20);
               return(
                <li key={index} className='list-group-item border-0'>
                <Link href={`/${item.category.url}/${item.category.subitems?.[0]?.urlItems}/${item.title}`} onClick={handleScrollToTop}>
                <div className="product-similar card p-3">
                    <div className="img-similar border-0 border-bottom">
                        <img src={item.images[0]} className='card-img-top' alt={item.title}/>
                    </div>
                    <div className="body-similar card-body">
                        <h5 className='card-title fw-700'> {truncatedTitle} </h5>
                        <div className="card-text">
                            <span className='mx-2 fs-5 fw-bold my-2'>{item.price}</span>
                            <span>تومان</span>
                        </div>
                        <Link href={`/blades/${item.title}`} onClick={handleScrollToTop} className="btn btn-danger py-2 mt-2 mx-auto d-block">مشاهده</Link>
                    </div>
                </div>
                </Link>
            </li>
               )
        })}
            
            
        </ul>
    </div>
    <section>
    </section>
  </div>
  )
}

export default CardSimilar