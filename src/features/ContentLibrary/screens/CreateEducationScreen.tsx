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
import { Box, Stack, Container } from "@mui/material";
import { COLORS } from "@src/constant";

const CreateEducationScreen = () => {
  const methods = useForm();
  return (
    <AppLayout disablePadding>
      <FormProvider {...methods}>
        <ContentLibraryCustomHeader
          backTitle="Educational"
          title="Upload New Education"
          subtitle="Add new educational content to the library"
        />

        <Container
          maxWidth={"lg"}
          component={Stack}
          spacing={{ xs: 2, sm: 2, md: 4 }}
          sx={{ px: { xs: 2, sm: 3, md: 4 } }}
          disableGutters
        >
          <CustomBasicInformation />
          <CustomUpload
            name="educationThumbnail"
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
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              mt: 2,
            }}
          >
            <CustomButton
              title="Cancel"
              variant="outlined"
              active
              background="transparent"
              width={{ xs: "100%", sm: "auto" }}
            />
            <Stack
              direction={{ xs: "column", sm: "row" }}
              sx={{ gap: "16px", width: { xs: "100%", sm: "auto" } }}
            >
              <CustomButton
                title={"Save as Draft"}
                variant="outlined"
                background={COLORS.primary.main}
                active
                width={{ xs: "100%", sm: "auto" }}
              />
              <CustomButton
                title="Publish"
                variant="contained"
                width={{ xs: "100%", sm: "auto" }}
              />
            </Stack>
          </Box>
        </Container>
      </FormProvider>
    </AppLayout>
  );
};

export default CreateEducationScreen;
