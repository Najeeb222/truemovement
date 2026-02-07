import { Box, Stack, Typography } from "@mui/material";
import { COLORS, UsersIcon } from "@src/constant";

const AnalyticsOrganizationCard = () => {
  return (
    <Stack
      direction={"column"}
      gap={"8px"}
      sx={{
        padding: "24px",
        border: `1px solid ${COLORS.natural[100]}`,
        borderRadius: "20px",
        background: COLORS.surface.white,
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <UsersIcon />
        <Typography variant="bodySmallLight">Number of Team Members</Typography>
      </Box>
      <Box></Box>
      <Typography variant="heading1">6</Typography>
      <Typography variant="bodySmallLight">Active team members</Typography>
    </Stack>
  );
};

export default AnalyticsOrganizationCard;
