import React from "react";

import "./AddIcon.css";

function AddIcon({ handleClick }) {
  return (
    <span className="material-icons button-style" onClick={handleClick}>
      add_circle
    </span>
  );
}

export default AddIcon;
