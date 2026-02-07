import { FormProvider, useForm } from "react-hook-form";
import AppLayout from "@src/shared/components/AppLayout/AppLayout";
import AnalyticsCard from "../components/AnalyticsCard";
import { CustomPageHeader } from "@src/shared/components";
import { Container, Grid, Stack } from "@mui/material";
import {
  cardData,
  NewRailsIcon,
  ProgramsIcon,
  SessionsIcon,
} from "@src/constant";
import RecentUploadCard from "../components/RecentUploadCard";

const DashboardScreen = () => {
  const methods = useForm({
    defaultValues: {
      category: "",
    },
  });

  return (
    <AppLayout>
      <FormProvider {...methods}>
        <Container
          maxWidth={"lg"}
          component={Stack}
          spacing={{ xs: 2, sm: 2, md: 4 }}
          disableGutters
        >
          <CustomPageHeader
            title="Dashboard"
            subtitle="Welcome back. Here's what's happening with True Movement today."
          />

          <Grid container spacing={2}>
            {cardData.map((item, index) => (
              <Grid size={{ xs: 12, md: 4, lg: 3 }}>
                <AnalyticsCard key={index} {...item} />
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <RecentUploadCard
                headerIcon={<SessionsIcon />}
                headerTitle="Recently Uploaded Sessions"
                sessions={[
                  {
                    title: "Cardio Workout",
                    subtitle: "Fitness",
                    status: "published",
                  },
                  {
                    title: "Mindfulness",
                    subtitle: "Meditation",
                    status: "draft",
                  },
                ]}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              {" "}
              <RecentUploadCard
                headerIcon={<ProgramsIcon />}
                headerTitle="Recently Uploaded Programs"
                sessions={[
                  {
                    title: "Cardio Workout",
                    subtitle: "Fitness",
                    status: "published",
                  },
                  {
                    title: "Mindfulness",
                    subtitle: "Meditation",
                    status: "draft",
                  },
                  {
                    title: "Cardio Workout",
                    subtitle: "Fitness",
                    status: "published",
                  },
                  {
                    title: "Mindfulness",
                    subtitle: "Meditation",
                    status: "scheduled",
                  },
                ]}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <RecentUploadCard
                headerIcon={<NewRailsIcon />}
                headerTitle="New Rails"
                viewAll={true}
                sessions={[
                  {
                    title: "Cardio Workout",
                    subtitle: "Fitness",
                    status: "published",
                  },
                  {
                    title: "Mindfulness",
                    subtitle: "Meditation",
                    status: "draft",
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Container>
      </FormProvider>
    </AppLayout>
  );
};

export default DashboardScreen;
