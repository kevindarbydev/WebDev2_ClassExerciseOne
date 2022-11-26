import Button from "react-bootstrap/Button";
import React, { useState } from "react";

function LightModeButton() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
     
      <Button variant="primary" onClick={toggleTheme}>
        Toggle Light Mode
      </Button>
    </div>
  );
}

export default LightModeButton;
