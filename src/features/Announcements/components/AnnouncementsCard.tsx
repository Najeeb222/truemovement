import { Box, Stack, Switch, Typography } from "@mui/material";
import { COLORS, NotificationIcon, InfoIcon } from "@src/constant";
import { StatusChip } from "@src/shared/components";
import React from "react";

interface AnnouncementsCardProps {
  icon?: React.ReactNode;
  title: string;
  status?: "active" | "disable";
  description: string;
  isEnabled?: boolean;
  onToggle?: (enabled: boolean) => void;
}

const AnnouncementsCard: React.FC<AnnouncementsCardProps> = ({
  icon,
  title,
  status = "active",
  description,
  isEnabled = true,
  onToggle,
}) => {
  return (
    <Stack
      sx={{
        // width: "351px",
        padding: "24px",
        borderRadius: "14px",
        border: `1px solid ${COLORS.natural[100]}`,
        gap: "30px",
        background: COLORS.surface.white,
      }}
    >
      <Stack direction="row" gap="12px">
        <Box
          sx={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            bgcolor: COLORS.primary.light,
          }}
        >
          {icon}
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <Typography variant="bodyMedium">{title}</Typography>
          <Box>
            <StatusChip status={status} />
          </Box>
        </Box>
      </Stack>

      <Stack gap="12px">
        <Typography variant="bodySmallLight">{description}</Typography>

        <Box
          sx={{
            borderTop: `1px solid ${COLORS.natural[100]}`,
            pt: "12px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Switch
            checked={isEnabled}
            onChange={(e) => onToggle?.(e.target.checked)}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default AnnouncementsCard;
