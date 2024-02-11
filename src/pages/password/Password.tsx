import { Box, Typography } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import BasicModal from "../modal/Modal";
import passwordGeneratorStyles from "./Password.Styles";


const PasswordGenerator = () => {
  return (
    <>
      <Box sx={passwordGeneratorStyles.mainContainer}>
      <Box sx={passwordGeneratorStyles.navbarSmallContainer}>
        <Box sx={passwordGeneratorStyles.navbarChildContainer}>
          <Typography sx={passwordGeneratorStyles.qrCodeGeneratorText}>
            Password Generator
          </Typography>
        </Box>
      </Box>
        <Sidebar />
        <Box sx={passwordGeneratorStyles.rightBodyContainer}>
          <Box sx={passwordGeneratorStyles.navbarContainer}>
            <Box sx={passwordGeneratorStyles.navbarChildContainer}>
              <Typography sx={passwordGeneratorStyles.qrCodeGeneratorText}>
                Password Generator
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <BasicModal />
    </>
  );
};

export default PasswordGenerator;
