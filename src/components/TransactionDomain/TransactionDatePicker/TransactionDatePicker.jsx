import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "./TransactionDatePicker.css";

function TransactionDatePicker({ transactionTime }) {
  const [userSelectedDate, setUserSelectedDate] = useState(new Date());
  let views = [];
  let label = "";
  switch (transactionTime) {
    case 2:
      label = "Year and Month";
      views = ["year", "month"];
      break;
    case 3:
      label = "Year";
      views = ["year"];
      break;
    default:
      label = "Date";
      views = ["year", "month", "day"];
  }

  return (
    <DatePicker
      className="datePickerWidth"
      label={label}
      views={views}
      value={userSelectedDate}
      onChange={(seletedDate) => {
        setUserSelectedDate(seletedDate);
      }}
      renderInput={(params) => <TextField size="small" {...params} />}
    />
  );
}

export default TransactionDatePicker;
