import { Box, Stack, Typography } from '@mui/material'
import { ArrowLeftIcon, COLORS } from '@src/constant';
import { useNavigate } from 'react-router';

type ContentLibraryCustomHeaderProps = {
    backTitle?: string;
    title: string;
    subtitle: string;
    children?: React.ReactNode;
}

const ContentLibraryCustomHeader = ({ subtitle, title, children, backTitle }: ContentLibraryCustomHeaderProps) => {
    const navigate = useNavigate()
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: COLORS.surface.white,
            px: { xs: 2, sm: 3, md: 4 },
            py:2,
            borderBottom: `1px solid ${COLORS.natural[100]}`
        }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                }}
            >
                <Box
                    onClick={() => navigate(-1)}
                    sx={{
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px'
                    }}
                >
                    <ArrowLeftIcon />
                    <Typography
                        variant='bodySmall'
                        color={COLORS.text.primary}
                    >
                        Back to    {backTitle}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        bgcolor: COLORS.natural[100],
                        width: '1px ',
                        height: '24px'
                    }}
                />



                <Stack direction="column" >


                    <Typography variant="heading5" color={COLORS.text.primary} >
                        {title}
                    </Typography>
                    <Typography variant="bodySmallLight" color="textSecondary" sx={{ marginTop: 0 }}>
                        {subtitle}
                    </Typography>
                </Stack>
            </Box>
            <Box>
                {children}
            </Box>

        </Box >
    )
}

export default ContentLibraryCustomHeader
