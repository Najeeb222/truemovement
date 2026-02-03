import { FormProvider, useForm } from "react-hook-form";
import AppLayout from "@src/shared/components/AppLayout/AppLayout";
import AnalyticsCard from "../components/AnalyticsCard";
import {
  ContentLibraryCustomHeader,
  CustomPageHeader,
} from "@src/shared/components";
import { Box, Stack } from "@mui/material";
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
    // <div>
    <AppLayout disablePadding>
      <FormProvider {...methods}>
        {/* <CustomPageHeader title="Dashboard" subtitle="Welcome back. Here's what's happening with True Movement today." /> */}
        <ContentLibraryCustomHeader
          subtitle="Add a new video session to the content library"
          title="Upload New Session"
          backTitle="Content Library"
        />
        <Stack sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <Stack gap={"24px"}>
            {/* <CustomUpload
  name="thumbnail"
  label="Thumbnail"
  type="video"
/> */}
          </Stack>
          <Box display="flex" flexWrap="wrap" gap="16px">
            {cardData.map((item, index) => (
              <AnalyticsCard key={index} {...item} />
            ))}
          </Box>

          <Stack direction={"row"} gap={"24px"}>
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
          </Stack>
        </Stack>
      </FormProvider>
    </AppLayout>

    // </div>
  );
};

export default DashboardScreen;
