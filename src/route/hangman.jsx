import React, { useState, useEffect } from "react";
import "animate.css";
import { Icon } from "@iconify/react";
import Typed from "react-typed";
import word from "../word";
import axios from 'axios'
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
const Hangman = () => {
  const [user, setuser] = useState([]);
  const [ada, check_ada] = useState([]);
  const [ans, setans] = useState(
    word[Math.floor(Math.random() * word.length)].toUpperCase()
  );
  const [alpha, check_alpha] = useState(0);
  const mother = ["A", "E", "I", "O", "U"];
  const button = [
    "B",
    "C",
    "D",

    "F",
    "G",
    "H",

    "J",
    "K",
    "L",
    "M",
    "N",

    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const detect = (e) => {
    console.log(e.key);
  };
  useEffect(() => {
    document.addEventListener("keydown", detect, true);
  }, [ada]);

  const [check_time, checkit] = useState(0);
  const [wrong, iswrong] = useState(0);
  useEffect(() => {
    if (check_time == ans.length) {
      check_alpha(true);
    }
  }, [check_time]);
  const check = (bruh) => {
    if (ans.includes(bruh) && wrong < 7) {
      ans.split("").map((e) => {
        if (!ada.includes(e)) {
          if (e == bruh) {
            let l = 0;
            const len = ans.split("").map((b) => {
              if (b == e) {
                l += 1;
              }
              console.log(l);
              return l;
            });
            check_ada([...ada, e]);
            checkit(check_time + l);
            console.log(check_time);
          }
        }
      });
    } else if (wrong >= 7) {
      setuser(button + mother);
    } else if (!ans.includes(bruh) && wrong < 7) {
      iswrong(wrong + 1);
    }
  };
  const [dark, theme] = useState(false);
  return (
    <div className={dark ? "dark" : ""}>
      <div className="dar flex justify-center items-center big-bg h-screen w-full flex-col relative">
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

        <div>
          <div className="flex  gap-2 text-center mb-12">
            {ans.split("").map((e) => (
              <button>
                <div
                  className={`w-7 h-7 md:w-12 md:h-12 big-btn flex justify-center items-center rounded-sm text-base md:text-xl `}
                >
                  <botton className={`${!ada.includes(e) ? "bruh" : ""}`}>
                    {!ada.includes(e) ? "" : `${e}`}
                  </botton>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div></div>
        <div className="flex justify-center flex-col items-center">
          <div className="flex flex-row gap-2 text-center">
            {mother.map((e) => (
              <button
                className={` ${
                  user.includes(e) || wrong >= 7
                    ? "use text-slate-700"
                    : "small-btn"
                } rounded-sm `}
                disabled={user.includes(e)}
                onClick={() => {
                  setuser([...user, e]);
                  check(e);
                }}
              >
                <div
                  className={`w-6 h-6 md:w-8 md:h-8 flex justify-center items-center text-xs md:text-base `}
                >
                  <button>{e}</button>
                </div>
              </button>
            ))}
          </div>
          <div className="grid grid-rows-3 grid-flow-col md:grid-rows-none  gap-2 mt-2">
            {button.map((e) => (
              <button
                className={` ${
                  user.includes(e) || wrong >= 7
                    ? "use text-slate-700"
                    : "small-btn"
                } rounded-sm `}
                onClick={() => {
                  setuser([...user, e]);
                  console.log(user);
                  check(e);
                }}
              >
                {" "}
                <div className="w-6 h-6 md:w-8 md:h-8 flex justify-center items-center rounded-sm text-xs md:text-base">
                  <botton>{e}</botton>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-2 mt-3">
          {[1, 2, 3, 4, 5, 6, 7].map((e, i) => (
            <div
              className={`w-5 h-8 rounded-md ${
                i < wrong ? "bg-rose-600 " : "small-btn"
              }`}
            ></div>
          ))}
        </div>
        <div
          onClick={() => {
            setuser([]);
            check_ada([]);
            check_alpha(false);
            checkit(0);
            iswrong(0);
            setans(word[Math.floor(Math.random() * word.length)].toUpperCase());
          }}
          className="small-btn  flex items-center justify-center rounded-md mt-3   text-center h-8 w-14"
        >
          <button>reset</button>
        </div>
        <div className="absolute">
          {check_time == ans.length ? (
            <div className="w-80 h-80  flex justify-center items-center win rounded-md flex-col animate__animated animate__lightSpeedInLeft">
              <div className="text-5xl">YOU WIN!</div>
              <div>congratulate</div>
              <div
                className="w-32 h-12 flex justify-center items-center big-btn rounded-md mt-2"
                onClick={() => {
                  setuser([]);
                  check_ada([]);
                  check_alpha(false);
                  checkit(0);
                  iswrong(0);
                  setans(
                    word[Math.floor(Math.random() * word.length)].toUpperCase()
                  );
                }}
              >
                <button>continue</button>
              </div>
            </div>
          ) : wrong >= 7 ? (
            <div className="w-80 h-80 flex justify-center items-center win rounded-md flex-col animate__animated animate__lightSpeedInLeft">
              <div className="text-5xl">YOU LOSE</div>
              <div>the word:{ans}</div>
              <div
                className="w-32 h-12 flex justify-center items-center big-btn rounded-md mt-2"
                onClick={() => {
                  setuser([]);
                  check_ada([]);
                  check_alpha(false);
                  checkit(0);
                  iswrong(0);
                  setans(
                    word[Math.floor(Math.random() * word.length)].toUpperCase()
                  );
                }}
              >
                <button>continue</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="absolute bottom-0 text-[#3b5998] dark:text-[#f2f2f2] ">
          {dark ? <Typed key="typing-1" strings={["made by LIMING from MRGA"]} typeSpeed={40} loop={false}/> : <Typed key="typing-2" strings={["made by LIMING from MRGA"]} typeSpeed={40} loop={false}/> }
        </div>
      </div>
    </div>
  );
};

export default Hangman;
