import React from "react";
import "./grid.css";

export function Grid(props) {
  return <div className="grid">{props.children}</div>;
}

export function Row(props) {
  return <div className="row">{props.children}</div>;
}
