import CampaignIcon from "@mui/icons-material/Campaign";
import LinkIcon from "@mui/icons-material/Link";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import {
  Box,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import QRCode from "react-qr-code";
import Sidebar from "../../components/sidebar/Sidebar";
import homeStyles from "./Home.Styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const arrayOfColors = ["#e65100", "#e91e63", "#e59000", "#844545", "#679F38"];

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={homeStyles.paddingContainer}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const [value, setValue] = React.useState(0);
  const [qrText, setQrText] = React.useState("");
  const [qrColor, setQrColor] = React.useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQrText(event.currentTarget.value);
  };

  const handleFbColorChange = (value: string) => {
    setQrColor(value);
  };

  return (
    <Box sx={homeStyles.homeContainer}>
      <Box sx={homeStyles.navbarSmallContainer}>
        <Box sx={homeStyles.navbarChildContainer}>
          <Typography sx={homeStyles.qrCodeGeneratorText}>
            QR Code Generator
          </Typography>
        </Box>
      </Box>
      <Sidebar />
      <Box sx={homeStyles.rightBodyContainer}>
        <Box sx={homeStyles.navbarContainer}>
          <Box sx={homeStyles.navbarChildContainer}>
            <Typography sx={homeStyles.qrCodeGeneratorText}>
              QR Code Generator
            </Typography>
          </Box>
        </Box>
        <Box sx={homeStyles.rightBodyChildContainer}>
          <Box sx={homeStyles.tabsContainer}>
            <Box>
              <Box sx={homeStyles.tabsParentContainer}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                >
                  <Tab icon={<LinkIcon />} label="URL" {...a11yProps(0)} />
                  <Tab
                    icon={<TextSnippetIcon />}
                    label="FREE TEXT"
                    {...a11yProps(2)}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <TextField
                  variant="standard"
                  label="Enter URL"
                  sx={{ width: "100%" }}
                  helperText="Link to open when scanned, e.g. https://example.com/"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <CampaignIcon />
                      </InputAdornment>
                    ),
                  }}
                  value={qrText}
                  onChange={handleInputChange}
                />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <TextField
                  placeholder="Paste Copied Password here"
                  sx={homeStyles.copiedPasswordTextField}
                />
              </CustomTabPanel>
            </Box>
          </Box>
          <Box sx={homeStyles.qrContainer}>
            <Typography sx={homeStyles.previewText}>Preview</Typography>
            <Box sx={homeStyles.qrActualContainer}>
              <Box sx={homeStyles.qrCodeWrapperContainer}>
                <QRCode
                  style={{ height: "180px", maxWidth: "100%", width: "180px" }}
                  value={qrText}
                  viewBox={`0 0 200 200`}
                  fgColor={qrColor}
                />
              </Box>
              <Box sx={homeStyles.qrCodesSmallContainer}>
                {arrayOfColors.map((color, index) => (
                  <Box
                    sx={homeStyles.qrCodeWrapperSmallContainer}
                    onClick={() => handleFbColorChange(color)}
                    key={index}
                  >
                    <QRCode
                      size={200}
                      style={{
                        height: "50px",
                        maxWidth: "100%",
                        width: "50px",
                      }}
                      value={"string"}
                      viewBox={`0 0 200 200`}
                      fgColor={color}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
