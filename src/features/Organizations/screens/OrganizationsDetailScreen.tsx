import { useState } from "react";
import {
  Box,
  ListItemText,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Typography,
  ListItemIcon,
  Stack,
  Container,
} from "@mui/material";
import { COLORS, SettingsIcon } from "@src/constant";
import {
  ContentLibraryCustomHeader,
  CustomButton,
  CustomModal,
  CustomTextField,
} from "@src/shared/components";
import AppLayout from "@src/shared/components/AppLayout/AppLayout";
import OrganizationInfoCard from "../components/OrganizationInfoCard";
import AccessCodesTab from "../components/AccessCodesTab";
import { MembersTab } from "../components/MembersTab";
import TeamContentTab from "../components/TeamContentTab";

const OrganizationsDetailScreen = () => {
  const [activeTab, setActiveTab] = useState("accessCodes");
  const [settingsAnchorEl, setSettingsAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const [activeModal, setActiveModal] = useState<
    "edit" | "archive" | "delete" | null
  >(null);

  const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const handleSettingsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setSettingsAnchorEl(null);
  };

  const openModal = (type: "edit" | "archive" | "delete") => {
    setActiveModal(type);
    handleSettingsClose();
  };

  const closeModal = () => setActiveModal(null);

  return (
    <AppLayout disablePadding>
      {/* Header */}
      <ContentLibraryCustomHeader
        title="Acme Corporation"
        subtitle="245 members"
        backTitle="Organizations"
      >
        <CustomButton
          variant="outlined"
          background={COLORS.primary.main}
          title="Settings"
          startIcon={<SettingsIcon />}
          active
          onClick={handleSettingsClick}
        />
      </ContentLibraryCustomHeader>

      <Menu
        anchorEl={settingsAnchorEl}
        open={Boolean(settingsAnchorEl)}
        onClose={handleSettingsClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        PaperProps={{
          sx: {
            borderRadius: "8px",
            minWidth: "180px",
            boxShadow: "0px 4px 6px -1px #0000001A",
          },
        }}
      >
        <MenuItem onClick={() => openModal("edit")}>
          <ListItemIcon>
            <Box
              component={"img"}
              src={"assets/icons/editIcon.svg"}
              sx={{
                width: "16px",
                height: "16px",
              }}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="bodySmallLight">Edit details</Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={() => openModal("archive")}>
          <ListItemIcon>
            <Box
              component={"img"}
              src={"assets/icons/folderIcon.svg"}
              sx={{
                width: "16px",
                height: "16px",
              }}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="bodySmallLight">
              Archive Organization
            </Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => openModal("delete")}
          sx={{ color: "error.main" }}
        >
          <ListItemIcon sx={{ color: "error.main" }}>
            <Box
              component={"img"}
              src={"assets/icons/trashIcon.svg"}
              sx={{
                width: "16px",
                height: "16px",
              }}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="bodySmallLight">
              Delete Organization
            </Typography>
          </ListItemText>
        </MenuItem>
      </Menu>

      <Container
        maxWidth={"lg"}
        component={Stack}
        spacing={{ xs: 2, sm: 2, md: 4 }}
      >
        <OrganizationInfoCard />

        {/* Tabs */}
        <Box sx={{}}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            sx={{ maxWidth: "420px" }}
          >
            <Tab
              value={"accessCodes"}
              sx={{ width: "140px" }}
              label="Access Codes"
            />
            <Tab value={"members"} label="Members" sx={{ width: "140px" }} />
            <Tab
              value={"teamContent"}
              label="Team Content"
              sx={{ width: "140px" }}
            />
          </Tabs>
        </Box>

        <Box sx={{ mt: 2 }}>
          {activeTab === "accessCodes" && <AccessCodesTab />}
          {activeTab === "members" && <MembersTab />}
          {activeTab === "teamContent" && <TeamContentTab />}
        </Box>
      </Container>

      {/* ================= MODALS ================= */}

      {/* Edit Modal */}
      <CustomModal
        open={activeModal === "edit"}
        onClose={closeModal}
        title="Edit Organization Details"
        subtitle="Update organization information and settings"
      >
        <Box sx={{ display: "flex", gap: "16px", flexDirection: "column" }}>
          <CustomTextField
            label="Organization Name"
            type="text"
            name="organizationName"
            placeholder="Enter organization name"
            defaultValue="Acme Corporation"
          />
          <CustomTextField
            label="Organization Type"
            type="text"
            name="organizationType"
            placeholder="School, club, studio, etc."
            defaultValue="Club"
          />
          <CustomTextField
            label="Primary Contact Name"
            type="text"
            name="primaryContactName"
            placeholder="Enter Name"
            defaultValue="John Smith"
          />
          <CustomTextField
            label="Primary Contact Email"
            type="email"
            name="primaryContactEmail"
            placeholder="Enter Email"
            defaultValue="john.smith@acmecorp.com"
          />

          <Stack
            direction="row"
            spacing={1}
            justifyContent="flex-end"
            sx={{ mt: 2 }}
          >
            <CustomButton
              title="Cancel"
              variant="outlined"
              onClick={closeModal}
              width="99px"
              active
            />
            <CustomButton title="Save Changes" variant="contained" active />
          </Stack>
        </Box>
      </CustomModal>

      {/* Archive Modal */}
      <CustomModal
        open={activeModal === "archive"}
        onClose={closeModal}
        title="Archive Organization"
        subtitle="Are you sure you want to organization this session? Users will not access to this organization anymore. You can publish it again anytime."
      >
        <Stack direction="row" spacing={1} justifyContent="flex-end">
          <CustomButton
            title="Cancel"
            variant="outlined"
            onClick={closeModal}
            width={"99px"}
            background={COLORS.primary.main}
            active
          />
          <CustomButton
            title="Archive Session"
            variant="contained"
            background={COLORS.primary.main}
            active
          />
        </Stack>
      </CustomModal>

      {/* Delete Modal */}
      <CustomModal
        open={activeModal === "delete"}
        onClose={closeModal}
        title="Delete Organization"
        subtitle="Are you sure you want to Delete this organization? Users and admin will not access to this organization anymore. ."
      >
        <Stack direction="row" spacing={1} justifyContent="flex-end">
          <CustomButton
            title="Cancel"
            variant="outlined"
            onClick={closeModal}
            width={"99px"}
            background={COLORS.error.button}
            active
          />
          <CustomButton
            title="Delete Permanently"
            variant="contained"
            background={COLORS.error.button}
            active
            textColor={COLORS.surface.white}
          />
        </Stack>
      </CustomModal>
    </AppLayout>
  );
};

export default OrganizationsDetailScreen;
