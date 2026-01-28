import { Add } from "@mui/icons-material"
import { Box, Stack } from "@mui/material"
import { columns, rows } from "@src/constant"
import { CustomButton, CustomPageHeader, CustomTextField, DynamicTable } from "@src/shared/components"
import AppLayout from "@src/shared/components/AppLayout/AppLayout"
import type { ProgramRow } from "@src/types"
import { FormProvider, useForm } from "react-hook-form"


const SessionScreen = () => {
  const methods=useForm()
  return (
    <AppLayout>
      <FormProvider {...methods}>

      <Stack gap={'24px'}>

 
      <CustomPageHeader
        title="Sessions"
        subtitle="Manage and create sessions"
      >
        <CustomButton
          title="Upload Session"
          startIcon={<Add />}
          variant="contained"
          active={true}
        />
      </CustomPageHeader>
      <CustomTextField placeholder="Search by title" type="text" name="search" />
      <DynamicTable<ProgramRow> columns={columns} data={rows} />
             </Stack>
        </FormProvider>
    </AppLayout>
  )
}

export default SessionScreen
