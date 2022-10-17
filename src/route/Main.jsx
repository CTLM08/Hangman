import React, { useState, useEffect } from "react";
import "animate.css";
import { Icon } from "@iconify/react";
import Typed from "react-typed";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
const Main = () => {
    
  const [dark, theme] = useState("");
  return (
    <div className={dark ? "dark" : ""}>
      <div className="flex justify-center items-center h-screen w-full big-bg">
      <div className="absolute bottom-0 text-[#3b5998] dark:text-[#f2f2f2] ">
          {dark ? <Typed key="typing-1" strings={["made by LIMING from MRGA"]} typeSpeed={40} loop={false}/> : <Typed key="typing-2" strings={["made by LIMING from MRGA"]} typeSpeed={40} loop={false}/> }
        </div>
        <div className="absolute top-0 w-full p-3 flex flex-row items-center justify-between small-btn text-white dark:text-[#f2f2f2] dark:bg-[#323232]">
        <NavLink to="/"  key="main"><div className="text-xl md:text-2xl">HANGMAN.</div></NavLink>
          <div className="flex flex-row items-center gap-5">
            <div>
              <label class="switch">
                <input
                  type="checkbox"
                  onClick={() => {
                    theme(!dark);
                  }}
                />
                <span class="slider"></span>
              </label>
            </div>
            <div>
              <a href="https://github.com/CTLM08">
                <Icon
                  icon="ant-design:github-outlined"
                  className="h-6 w-6 md:h-8 md:w-8 mr-3 md:mr-0"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-2xl md:text-4xl text-neutral-800 dark:text-[#f2f2f2]">
          {dark ? <Typed key="typing-1" strings={["Welcome to HANGMAN."]} typeSpeed={40} loop={false}/> : <Typed key="typing-2" strings={["Welcome to HANGMAN."]} typeSpeed={40} loop={false}/> }
          </div>
          <div>
          <NavLink to="/hangman" key="hangman" className="flex flex-row items-center mt-3">
            <button className="small-btn flex justify-center items-center w-[100px] h-8 md:w-[120px] md:h-10 text-base md:text-xl rounded-md dar">START</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
