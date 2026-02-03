import {
  ContentLibraryCustomHeader,
  CustomButton,
  CustomUpload,
} from "@src/shared/components";
import AppLayout from "@src/shared/components/AppLayout/AppLayout";
import CustomBasicInformation from "../components/CustomBasicInformation";
import { FormProvider, useForm } from "react-hook-form";
import CustomTagsCategories from "../components/CustomTagsCategories";
import CustomnstructionsAndSafety from "../components/CustomnstructionsAndSafety";
import CustomOrganizationAccess from "../components/CustomOrganizationAccess";
import CustomPublishingOptions from "../components/CustomPublishingOptions";
import { Box, Stack } from "@mui/material";
import { COLORS } from "@src/constant";

const CreateProgramScreen = () => {
  const methods = useForm();
  return (
    <AppLayout disablePadding>
      <FormProvider {...methods}>
        <ContentLibraryCustomHeader
          backTitle="Programs"
          title="Upload New Program"
          subtitle="Add a new program to the content library"
        />

        <Stack sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <CustomBasicInformation />
          <CustomUpload
            name="programThumbnail"
            type="image"
            label="Thumbnail Image"
          />
          <CustomUpload name="VideoFile" type="video" label="Video File" />
          <CustomTagsCategories />
          <CustomnstructionsAndSafety />
          <CustomOrganizationAccess />
          <CustomPublishingOptions />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CustomButton
              title="Cancel"
              variant="outlined"
              active
              background="transparent"
            />
            <Stack direction={"row"} sx={{ gap: "16px" }}>
              <CustomButton
                title={"Save as Draft"}
                variant="outlined"
                background={COLORS.primary.main}
                active
              />
              <CustomButton title="Publish" variant="contained" />
            </Stack>
          </Box>
        </Stack>
      </FormProvider>
    </AppLayout>
  );
};

export default CreateProgramScreen;
