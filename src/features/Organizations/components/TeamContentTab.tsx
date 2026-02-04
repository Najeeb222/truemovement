import { Box, Stack, Typography } from "@mui/material";
import { COLORS, DashboardLogo, SessionsIcon } from "@src/constant";
import TeamCustomCard from "./TeamCustomCard";

const TeamContentTab = () => {
  return (
    <Stack spacing={3}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="bodyMeduiemLight"
          color={COLORS.text.primary}
          sx={{ fontSize: { xs: "16px", sm: "18px" } }}
        >
          Content Entitlements
        </Typography>
        <Typography
          variant="bodySmallLight"
          sx={{ fontSize: { xs: "12px", sm: "14px" } }}
        >
          Manage which content collections are available to organization
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 2, sm: 3, md: 6 },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box sx={cardStyle}>
          <Typography
            variant="bodySmall"
            sx={{ fontSize: { xs: "12px", sm: "14px" } }}
          >
            Team Collections
          </Typography>
          <Typography
            variant="heading2"
            sx={{ fontSize: { xs: "20px", sm: "24px" } }}
          >
            4
          </Typography>
        </Box>
        <Box sx={cardStyle}>
          <Typography
            variant="bodySmall"
            sx={{ fontSize: { xs: "12px", sm: "14px" } }}
          >
            Team Sessions
          </Typography>
          <Typography
            variant="heading2"
            sx={{ fontSize: { xs: "20px", sm: "24px" } }}
          >
            34
          </Typography>
        </Box>
      </Box>

      <TeamCustomCard
        title="Team Sessions"
        subTitle="Sessions created exclusively for this team"
        sessions={[
          {
            id: "1",
            title: "Custom Lower Back Protocol",
            status: "Active",
            icon: <SessionsIcon />,
          },
          {
            id: "2",
            title: "Post Rehab Session",
            status: "Inactive",
            icon: <SessionsIcon />,
          },
        ]}
        onCreate={() => console.log("Create session")}
        onDelete={(id) => console.log("Delete", id)}
      />
      <TeamCustomCard
        title="Team Programs"
        subTitle="Multi-session programs created exclusively for this team"
        sessions={[
          {
            id: "2",
            title: "Post Rehab Session",
            status: "Inactive",
            icon: "/assets/icons/folderIcon.svg",
          },
        ]}
        onCreate={() => console.log("Create session")}
        onDelete={(id) => console.log("Delete", id)}
      />
      <TeamCustomCard
        title="Team Rails"
        subTitle="Custom content carousels visible only to this team"
        sessions={[
          {
            id: "2",
            title: "Post Rehab Session",
            status: "Active",
            icon: <DashboardLogo />,
          },
        ]}
        onCreate={() => console.log("Create session")}
        onDelete={(id) => console.log("Delete", id)}
      />
    </Stack>
  );
};

export default TeamContentTab;

let cardStyle = {
  border: `1px solid ${COLORS.natural[100]}`,
  borderRadius: "10px",
  gap: "4px",
  padding: "17px",
  backgroundColor: COLORS.surface.white,
  width: "100%",
  flex: 1,
};
