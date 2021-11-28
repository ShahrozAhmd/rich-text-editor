import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import Typography from "@mui/material/Typography";

const UploadButton = ({ change }) => {
  const Input = styled("input")({
    display: "none",
  });
  return (
    <label htmlFor="contained-button-file">
      <Input
        accept="application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        id="contained-button-file"
        multiple
        type="file"
        onChange={change}
      />
      <Button
        sx={{ width: "100%", boxShadow: 3 }}
        variant="outlined"
        component="span"
        startIcon={<DriveFolderUploadIcon />}
      >
        Upload
       
      </Button>
    </label>
  );
};

export default UploadButton;
