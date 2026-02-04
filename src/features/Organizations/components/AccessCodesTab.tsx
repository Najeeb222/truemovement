import { Add } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { COLORS } from "@src/constant";
import {
  CustomButton,
  CustomModal,
  CustomPageHeader,
  CustomTextField,
} from "@src/shared/components";
import AccessCode from "./AccessCode";
import { useState } from "react";

const AccessCodesTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Stack sx={{ gap: "24px" }}>
      <CustomPageHeader
        title="Team Access Codes"
        subtitle="Generate and manage access codes for organization"
      >
        <CustomButton
          title="Create Access Code"
          variant="contained"
          active
          background={COLORS.primary.main}
          startIcon={<Add />}
          onClick={openModal}
        />
      </CustomPageHeader>
      <AccessCode />

      {/* Create Access Code Modal */}
      <CustomModal
        open={isModalOpen}
        onClose={closeModal}
        title="Generate New Access Code "
        subtitle="Create a new access code for organization"
      >
        <Stack spacing={"36px"}>
          <Box sx={{ display: "flex", gap: "16px", flexDirection: "column" }}>
            <CustomTextField
              label="Code Prefix"
              type="text"
              name="codePrefix"
              placeholder="ACME"
            />
            <CustomTextField
              label="Active User Limit"
              type="number"
              name="activeUserLimit"
              placeholder=" 100"
            />
            <CustomTextField
              label="Expiration Date (optional)"
              type="date"
              name="expirationDate"
              placeholder="12/01/2025"
            />
          </Box>

          <Stack direction="row" spacing={1} justifyContent="flex-end">
            <CustomButton
              title="Cancel"
              variant="outlined"
              onClick={closeModal}
              width="99px"
              active
            />
            <CustomButton title="Generate Code" variant="contained" active />
          </Stack>
        </Stack>
      </CustomModal>
    </Stack>
  );
};

export default AccessCodesTab;
