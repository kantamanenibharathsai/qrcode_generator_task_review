const modalStyles = {
  passwordGenerateHeadingText: {
    fontSize: "15px",
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

  copyText:{
    mt: "25px"
  }
};

export default modalStyles;
