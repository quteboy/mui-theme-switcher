import { createTheme, responsiveFontSizes } from "@mui/material";
const primaryColor = "#6f1d1b";
const secondaryColor = "#bb9457";
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
      main: "#ffe6a7",
    },
    darkNeutral: {
      main: "#353c55",
    },
  },
  typography: {
    fontFamily: ["PT Sans", "sans-serif"].join(","),
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "4px",
          color: textColorDark,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: secondaryColor,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: secondaryColor,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: primaryColor,
          },
          svg: {
            color: textColorDark,
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
          borderRadius: "4px",
          color: textColorDark,
          backgroundColor: "#ffff",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: secondaryColor,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: secondaryColor,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: primaryColor,
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

    MuiButton: {
      defaultProps: {
        variant: "outlined",
        disableElevation: true,
        disableFocusRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontWeight: 500,
          letterSpacing: "1.5px",
          borderRadius: "8px",
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
            fontSize: 14,
            minWidth: "175px",
            padding: "10px",
          },
          "&.MuiTableCell-body": {
            color: textColorDark,
            fontWeight: 500,
            borderRight: "2px solid #001219",
            fontSize: 14,
            padding: "10px",
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
    MuiTabs: {
      styleOverrides: {
        "&.MuiTabs-indicator": {
          display: "none",
        },
      },
    },
  },
});
const loyaltheme = responsiveFontSizes(baseTheme);
export default loyaltheme;
