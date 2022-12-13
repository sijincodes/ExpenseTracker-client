import React from "react";

import "./AddIcon.css";

function AddIcon({ handleClick, transactionTime }) {
  if (transactionTime === 2 || transactionTime === 3)
    return (
      <span
        className="material-icons add-button-style"
        style={{
          pointerEvents: "none",
          cursor: "default",
          color: "#BAB9BB",
        }}
      >
        add_circle
      </span>
    );
  else
    return (
      <span className="material-icons add-button-style" onClick={handleClick}>
        add_circle
      </span>
    );
}

export default AddIcon;
