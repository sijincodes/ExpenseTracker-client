import * as React from "react";
import Button from "@mui/material/Button";

import "./Button.css";

export default function BasicButtons({ handleSubmit, text, variant }) {
  return (
    <Button className="buttonSpace" style={{backgroundColor:"#332FD0",color:"#FFE6E6"}}  variant={variant} onClick={handleSubmit}>
      {text}
    </Button>
  );
}
