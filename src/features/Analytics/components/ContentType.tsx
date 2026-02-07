import { Grid } from "@mui/material";
import {
  analyticsSelect,
  COLORS,
  contentTypeOptions,
  durationOptions,
  painPointsOptions,
  propsOptions,
  sportsOptions,
} from "@src/constant";
import { CustomSelect } from "@src/shared/components";

const ContentType = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        // border: `1px solid ${COLORS.natural[100]}`,
        borderRadius: "14px",

        padding: "24px",
        background: COLORS.surface.white,
      }}
    >
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <CustomSelect
          name="contentType"
          label="Content Type"
          options={contentTypeOptions}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <CustomSelect name="sports" label="Sports" options={sportsOptions} />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <CustomSelect
          name="painPoints"
          label="Pain Points"
          options={painPointsOptions}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <CustomSelect name="props" label="Props" options={propsOptions} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <CustomSelect
          name="duration"
          label="Duration"
          options={durationOptions}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <CustomSelect
          name="organization"
          label="Organization"
          options={analyticsSelect}
        />
      </Grid>
    </Grid>
  );
};

export default ContentType;
