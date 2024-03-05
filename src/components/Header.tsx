import { BiSolidChevronLeft } from "react-icons/bi";
const Header = ({ pageFather,pageChild}: { pageFather: string, pageChild:string}) => {
  return (
    <div className="container-sm ">
      <div className="opacity-75 fw-700 d-flex  f-mini">
        <p className="text-decoration-none text-body">{pageFather}</p>
        <BiSolidChevronLeft
          size={"20px"}
          className="mx-2 icon-mini"
        ></BiSolidChevronLeft>
        <p className="text-decoration-none text-body">{pageChild}</p>
      </div>
      <hr className="m-0" />
      {/* <!----------------- header------------- --> */}
      <h1 className="h1 mt-2 fw-bold fww w3-border-top pt-2">{pageChild}</h1>
    </div>
  );
};
export default Header;
