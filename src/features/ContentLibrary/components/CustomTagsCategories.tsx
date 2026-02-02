import { Box, Stack, Typography } from "@mui/material";
import { CloseCircleIcon, COLORS, DotGridIcon } from "@src/constant";
import { CustomPill } from "@src/shared/components";
import { useFormContext, useWatch } from "react-hook-form";

const CustomTagsCategories = () => {
  const { control, setValue } = useFormContext();

  const sections = [
    {
      title: "Sport * (click to select, drag to reorder)",
      name: "sports",
      options: ["Baseball", "Hockey", "Basketball"],
    },
    {
      title: "Pain Point (click to select, drag to reorder)",
      name: "painPoints",
      options: ["Injury", "Fatigue"],
    },
    {
      title: "Props Needed (click to select, drag to reorder)",
      name: "propsNeeded",
      options: ["Ball", "Net"],
    },
    {
      title: "Duration *",
      name: "durations",
      options: ["20-25 mins", "10-15 Min", "10-25 Min"],
    },
  ];

  const toggleSelection = (fieldName: string, value: string) => {
    const current = control._formValues[fieldName] || [];
    const index = current.indexOf(value);
    let newValue;
    if (index > -1) {
      newValue = current.filter((v: string) => v !== value);
    } else {
      newValue = [...current, value];
    }
    setValue(fieldName, newValue);
  };

  return (
    <Stack
      sx={{
        border: `1px solid ${COLORS.natural[100]}`,
        background: COLORS.surface.white,
        borderRadius: "14px",
        padding: { xs: 2, sm: 3 },
        gap: "24px",
      }}
    >
      <Typography variant="bodyMeduiemLight" color={COLORS.text.primary}>
        Tags & Categories
      </Typography>

      {sections.map((section) => {
        const selectedValues = useWatch({ control, name: section.name }) || [];
        return (
          <Box
            key={section.name}
            sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <Typography variant="bodySmall" color={COLORS.text.primary}>
              {section.title}
            </Typography>

            <Stack gap="8px" direction="row" flexWrap="wrap">
              {section.options.map((option) => (
                <CustomPill
                  key={option}
                  label={option}
                  Icon={
                    selectedValues.includes(option) ? (
                      <DotGridIcon />
                    ) : undefined
                  }
                  endIcon={
                    selectedValues.includes(option) ? (
                      <CloseCircleIcon />
                    ) : undefined
                  }
                  selected={selectedValues.includes(option)}
                  borderRadius="25px"
                  onClick={() => toggleSelection(section.name, option)}
                />
              ))}
            </Stack>
          </Box>
        );
      })}
    </Stack>
  );
};

export default CustomTagsCategories;
