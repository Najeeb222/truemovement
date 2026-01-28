import { Box, Stack, Typography } from "@mui/material";
import { COLORS } from "@src/constant";

interface AnalyticsCardProps {
  title: string;
  value: string;
  change: string;
  icon: string;
}

const AnalyticsCard = ({ title, value, change, icon }: AnalyticsCardProps) => {
  return (
    <Box
      padding="24px"
      border={`1px solid ${COLORS.natural[100]}`}
      borderRadius="14px"
      width="258px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgcolor={COLORS.surface.white}
    >
      <Stack gap="6px">
        <Typography variant="bodySmallLight">{title}</Typography>

        <Typography variant="heading2">{value}</Typography>

        <Typography variant="bodySmallLight" >
          {change}
        </Typography>
      </Stack>

      <Box
        sx={{
          bgcolor: COLORS.primary.light,
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          flexShrink: 0,
          alignSelf:'start'
        }}
      >
        <Box component="img" src={icon} alt={title} />
      </Box>
    </Box>
  );
};

export default AnalyticsCard;
