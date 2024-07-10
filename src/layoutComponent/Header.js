import React from "react";
import ButtonComp from "../components/ButtonComp";
import logo from "../layoutComponent/assets/images/moreyeahslogo.png";

export default function Header() {
  return (
    <>
      <nav className="navbar bg_dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="logo"
              width={"auto"}
              height="auto"
              className="inline-block"
              // style={{ display: "inline-block" }}
            />
          </a>
          <form className="d-flex">
            <ButtonComp Title="Contact" color="#dbff00" />
            <svg
              width="40"
              height="25"
              className="mt-2 ms-5"
              viewBox="0 0 40 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.5"
                y1="1.5"
                x2="39.5"
                y2="1.5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="1.5"
                y1="12.5"
                x2="39.5"
                y2="12.5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="1.5"
                y1="23.5"
                x2="39.5"
                y2="23.5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </form>
        </div>
      </nav>
      <ul className="sidebar">
        <li className="sidenavlink">instagram</li>
        <li className="sidenavlink">Dribble</li>
        <li className="sidenavlink">behance</li>
        <li className="sidenavlink">linkedin</li>
      </ul>
    </>
  );
}
