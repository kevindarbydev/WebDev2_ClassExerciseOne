import React from "react";
import { toggle } from "./Main";

export function UserActions(props) {
  const handleOnClick = () => {
    props.setColor(toggle(props.color));
    props.setCount(props.count + 1);
  };
  return <button onClick={handleOnClick}> Click me React</button>;
}
