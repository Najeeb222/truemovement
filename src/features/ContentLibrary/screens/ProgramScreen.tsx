import { Add } from "@mui/icons-material"
import {  Stack } from "@mui/material"
import { columns, rows } from "@src/constant"
import { CustomButton, CustomPageHeader, CustomTextField, DynamicTable } from "@src/shared/components"
import AppLayout from "@src/shared/components/AppLayout/AppLayout"
import type { ProgramRow } from "@src/types"
import { FormProvider, useForm } from "react-hook-form"


const ProgramScreen = () => {
  const methods=useForm()
  return (
    <AppLayout>
      <FormProvider {...methods}>

      <CustomPageHeader
        title="Programs"
        subtitle="Manage and create sessions"
      >
        <CustomButton
          title="Upload Session"
          startIcon={<Add />}
          variant="contained"
          active={true}
        />
      </CustomPageHeader>
      <Stack gap={'24px'} sx={{ p: { xs: 2, sm: 3, md: 4 },}} >

 
      <CustomTextField placeholder="Search by title" type="text" name="search" />
      <DynamicTable<ProgramRow> columns={columns} data={rows} />
             </Stack>
        </FormProvider>
    </AppLayout>
  )
}

export default ProgramScreen
