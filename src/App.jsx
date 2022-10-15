import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Hangman from "./route/hangman";
import Main from "./route/Main";
export const App = () => {
  return (
    <div>
      <div></div>
      <BrowserRouter>
      <Routes>
      <Route path="/hangman" element={<Hangman />} />
      <Route path="/" element={<Main />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;