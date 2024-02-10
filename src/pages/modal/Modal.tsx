import { Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";
import modalStyles from "./ModalStyles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface IState {
  password: string;
}

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [password, setPassword] = React.useState<IState["password"]>("");

  const generatePasswordEventHandler = () => {
    const length = 15;
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+";
    let newPassword = "";
    if (length >= 4) {
      newPassword += uppercaseChars.charAt(
        Math.floor(Math.random() * uppercaseChars.length)
      );
      newPassword += lowercaseChars.charAt(
        Math.floor(Math.random() * lowercaseChars.length)
      );
      newPassword += numberChars.charAt(
        Math.floor(Math.random() * numberChars.length)
      );
      newPassword += specialChars.charAt(
        Math.floor(Math.random() * specialChars.length)
      );
      for (let i = 4; i < length; i++) {
        const randomIndex = Math.floor(
          Math.random() *
            (uppercaseChars + lowercaseChars + numberChars + specialChars)
              .length
        );
        newPassword += (
          uppercaseChars +
          lowercaseChars +
          numberChars +
          specialChars
        ).charAt(randomIndex);
      }
    } else {
      const charset =
        uppercaseChars + lowercaseChars + numberChars + specialChars;
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        newPassword += charset.charAt(randomIndex);
      }
    }

    setPassword(newPassword);
  };

  const copyPasswordEventHandler = () => {
    navigator.clipboard.writeText(password);
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction={"column"} gap={"15px"}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color={"secondary"}
            >
              Pasword Generator
            </Typography>
            <Typography sx={modalStyles.passwordGenerateHeadingText}>
              Generate a new random Password By clicking on the Password
              Generate Button.
            </Typography>
            <TextField
              aria-readonly
              id="outlined-password-input"
              label="Password"
              type="text"
              autoComplete="current-password"
              value={password}
              sx={modalStyles.passwordTextField}
            />
            <Button
              variant="contained"
              sx={modalStyles.generatePasswordBtn}
              onClick={generatePasswordEventHandler}
            >
              Generate Password
            </Button>
            <Typography
              sx={{
                ...modalStyles.passwordGenerateHeadingText,
                ...modalStyles.copyText,
              }}
            >
              Copy the Generated Password by clicking on the copy password
              button.
            </Typography>
            <Button
              variant="contained"
              sx={modalStyles.copyPasswordBtn}
              onClick={copyPasswordEventHandler}
            >
              Copy Password
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
