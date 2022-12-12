import React from "react";
import "./EditIcon.css"

function EditIcon({updateTransaction}) {
  return (
    <>
      <span className="material-icons marginIcon" onClick={updateTransaction}>
        edit
      </span>
    </>
  );
}

export default EditIcon;
