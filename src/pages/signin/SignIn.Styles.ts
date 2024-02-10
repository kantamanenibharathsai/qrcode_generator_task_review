const signInStyles = {
  mainContainer: {
    height: "100vh",
    width: "100%",
    display: "flex",
  },

  rightBodyContainer: {
    width: "81%",
    display: "flex",
    flexDirection: "column",
    // border: "3px solid yellow",
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
    // height: "calc(100vh - 70px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // border: "1px solid red",
    pt: "70px",
  },

  centerContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    alignItems: "center",
  },

  signInToCreateText: {
    fontSize: "21px",
    fontWeight: "700",
    color: "black",
  },

  buttonGoogle: {
    backgroundColor: "#ffffff",
    color: "grey",
    alignSelf: "center",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
  },

  termsAndServicesText: {
    color: "black",
    fontSize: "12px",
  },
};

export default signInStyles;
