import { CartContex, CartProvaider } from "@/context/CartContex";
import BrandLogo from "./Brand";
import LoginCart from "./LoginCart";
import { getCategory, getProduct } from "@/api/GetData";
import Navbar from "./Navbar";

const Navigation = async () => {
  const categoryData = await getCategory();
  return (
    <div className="bg-light shadownavbar w-100 w3-animate-opacity w3-container">
      <div className="justify-content-center align-items-center">
        <div className="d-flex justify-content-between navbartop">
          <div className=""></div>
          <BrandLogo></BrandLogo>
          <LoginCart></LoginCart>
        </div>
        {/* <!-- menu --> */}
        <Navbar data={categoryData}></Navbar>
      </div>
    </div>
  );
};
export default Navigation;
