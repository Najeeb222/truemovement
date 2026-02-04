import { Add } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { COLORS } from "@src/constant";
import { CustomButton, CustomTextField } from "@src/shared/components";

export const MembersTab = () => {
  return (
    <Stack>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="bodyMeduiemLight" color={COLORS.text.primary}>
          {" "}
          Members
        </Typography>
        <Typography variant="bodySmallLight">
          Manage members of organization
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
        }}
      >
        <Box sx={cardStyle}>
          <Typography variant="bodySmall">Total Members</Typography>
          <Typography variant="heading2">4</Typography>
        </Box>
        <Box sx={cardStyle}>
          <Typography variant="bodySmall">Active Members</Typography>
          <Typography variant="heading2">34</Typography>
        </Box>
      </Box>

      <Box display={"flex"} gap={3}>
        <CustomTextField
          type="text"
          placeholder="Search members..."
          name="searchMembers..."
          isSearch
        />
        <CustomButton
          title="Add Member"
          startIcon={<Add />}
          width={"191px"}
          active
          background={COLORS.primary.main}
        />
      </Box>
    </Stack>
  );
};

let cardStyle = {
  border: `1px solid ${COLORS.natural[100]}`,
  borderRadius: "10px",
  gap: "4px",
  padding: "17px",
  backgroundColor: COLORS.surface.white,
  width: "100%",
  flex: 1,
};
