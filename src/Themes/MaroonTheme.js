import { createTheme, responsiveFontSizes } from "@mui/material";
const primaryColor = "#230000";
const secondaryColor = "#5d3c18";
const warningColor = "#FFA343";
const errorColor = "#CD4A4A";
const textColorLight = "#f5f5f5";
const textColorDark = "#0d060f";
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
      main: "#1e2824",
    },
    darkNeutral: {
      main: "#353c55",
    },
  },
  typography: {
    fontFamily: ["IBM Plex Mono", "sans-serif"].join(","),
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
          color: textColorDark,
          height: "45px",
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

          svg: {
            color: primaryColor,
            fontSize: "22px",
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
        variant: "outlined",
        disableElevation: false,
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
const maroonTheme = responsiveFontSizes(baseTheme);
export default maroonTheme;
