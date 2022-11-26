import React, { useEffect } from "react";
import '../darkMode.css';

import { Clock } from "./Clock";
import { UserActions } from "./UserActions";
import { DisplayMessage } from "./DisplayMessage";
import { CounterDisplay } from "./CounterDisplay";


function Main() {
  const [color, setColor] = React.useState(
    JSON.parse(sessionStorage.getItem("color")) || "blue"
  );
  const [count, setCount] = React.useState(
    JSON.parse(localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    sessionStorage.setItem("color", JSON.stringify(color));
    localStorage.setItem("count", JSON.stringify(count));
  }, [color, count]);

  return (
    <div>
      
      <DisplayMessage color={color} />
      <Clock />
      <CounterDisplay count={count} />
      <UserActions
        setColor={setColor}
        setCount={setCount}
        count={count}
        color={color}
      />
    </div>
  );
}
export function toggle(color) {
  let x = rand();
  switch (x) {
    case 1:
      return "red";
    case 2:
      return "green";
    case 3:
      return "blue";
    case 4:
      return "yellow";
    case 5:
      return "purple";
    case 6:
      return "orange";
    case 7:
      return "pink";
    case 8:
      return "grey";
    default:
      return "black";
  }
}
function rand() {
  return Math.floor(Math.random() * 8) + 1;
}
export default Main;