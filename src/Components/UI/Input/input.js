import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Input = ({change, value}) => {
  return <TextField fullWidth label="Document Name" variant="filled" onChange={change} value={value}/>;
};

export default Input;
