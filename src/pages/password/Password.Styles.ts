const passwordGeneratorStyles = {
  mainContainer: {
    height: "100vh",
    width: "100%",
    display: "flex",
  },

  rightBodyContainer: {
    width: "81%",
  },

  navbarContainer: {
    height: "75px",
    width: "100%",
    bgcolor: "#679F38",
    display: "flex",
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
