import { Box, Stack, Typography } from "@mui/material";
import { COLORS, publishingOptions } from "@src/constant";
import { CustomSelect, CustomTextField } from "@src/shared/components";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

const PublishingFields = () => {
    const { watch } = useFormContext();
    const status = watch("publish"); // watch the status field

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {status === "draft" && (
                <>
                    <Typography variant="bodySmallLight">
                        Draft contents are not visible to users. Publish when ready.
                    </Typography>
                </>
            )}

            {status === "scheduled" && (
                <>
                    <Typography variant="bodySmallLight">
                        Scheduled contents will be automatically published at the specified date and time.
                    </Typography>
                    <Box sx={{ display: "flex", gap: "16px" }}>
                        <CustomTextField
                            name="publishDate"
                            label="Publish Date"
                            placeholder=""
                            type="date"
                        />
                        <CustomTextField
                            name="publishTime"
                            label="Publish Time"
                            placeholder=""
                            type="time"
                        />
                    </Box>
                </>
            )}

            {status === "publish" && (
                <Typography variant="bodySmallLight">
                    This  contents will  Publish now .
                </Typography>
            )}
        </Box>
    );
};

const CustomPublishingOptions = () => {
    const methods = useForm({
        defaultValues: {
            publish: "",
            publishDate: "",
            publishTime: "",
        },
    });

    return (
        <FormProvider {...methods}>
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
                    Publishing Options
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <CustomSelect
                        name="publish"
                        options={publishingOptions}
                        label="Status *"
                    />

                    {/* Conditional fields based on status */}
                    <PublishingFields />
                </Box>
            </Stack>
        </FormProvider>
    );
};

export default CustomPublishingOptions;
