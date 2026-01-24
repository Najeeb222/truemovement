import { WestOutlined } from "@mui/icons-material"
import { Box, Stack, Typography } from "@mui/material"
import { COLORS, ROUTES } from "@src/constant"
import { CustomButton } from "@src/shared/components"

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from "react-router";
const EmailVerification = () => {
    const navigate = useNavigate()
    return (
        <Stack sx={{ alignItems: 'center', gap: '32px' }} >
            <Stack sx={{ alignItems: 'center', gap: '16px' }}>


                <Stack sx={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: COLORS.natural.darkBlack,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box component={'img'} src="/assets/icons/msgIcon.svg" sx={{
                        width: '32px',
                        height: '32px'
                    }} />
                </Stack>
                <Typography variant="bodyMeduiemLight" sx={{ color: COLORS.natural.black }}>
                    Check Your Email
                </Typography>
                <Typography variant="bodyMeduiemLight">
                    We've sent a password reset link to
                </Typography>
                <Typography variant="bodyMedium">
                    admin@truemovement.com
                </Typography>



            </Stack>
            <Stack gap={'24px'}>
                <Box onClick={() => navigate(ROUTES.setPassword)} sx={{ borderRadius: '10px', border: `1px solid ${COLORS.natural[100]}`, height: '46px', backgroundColor: COLORS.gray.bg, display: 'flex', alignItems: 'center', padding: '15px', gap: '12px' }}>
                    <AccessTimeIcon sx={{ fontSize: '16px', color: COLORS.text.secondary }} />
                    <Typography variant="bodySmallLight" sx={{ color: COLORS.text.secondary }}>
                        This link will expire in 1 hour for security purposes
                    </Typography>
                </Box>

                <Typography variant="bodySmallLight">
                    Didn't receive the email? Check your spam folder or
                </Typography>
                <CustomButton variant="outlined" background={COLORS.primary.main} textColor={COLORS.text.primary} title="Resend Reset Link" active={true} fullWidth
                />
                <CustomButton
                    startIcon={<WestOutlined />}
                    title="Back to Sign In"
                    fullWidth
                    active={true}
                    background={'transparent'}
                    textColor={COLORS.text.primary}
                    variant='contained'


                />
            </Stack>
        </Stack >
    )
}

export default EmailVerification
