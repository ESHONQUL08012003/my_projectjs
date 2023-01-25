import React from "react";
import logo from "./../../assets/imgs/imgs-logo.jpg";
import "./Manu.scss";
import { HiOutlineHome } from "react-icons/hi";
import {FcAbout} from "react-icons/fc"
import {AiTwotoneFileExcel,AiOutlineTwitter,AiOutlineInstagram} from "react-icons/ai"
import {FaFileImport,FaSkype,FaLinkedinIn} from "react-icons/fa"
import {TbServer2} from "react-icons/tb"
import {HiOutlineMail} from "react-icons/hi"
import {ImFacebook} from "react-icons/im"


function Manu(props) {
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img src={logo} alt={"logo"} className="img-fluid rounded-circle" />
          <h1 className="text-light">
            <a href="index.html">Abdulazizov Eshonqul</a>
          </h1>
          <div className="social-links flex justify-center mt-3 text-center">
            <a href="#" className="twitter flex items-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... justify-center">
             <AiOutlineTwitter/>
            </a>
            <a href="#" className="facebook flex items-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... justify-center">
              <ImFacebook/>
            </a>
            <a href="#" className="instagram flex items-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... justify-center">
              <AiOutlineInstagram/>
            </a>
            <a href="#" className="google-plus flex items-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... justify-center">
              <FaSkype/>
            </a>
            <a href="#" className="linkedin flex items-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... justify-center">
              <FaLinkedinIn/>
            </a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto active gap-2 flex items-center">
                <HiOutlineHome className="text-2xl text-sky-500" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link flex items-center gap-2 scrollto">
                <FcAbout className="text-2xl text-white"/>   <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-link flex items-center gap-2 scrollto">
                <AiTwotoneFileExcel  className="text-2xl text-sky-500"/> <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link flex items-center gap-2 scrollto">
                <FaFileImport  className="text-2xl text-sky-500"/> <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link flex items-center gap-2 scrollto">
                <TbServer2 className="text-2xl text-sky-500"/> <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link flex items-center gap-2 scrollto">
                <HiOutlineMail className="text-2xl text-sky-500"/> <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Manu;
