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
import Typography from "@mui/material/Typography";
import UploadButton from "../UI/Button/upload-button";
import Input from '../UI/Input/input'

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
          </Stack>
        </DialogContent>
        {/* Buttons for selecting one option */}
        <DialogActions>
          <Stack
            direction={{ xs: "column", sm: "row", md: "row" }}
            spacing={2}
            sx={{ width: "100%" }}
          >
            <CreateNewButton width="100" btnText="Create New"/>
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
            <Input/>
            <CreateNewButton width="40" btnText="Create"/>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
