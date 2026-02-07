import { Container, Stack, Typography } from "@mui/material";
import { CustomPageHeader } from "@src/shared/components";
import AppLayout from "@src/shared/components/AppLayout/AppLayout";

import CoreMetricsCard from "../components/CoreMetricsCard";
import StreaksAndAccountability from "../components/StreaksAndAccountability";

const AnalyticsScreen = () => {
  return (
    <AppLayout>
      <Container
        maxWidth={"lg"}
        component={Stack}
        spacing={{ xs: 2, sm: 2, md: 4 }}
        disableGutters
      >
        <CustomPageHeader
          title="Analytics"
          subtitle="Track engagement, performance metrics, and accountability"
        >
          <Typography variant="bodySmallLight">
            Last updated: Nov 28, 2025 at 2:45 PM EST
          </Typography>
        </CustomPageHeader>
        <CoreMetricsCard />

        <StreaksAndAccountability />
      </Container>
    </AppLayout>
  );
};

export default AnalyticsScreen;
