import { Box, Stack, Typography } from '@mui/material'

type CustomPageHeaderProps = {
    title: string;
    subtitle: string;
    children?: React.ReactNode;
}

const CustomPageHeader = ({ subtitle, title, children }: CustomPageHeaderProps) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
            <Stack direction="column" spacing={"8px"}>


                <Typography variant="heading2" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="bodyMeduiemLight" color="textSecondary">
                    {subtitle}
                </Typography>
            </Stack>
            <Box>
                {children}
            </Box>

        </Box >
    )
}

export default CustomPageHeader
