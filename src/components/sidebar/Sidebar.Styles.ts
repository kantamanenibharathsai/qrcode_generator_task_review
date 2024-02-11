const sidebarStyles = {
  sidebarContainer: {
    width: {xs:"100%", lg:"19%"},
    minHeight: {xs:"auto", lg:"100vh"},
    display: "flex",
    flexDirection: "column",
    gap: {xs:"0px", lg:"20px"},
    pt: {xs:"10px", lg:"50px"},
    justifyContent: "space-between",
    pb: {xs:"1px", lg:"30px"},
    border: {xs:"none", lg:"1px solid black"}
  },

  listContainer: {
    width: "100%",
    bgcolor: "background.paper",
    display: "flex",
    flexDirection: "column",
    gap: {xs:"0px", lg:"15px"},
  },

  listItem: {
    cursor: "pointer",
    "&:hover": {
      bgcolor: "#EBE9EB",
    },
  },

  primaryText: {
    fontWeight: "800",
    fontSize: "18px",
  },

  secondaryText: {
    display: "inline",
    color: "grey",
  },

  divider: {
    width: "100%",
  },

  button: {
    width: "200px",
  },

  profileContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    mx: "20px",
  },

  rightContentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  displayNameText: {
    fontSize: "14px",
    color: "black",
    textTransform: "capitalize",
  },

  email: {
    fontSize: "12px",
    color: "black",
    textTransform: "capitalize",
  },

  logoutBtn : {
     p: 2,
     cursor: "pointer"
  }
};

export default sidebarStyles;
