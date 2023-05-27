import { createTheme, responsiveFontSizes } from "@mui/material";
const primaryColor = "#0f0e11";
const secondaryColor = "#23252d";
const warningColor = "#FFA343";
const errorColor = "#CD4A4A";
const textColorLight = "#f5f5f5";
const textColorDark = "#001219";
const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    warning: {
      main: warningColor,
    },
    error: {
      main: errorColor,
    },
    neutral: {
      main: "#2b2d35",
    },
    darkNeutral: {
      main: "#46484f",
    },
  },
  typography: {
    fontFamily: ["Handlee", "sans-serif"].join(","),
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "12px",
          color: textColorDark,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: primaryColor,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: primaryColor,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: secondaryColor,
          },
          svg: {
            color: textColorDark,
          },
          input: {
            "&::placeholder": {
              color: "#343a40",
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "12px",
          color: textColorDark,
          backgroundColor: "#ffff",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: primaryColor,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: primaryColor,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: secondaryColor,
          },
          //fontSize: "15px",
          //padding: "12.5px 14px ",
          svg: {
            color: "#001219",
            fontSize: "18px",
          },
          input: {
            "&::placeholder": {
              color: "#343a40",
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          //padding: 0,
          //height: "40px",
          //fontSize: "15px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
       
        disableElevation: true,
        disableFocusRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          
          textTransform: "capitalize",
          fontWeight: 500,
          letterSpacing: "1.5px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#001219",
          
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#001219",
          
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          backgroundColor: primaryColor,
          color: textColorLight,
        },
      },
    },
    MuiTableCell: {
      defaultProps: {
        align: "center",
      },
      styleOverrides: {
        root: {
          "&.MuiTableCell-head": {
            backgroundColor: primaryColor,
            color: textColorLight,
            fontWeight: 600,
            borderRight: "2px solid #fff",
            fontSize: 14,
            minWidth: "175px",
            padding: "7px",
          },
          "&.MuiTableCell-body": {
            color: textColorDark,
            fontWeight: 500,
            borderRight: "2px solid #001219",
            fontSize: 14,
            padding: "7px",
          },
        },
      },
    },
    MuiTable: {
      defaultProps: {
        padding: "checkbox",
      },
    },
  },
});
const monoTheme = responsiveFontSizes(baseTheme);
export default monoTheme;
