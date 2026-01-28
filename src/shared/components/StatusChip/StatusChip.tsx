import { Chip } from "@mui/material";
import { COLORS } from "@src/constant";
import { FONTS } from "@src/styles/theme";

export type StatusType = "published" | "draft" | "scheduled" | string;

interface StatusChipProps {
  status: StatusType;
  onClick?: () => void;
}

const StatusChip = ({ status, onClick }: StatusChipProps) => {
  const getChipStyle = (status: string) => {
    const baseStyle = {
      borderRadius: "4px",
      fontFamily: FONTS.lexendDeca,
      fontSize: "12px",
      fontWeight: "300",
      height: "24px",
      cursor: onClick ? "pointer" : "default",
      textTransform: "capitalize" as const,
    };

    switch (status.toLowerCase()) {
      case "published":
      case "active":
        return {
          ...baseStyle,
          background: COLORS.secondary.main,
          color: COLORS.surface.white,
          "&:hover": {
            background: onClick ? COLORS.secondary.main : undefined,
            opacity: onClick ? 0.9 : 1,
          },
        };
      case "scheduled":
        return {
          ...baseStyle,
          background: COLORS.natural[500],
          color: COLORS.surface.white,
          "&:hover": {
            background: onClick ? COLORS.natural[500] : undefined,
            opacity: onClick ? 0.9 : 1,
          },
        };
      case "archived":
        return {
          ...baseStyle,
          background: COLORS.natural[50],
          color: COLORS.text.primary,
          "&:hover": {
            background: onClick ? COLORS.natural[50] : undefined,
            opacity: onClick ? 0.9 : 1,
          },
        };
      case "draft":
      default:
        return {
          ...baseStyle,
          background: COLORS.natural[100],
          color: COLORS.text.primary,
          "&:hover": {
            background: onClick ? COLORS.natural[100] : undefined,
            opacity: onClick ? 0.9 : 1,
          },
        };
    }
  };

  return (
    <Chip
      label={status.charAt(0).toUpperCase() + status.slice(1)}
      variant="filled"
      sx={getChipStyle(status)}
      onClick={onClick}
    />
  );
};

export default StatusChip;
