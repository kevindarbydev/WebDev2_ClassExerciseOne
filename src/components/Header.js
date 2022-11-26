import React from "react";
import HomeButton from "./HomeButton";
import LightModeButton from "./LightModeButton";
import DarkMode from "./DarkMode";
import "./Header.css";
import NavButton from "./NavButton";


function Header() {

  return (
    <div id="headerParent">
      <div>
        <div id="homeButton">
          <HomeButton />
        </div>
        <div id="toggle">
          <DarkMode />
        </div>


        <NavButton  to="/" label="Home" />
        <NavButton  to="/about" label="About" />
        <NavButton to="/contact" label="Contact" />
      </div>
    </div>
  );
}
export default Header;
