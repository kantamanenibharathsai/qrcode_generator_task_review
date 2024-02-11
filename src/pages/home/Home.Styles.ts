const homeStyles = {
  homeContainer: {
    height: {xs:"auto", lg:"100vh"},
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
  },

  paddingContainer: {
    p: { xs: 3, lg: 3 },
  },

  rightBodyContainer: {
    width: { xs: "100%", lg: "81%" },
    display: "flex",
    flexDirection: "column",
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

  rightBodyChildContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: { xs: "center", md: "flex-start" }
  },

  tabsContainer: {
    flexGrow: 1,
    width: { xs: "100%", md: "auto" },
    pt: "25px"
  },

  tabsParentContainer: {
    borderBottom: 1,
    borderColor: "divider",
  },

  copiedPasswordTextField: {
    width: "100%",
  },

  qrContainer: {
    width: { xs: "100%", sm: "100%", md: "37%", lg: "30%" },
    height: "calc(100vh - 60px)",
    padding: { xs: "20px 20px", md: "30px 25px" },
    margin: "auto",
    border: {xs:"none", lg:"1px solid black"}
  },

  previewText: {
    fontSize: "18px",
    color: "black",
  },

  qrActualContainer: {
    mt: "20px",
    display: "flex",
    flexdirection: "row",
    gap: "10px",
  },

  qrCodeWrapperContainer: {
    borderRadius: "15px",
    padding: "13px",
    border: "2px solid grey",
    display: "inline-block",
  },

  qrCodesSmallContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    overflowY: "scroll",
    height: "206px",
  },

  qrCodeWrapperSmallContainer: {
    borderRadius: "6px",
    padding: "6px",
    border: "1px solid grey",
    cursor: "pointer",
  },
};

export default homeStyles;
