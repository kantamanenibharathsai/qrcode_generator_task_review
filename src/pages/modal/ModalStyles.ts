const modalStyles = {
  passwordGenerateHeadingText: {
    fontSize: {xs:"12px", sm:"15px"},
    fontWeight: "700",
    color: "black",
  },

  passwordTextField: {
    width: {xs:"99.8%"},
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

  copyText:{
    mt: "25px"
  }
};

export default modalStyles;
