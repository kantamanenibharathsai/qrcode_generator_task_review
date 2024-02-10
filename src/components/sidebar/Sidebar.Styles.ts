const sidebarStyles = {
  sidebarContainer: {
    width: "19%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    pt: "50px",
    border: "1px solid black",
    justifyContent: "space-between",
    pb: "30px",
  },

  listContainer: {
    width: "100%",
    bgcolor: "background.paper",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
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
