import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "./TransactionDatePicker.css";

function TransactionDatePicker() {
  const [value, setValue] = useState(new Date());
  return (
    <DatePicker
      className="datePickerWidth"
      label="Date"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField size="small" {...params} />}
    />
  );
}

export default TransactionDatePicker;
