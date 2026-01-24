import "@mui/material/styles";

declare module "@mui/material/styles" {
  // Extend TypographyVariants interface
  interface TypographyVariants {
    heading2: React.CSSProperties;
    heading5: React.CSSProperties;
    labal: React.CSSProperties;
    bodyMeduiemLight: React.CSSProperties;
    bodyMedium: React.CSSProperties;
    bodyMediumLarge: React.CSSProperties;
    bodySmall: React.CSSProperties;
    bodySmallLight: React.CSSProperties;
    labelSmallLight: React.CSSProperties;
    buttonPrimary: React.CSSProperties;
  }

  // Allow using these variants in `sx` prop and `theme.typography`
  interface TypographyVariantsOptions {
    heading2?: React.CSSProperties;
    heading5?: React.CSSProperties;
    labal?: React.CSSProperties;
    bodyMeduiemLight?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
    bodyMediumLarge?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
    bodySmallLight?: React.CSSProperties;
    labelSmallLight?: React.CSSProperties;
    buttonPrimary?: React.CSSProperties;
  }

  // Extend Theme interface to include your custom properties
  interface Theme {
    custom: {
      typography: {
        fontSizes: Record<string, string | number>;
        fontWeights: Record<string, number>;
        lineHeights: Record<string, string | number>;
      };
    };
    customFonts: {
      montserrat: string;
      lexendDeca: string;
    };
  }

  // Allow custom properties in ThemeOptions when creating theme
  interface ThemeOptions {
    custom?: {
      typography?: {
        fontSizes?: Record<string, string | number>;
        fontWeights?: Record<string, number>;
        lineHeights?: Record<string, string | number>;
      };
    };
    customFonts?: {
      montserrat?: string;
      lexendDeca?: string;
    };
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading2: true;
    heading5: true;
    labal: true;
    bodyMeduiemLight: true;
    bodyMedium: true;
    bodyMediumLarge: true;
    bodySmall: true;
    bodySmallLight: true;
    labelSmallLight: true;
    buttonPrimary: true;
    // Disable default variants if needed
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    button: false;
    caption: false;
    overline: false;
  }
}
