import React from "react";
import { Chip, Box, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { COLORS } from "@src/constant";
import { FONTS } from "@src/styles/theme";

interface CustomPillProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
  variant?: "filled" | "outlined";
  color?: string;
  isIcone?: boolean;
  Icon?: React.ReactElement;
  width?: string;
  endIcon?: React.ReactElement;
}

const CustomPill: React.FC<CustomPillProps> = ({
  label,
  selected = false,
  onClick,
  onDelete,
  variant = "outlined",
  color,
  Icon,
  isIcone = false,
  width,
  endIcon,
}) => {
  const renderIcon = (): React.ReactElement | undefined => {
    if (Icon) return Icon;

    if (isIcone) {
      return (
        <img
          src="/assets/icons/shieldIcon.svg"
          alt="icon"
          width={12}
          height={12}
        />
      );
    }

    return undefined;
  };

  return (
    <Chip
      icon={renderIcon()}
      label={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Typography
            sx={{
              fontFamily: FONTS.lexendDeca,
              fontSize: "12px",
              fontWeight: 300,
              lineHeight: 1,
              color: color ?? COLORS.text.primary,
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </Typography>

          {endIcon && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {endIcon}
            </Box>
          )}
        </Box>
      }
      size="small"
      variant={selected ? "filled" : variant}
      onClick={onClick}
      deleteIcon={
        selected ? (
          <Close sx={{ fontSize: 14, color: "inherit" }} />
        ) : undefined
      }
      onDelete={selected ? onDelete : undefined}
      sx={{
        borderRadius: "8px",
        width: width ? width : "auto",
        fontFamily: FONTS.lexendDeca,
        fontSize: "12px",
        height: "24px",
        fontWeight: 300,
        backgroundColor: selected
          ? COLORS.primary.main
          : "transparent",
        color: color ?? COLORS.text.primary,
        borderColor: COLORS.natural[100],

        "& .MuiChip-label": {
          padding: "0 8px",
        },

        "&:hover": {
          backgroundColor: selected
            ? COLORS.primary.main
            : COLORS.natural[50],
          opacity: 0.9,
        },

        "& .MuiChip-deleteIcon": {
          color: "inherit",
          "&:hover": {
            opacity: 0.8,
          },
        },
      }}
    />
  );
};

export default CustomPill;
