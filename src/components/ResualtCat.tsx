"use client"
import Link from "next/link";
import { MdExpandMore } from "react-icons/md";
import { Category, Products } from "../app/lib/interface/type";
import { usePathname } from "next/navigation";

function ResualtCat({
  pageFather,
  pageFatherUrl,
  names,
}: {
  pageFather: string;
  pageFatherUrl: string;
  names: any[];
}) 
{
  return (
    <div className="card bg-light mt-4 ">
      <div className="bg-body-secondary">
        <h6 className="text-end my-3 me-3 fw-bold card-header-tabs ">
          {" "}
          دسته بندی نتایج
        </h6>
      </div>

      <div className="d-flex flex-column card-body border-top border-muted">
        <div className="d-flex ">
          <Link href={`/${pageFatherUrl}`} className="text-decoration-none ">
            <MdExpandMore className="text-muted" size={"22px"} />
            <span className="text-decoration-none w3-text-deep-orange fw-bold">
              {pageFather}
            </span>
          </Link>
        </div>
        <div className="d-flex flex-column me-4  mt-2">
          {names.map((name, index) => {
            return (
              <li className="list-group-item" key={index}>
                <Link
                  href={`/${pageFatherUrl}/${name.urlItems}`}
                  className={`text-decoration-none text-body item-result small mb-1`}
                >
                  {name.name}
                </Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ResualtCat;
