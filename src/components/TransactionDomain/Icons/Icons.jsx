import React from "react";

function Icons({ text, handleClick }) {
  return (
    <>
      <span className="material-icons marginIcon" onClick={handleClick}>
        {text}
      </span>
    </>
  );
}

export default Icons;
