import React from "react";
import logo from "./imgs/logo.png";
export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav__items">
          <li className="nav__item">Home</li>
          <li className="nav__item">About</li>
          <li className="nav__item">Doc</li>
        </ul>
      </nav>
    </header>
  );
}
