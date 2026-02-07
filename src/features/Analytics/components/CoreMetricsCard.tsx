import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { COLORS, datePresets } from "@src/constant";
import AnalyticsCard from "@src/features/Dashboard/components/AnalyticsCard";
import {
  CustomButton,
  CustomDatePicker,
  CustomSelect,
} from "@src/shared/components";
import ContentType from "./ContentType";
import { useFormContext } from "react-hook-form";

const CoreMetricsCard = () => {
  const { watch, setValue } = useFormContext();
  const timeWindow = watch("timeWindow");
  const dateRangePreset = watch("dateRange");

  const showCustomRange =
    timeWindow === "custom" || dateRangePreset === "custom";

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
        <Box sx={{ display: "flex", gap: 1 }}>
          <CustomButton
            width={"155px"}
            variant="contained"
            background={
              timeWindow === "preset" ? COLORS.primary.main : "transparent"
            }
            textColor={COLORS.surface.black}
            // textColor={
            //   timeWindow === "preset"
            //     ? COLORS.surface.black
            //     : COLORS.surface.white
            // }
            active
            title="Preset Range"
            onClick={() => {
              setValue("timeWindow", "preset");
              // If switching back to preset, default to last 7 days if it was custom
              if (dateRangePreset === "custom") {
                setValue("dateRange", "last7Days");
              }
            }}
          />
          <CustomButton
            width={"155px"}
            variant="contained"
            background={
              timeWindow === "custom" ? COLORS.primary.main : "transparent"
            }
            textColor={
              timeWindow === "custom"
                ? COLORS.surface.white
                : COLORS.surface.black
            }
            title="Custom Range"
            active
            onClick={() => setValue("timeWindow", "custom")}
          />
        </Box>
        <Box sx={{ width: { xs: "100%", sm: "320px" }, mt: 1 }}>
          {!showCustomRange ? (
            <CustomSelect
              name="dateRange"
              options={datePresets}
              width="100%"
              placeholder="Select Preset"
            />
          ) : (
            <Stack gap={"8px"} direction={{ xs: "column", sm: "row" }}>
              <CustomDatePicker name="startDate" placeholder="Start Date" />
              <CustomDatePicker name="endDate" placeholder="End Date" />
              {/* If we are in 'custom' mode because of the dropdown, show a button to go back or handle specifically */}
              {dateRangePreset === "custom" && timeWindow === "preset" && (
                <CustomButton
                  title="Back to Presets"
                  variant="outlined"
                  onClick={() => setValue("dateRange", "last7Days")}
                />
              )}
            </Stack>
          )}
        </Box>
      </Stack>
      <Divider />
      <Box>
        <ContentType />
      </Box>{" "}
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
