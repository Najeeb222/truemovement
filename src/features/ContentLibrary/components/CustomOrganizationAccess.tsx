import { Box, Stack, Typography } from "@mui/material";
import { CloseCircleIcon, COLORS, SplitCircleIcon } from "@src/constant";
import { CustomCheckbox, CustomPill, CustomTextField } from "@src/shared/components";

const CustomOrganizationAccess = () => {
    return (
        <Stack
            sx={{
                border: `1px solid ${COLORS.natural[100]}`,
                background: COLORS.surface.white,
                borderRadius: "14px",
                padding: { xs: 2, sm: 3 },
                gap: "24px",
                width: "100%",
            }}
        >
            <Typography variant="bodyMeduiemLight" color={COLORS.text.primary}>
                Organization Access
            </Typography>

            <Stack spacing={1}>
                <Typography variant="bodySmall" color={COLORS.text.primary}>
                    Who can access this session? *
                </Typography>

                {/* Global Access */}
                <Box
                    sx={{
                        border: `2px solid ${COLORS.natural[100]}`,
                        borderRadius: "10px",
                        padding: { xs: 1.5, sm: 2, md: 2.5 },
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                    }}
                >
                    <CustomCheckbox name="" />
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <SplitCircleIcon width="16px" height="16px" />
                            <Typography variant="bodyMedium" color={COLORS.text.primary}>
                                Global Access
                            </Typography>
                        </Stack>
                        <Typography variant="bodySmallLight" color={COLORS.text.secondary}>
                            All users and organizations can access this session regardless of their organization
                        </Typography>
                    </Box>
                </Box>

                {/* Organizations with specific tags */}
                <Box
                    sx={{
                        border: `2px solid ${COLORS.natural[100]}`,
                        borderRadius: "10px",
                        padding: { xs: 1.5, sm: 2, md: 2.5 },
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                    }}
                >
                    <CustomCheckbox name="" />
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <Stack direction="column" spacing={'4px'}>
                            <Typography variant="bodyMedium" color={COLORS.text.primary}>
                                Organizations with specific tags
                            </Typography>
                            <Typography variant="bodySmallLight" color={COLORS.text.secondary}>
                                Grant access based on organization tags.
                            </Typography>
                        </Stack>
                        <Box sx={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
                            <Typography variant="bodySmallLight">
                                Select one or more tags. Any organization with these tags will have access.
                            </Typography>
                            <Stack gap={'12px'} direction={'row'}>
                                <CustomPill label="Hockey" selected={true} endIcon={<CloseCircleIcon />} />
                                <CustomPill label="Hockey" />
                                <CustomPill label="Hockey" selected={true} endIcon={<CloseCircleIcon />} />
                            </Stack>
                        </Box>
                    </Box>
                </Box>

                {/* All organizations */}
                <Box
                    sx={{
                        border: `2px solid ${COLORS.natural[100]}`,
                        borderRadius: "10px",
                        padding: { xs: 1.5, sm: 2, md: 2.5 },
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                    }}
                >
                    <CustomCheckbox name="" value="" />
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Typography variant="bodyMedium" color={COLORS.text.primary}>
                                All organizations
                            </Typography>
                        </Stack>
                        <Typography variant="bodySmallLight" color={COLORS.text.secondary}>
                            All organizations can access this content.
                        </Typography>
                    </Box>
                </Box>

                {/* Selected organizations only */}
                <Box
                    sx={{
                        border: `2px solid ${COLORS.natural[100]}`,
                        borderRadius: "10px",
                        padding: { xs: 1.5, sm: 2, md: 2.5 },
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.5,
                    }}
                >
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <CustomCheckbox name="" />
                        <Typography variant="bodyMedium" color={COLORS.text.primary}>
                            Selected organizations only
                        </Typography>
                    </Stack>

                    <Typography variant="bodySmallLight" color={COLORS.text.secondary}>
                        Manually choose which organizations can access this content.
                    </Typography>

                    {/* Search and organization list (always visible in UI-only version) */}
                    <Stack spacing={1} mt={1}>
                        <CustomTextField
                            name=""
                            placeholder="Search organizations"
                            type="text"
                            isSearch={true}
                        />

                        <Stack spacing={1}>
                            {["Organization A", "Organization B", "Organization C", "Organization D", "Organization E"].map((org) => (
                                <CustomCheckbox
                                    name=""
                                    key={org}
                                    label={org}
                                />
                            ))}
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    );
};

export default CustomOrganizationAccess;