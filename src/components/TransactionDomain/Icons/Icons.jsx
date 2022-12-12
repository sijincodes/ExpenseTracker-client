import React from "react";

function Icons({ text, updateTransaction }) {
  return (
    <>
      <span className="material-icons marginIcon" onClick={updateTransaction}>
        {text}
      </span>
    </>
  );
}

export default Icons;
