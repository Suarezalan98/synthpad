import React from "react";
import "./button.css";

export function Button(props) {
  const { sm, fileName } = props;
  const [inst, id] = fileName.split("-");

  function handleClick() {
    sm.play(fileName);
  }

  return (
    <button className="button" onClick={handleClick}>
      {inst.toUpperCase()} {id}
    </button>
  );
}
