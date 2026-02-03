import { Add } from "@mui/icons-material";
import { useState } from "react";
import {
  ContentLibraryCustomHeader,
  CustomButton,
  CustomTextField,
} from "@src/shared/components";
import AppLayout from "@src/shared/components/AppLayout/AppLayout";

import RailCard from "../components/RailCard";
import {
  Box,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import RailSetup from "../components/RailSetup";
import { COLORS } from "@src/constant";

const CreateRailsCurationScreen = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabList = ["Sessions", "Programs", "Educational"];

  const handleTabChange = (_: any, newValue: number) => {
    setActiveTab(newValue);
  };
  return (
    <AppLayout>
      <ContentLibraryCustomHeader
        backTitle="Rails"
        subtitle="Build a curated carousel for the mobile app home screen"
        title="Create Rail"
      >
        <CustomButton
          title="Publish Rail"
          startIcon={<Add />}
          width={"290px"}
        />
      </ContentLibraryCustomHeader>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <RailSetup />
          <Stack
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              border: `1px solid ${COLORS.natural[100]}`,
              borderRadius: "14px",
              padding: "16px",
              background: COLORS.surface.white,
              maxHeight: "100vh",
              overflowY: "auto",
            }}
          >
            <Typography variant="bodyMeduiemLight" color={COLORS.text.primary}>
              Organization Library
            </Typography>

            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              scrollButtons="auto"
              sx={{ width: "100%", mx: "auto" }}
            >
              {tabList.map((label, index) => (
                <Tab
                  sx={{ flex: 1, minWidth: "auto" }}
                  key={index}
                  label={label}
                />
              ))}
            </Tabs>

            <CustomButton
              variant="contained"
              startIcon={<Add />}
              title={`Add ${tabList[activeTab]} to Organization`}
              width={"100%"}
              active
            />
            <CustomTextField
              type="text"
              isSearch
              name="search"
              placeholder="Search"
            />
            <RailCard />
            <RailCard />
            <RailCard />
            <RailCard />
            <RailCard />
            <RailCard />
            <RailCard />
            <RailCard />
            <RailCard />
            <RailCard />
            <RailCard />
            <RailCard />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <Stack
            sx={{
              // mt: 2,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              border: `1px solid ${COLORS.natural[100]}`,
              borderRadius: "14px",
              padding: "16px",
              background: COLORS.surface.white,
              maxHeight: "100vh",
              overflowY: "auto",
            }}
          >
            <Box sx={{ display: "flex", gap: "4px", flexDirection: "column" }}>
              <Typography
                variant="bodyMeduiemLight"
                color={COLORS.text.primary}
              >
                Content Library
              </Typography>
              <Typography variant="bodySmallLight" color={COLORS.text.primary}>
                Click to add sessions to your rail
              </Typography>
            </Box>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              scrollButtons="auto"
              sx={{ width: "100%", mx: "auto" }}
            >
              {tabList.map((label, index) => (
                <Tab
                  sx={{ flex: 1, minWidth: "auto" }}
                  key={index}
                  label={label}
                />
              ))}
            </Tabs>

            <CustomTextField
              type="text"
              isSearch
              name="search"
              placeholder="Search"
            />
            <RailCard />
            <RailCard />
            <RailCard />
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 4 }} height={"100%"}>
          <Stack
            sx={{
              // mt: 2,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              border: `1px solid ${COLORS.natural[100]}`,
              borderRadius: "14px",

              background: COLORS.surface.white,
              // maxHeight: "100vh",
              height: "100%",
              overflowY: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "4px",
                flexDirection: "column",
                padding: 2,
                borderBottom: `1px solid ${COLORS.natural[100]}`,
              }}
            >
              <Typography
                variant="bodyMeduiemLight"
                color={COLORS.text.primary}
              >
                Your Rail
              </Typography>
              <Typography variant="bodySmallLight" color={COLORS.text.primary}>
                0 items • Drag to reorder
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 2,
                height: "auto",
                flex: 1,
                padding: "16px",
              }}
            >
              <Box
                sx={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  bgcolor: COLORS.primary.light,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Add sx={{ color: COLORS.primary.main, fontSize: "32px" }} />
              </Box>
              <Typography variant="bodyMedium">No content added yet</Typography>
              <Typography variant="bodySmallLight">
                Click items from the library to add
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default CreateRailsCurationScreen;
