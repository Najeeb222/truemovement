import { Add } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { COLORS } from "@src/constant";

const RailCard = () => {
  return (
    <Box
      sx={{
        padding: { sm: "16px", xs: "10px" },
        borderRadius: "10px",
        border: `1px solid ${COLORS.natural[100]}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: COLORS.surface.white,
      }}
    >
      <Stack
        direction={"row"}
        gap={"12px"}
        sx={{
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px",
            height: "64px",
            background: COLORS.natural[100],
            borderRadius: "4px",
          }}
        >
          <Box component={"img"} src="/assets/icons/ImageIcon.svg" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="labal">Shoulder Stability</Typography>
          <Typography variant="labal" color={COLORS.text.secondaryGray}>
            Strength • 25 min
          </Typography>
        </Box>
      </Stack>
      <Add sx={{ color: COLORS.gray.main }} />
    </Box>
  );
};

export default RailCard;
