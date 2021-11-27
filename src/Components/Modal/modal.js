import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
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
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {/* Back button to show when user wants to select another option */}
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <IconButton>
              <ArrowCircleLeftIcon color="primary" fontSize="large" />
            </IconButton>
          </Box>
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
        <DialogActions>
          <Stack
            direction={{ xs: "column", sm: "row", md: "row" }}
            spacing={2}
            sx={{ width: "100%" }}
          >
            <CreateNewButton width="100" btnText="Create New" />
            <UploadButton />
          </Stack>
        </DialogActions>
        {/* Give name to the new created document  */}
        <DialogActions>
          <Stack
            direction={{ xs: "column", sm: "row", md: "row" }}
            spacing={2}
            sx={{ width: "100%" }}
          >
            <Input />
            <CreateNewButton width="40" btnText="Create" />
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
