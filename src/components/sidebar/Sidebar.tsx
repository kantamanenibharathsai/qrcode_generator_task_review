import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import QrCodeRoundedIcon from "@mui/icons-material/QrCodeRounded";
import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import sidebarStyles from "./Sidebar.Styles";

const Sidebar = () => {
  const parsedData = JSON.parse(
    localStorage.getItem("loggedInUserCredentials") ?? "null"
  );

  const [data, setData] = React.useState(parsedData);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const removeLocalStorage = () => {
    setData(null);
    localStorage.removeItem("loggedInUserCredentials");
  };

  return (
    <Box sx={sidebarStyles.sidebarContainer}>
      <List sx={sidebarStyles.listContainer}>
        <Link to="/signin" className="linkComponent">
          <ListItem alignItems="center" sx={sidebarStyles.listItem}>
            <ListItemAvatar>
              <AccountCircleRoundedIcon />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography component="p" sx={sidebarStyles.primaryText}>
                  Sign In
                </Typography>
              }
              secondary={
                <Typography
                  sx={sidebarStyles.secondaryText}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to create Static QR Codes
                </Typography>
              }
            />
          </ListItem>
        </Link>
        <Divider component="li" sx={sidebarStyles.divider} />
        <Link to="/password-generator" className="linkComponent">
          <ListItem alignItems="center" sx={sidebarStyles.listItem}>
            <ListItemAvatar>
              <PasswordRoundedIcon />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography component="p" sx={sidebarStyles.primaryText}>
                  Generate
                </Typography>
              }
              secondary={
                <Typography
                  sx={sidebarStyles.secondaryText}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Password
                </Typography>
              }
            />
          </ListItem>
        </Link>
        <Divider component="li" sx={sidebarStyles.divider} />
        <Link to="/" className="linkComponent">
          <ListItem alignItems="center" sx={sidebarStyles.listItem}>
            <ListItemAvatar>
              <QrCodeRoundedIcon />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography component="p" sx={sidebarStyles.primaryText}>
                  Generate
                </Typography>
              }
              secondary={
                <Typography
                  sx={sidebarStyles.secondaryText}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Static QR Code
                </Typography>
              }
            />
          </ListItem>
        </Link>
        <Divider component="li" sx={sidebarStyles.divider} />
      </List>
      {data && (
        <div>
          <Button
            sx={sidebarStyles.button}
            aria-describedby={id}
            onClick={handleClick}
          >
            <Box sx={sidebarStyles.profileContainer}>
              <Avatar>{parsedData.name.charAt(0).toUpperCase()}</Avatar>
              <Box sx={sidebarStyles.rightContentContainer}>
                <Typography sx={sidebarStyles.displayNameText}>
                  {parsedData.name}
                </Typography>
                <Typography sx={sidebarStyles.email}>
                  {parsedData.email}
                </Typography>
              </Box>
            </Box>
          </Button>
          <Popover
            id={id}
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Typography
              onClick={removeLocalStorage}
              sx={sidebarStyles.logoutBtn}
            >
              Logout
            </Typography>
          </Popover>
        </div>
      )}
    </Box>
  );
};

export default Sidebar;
