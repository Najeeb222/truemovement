import { Box, Typography } from "@mui/material";
import { COLORS } from "@src/constant";
import { CustomSelect, CustomTextField } from "@src/shared/components";
import { FormProvider, useForm } from "react-hook-form";

const RailSetup = () => {
  const methods = useForm();
  return (
    <Box
      sx={{
        border: `1px solid ${COLORS.natural[100]}`,
        borderRadius: "10px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        background: COLORS.surface.white,
      }}
    >
      <Typography variant="bodyMeduiemLight" color={COLORS.text.primary}>
        RailSetup
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <FormProvider {...methods}>
          <CustomTextField
            type="text"
            name="railName"
            placeholder="Rail Name"
            label="Title *"
          />
          <CustomSelect
            name="Organization"
            options={[]}
            label="Organization *"
          />
        </FormProvider>
      </Box>
    </Box>
  );
};

export default RailSetup;
