import { CustomPageHeader } from "@src/shared/components";
import AppLayout from "@src/shared/components/AppLayout/AppLayout";
import AccountSecurity from "../components/AccountSecurity";

import { Stack, Container } from "@mui/material";

const SettingsScreen = () => {
  return (
    <AppLayout>
      <Container
        maxWidth={"lg"}
        component={Stack}
        spacing={{ xs: 2, sm: 2, md: 4 }}
        disableGutters
      >
        <CustomPageHeader
          title="Settings"
          subtitle="Manage your account security and authentication"
        />
        <AccountSecurity />
      </Container>
    </AppLayout>
  );
};

export default SettingsScreen;
