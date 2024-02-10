const homeStyles = {
  homeContainer: {
    height: "100vh",
    width: "100%",
    display: "flex",
  },

  paddingContainer: {
    p: 3,
  },

  rightBodyContainer: {
    width: "81%",
    display: "flex",
    flexDirection: "column",
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

  rightBodyChildContainer: {
    display: "flex",
  },

  tabsContainer: {
    flexGrow: 1,
  },

  tabsParentContainer: {
    borderBottom: 1,
    borderColor: "divider",
  },

  copiedPasswordTextField: {
    width: "100%",
  },

  qrContainer: {
    width: "30%",
    border: "1px solid black",
    height: "calc(100vh - 60px)",
    padding: "30px 25px",
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
