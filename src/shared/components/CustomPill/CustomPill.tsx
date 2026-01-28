import { Chip } from "@mui/material";
import { Close } from "@mui/icons-material";
import { COLORS } from "@src/constant";
import { FONTS } from "@src/styles/theme";

interface CustomPillProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
  variant?: "filled" | "outlined";
}

const CustomPill = ({
  label,
  selected = false,
  onClick,
  onDelete,
  variant = "outlined",
}: CustomPillProps) => {
  return (
    <Chip
      label={label}
      size="small"
      variant={selected ? "filled" : variant}
      deleteIcon={
        selected ? (
          <Close sx={{ fontSize: "14px !important", color: "inherit" }} />
        ) : undefined
      }
      onDelete={selected ? onDelete : undefined}
      onClick={onClick}
      sx={{
        borderRadius: "8px",
        fontFamily: FONTS.lexendDeca,
        fontSize: "12px",
        height: "24px",
        fontWeight: 300,
        backgroundColor: selected ? COLORS.primary.main : "transparent",
        color: COLORS.text.primary,
        borderColor: COLORS.natural[100],
        "& .MuiChip-label": {
          paddingX: "8px",
        },
        "&:hover": {
          backgroundColor: selected ? COLORS.primary.main : undefined,
          opacity: 0.9,
        },
        "& .MuiChip-deleteIcon": {
          color: "inherit",
          "&:hover": {
            color: "inherit",
            opacity: 0.8,
          },
        },
      }}
    />
  );
};

export default CustomPill;
