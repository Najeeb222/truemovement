import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";
import {
  FONTS,
  FONT_WEIGHTS,
  FONT_SIZES,
  LINE_HEIGHTS,
  BREAKPOINTS,
  //   BORDER_RADIUS,
  SHADOWS,
  TRANSITIONS,
  //   SPACING,
} from "../styles/theme.ts";
import { COLORS } from "@src/constant/color.ts";
// import { COLORS } from "@src/constant/color.ts";

// Base theme configuration
const baseTheme: ThemeOptions = {
  customFonts: {
    montserrat: FONTS.montserrat,
    lexendDeca: FONTS.lexendDeca,
  },
  custom: {
    typography: {
      fontSizes: FONT_SIZES,
      fontWeights: FONT_WEIGHTS,
      lineHeights: LINE_HEIGHTS,
    },
  },
  breakpoints: {
    values: BREAKPOINTS,
  },
  typography: {
    fontFamily: [FONTS.default].join(","),

    // Your custom variants
    heading2: {
      fontFamily: FONTS.montserrat,
      fontWeight: FONT_WEIGHTS.semibold,
      fontSize: "24px",
      lineHeight: "30px",
      color: COLORS.text.primary,
    },
    heading5: {
      fontFamily: FONTS.montserrat,
      fontWeight: FONT_WEIGHTS.semibold,
      fontSize: "16px",
      lineHeight: "24px",
      color: COLORS.natural.black,
      letterSpacing: "0%",
    },
    labal: {
      // Fixed typo from "labal"
      fontFamily: FONTS.inter,
      fontWeight: FONT_WEIGHTS.regular,
      fontSize: "16px",
      lineHeight: "24px",
      color: COLORS.natural.darkBlack,
      letterSpacing: "-0.31px",
    },
    bodyMeduiemLight: {
      fontFamily: FONTS.lexendDeca,
      fontWeight: FONT_WEIGHTS.light,
      fontSize: "16px",
      lineHeight: "22px",
      color: COLORS.gray.main,
    },
    bodyMedium: {
      fontFamily: FONTS.lexendDeca,
      fontWeight: FONT_WEIGHTS.regular,
      fontSize: "16px",
      lineHeight: "22px",
      color: COLORS.natural[25],
    },
    bodyMediumLarge: {
      fontFamily: FONTS.lexendDeca,
      fontWeight: FONT_WEIGHTS.regular,
      fontSize: "18px",
      lineHeight: "26px",
      color: COLORS.text.primary,
    },
    bodySmall: {
      fontFamily: FONTS.lexendDeca,
      fontWeight: FONT_WEIGHTS.regular,
      fontSize: "14px",
      lineHeight: "20px",
      color: COLORS.natural[60],
    },
    bodySmallLight: {
      fontFamily: FONTS.lexendDeca,
      fontWeight: FONT_WEIGHTS.light,
      fontSize: "14px",
      lineHeight: "20px",
      color: COLORS.text.secondary,
    },
    labelSmallLight: {
      fontFamily: FONTS.lexendDeca,
      fontWeight: FONT_WEIGHTS.light,
      fontSize: "12px",
      color: COLORS.text.primary,
    },
    buttonPrimary: {
      fontFamily: FONTS.montserrat,
      fontWeight: FONT_WEIGHTS.semibold,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0%",
    },
  },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       //   borderRadius: BORDER_RADIUS.md,
    //       boxShadow: SHADOWS.none,
    //       transition: `all ${TRANSITIONS.duration.standard}ms ${TRANSITIONS.easing.easeInOut}`,
    //       "&:hover": {
    //         boxShadow: SHADOWS.sm,
    //       },
    //     },
    //   },
    // },
    MuiTextField: {
      styleOverrides: {
        root: {
          // width: "398px",
          height: "44px",
          opacity: 1,
          px: "16px",

          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
            // paddingRight: "16px",
            // paddingLeft: "16px",
            gap: "4px",
            height: "100%",
            width: "100%",
            backgroundColor: COLORS.surface.LightFieldNav,

            // Remove all borders
            "& fieldset": {
              border: "none",
              // paddingRight: "16px",
              // paddingLeft: "16px",
            },

            // Apply placeholder styles
            "& .MuiInputBase-input::placeholder": {
              fontFamily: FONTS.lexendDeca, // font-family: Lexend Deca
              fontWeight: 400, // font-weight: 400
              fontStyle: "normal", // font-style: Regular
              fontSize: "14px", // font-size: 14px
              lineHeight: "20px", // line-height: 20px
              letterSpacing: "0%", // letter-spacing: 0%
              verticalAlign: "middle", // vertical-align: middle
              opacity: 1, // Ensure placeholder is visible
              color: COLORS.natural[60], // Add your placeholder color
            },

            // For WebKit browsers (Chrome, Safari, Edge)
            "& .MuiInputBase-input::-webkit-input-placeholder": {
              fontFamily: FONTS.lexendDeca,
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0%",
              verticalAlign: "middle",
              opacity: 1,
              color: COLORS.natural[60],
            },

            // For Mozilla Firefox
            "& .MuiInputBase-input::-moz-placeholder": {
              fontFamily: FONTS.lexendDeca,
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0%",
              verticalAlign: "middle",
              opacity: 1,
              color: COLORS.natural[60],
            },

            // For Microsoft Edge
            "& .MuiInputBase-input::-ms-input-placeholder": {
              fontFamily: FONTS.lexendDeca,
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0%",
              verticalAlign: "middle",
              opacity: 1,
              color: COLORS.natural[60],
            },
          },

          // Hide the notched outline
          "& .MuiOutlinedInput-notchedOutline": {
            display: "none",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: "36px", // height of the tabs container
          backgroundColor: COLORS.surface.LightFieldNav, // background of tab bar
          borderRadius: "14px",
          padding: "4px",
          width: "100%",
        },
        //  sx={{
        // "& .MuiTabs-indicator": {
        //   display: "none",
        // // },
        indicator: {
          // backgroundColor: COLORS.secondary.main, // active tab underline color
          // height: "3px", // thickness of the indicator
          display: "none",
          // borderRadius: "3px 3px 0 0",
        },
        // flexContainer: {
        //   gap: "8px", // spacing between tabs
        // },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          width: "auto",
          textTransform: "none", // disable uppercase
          fontFamily: FONTS.lexendDeca,
          fontWeight: FONT_WEIGHTS.semibold,
          fontSize: "14px",
          // lineHeight: "20px",
          minHeight: "29px",
          borderRadius: "14px",
          minWidth: "350px",
          color: COLORS.text.primary, // default tab text color
          backgroundColor: "transparent", // default tab background
          padding: "4px 8px",

          "&.Mui-selected": {
            color: COLORS.text.primary, // active tab text color
            backgroundColor: COLORS.primary.main, // active tab background color
          },

          // "&:hover": {
          //   color: COLORS.secondary.main, // hover text color
          // },
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 24,
          padding: 0,
        },
        switchBase: {
          padding: 2,
          transitionDuration: "300ms",

          "&.Mui-checked": {
            transform: "translateX(18px)",
            color: "#fff",

            "& + .MuiSwitch-track": {
              backgroundColor: COLORS.primary.main,
              opacity: 1,
              border: 0,
            },
          },
        },
        thumb: {
          width: 20,
          height: 20,
          borderRadius: 999,
          backgroundColor: "#fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        },
        track: {
          borderRadius: 999,
          backgroundColor: COLORS.gray.silverGray,
          opacity: 1,
        },
      },
    },
  },
};

// Create the theme
const theme = createTheme(baseTheme);

// Create and export the responsive theme
export const responsiveTheme = responsiveFontSizes(theme);
export default theme;
