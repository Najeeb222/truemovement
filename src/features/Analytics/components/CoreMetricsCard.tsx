import { Box, Grid, Stack, Typography } from "@mui/material";
import { COLORS } from "@src/constant";
import AnalyticsCard from "@src/features/Dashboard/components/AnalyticsCard";
import {
  CustomButton,
  CustomDatePicker,
  CustomSelect,
  CustomTextField,
} from "@src/shared/components";

const CoreMetricsCard = () => {
  return (
    <Stack
      sx={{
        paddingY: "24px",
        border: `1px solid ${COLORS.natural[100]}`,
        borderRadius: "14px",
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
        Core Metrics
      </Typography>
      <Box sx={{ padding: "24px" }}>
        <Typography variant="bodyMedium" color={COLORS.text.primary}>
          Filters & Time Window
        </Typography>
      </Box>
      <Stack padding={"24px"} gap={"8px"}>
        <Typography variant="bodySmallLight" color={COLORS.text.primary}>
          Time Window
        </Typography>
        <Box>
          <CustomButton
            variant="contained"
            background={COLORS.secondary.main}
            active
            title="Preset Range"
          />
          <CustomButton
            variant="contained"
            background={"transparent"}
            textColor={COLORS.surface.black}
            title="Custom Range"
            active
          />
        </Box>
        <Box sx={{ width: { xs: "100%", sm: "320px" } }}>
          <CustomSelect name="dateRange" options={[]} width="100%" />
          <Stack gap={"8px"} direction={{ xs: "column", sm: "row" }}>
            {/* <CustomTextField name="startDate" placeholder="" type="date" />
            
            <CustomTextField name="endDate" placeholder="" type="date" /> */}
            <CustomDatePicker name="date" placeholder="mm/dd/yyyy" />
            <CustomDatePicker name="date" placeholder="mm/dd/yyyy" />
          </Stack>
        </Box>
      </Stack>
      <Grid container spacing={2} paddingX={"24px"}>
        {[1, 2, 3, 4, 5].map(() => (
          <Grid size={{ xs: 12, md: 4, lg: 2.4 }}>
            <AnalyticsCard
              title="Impressions"
              value="45,372"
              change="Card views in mobile app"
              // icon="/assets/icons/eyeIcon.svg"
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default CoreMetricsCard;
