import React, { useState } from "react";
//assets
import iconClose from "../../assets/shared/mobile/icon-close.svg";
import iconHamburger from "../../assets/shared/mobile/icon-hamburger.svg";

import "./menu.scss";

const Menu = ({ filterByCategory, setState }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const fn = (category) => {
    filterByCategory(category);
    closeMenu();
  };
  return (
    <div className="Menu">
      <div className="header">
        <div>
          <h1>Frontend Mentor</h1>
          <h3>Feedback Board</h3>
        </div>
        <div>
          <img
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            src={`${isMenuOpen ? iconClose : iconHamburger}`}
            alt="burgerIcon"
          ></img>
        </div>
      </div>
      <div className={`subMenu ${isMenuOpen ? "open" : "close"}`}>
        <div className="filterByCategory">
          <span
            onClick={() => {
              setState();
              closeMenu();
            }}
          >
            All
          </span>
          <span onClick={() => fn("UX")}>UX</span>
          <span onClick={() => fn("UI")}>UI</span>
          <span onClick={() => fn("enhancement")}>Enhancement</span>
          <span onClick={() => fn("bug")}>Bug</span>
          <span onClick={() => fn("feature")}>Feature</span>
        </div>
        <div className="roadMap"></div>
      </div>
    </div>
  );
};

export default Menu;
