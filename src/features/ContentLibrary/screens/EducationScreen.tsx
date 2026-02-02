import { Add } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { columns, rows } from "@src/constant";
import {
  CustomButton,
  CustomPageHeader,
  CustomTextField,
  DynamicTable,
} from "@src/shared/components";
import AppLayout from "@src/shared/components/AppLayout/AppLayout";
import type { ProgramRow } from "@src/types";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const EducationScreen = () => {
  const methods = useForm({
    defaultValues: {
      search: "",
    },
  });

  const navigate = useNavigate();

  const handleCreateEducation = () => {
    navigate("/create-education");
  };

  return (
    <AppLayout>
      <FormProvider {...methods}>
        <Stack gap={"24px"} sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <CustomPageHeader
            title="Educational"
            subtitle="Manage and create educational content"
          >
            <CustomButton
              title="Upload Education"
              startIcon={<Add />}
              variant="contained"
              active={true}
              onClick={handleCreateEducation}
            />
          </CustomPageHeader>

          <CustomTextField
            placeholder="Search by title"
            type="text"
            name="search"
          />

          <DynamicTable<ProgramRow> columns={columns} data={rows} />
        </Stack>
      </FormProvider>
    </AppLayout>
  );
};

export default EducationScreen;
