import { Add } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { COLORS, DotGridIcon } from "@src/constant";
import { CustomPill, CustomTextField } from "@src/shared/components";

interface Step {
    id: number;
}

const CustomnstructionsAndSafety = () => {
    const [steps, setSteps] = useState<Step[]>([]); // start empty

    // Add a new step
    const handleAddStep = () => {
        setSteps((prev) => [...prev, { id: prev.length + 1 }]);
    };

    // Delete a step by id
    const handleDeleteStep = (id: number) => {
        setSteps((prev) => prev.filter((step) => step.id !== id));
    };

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
                Instructions & Safety
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Header */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="bodySmall" color={COLORS.text.primary}>
                        Steps
                    </Typography>

                    <CustomPill
                        label="Add Step"
                        Icon={<Add sx={{ color: COLORS.text.primary }} />}
                        onClick={handleAddStep}
                        color={COLORS.text.primary}
                    />
                </Box>

                {/* Render steps dynamically */}
                {steps.map((step, index) => (
                    <Box
                        key={step.id}
                        sx={{
                            background: COLORS.gray.bg,
                            border: `1px solid ${COLORS.natural[100]}`,
                            borderRadius: "10px",
                            padding: "12px",
                            display: "flex",
                            gap: "8px",
                            alignItems: "center",
                        }}
                    >
                        {/* <Box
              component="img"
              src="/assets/icons/DragIcon.svg"
              sx={{ width: 16, height: 16 }}
            /> */}
                        <DotGridIcon color={COLORS.natural[300]} />

                        <Box sx={{ display: "flex", gap: "8px", width: "100%" }}>
                            <Box
                                sx={{
                                    width: "32px",
                                    height: "36px",
                                    background: COLORS.gray.tabBg,
                                    borderRadius: "4px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Typography variant="bodySmallLight">{index + 1}</Typography>
                            </Box>

                            <Stack gap="8px" sx={{ width: "100%" }}>
                                <CustomTextField
                                    name={`steps.${index}.title`}
                                    placeholder="Title"
                                    type="text"
                                />

                                <CustomTextField
                                    name={`steps.${index}.description`}
                                    placeholder={`Enter step ${index + 1} instructions`}
                                    type="text"
                                />
                            </Stack>

                            {/* Trash icon for deleting */}
                            <Box
                                component="img"
                                src="/assets/icons/trashIcon.svg"
                                sx={{ width: 16, height: 16, cursor: "pointer" }}
                                onClick={() => handleDeleteStep(step.id)}
                            />
                        </Box>
                    </Box>
                ))}

                {/* Safety Notes */}
                <CustomTextField
                    name="safetyNotes"
                    label="Safety Notes"
                    placeholder="Enter any safety considerations"
                    type="text"
                    multiline
                    minRows={2}
                />
            </Box>
        </Stack>
    );
};

export default CustomnstructionsAndSafety;
