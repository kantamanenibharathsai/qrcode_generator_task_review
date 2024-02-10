import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, Typography } from "@mui/material";
import {signInWithPopup } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { auth, provider } from "../../firebase/Config";
import signInStyles from "./SignIn.Styles";


const SignIn = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = React.useState({
    email: "",
    name: "",
    photoUrl: "",
  });
  const signInWithGoogleBtn = async () => {
    const response = await signInWithPopup(auth, provider);
    const user = response.user;
    const userObj = {
      email: user.email ?? "",
      name: user.displayName ?? "",
      photoUrl: user?.photoURL ?? "",
    };
    setUserDetails(userObj);
    localStorage.setItem("loggedInUserCredentials", JSON.stringify(userObj));
  };

  useEffect(() => {
    if (userDetails.name.length > 0) {
        navigate("/")
    }
  }, [userDetails, navigate]);

  return (
    <Box sx={signInStyles.mainContainer}>
      <Sidebar />
      <Box sx={signInStyles.rightBodyContainer}>
        <Box sx={signInStyles.navbarContainer}>
          <Box sx={signInStyles.navbarChildContainer}>
            <Typography sx={signInStyles.qrCodeGeneratorText}>
              Sign In
            </Typography>
          </Box>
        </Box>
        <Box sx={signInStyles.mainBodyContainer}>
          <Box sx={signInStyles.centerContainer}>
            <Typography sx={signInStyles.signInToCreateText}>
              Sign in to create or manage Static QR Codes.
            </Typography>
            <Button
              variant="contained"
              sx={signInStyles.buttonGoogle}
              startIcon={<GoogleIcon />}
              onClick={signInWithGoogleBtn}
            >
              Sign In with Google
            </Button>
            <Typography sx={signInStyles.termsAndServicesText}>
              By continuing, you are indicating that you accept our Terms of
              Service and Privacy Policy.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
