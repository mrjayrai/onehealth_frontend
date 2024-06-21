import React from "react";
// import {Link} from "react-router-dom";
export default function Intro_page() {
  return (
    <>
    <div>
    <div className="sticky top-0 z-50">
      <nav className="bg-slate-300 flex justify-between items-center w-[100%]  mx-auto">
        <img
          className="w-16"
          src={require("./allimages/logo4.png")}
          alt="logo"
        />
        <div className="nav-links duration-500 md:static absolute bg-slate-300 md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li className="font-medium text-stone-500 hover:text-stone-900">
              <a href="#home">Home</a>
              {/* <Link to="/home">Home</Link> */}
            </li>
            <li className="font-medium text-stone-500 hover:text-stone-900">
              <a href="/login">Login</a>
              
            </li>
            <li className="font-medium text-stone-500 hover:text-stone-900">
              <a href="#network-section">Network</a>
            </li>
            <li className="font-medium text-stone-500 hover:text-stone-900">
              <a href="#about-container">About</a>
            </li>
            {/* <li className="font-medium text-stone-500 hover:text-stone-900">
              <a href="#policies">Policies</a>
            </li> */}
            {/* <li className="font-medium text-stone-500 hover:text-stone-900">
              <a href="#contribute">Contribute</a>
            </li> */}
            {/* <li className="font-medium text-stone-500 hover:text-stone-900">
              <a href="#contact">Contact Us</a>
            </li> */}
          </ul>
        </div>
        <div class="flex items-center gap-6">
        <ion-icon onclick="onToggleMenu(this)" name="menu-outline" class="text-3xl cursor-pointer md:hidden"></ion-icon>
            </div>
      </nav>   
      </div>  

      <div className="relative">
        <img
          className="h-[648px] w-[100%] mx-auto brightness-50"
          src={require("./../src/allimages/bg3.jpg")}
          alt="."
        />
        <h1 className="absolute text-5xl text-purple-darker top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium font-sans text-white">
          Organ Health
        </h1>
        <a href="https://forms.gle/yfbbmpBVnaT4gfyo6"><button class="absolute bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
         Donate Life
        </button>
        </a>
      </div>
      </div>
    </>
  );
}
