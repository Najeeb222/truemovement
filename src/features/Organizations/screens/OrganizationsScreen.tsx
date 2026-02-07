import { Add } from "@mui/icons-material";
import { OrganizationColumns, OrganizationRows } from "@src/constant";
import {
  CustomButton,
  CustomModal,
  CustomPageHeader,
  CustomPill,
  CustomTextField,
  DynamicTable,
} from "@src/shared/components";
import AppLayout from "@src/shared/components/AppLayout/AppLayout";
import type { OrganizationRow } from "@src/types";
import { useState } from "react";
import { Stack, Typography, Box, Container } from "@mui/material";
import { useNavigate } from "react-router";
import { ROUTES } from "@src/constant";

const OrganizationsScreen = () => {
  /* ================= STATE ================= */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  /* ================= MODAL HELPERS ================= */
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <AppLayout>
      <Container
        maxWidth={"lg"}
        component={Stack}
        spacing={{ xs: 2, sm: 2, md: 4 }}
        disableGutters
      >
        <CustomPageHeader
          title="Organizations"
          subtitle="Manage team organizations and their access"
        >
          <CustomButton
            title="Create Organization"
            startIcon={<Add />}
            variant="contained"
            active
            onClick={openModal}
          />
        </CustomPageHeader>

        <DynamicTable<OrganizationRow>
          columns={OrganizationColumns}
          data={OrganizationRows}
          onRowClick={() => navigate(ROUTES.organizationDetail)}
        />
      </Container>

      {/* ================= CREATE ORGANIZATION MODAL ================= */}

      <CustomModal
        open={isModalOpen}
        onClose={closeModal}
        title="Create New Organization"
        subtitle="Add a new organization to manage team access"
      >
        <Box sx={{ display: "flex", gap: "16px", flexDirection: "column" }}>
          <CustomTextField
            label="Organization Name"
            type="text"
            name="organizationName"
            placeholder="Enter organization name"
          />
          <CustomTextField
            label="Organization Type"
            type="text"
            name="organizationType"
            placeholder="School, club, studio, clubs, franchises etc."
          />
          <CustomTextField
            label="Primary Contact Name"
            type="text"
            name="primaryContactName"
            placeholder="Enter Name"
          />
          <CustomTextField
            label="Primary Contact Email"
            type="email"
            name="primaryContactEmail"
            placeholder="Enter Email"
          />
          <CustomTextField
            label="Notes (Optional)"
            type="text"
            name="notes"
            placeholder="Enter notes"
            minRows={7}
            multiline
            maxRows={7}
          />
          <Box sx={{ display: "flex", gap: "5px", flexDirection: "column" }}>
            <Typography variant="bodyMedium">Organization Tags</Typography>
            <Stack direction="row" gap="8px" flexWrap="wrap">
              <CustomPill label="Professional" />
              <CustomPill label="Professional" />
              <CustomPill label="Professional" />
              <CustomPill label="Professional" />
              <CustomPill label="Professional" />
              <CustomPill label="Professional" />
              <CustomPill label="Professional" />
              <CustomPill label="Add a tag" Icon={<Add />} />
            </Stack>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              justifyContent: "flex-end",
              mt: "16px",
            }}
          >
            <CustomButton
              title="Cancel"
              variant="outlined"
              onClick={closeModal}
              width="99px"
              active
            />
            <CustomButton
              title="Create Organization"
              variant="contained"
              active
            />
          </Box>
        </Box>
      </CustomModal>
    </AppLayout>
  );
};

export default OrganizationsScreen;
