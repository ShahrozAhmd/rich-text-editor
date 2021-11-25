import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Input = ({change}) => {
  return <TextField fullWidth label="Document Name" variant="filled" onChange={change}/>;
};

export default Input;
