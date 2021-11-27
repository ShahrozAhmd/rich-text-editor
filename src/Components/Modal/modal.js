import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import CreateNewButton from "../UI/Button/createnew-button";
import landingImage from "Assets/Images/landing.png";
import errorImage from "Assets/Images/error.jpg";
import Typography from "@mui/material/Typography";
import UploadButton from "../UI/Button/upload-button";
import Input from "../UI/Input/input";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Loader from "react-loader-spinner";

const Modal = ({ isOpen }) => {
  const [open, setOpen] = React.useState(true);
  const [documentName, setDocumentName] = useState("");

  const [uiEvents, setUiEvents] = useState({
    isCreateNew: false,
    isUpload: false,
    isGoBack: false,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createNewHandler = () => {
    setUiEvents({ ...uiEvents, isCreateNew: true });
  };
  const goBackHandler = () => {
    setUiEvents({ isCreateNew: false, isUpload: false, isGoBack: false });
    setDocumentName("")
  };
  const setDocumentNameHandler = (e) => {
    setDocumentName(e.target.value);
  };
  useEffect(() => {
    console.log(documentName);
  }, [documentName]);
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button> */}
      <Dialog
        open={open}
        // comment it for some time that this disable modal disappear on backdrop click
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {/* Back button to show when user wants to select another option */}
          {uiEvents.isCreateNew || uiEvents.isUpload ? (
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <IconButton onClick={goBackHandler}>
                <ArrowCircleLeftIcon color="primary" fontSize="large" />
              </IconButton>
            </Box>
          ) : null}

          {/* Title Tagline */}
          <Typography variant="h5" align="center">
            Create Your Documents On The Go...
          </Typography>
        </DialogTitle>

        <DialogContent>
          {/* Image */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ width: "100%" }}
            justifyContent="center"
          >
            <img src={landingImage} width="50%" height="50%" />
            {/* <img src={errorImage} width="50%" height="50%" /> */}
            {/* <Loader
              type="Puff"
              color="#1B98F5"
              height={200}
              width={200}
             
            /> */}
          </Stack>
        </DialogContent>
        {/* Buttons for selecting one option */}
        {!uiEvents.isCreateNew && (
          <DialogActions>
            <Stack
              direction={{ xs: "column", sm: "row", md: "row" }}
              spacing={2}
              sx={{ width: "100%" }}
            >
              <CreateNewButton
                width="100"
                btnText="Create New"
                click={createNewHandler}
              />
              <UploadButton />
            </Stack>
          </DialogActions>
        )}
        {/* Give name to the new created document  */}
        {uiEvents.isCreateNew && (
          <DialogActions>
            <Stack
              direction={{ xs: "column", sm: "row", md: "row" }}
              spacing={2}
              sx={{ width: "100%" }}
            >
              <Input change={setDocumentNameHandler} />
              <CreateNewButton
                width="40"
                btnText="Create"
                disable={documentName !== "" ? false : true}
              />
            </Stack>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
};

export default Modal;
