import React from "react";
//assets
import iconClose from "../../assets/shared/mobile/icon-close.svg";
import iconHamburger from "../../assets/shared/mobile/icon-hamburger.svg";

import "./menu.scss";
const Menu = () => {
  return (
    <div className="Menu">
      <div className="header">
        <div>
          <h1>Frontend Mentor</h1>
          <h3>Feedback Board</h3>
        </div>
        <div>
          {/* renderizar un icono svg */}
          <img src={iconHamburger} alt="burgerIcon"></img>
        </div>
      </div>
      <div className="subMenu">
        <div>filter category</div>
        <div>RoadMap</div>
      </div>
    </div>
  );
};

export default Menu;
