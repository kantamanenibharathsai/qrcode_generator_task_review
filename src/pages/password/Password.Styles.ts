const passwordGeneratorStyles = {
  mainContainer: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    // border: "10px solid green"
  },

  rightBodyContainer: {
    width: {xs:"100%", lg:"81%"},
    // border: "13px solid pink"
  },

  navbarSmallContainer: {
    height: "75px",
    width: "100%",
    bgcolor: "#679F38",
    display: { xs: "flex", lg: "none" },
    alignItems: "center",
    justifyContent: "center",
  },

  navbarContainer: {
    height: "75px",
    width: "100%",
    bgcolor: "#679F38",
    display: { xs: "none", lg: "flex" },
    alignItems: "center",
    justifyContent: "center",
  },

  navbarChildContainer: {
    width: "90%",
    height: "auto",
  },

  qrCodeGeneratorText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: "24px",
  },

  mainBodyContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: "70px",
  },

  centerContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    alignItems: "center",
  },

  passwordGenerateHeadingText: {
    fontSize: "21px",
    fontWeight: "700",
    color: "black",
  },

  passwordTextField: {
    width: "380px",
  },

  generatePasswordBtn: {
    backgroundColor: "blue",
    color: "white",
    alignSelf: "center",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "blue",
    },
  },

  copyPasswordBtn: {
    backgroundColor: "green",
    color: "white",
    alignSelf: "center",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "green",
    },
  },
};

export default passwordGeneratorStyles;
