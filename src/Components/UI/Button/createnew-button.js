import * as React from "react";
import Button from "@mui/material/Button";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";

const CreateNewButton = ({ click, width, btnText, disable }) => {
  return (
    <>
      <Button
        disabled={disable && disable}
        onClick={click}
        sx={{ width: `${width}%`, boxShadow: 3 }}
        variant="outlined"
        startIcon={<CreateNewFolderOutlinedIcon />}
      >
        {btnText}
      </Button>
    </>
  );
};

export default CreateNewButton;
