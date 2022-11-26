import React from "react";

export function DisplayMessage(props) {
  return (
    <h1 className="pageHeading" style={{ color: props.color }}>
      Hello World React
    </h1>
  );
}
