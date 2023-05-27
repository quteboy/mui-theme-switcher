import { createTheme, responsiveFontSizes } from "@mui/material";
const primaryColor = "#9a031e";
const secondaryColor = "#0f4c5c";
const warningColor = "#e36414";
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
              color: "#ccd5ae",
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
            padding: "7px",
          },
          "&.MuiTableCell-body": {
            color: textColorDark,
            minWidth: "175px",
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
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: secondaryColor,
          borderRadius: "9px",
          "&.Mui-expanded": {
            backgroundColor: primaryColor,
            color: textColorLight,
            svg: {
              color: textColorLight,
            },
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "16px 24px",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          marginBottom: "16px",
        },
      },
    },
  },
});

const theme = responsiveFontSizes(baseTheme);

export default theme;
