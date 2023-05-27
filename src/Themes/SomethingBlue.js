import { createTheme, responsiveFontSizes } from "@mui/material";
const primaryColor = "#2d3142";
const secondaryColor = "#4f5d75";
const warningColor = "#FFA343";
const errorColor = "#CD4A4A";
const textColorLight = "#fdfffc";
const textColorDark = "#323031";
const tableBG = "#CDC7E5";
const tableBG2 = "#E8DDB5";
const brickRed = "#a05d49";
const baseTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F1F0EE",
    },
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
    fontFamily: ["avita", "sans-serif"].join(","),
  },
  shadows: [
    "0px 2px 4px rgba(0,0,0,0.10)",
    "0px 4px 8px rgba(0,0,0,0.13)",
    "0px 8px 16px rgba(0,0,0,0.16)",
    "0px 16px 24px rgba(0,0,0,0.20)",
    "0px 24px 32px rgba(0,0,0,0.25)",
  ],
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "7px",
          color: textColorDark,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: primaryColor,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: primaryColor,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: secondaryColor,
            borderWidth: "1.5px",
          },
          height: "45px",
          svg: {
            color: textColorDark,
            fontSize: "18px",
          },
          input: {
            padding: "10px",
            "&::placeholder": {
              color: "#353c55",
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
          borderRadius: "7px",
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
            borderWidth: "1.5px",
          },
          svg: {
            color: textColorDark,
            fontSize: "18px",
          },
          input: {
            padding: "10px",
            "&::placeholder": {
              color: "#353c55",
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
          borderRadius: "7px",
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
        /* align: "center", */
      },
      styleOverrides: {
        root: {
          "&.MuiTableCell-head": {
            backgroundColor: "#E8E8E8",
            color: "#707070",
            fontWeight: 600,
            // borderRight: "2px solid #0A0908",
            fontSize: 15,
            minWidth: "175px",
          },
          "&.MuiTableCell-body": {
            color: textColorDark,

            fontWeight: 500,
            // borderRight: "2px solid #0A0908",
            fontSize: 15,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: "#e0e2db",
          "&:nth-child(odd)": {
            backgroundColor: textColorLight,
          },
        },
      },
    },

    MuiTable: {
      defaultProps: {
        padding: "checkbox",
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          overflowX: "scroll",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          marginBottom: "5px",

          "&.MuiTab-root": {
            backgroundColor: secondaryColor,
            borderRadius: "7px",
            //width: "18%",
            color: textColorDark,
            marginRight: "5px",
            textTransform: "capitalize",
            fontWeight: 500,
            padding: 0,
            "&:last-child": {
              marginRight: "0",
            },
          },
          "&.MuiTab-root.Mui-selected": {
            backgroundColor: primaryColor,
            color: textColorLight,
            borderRadius: "7px",
            padding: 0,
            //width: "20%",
            fontWeight: 600,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          //backgroundColor: "#71847b",
          borderRadius: "7px",
          fontWeight: 700,
          color: textColorDark,
          "&.Mui-expanded": {
            backgroundColor: secondaryColor,
            color: textColorDark,
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
          marginBottom: "20px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            borderRadius: "7px",
            position: "relative",
            color: textColorDark,
            borderColor: secondaryColor,
            /*     margin: "8px 0",
            padding: "8px 10px", */

            "&:focus": {
              borderRadius: "7px",
              borderColor: primaryColor,
            },
          },
        },
      },
    },
  },
});
const someBlue = responsiveFontSizes(baseTheme);
export default someBlue;
