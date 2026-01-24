import { Box, Stack, Typography } from "@mui/material";
import { COLORS } from "@src/constant";
import { FONTS } from "@src/styles/theme";

const RuleItem = ({ label, valid }: { label: string; valid: boolean }) => {
    return (
        <Stack direction="row" alignItems="center" gap="8px">
            <Box component={'img'} src="/assets/icons/DoneIcon.svg" sx={{ width: '15px', height: '15px' }} />
            <Typography
                fontSize="13px"
                // color={valid ? "#000" : "#9CA3AF"}
                sx={{ color: valid ? COLORS.text.primary : COLORS.error.main, fontSize: '12px', fontFamily: FONTS.lexendDeca, fontWeight: '300' }}
            >
                {label}
            </Typography>
        </Stack>
    );
};

export default RuleItem;
