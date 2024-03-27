import {
  BsInstagram,
  BsTelegram,
  BsPhone,
  BsEnvelopeAt,
  BsGeoAlt,
} from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer px-4 bg-dark text-light">
      <div className="w-full d-flex align-item-flex-start flex-column flex-md-row py-3 justify-content-around a-line">
        {/* ......................راه های ارتباطی ............... */}
        <div className="d-flex flex-column mx-4 mx-md-0">
          <div className="container-md mb-3">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/pingpong_damghan?igshid=MzRlODBiNWFlZA=="
              className="tt btn insta"
              data-tooltip-content="اینستاگرام"
              data-tooltip-id="my-tooltip"
            >
              <BsInstagram size={"26px"} color="var(--bs-light)"></BsInstagram>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/Navid_th?fbclid=PAAaYPv4EGttqdRmuE9EGoSA6yAUZ8VJkwX0OniF10f5Q0b2iqhQ768Mooc_k"
              className="btn tt"
              data-tooltip-content="تلگرام پشتیبان"
              data-tooltip-id="my-tooltip"
            >
              <BsTelegram size={"26px"} color="var(--bs-light)"></BsTelegram>
            </Link>
          </div>
          <div className="ms-5">
            <p className="fw-700 letter-spacing">
              <BsPhone
                className="ms-1 mb-3 bi tt"
                size={"26px"}
                data-tooltip-content="شماره تلفن مشاور خرید"
                data-tooltip-id="my-tooltip"
              ></BsPhone>
              09104873278 (آقای طاهری)
            </p>
            <p className="fw-700 letter-spacing">
              <BsPhone
                className=" ms-1 mb-3 bi tt"
                size={"26px"}
                data-tooltip-content="شماره تلفن فروشنده"
                data-tooltip-id="my-tooltip"
              ></BsPhone>
              09120978206 (آقای صداقتی)
            </p>
          </div>
          <div className="ms-5">
            <p className="fw-700 letter-spacing">
              <BsEnvelopeAt className="ms-1 bi" size={"26px"}></BsEnvelopeAt>{" "}
              navidtaheri32@gmail.com
            </p>
          </div>
          <div className="ms-5">
            <p className="fw-700">
              <BsGeoAlt className="ms-1 bi" size={"26px"}></BsGeoAlt>
              سمنان، دامغان، میدان شهدا ،خیابان پاسداران، کنار اداره ورزش و
              جوانان{" "}
              <strong className="text-danger fw-bolder">
                فروش فقط اینترنتی{" "}
              </strong>
            </p>
          </div>
        </div>
        {/* .........................خدمات.................. */}
        <div className="d-flex flex-column align-item-flex-start my-md-0 my-5 mx-4">
          <h1 className="mb-3">خدمات</h1>
          <Link href="/blades" className="a-footer">
            چوب راکت
          </Link>
          <Link href="/rubbers" className="a-footer">
            رویه راکت
          </Link>
          <Link href="/table-ball" className="a-footer">
            میز و توپ پینگ پنگ
          </Link>
          <Link href="/clothings" className="a-footer">
            پوشاک و کفش
          </Link>
          <Link href="/accessory" className="a-footer">
            لوازم جانبی
          </Link>
        </div>
        {/* .....................بلاگ ها ...................*/}
        <div className="d-flex flex-column align-item-flex-start mx-4 mb-5">
          <h1 className="mb-3">بلاگ ها</h1>
          <Link href="" className="a-footer">
            دانستنی های پینگ پنگ
          </Link>
          <Link href="" className="a-footer">
            بهترین چوب راکت ها
          </Link>
          <Link href="" className="a-footer">
            انواع پیچ و تشخیص آن
          </Link>
          <Link href="" className="a-footer">
            بهترین برند ها
          </Link>
          <Link href="" className="a-footer">
            تاثیر راکت حرفه ای
          </Link>
        </div>
        {/* ...................درباره ما...................... */}
        <div className="d-flex flex-column align-item-flex-start mx-4  mb-5">
          <h1 className="mb-3">درباره ما</h1>
          <Link href="" className="a-footer">
            درباره ما
          </Link>
          <Link href="" className="a-footer">
            سوالات متد اول
          </Link>
          <Link href="" className="a-footer">
            تماس با ما
          </Link>
          <Link href="" className="a-footer">
            قوانین و مقررات
          </Link>
        </div>
      </div>
      <hr />
      {/*........................ طراح...................... */}
      <div className="text-center mt-5 py-2">
        <p className="w3-text-blue-grey mb-5">
          {" "}
          طراح و توسعه از :{" "}
          <Link className="w3-text-light-gray creator" href="">
            نوید طاهری
          </Link>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
