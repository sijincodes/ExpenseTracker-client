import React from "react";
import "./RemoveIcon.css";

function RemoveIcon({ handleClick }) {
  return (
    <span className="material-icons remove-button-style" onClick={handleClick}>
      remove_circle
    </span>
  );
}

export default RemoveIcon;
