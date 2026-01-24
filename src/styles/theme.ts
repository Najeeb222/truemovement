// const COLORS = {
//   primary: {
//     main: "#6653D3",
//     hard: "#133A64",
//     light: "#9080eb",
//     lightest: "#B6ABE9",
//     brandQuickproBlue: "#45D5FF",
//   },
//   secondary: {
//     main: "#F4F6F7",
//     light: "#E6E9EB",
//   },
//   success: {
//     main: "#009A59",
//     light: "#E8FAF0",
//     strong: "#008557",
//   },
//   error: {
//     light: "#FF3C38",
//     strong: "#EF2626",
//     thin: "#FAE1E0",
//     hard: "#812E13",
//   },
//   white: {
//     main: "#ffffff",
//     light: "#F4F6F7",
//   },
//   black: {
//     main: "#1F2E3C",
//     light: "#DADDDE",
//     thin: "#D5D5D5",
//     absolute: "#000000",
//   },
//   dark: {
//     light: "#2F3133",
//     thin: "#6E7375",
//   },
//   gray: {
//     main: "#53575A",
//     light: "#898D8F",
//     thin: "#D9D9D9",
//     thinner: "#EBEBEB",
//   },
//   blue: {
//     main: "#004150",
//     light: "#3391A5",
//     dark: "#236476",
//     // dark: '#3391A5',
//   },
//   gradient: {
//     main: "linear-gradient(0deg, #EAF4F7, #EAF4F7)",
//   },
// };

// const THEME = {
//   light: {
//     primary: "#4CAF50",
//     text: "#333",
//     background: "#FFF",
//     secondary: "#FFFF99",
//     accent: "#2196F3",
//   },
//   dark: {
//     primary: "#2196F3",
//     text: "#EEE",
//     background: "#23262F",
//     secondary: "#FF3800",
//     accent: "#E91E63",
//   },
// };

const FONTS = {
  default: '"Inter", sans-serif',
  inter: '"Inter", sans-serif',
  montserrat: '"Montserrat", sans-serif',
  lexendDeca: '"Lexend Deca", sans-serif',
  // System fallbacks
  helvetica: '"Helvetica", "Arial", sans-serif',
  arial: '"Arial", sans-serif',
} as const;

// Font weights
const FONT_WEIGHTS = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
} as const;

// Font sizes
const FONT_SIZES = {
  tiny: "0.625rem", // 10px
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  base: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem", // 36px
  "5xl": "3rem", // 48px
  "6xl": "3.75rem", // 60px
} as const;

// Line heights
const LINE_HEIGHTS = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

// Breakpoints
const BREAKPOINTS = {
  xs: 0, // Extra small devices (phones)
  sm: 600, // Small devices (tablets)
  md: 960, // Medium devices (laptops)
  lg: 1280, // Large devices (desktops)
  xl: 1920, // Extra large devices (large desktops)
} as const;

// Container max widths
const CONTAINER_MAX_WIDTHS = {
  sm: "540px",
  md: "720px",
  lg: "960px",
  xl: "1140px",
  xxl: "1320px",
} as const;

// Spacing scale (in pixels)
const SPACING = {
  xs: 4, // 4px
  sm: 8, // 8px
  md: 16, // 16px
  lg: 24, // 24px
  xl: 32, // 32px
  "2xl": 48, // 48px
  "3xl": 64, // 64px
  "4xl": 96, // 96px
} as const;

// Grid system
// const GRID = {
//   columns: 12,
//   gutter: 24, // 24px
// } as const;

// Z-index layers
// const Z_INDEX = {
//   base: 1,
//   dropdown: 1000,
//   sticky: 1020,
//   fixed: 1030,
//   modalBackdrop: 1040,
//   modal: 1050,
//   popover: 1060,
//   tooltip: 1070,
// } as const;

// Border radius
const BORDER_RADIUS = {
  none: "0",
  sm: "4px",
  md: "8px",
  lg: "16px",
  xl: "24px",
  full: "9999px",
} as const;

// Shadows
const SHADOWS = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
} as const;

// Transitions
const TRANSITIONS = {
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
  easing: {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
} as const;

const commonStyles = {};

export {
  FONTS,
  FONT_WEIGHTS,
  FONT_SIZES,
  LINE_HEIGHTS,
  BREAKPOINTS,
  CONTAINER_MAX_WIDTHS,
  SPACING,
  //   GRID,
  //   Z_INDEX,
  //   BORDER_RADIUS,
  SHADOWS,
  TRANSITIONS,
  commonStyles,
};
