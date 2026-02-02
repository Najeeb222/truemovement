import { Add } from "@mui/icons-material";
import {
  ContentLibraryCustomHeader,
  CustomButton,
} from "@src/shared/components";
import AppLayout from "@src/shared/components/AppLayout/AppLayout";
import React from "react";

const CreateRailsCurationScreen = () => {
  return (
    <AppLayout>
      <ContentLibraryCustomHeader
        backTitle="Rails"
        subtitle="Build a curated carousel for the mobile app home screen"
        title="Create Rail"
      >
        <CustomButton title="Publish Rail" startIcon={<Add />} />
      </ContentLibraryCustomHeader>
    </AppLayout>
  );
};

export default CreateRailsCurationScreen;
