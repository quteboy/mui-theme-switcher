import { createTheme, responsiveFontSizes } from "@mui/material";
const primaryColor = "#254D32";
const secondaryColor = "#3A7D44";
const warningColor = "#FFA343";
const errorColor = "#CD4A4A";
const textColorLight = "#EFEFF0";
const textColorDark = "#181D27";
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
      main: "#f2f4f3",
    },
    darkNeutral: {
      main: "#353c55",
    },
  },
  typography: {
    fontFamily: ["JUST Sans", "sans-serif"].join(","),
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
          height: "40px",
          svg: {
            color: textColorDark,
            fontSize: "18px",
          },
          input: {
            padding: "10px",
            "&::placeholder": {
              color: "#ccd5ae",
              fontSize: "14px",
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
          height: "45px",
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
          height: "40px",
          svg: {
            color: textColorDark,
            fontSize: "18px",
          },
          input: {
            padding: "10px",
            "&::placeholder": {
              color: "#ccd5ae",
              fontSize: "14px",
            },
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: textColorDark,
          top: "-4px",
          fontSize: "14px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: textColorDark,
          top: "-4px",
          fontSize: "14px",
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
          color: textColorDark,
          top: "-6px",
          fontSize: "14px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: textColorDark,
          top: "-6px",
          fontSize: "14px",
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
            fontSize: 15,
            minWidth: "175px",
            padding: "7px",
          },
          "&.MuiTableCell-body": {
            color: textColorDark,
            fontWeight: 500,
            borderRight: "2px solid #181D27",
            fontSize: 15,
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
    MuiTab: {
      styleOverrides: {
        root: {
          marginBottom: "5px",

          "&.MuiTab-root": {
            backgroundColor: secondaryColor,
            borderRadius: "12px",
            width: "18%",
            color: textColorDark,
            marginRight: "10px",
            textTransform: "capitalize",
            fontWeight: 500,
          },
          "&.MuiTab-root.Mui-selected": {
            backgroundColor: primaryColor,
            color: textColorLight,
            borderRadius: "12px",
            width: "20%",
            fontWeight: 600,
          },
        },
      },
    },
  },
});
const darkgreen = responsiveFontSizes(baseTheme);
export default darkgreen;
