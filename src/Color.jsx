import React from "react";
import "./color.css";

const Color = ({ title }) => (
  <div
    className="color"
    style={{
      background: title,
    }}
  >
    <p>{title}</p>
  </div>
);
export default Color;
