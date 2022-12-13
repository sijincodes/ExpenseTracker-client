import React from "react";
import "./EditIcon.css";

function EditIcon({ handleClick }) {
  return (
    <>
      <span className="material-icons marginIcon" onClick={handleClick}>
        edit
      </span>
    </>
  );
}

export default EditIcon;
