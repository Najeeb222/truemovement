import type { dark } from "node_modules/@mui/material/styles/createPalette";

export const COLORS = {
  error: {
    main: "#FF0000",
    button: "#C20000",
  },

  primary: {
    main: "#A1C523",
    dark: "#A1C52326",
    light: "#A1C5231A",
  },
  secondary: {
    main: "#662C82",
    dark: "#662C8226",
    light: "#5B2D821A",
  },
  success: {
    main: "#05B2D8240",
  },

  surface: {
    LightFieldNav: "#F3F3F5",
    white: "#FFFFFF",
    black: "#222222",
    disable: "#00000061",
    highEmphasis: "#000000DE",
    borderBlack: "#0000001A",
  },
  natural: {
    100: "#E5E5E5",
    25: "#3A3B3E",
    60: "#909094",
    50: "#F7F7F7",
    300: "#8E8E8E",
    500: "#323232",
    black: "#0A0A0A",
    blackMain: "#000",
    darkBlack: "#171717",
  },
  gray: {
    main: "#717182",
    black: "#525252",
    bg: "#FAFAFA",
    tabBg: "#F5F5F5",
    // select: "#F3F3F5",
    silverGray: "#D4D4D4",
  },

  text: {
    primary: "#2E2E2E",
    secondary: "#757575",
    tertiary: "#8E8E8E",
    secondaryGray: "#737373",
  },
  gradients: {
    mainGradient: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
  },
} as const;
