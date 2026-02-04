import { Box, Grid, Stack, Typography } from "@mui/material";
import { AlertIcon, ClipboardIcon, COLORS, ReloadIcon } from "@src/constant";
import {
  CustomButton,
  CustomModal,
  CustomTextField,
  StatusChip,
} from "@src/shared/components";
import { useState } from "react";

const AccessCode = () => {
  const [activeModal, setActiveModal] = useState<"replace" | "revoke" | null>(
    null,
  );

  const openModal = (type: "replace" | "revoke") => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  return (
    <Stack
      sx={{
        border: `1px solid ${COLORS.natural[100]}`,
        borderRadius: "14px",
        background: COLORS.surface.white,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          borderBottom: `1px solid ${COLORS.natural[100]}`,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography variant="bodyMeduiemLight" color={COLORS.text.primary}>
            Access Code
          </Typography>
          <StatusChip status="Active" />
        </Box>
        <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <CustomButton
            title="Replace"
            startIcon={<ReloadIcon />}
            variant="outlined"
            background={COLORS.primary.main}
            active
            width={"119px"}
            onClick={() => openModal("replace")}
          />
          <CustomButton
            title="Revoke"
            startIcon={<AlertIcon />}
            variant="outlined"
            background={COLORS.primary.main}
            active
            width={"119px"}
            onClick={() => openModal("revoke")}
          />
        </Box>
      </Box>

      {/* ... (rest of the component) */}
      <Box
        sx={{
          padding: "24px",
          display: "flex",
          gap: "24px",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography
            variant="labal"
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "14px",
            }}
          >
            Current Access Code
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Typography
              variant="bodyMedium"
              color={COLORS.surface.white}
              sx={{
                borderRadius: "10px",
                background: COLORS.secondary.main,
                padding: "12px",
                mt: "12px",
                flex: 1,
              }}
            >
              ACME-2025-FALL
            </Typography>
            <Box
              sx={{
                mt: "12px",
                width: "38px",
                height: "32px",
                border: `1px solid ${COLORS.natural[100]}`,
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ClipboardIcon />
            </Box>
          </Box>
        </Box>
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 6, sm: 3 }}
            sx={{ display: "flex", flexDirection: "column", gap: "4px" }}
          >
            <Typography variant="bodySmall">Active Users</Typography>
            <Typography variant="heading3"> 245</Typography>
          </Grid>
          <Grid
            size={{ xs: 6, sm: 3 }}
            sx={{ display: "flex", flexDirection: "column", gap: "4px" }}
          >
            <Typography variant="bodySmall">Expires</Typography>
            <Typography variant="bodyMediumLarge"> 2025-12-31</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* ================= MODALS ================= */}

      {/* Replace Modal */}
      <CustomModal
        open={activeModal === "replace"}
        onClose={closeModal}
        title="Replace Access Code"
        subtitle="Replace a access code for organization"
      >
        <Stack spacing={3}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Box sx={{ display: "flex", gap: "8px", flexDirection: "column" }}>
              <Typography variant="bodyMedium">Code to be Replaced</Typography>
              <Typography
                variant="bodySmall"
                sx={{ padding: "16px", color: COLORS.text.primary }}
              >
                ACME-2025-FALL
              </Typography>
            </Box>
            <CustomTextField
              name="newCodePrefix"
              type="text"
              placeholder="Enter new code prefix"
              label="New Code Prefix"
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
          </Stack>
        </Stack>
      </CustomModal>

      {/* Revoke Modal */}
      <CustomModal
        open={activeModal === "revoke"}
        onClose={closeModal}
        title="Revoke Access Code"
        subtitle="Are you sure you want to revoke this access code? New users will not be able to use this code."
      >
        <Stack direction="row" spacing={1} justifyContent="flex-end">
          <CustomButton
            title="Cancel"
            variant="outlined"
            onClick={closeModal}
            width="99px"
            active
          />
          <CustomButton
            title="Revoke Code"
            variant="contained"
            background={COLORS.primary.main}
            active
          />
        </Stack>
      </CustomModal>
    </Stack>
  );
};

export default AccessCode;
