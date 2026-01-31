import { Checkbox, FormControlLabel } from "@mui/material";
import { COLORS } from "@src/constant";
import { Controller, useFormContext, type RegisterOptions } from "react-hook-form";

interface CustomCheckboxProps {
    name: string;
    value?: string;
    label?: string;
    rules?: RegisterOptions;
    disabled?: boolean;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
    name,
    value,
    label,
    rules,
    disabled = false,
}) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={field.value === value}
                            onChange={() => field.onChange(value)}
                            disabled={disabled}
                            sx={{
                                padding: 0,
                                width: 20,
                                height: 20,
                                color: COLORS.text.primary,
                                "&.Mui-checked": {
                                    color: COLORS.surface.black,
                                },
                            }}
                        />
                    }
                    label={label}
                    sx={{ margin: 0 }}
                />
            )}
        />
    );
};

export default CustomCheckbox;
