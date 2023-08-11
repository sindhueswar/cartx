import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(window.innerWidth >= 769);
  const screen = window.innerWidth >= 769;

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(window.innerWidth >= 769);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 

  return (
    <div class="header-container">
      <div className="logo ml-6 md:ml-32  ">
        <svg
          width="45"
          height="44"
          viewBox="0 0 45 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cartxlogo"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 1.60718H30.7724C33.0086 1.60718 34.8214 3.40603 34.8214 5.62504C34.8214 7.84404 33.0086 9.64289 30.7724 9.64289H8.09801V21.9459L20.1385 34.2858H30.7724C33.0086 34.2858 34.8214 36.0846 34.8214 38.3036C34.8214 40.5226 33.0086 42.3215 30.7724 42.3215H16.7074L0 25.1987V1.60718Z"
            fill="#FE682F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.3214 -1.17084e-07C43.8007 -1.81748e-07 45 1.20669 45 2.69521L45 7.44551C45 8.93404 43.8007 10.1407 42.3214 10.1407C40.8421 10.1407 39.6428 8.93404 39.6428 7.44551L39.6428 2.69521C39.6428 1.20669 40.8421 -5.24203e-08 42.3214 -1.17084e-07ZM42.3214 14.2509C43.8007 14.2509 45 15.4576 45 16.9461L45 26.4467C45 27.9353 43.8007 29.1419 42.3214 29.1419C40.8421 29.1419 39.6428 27.9353 39.6428 26.4467L39.6428 16.9461C39.6428 15.4576 40.8421 14.2509 42.3214 14.2509ZM42.3214 33.2521C43.8007 33.2521 45 34.4588 45 35.9473L45 40.6976C45 42.1862 43.8007 43.3929 42.3214 43.3929C40.8421 43.3929 39.6428 42.1862 39.6428 40.6976L39.6428 35.9473C39.6428 34.4588 40.8421 33.2521 42.3214 33.2521Z"
            fill="#FE682F"
          />
        </svg>
        <p className="cartx  ml-2 md:mr-8 md:ml-4">CATRX</p>
      </div>

      {menuOpen ? (
        <>
          <div className={`menu ${menuOpen ? "show-menu" : ""} `}>
            <nav className="border-gray-200  dark:bg-gray-900">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between  ">
                <div
                  className={`hidden w-full md:block md:w-auto ${
                    menuOpen ? "show" : ""
                  }`}
                  id="navbar-default"
                >
                  <ul className="font-medium  flex   mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    
                    <li 
                      style={screen?{margin: "15% 0 6% 55%"}:{margin:"2% 5%"}}
                     >
                      <Link
                        to="/"
                        className="block py-2 pl-3 pr-4  md:bg-transparent md:p-0 menu-page"
                      >
                        Home
                      </Link>
                    </li>
                    <li style={{ margin: "15% 0 6% 25%" }}>
                      <Link
                        to="/about"
                        className="block py-2 pl-3 pr-4  md:bg-transparent md:p-0 menu-page"
                      >
                        AboutUs
                      </Link>
                 
                    </li>
                    <li style={{ margin: "15% 0 6% 25%" }}>
                      <Link
                        to="/support"
                        className="block py-2 pl-3 pr-4  md:bg-transparent md:p-0 menu-page"
                      >
                        Support
                      </Link>
                    </li>
                    <li style={screen?{ margin: "15% 55% 6% 35%" }:{margin:"2% 5%"}}>
                      <Link
                        to="/product"
                        className="block py-2 pl-3 pr-4 md:bg-transparent md:p-0 "
                      >
                        Product
                      </Link>
                    </li>
                    <div
                      className="divider "
                      style={{ height: "128px", marginLeft: "0" }}
                    ></div>
                    {/* <div className="flex justify-between icons"  style={{margin:"4%"}}> */}
                    <li className="flex icon " style={{ margin: "15% 8%" }}>
                      <span className="menu-item-name">Search</span>
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="10.6"
                          cy="10.6"
                          r="9.6"
                          stroke="#1A1A1A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.8 17.8L25 25"
                          stroke="#1A1A1A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="border-line2  mb-0"></div>
                    </li>
                    <li className="flex icon " style={{ margin: "15% 8%" }}>
                      <span className="menu-item-name">Favrouites </span>
                      <svg
                        width="26"
                        height="24"
                        viewBox="0 0 26 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.5385 1.50015C22.0265 1.48117 25 3.21151 25 8.80445C25 14.3974 12.9999 22.5 12.9999 22.5C12.9999 22.5 1 14.3974 1 8.80445C1 3.21151 3.97343 1.50367 7.46154 1.50015C9.30769 1.49829 11.8478 2.64564 13.0001 4.23927C14.1522 2.64564 16.6716 1.51032 18.5385 1.50015Z"
                          stroke="#1A1A1A"
                          stroke-width="2"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="border-line2  mb-0"></div>
                    </li>
                    <li className="flex ml-5 icon" style={{ margin: "15% 8%" }}>
                      <span className="menu-item-name">cart</span>
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="19"
                          cy="23"
                          r="2"
                          stroke="#1A1A1A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <circle
                          cx="9"
                          cy="23"
                          r="2"
                          stroke="#1A1A1A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5 6H23.6126C24.2951 6 24.7771 6.6687 24.5613 7.31623L21.2279 17.3162C21.0918 17.7246 20.7097 18 20.2792 18H7.84713C7.35829 18 6.9411 17.6466 6.86073 17.1644L5 6Z"
                          stroke="#1A1A1A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1 1H4L5 6"
                          stroke="#1A1A1A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <AiOutlineClose
            className="menu-toggle m-5 "
            onClick={handleMenuToggle}
            size={30}
          />
        </>
      ) : (
        <div className="menusvg">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="menu-toggle "
          onClick={handleMenuToggle}
        >
          <g clip-path="url(#clip0_0_63)">
            <path d="M6 8H26" stroke="#323131" stroke-width="3" />
            <path d="M6 16H26" stroke="#323131" stroke-width="3" />
            <path d="M6 24H18" stroke="#323131" stroke-width="3" />
            <path d="M22 24L26 24" stroke="#FF5202" stroke-width="3" />
          </g>
          <defs>
            <clipPath id="clip0_0_63">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
        </div>
      )}
    </div>
  );
}
export default Header;
