import { Box, Typography } from "@mui/material"
import { CustomPageHeader } from "@src/shared/components"
import AppLayout from "@src/shared/components/AppLayout/AppLayout"
import AnalyticsOrganizationCard from "../components/AnalyticsOrganizationCard"


const AnalyticsScreen = () => {
    return (
        <AppLayout>
            <CustomPageHeader title="Analytics" subtitle="Track engagement, performance metrics, and accountability">
                <Typography variant="bodySmallLight">
                    Last updated: Nov 28, 2025 at 2:45 PM EST
                </Typography>
            </CustomPageHeader>

           <Box sx={{display:'flex',flexWrap:'wrap',gap:'16px',paddingX:{md:'24px',sm:'18px',xs:'12px'}}}>
             <AnalyticsOrganizationCard/>
            <AnalyticsOrganizationCard/>
            <AnalyticsOrganizationCard/>
           </Box>
        </AppLayout>
    )
}

export default AnalyticsScreen
