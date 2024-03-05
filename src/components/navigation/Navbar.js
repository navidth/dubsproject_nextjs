"use client";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, clickAction } from "../redux/MenuSlice";
import Link from "next/link";

const Navbar = ({ data }) => {
  const toggleMenuOpen = useSelector((state) => state.menu.isMenuOpen);

  const blades = useSelector((state) => state.menu.bladesMenu);
  const bladesHover = useSelector((state) => state.menu.bladesMenuHover);

  const rubbers = useSelector((state) => state.menu.rubbersMenu);
  const rubbersHover = useSelector((state) => state.menu.rubbersMenuHover);

  const table = useSelector((state) => state.menu.tableMenu);
  const tableHover = useSelector((state) => state.menu.tableMenuHover);

  const clothings = useSelector((state) => state.menu.clothingsMenu);
  const clothingsHover = useSelector((state) => state.menu.clothingsMenuHover);

  const dispatch = useDispatch();

  const handlerToggleMenu = () => {
    dispatch(toggleMenu());
  };
  const handleItemsMenu = (fieldName) => {
    dispatch(clickAction(fieldName));
  };
  const handleTouchCancel = (fieldName) => {
    dispatch(clickAction(!fieldName));
  };
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-xxl">
        <button
          className="navbar-toggler mt-3"
          type="button"
          onClick={handlerToggleMenu}
          aria-controls="navbarText"
        >
          <span className="navbar-toggler-icon text-light"></span>
        </button>
        <div
          className={`collapse navbar-collapse offcanvas offcanvas-end ms-5 w-100 
        ${toggleMenuOpen ? "show" : ""} `}
          id="navbarText"
        >
          <ul className="navbar-nav ul-menu mb-0 ">
            <button
              type="button"
              className="btn d-flex justify-content-end ms-2"
              onClick={handlerToggleMenu}
            >
              <VscChromeClose
                size={"25px"}
                className="d-block d-sm-none btn-outline-dark"
              ></VscChromeClose>
            </button>

            {/*-------------------------------منو */}
            {data.map((item) => (
              <li key={item.id} className="nav-item ms-2 dropdown drop ">
                {/* .............................................................. */}
                {item.id === "1" && (
                  <div>
                    <Link
                      href={`/${item.url}`}
                      className="nav-link ms-xl-5 ms-2"
                      onClick={handlerToggleMenu}
                      onMouseEnter={() => handleItemsMenu("bladesMenuHover")}
                      onMouseLeave={() => handleItemsMenu("bladesMenuHover")}
                    >
                      {item.name}
                    </Link>
                    <button
                      className={`btn d-block d-sm-none  ms-2 ${
                        blades ? "opendrop" : "closedrop"
                      }`}
                      type="button"
                      onClick={() => handleItemsMenu("bladesMenu")}
                      id="btn-menu"
                    >
                      <AiOutlineArrowLeft
                        size={"24px"}
                        color={"black"}
                      ></AiOutlineArrowLeft>
                    </button>
                    <ul
                      className={`dropdown-menu drop-menu ${
                        bladesHover || blades ? "dropdown-blades" : ""
                      }`}
                      onMouseEnter={() => handleItemsMenu("bladesMenuHover")}
                      onMouseLeave={() => handleItemsMenu("bladesMenuHover")}
                      onClick={handlerToggleMenu}
                    >
                      {item.subitems &&
                        item.subitems.map((sub, index) => (
                          <li key={index}>
                            <Link
                              className="dropdown-item drop-item pe-4"
                              href={`/${item.url}/${sub.urlItems}`}
                              onClick={() => {
                                handleItemsMenu("bladesMenu");
                              }}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
                {/* ........................................................... */}
                {item.id === "2" && (
                  <div>
                    <Link
                      href={`/${item.url}`}
                      className="nav-link ms-xl-5 ms-2"
                      onClick={handlerToggleMenu}
                      onMouseEnter={() => handleItemsMenu("rubbersMenuHover")}
                      onMouseLeave={() => handleItemsMenu("rubbersMenuHover")}
                    >
                      {item.name}
                    </Link>
                    <button
                      className={`btn d-block d-sm-none  ms-2 ${
                        rubbers ? "opendrop" : "closedrop"
                      }`}
                      type="button"
                      onTouchStart={() => handleItemsMenu("rubbersMenu")}
                      id="btn-menu"
                    >
                      <AiOutlineArrowLeft
                        size={"24px"}
                        color={"black"}
                      ></AiOutlineArrowLeft>
                    </button>
                    <ul
                      className={`dropdown-menu drop-menu ${
                        rubbersHover || rubbers ? "dropdown-blades" : ""
                      }`}
                      onMouseLeave={() => handleItemsMenu("rubbersMenuHover")}
                      onMouseEnter={() => handleItemsMenu("rubbersMenuHover")}
                      onClick={handlerToggleMenu}
                    >
                      {item.subitems &&
                        item.subitems.map((sub, index) => (
                          <li key={index}>
                            <Link
                              className="dropdown-item drop-item pe-4"
                              href={`/${item.url}/${sub.urlItems}`}
                              onClick={() => {
                                handleItemsMenu("rubbersMenu");
                              }}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}

                {/* .............................................................. */}

                {item.id === "3" && (
                  <div>
                    <Link
                      href={`/${item.url}`}
                      className="nav-link ms-xl-5 ms-2"
                      onClick={handlerToggleMenu}
                      onMouseEnter={() => handleItemsMenu("tableMenuHover")}
                      onMouseLeave={() => handleItemsMenu("tableMenuHover")}
                    >
                      {item.name}
                    </Link>
                    <button
                      className={`btn d-block d-sm-none  ms-2 ${
                        table ? "opendrop" : "closedrop"
                      }`}
                      type="button"
                      onTouchStart={() => handleItemsMenu("tableMenu")}
                      id="btn-menu"
                    >
                      <AiOutlineArrowLeft
                        size={"24px"}
                        color={"black"}
                      ></AiOutlineArrowLeft>
                    </button>
                    <ul
                      className={`dropdown-menu drop-menu ${
                        tableHover || table ? "dropdown-blades" : ""
                      }`}
                      onMouseEnter={() => handleItemsMenu("tableMenuHover")}
                      onMouseLeave={() => handleItemsMenu("tableMenuHover")}
                      onClick={handlerToggleMenu}
                    >
                      {item.subitems &&
                        item.subitems.map((sub, index) => (
                          <li key={index}>
                            <Link
                              className="dropdown-item drop-item pe-4"
                              href={`/${item.url}/${sub.urlItems}`}
                              onClick={() => {
                                handleItemsMenu("tableMenu");
                              }}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
                {item.id === "4" && (
                  <div>
                    <Link
                      href={`/${item.url}`}
                      className="nav-link ms-xl-5 ms-2"
                      onClick={handlerToggleMenu}
                      onMouseEnter={() => handleItemsMenu("clothingsMenuHover")}
                      onMouseLeave={() => handleItemsMenu("clothingsMenuHover")}
                    >
                      {item.name}
                    </Link>
                    <button
                      className={`btn d-block d-sm-none  ms-2 ${
                        clothings ? "opendrop" : "closedrop"
                      }`}
                      type="button"
                      onTouchStart={() => handleItemsMenu("clothingsMenu")}
                      id="btn-menu"
                    >
                      <AiOutlineArrowLeft
                        size={"24px"}
                        color={"black"}
                      ></AiOutlineArrowLeft>
                    </button>
                    <ul
                      className={`dropdown-menu drop-menu ${
                        clothingsHover || clothings ? "dropdown-blades" : ""
                      }`}
                      onMouseEnter={() => handleItemsMenu("clothingsMenuHover")}
                      onMouseLeave={() => handleItemsMenu("clothingsMenuHover")}
                      onClick={handlerToggleMenu}
                    >
                      {item.subitems &&
                        item.subitems.map((sub, index) => (
                          <li key={index}>
                            <Link
                              className="dropdown-item drop-item pe-4"
                              href={`/${item.url}/${sub.urlItems}`}
                              onClick={() => {
                                handleItemsMenu("clothingsMenu");
                              }}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
                {item.id === "5" && (
                  <Link
                    href={`/${item.url}`}
                    className="nav-link ms-xl-5 ms-2"
                    onClick={handlerToggleMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
