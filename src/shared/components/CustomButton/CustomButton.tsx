import { Button, type ButtonProps, Typography } from "@mui/material";
import { COLORS } from "@src/constant";

interface ButtonTypes extends ButtonProps {
  title?: string;
  textColor?: string;
  background?: string;
  width?: string | number;
  active?: boolean; // Add active prop
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton = ({
  variant = "contained",
  title,
  endIcon,
  startIcon,
  onClick,
  textColor,
  background,
  width = 200,
  active = false, // Default to false
  ...props
}: ButtonTypes) => {
  return (
    <Button
      {...props}
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      disabled={!active} // Disable button when not active
      sx={{
        borderRadius: "4px",
        textTransform: "capitalize",
        px: "8px",
        py: "7px",
        width: width,
        height: "46px",
        boxShadow: "none",
        // ":hover": {
        //   boxShadow: "none",
        // },

        // Apply active/inactive styles
        ...(variant === "contained" && {
          backgroundColor: active
            ? background
              ? background
              : COLORS.primary.main
            : COLORS.natural[100], // Grey when inactive
          color: active
            ? textColor
              ? textColor
              : COLORS.text.primary
            : COLORS.text.secondary, // Grey text when inactive
          "&:hover": {
            backgroundColor: active
              ? background
                ? background
                : COLORS.primary.dark
              : COLORS.natural[100],
            boxShadow: "none",
          },
        }),
        ...(variant === "outlined" && {
          border: `1px solid ${active
            ? background
              ? background
              : COLORS.primary.main
            : COLORS.natural[100]
            }`,
          color: active
            ? textColor
              ? textColor
              : COLORS.text.primary
            : COLORS.text.secondary,
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: active
              ? `${COLORS.primary.light}10`
              : `${COLORS.natural[100]}10`,
          },
        }),
      }}
    >
      <Typography variant="buttonPrimary">{title}</Typography>
    </Button>
  );
};
export default CustomButton;
