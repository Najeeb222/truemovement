import { Box, Grid, Stack, Typography } from "@mui/material";
import TeamInfoTable from "./TeamInfoTable";
import AnalyticsOrganizationCard from "./AnalyticsOrganizationCard";
import { analyticsSelect, COLORS } from "@src/constant";
import { CustomSelect } from "@src/shared/components";

const StreaksAndAccountability = () => {
  return (
    <Stack
      sx={{
        border: `1px solid ${COLORS.natural[100]}`,
        borderRadius: "14px",
        gap: "24px",
        paddingY: "24px",
        background: COLORS.surface.white,
      }}
    >
      <Typography
        variant="bodyMeduiemLight"
        color={COLORS.text.primary}
        sx={{
          padding: "0 24px 24px",
          borderBottom: `1px solid ${COLORS.natural[100]}`,
        }}
      >
        Streaks & Accountability
      </Typography>
      <Box sx={{ paddingX: "24px" }}>
        <Typography variant="bodyMedium" mb={1}>
          Filters
        </Typography>
        <CustomSelect
          name="filter"
          label="Organization"
          options={analyticsSelect}
        />
      </Box>
      <Grid container spacing={2} sx={{ px: "24px" }}>
        {[1, 2, 3].map(() => (
          <Grid size={{ xs: 12, md: 4 }}>
            <AnalyticsOrganizationCard />
          </Grid>
        ))}
      </Grid>

      <Box padding={"24px"}>
        <TeamInfoTable />
      </Box>
    </Stack>
  );
};

export default StreaksAndAccountability;
