import React from "react";
import "./button.css";

export function Button(props) {
  const { sm, fileName, btnType } = props;
  const [inst, id] = fileName.split("-");

  function handleClick() {
    sm.play(fileName);
  }

  function btnActive() {
    const active = sm.buttonActive(fileName)
      if (!active) {
        return btnType 
      } else {
        return `${btnType}-active`
      }    
  }


  return (
    <button className={`btn ${btnActive()}`} onClick={handleClick}>
      {inst.toUpperCase()} {id}
    </button>
  );
}
