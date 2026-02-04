import { Box, Grid, Stack, Typography } from "@mui/material";
import { COLORS, MailIcon, UsersIcon } from "@src/constant";

const OrganizationInfoCard = () => {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        padding: "25px",
        backgroundColor: COLORS.surface.white,
        border: `1px solid ${COLORS.natural[100]}`,
      }}
    >
      <Grid container columnSpacing={3} rowGap={{ xs: 2, sm: 0 }}>
        {/* Left Column */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack gap={"8px"} direction={"column"}>
            <Typography variant="bodySmall" color={COLORS.text.primary}>
              Organization Type
            </Typography>
            <Typography variant="bodySmallLight" color={COLORS.text.primary}>
              Club
            </Typography>
          </Stack>
        </Grid>

        {/* Right Column */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack gap={"8px"} direction={"column"}>
            <Typography variant="bodySmall" color={COLORS.text.primary}>
              Primary Contact
            </Typography>

            <Typography variant="bodySmallLight" color={COLORS.text.primary}>
              <UsersIcon
                color={COLORS.text.primary}
                style={{
                  verticalAlign: "middle",
                  marginRight: "8px",
                  width: "16px",
                  height: "16px",
                }}
              />
              John Smith
            </Typography>

            <Typography variant="bodySmallLight" color={COLORS.text.primary}>
              <MailIcon
                color={COLORS.text.primary}
                style={{
                  verticalAlign: "middle",
                  marginRight: "8px",
                  width: "16px",
                  height: "16px",
                }}
              />
              john.smith@acmecorp.com
            </Typography>
          </Stack>
        </Grid>

        {/* Notes Column */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack gap={"8px"} direction={"column"}>
            <Typography variant="bodySmall" color={COLORS.text.primary}>
              Notes
            </Typography>
            <Typography variant="bodySmallLight" color={COLORS.text.primary}>
              Started working with 11/23/2025
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrganizationInfoCard;
