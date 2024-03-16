import BrandLogo from "./Brand";
import LoginCart from "./LoginCart";
import { getCategory} from "@/Data/GetData";
import Navbar from "./Navbar";

const Navigation = async () => {
  const categoryData = await getCategory();
  return (
    <div className="bg-light shadownavbar">
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
