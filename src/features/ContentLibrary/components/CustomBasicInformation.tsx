import { Box, Stack, Typography } from "@mui/material"
import { COLORS } from "@src/constant"
import { CustomTextField } from "@src/shared/components"


const CustomBasicInformation = () => {
    return (
        <Stack sx={{
            border: `1px solid ${COLORS.natural[100]}`,
            background:COLORS.surface.white,
            borderRadius:'14px',
            padding:{xs:2,sm:3,},
            gap:'24px'

        }}>
      <Typography variant="bodyMeduiemLight" color={COLORS.text.primary}>
        Basic Information
      </Typography>

      <Box sx={{display:'flex',flexDirection:'column',gap:'16px'}}>
        <CustomTextField name="title" label="Title" placeholder="Enter title" type="text" />
        <CustomTextField name="description" label="Description" placeholder="Enter description" type="text" />
      </Box>



        </Stack>
    )
}

export default CustomBasicInformation
