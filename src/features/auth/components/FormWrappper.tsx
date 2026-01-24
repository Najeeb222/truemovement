import { Box } from '@mui/material'
import { COLORS } from '@src/constant'
import React from 'react'

const FormWrappper = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{
            // // width: 448;
            // // height: 434;
            // // angle: 0 deg;
            // // opacity: 1;
            // padding-bottom: 36px;
            // gap: 24px;
            // border-radius: 14px;
            // border-width: 1px;

            width: '448px',
            py: '36px',
            px: '24px',
            gap: '24px',
            borderRadius: '14px',
            borderWidth: '1px',
            border: `1px solid ${COLORS.natural[100]}`
        }}>
            {children}
        </Box >
    )
}

export default FormWrappper
