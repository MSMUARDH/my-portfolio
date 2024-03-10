import React from "react";
import logo from "../assets/images/astronout.png";
import logo1 from "../assets/images/astronout1.png";
import bg from "../assets/images/bg.jpg";
import Navbar from "./Navbar";
import "../styles.css";

function Header() {
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
      >
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center">
            <div className="btn py-3">
              <button className=" border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl">
                Welcome to my Portfolio
              </button>
            </div>
            <h1 className="text-white text-5xl font-bold">
              Hi! I'm Muaz.
              <div>
                <span className="snippet">Iam a full-stack</span> developer
              </div>
            </h1>
            <p className="text-white py-4 max-w-lg ">
              Highly skilled & motivated Software Engineer with in-depth
              knowledge of JavaScript, NodeJS Framework, and development tools.
              seeking opportunities where I can use my skills to the advantage
              of the business while having the scope to develop my own career
            </p>
            <a href="https://www.linkedin.com/in/mohamed-muaz-6781a31ba/">
              <button className="  text-white text-2xl">
                Let's Connect{" "}
                <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i>{" "}
              </button>
            </a>
          </div>
          <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo1} alt="" />
          </div>
          <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
