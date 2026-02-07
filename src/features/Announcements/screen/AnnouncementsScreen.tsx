import AppLayout from "@src/shared/components/AppLayout/AppLayout";
import AnnouncementsCard from "../components/AnnouncementsCard";
import { CustomPageHeader } from "@src/shared/components";
import { Container, Grid, Stack } from "@mui/material";
import { NotificationIcon, InfoIcon, GrowthIcon } from "@src/constant";

import { useState } from "react";

const AnnouncementsScreen = () => {
  const [enabledStates, setEnabledStates] = useState<boolean[]>([
    true,
    false,
    true,
  ]);

  const announcementsData = [
    {
      icon: <NotificationIcon />,
      title: "New Content Published",
      status: "active" as const,
      description: "Notify users when new sessions or programs are published",
    },
    {
      icon: <InfoIcon />,
      title: "Half-Finished Workout Reminder",
      status: "disable" as const,
      description:
        "Target users who started but did not complete a specific Session/Program",
    },
    {
      icon: <GrowthIcon />,
      title: "Streak Encouragement",
      status: "active" as const,
      description:
        "Nudge when a streak is at risk, or celebrate streak milestones",
    },
  ];

  const handleToggle = (index: number, enabled: boolean) => {
    const newStates = [...enabledStates];
    newStates[index] = enabled;
    setEnabledStates(newStates);
    console.log(`${announcementsData[index].title} toggled:`, enabled);
  };
  return (
    <AppLayout>
      <Container disableGutters maxWidth={"lg"}>
        <Stack gap={"24px"}>
          <CustomPageHeader
            title="Event-Triggered Notifications"
            subtitle="Configure app-store compliant push and in-app notifications triggered by user actions"
          />
          <Grid container spacing={"24px"}>
            {announcementsData.map((announcement, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
                <AnnouncementsCard
                  key={index}
                  icon={announcement.icon}
                  title={announcement.title}
                  status={announcement.status}
                  description={announcement.description}
                  isEnabled={enabledStates[index]}
                  onToggle={(enabled) => handleToggle(index, enabled)}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </AppLayout>
  );
};

export default AnnouncementsScreen;
