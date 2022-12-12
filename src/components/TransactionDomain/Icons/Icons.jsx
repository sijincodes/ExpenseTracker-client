import React from "react";

function Icons({ text ,updateTransaction }) {
  return (
    <>
      <span class="material-icons marginIcon" onClick={updateTransaction}>{text}</span>
    </>
  );
}

export default Icons;
