const signInStyles = {
  mainContainer: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
  },

  navbarSmallContainer: {
    height: "75px",
    width: "100%",
    bgcolor: "#679F38",
    display: { xs: "flex", lg: "none" },
    alignItems: "center",
    justifyContent: "center",
  },

  rightBodyContainer: {
    width: {xs:"100%", lg:"81%"},
    display: "flex",
    flexDirection: "column",
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
    pt: {xs:"20px", lg:"70px"},
    px: {xs:"10px", lg: "0px"}
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
