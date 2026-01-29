import { Stack } from "@mui/material"
import { adminRole } from "@src/constant"
import { CustomSelect, CustomTextField } from "@src/shared/components"



const SearchAdmin = () => {
    return (
        <Stack sx={{ gap: '24px' }} direction={'row'}  >
            <CustomTextField isSearch={true} placeholder="Search by Organization name..." name="searchAdmin" type="text" width="100%" />
            <CustomSelect name="adminRole" options={adminRole} placeholder="All Roles" width="224px" />

        </Stack>
    )
}

export default SearchAdmin
