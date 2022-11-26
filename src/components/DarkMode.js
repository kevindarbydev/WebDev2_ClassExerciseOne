import React from "react";
import Button from "react-bootstrap/Button";

const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  
  let theme;

  const darkTheme = {
    background: "linear-gradient(-45deg, #44322c, #091803, #032e3d, #420006)",
    backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite",
    height: "100vh",
  };

const lightTheme = {
  background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
  backgroundSize: "400% 400%",
  animation: "gradient 15s ease infinite",
  height: "100vh",
};

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add("d");
  } else {
    body.classList.add("l");
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace("d", "l");
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace("l", "d");
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    >Toggle Light Mode</button>
  );
};

export default DarkMode;
