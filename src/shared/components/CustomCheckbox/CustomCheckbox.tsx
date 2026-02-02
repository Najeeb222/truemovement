import { Checkbox, FormControlLabel } from "@mui/material";
import { COLORS } from "@src/constant";
import {
  Controller,
  useFormContext,
  type RegisterOptions,
} from "react-hook-form";

interface CustomCheckboxProps {
  name: string;
  checked?: boolean;
  onChange?: (val: any) => void;
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
  checked,
  onChange,
  disabled = false,
}) => {
  const methods = useFormContext();
  const control = methods ? methods.control : undefined;

  const renderCheckbox = (field?: any) => (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked !== undefined ? checked : field?.value === value}
          onChange={(e) => {
            if (onChange) {
              onChange(e);
            } else {
              field?.onChange(value);
            }
          }}
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
  );

  return control ? (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => renderCheckbox(field)}
    />
  ) : (
    renderCheckbox()
  );
};

export default CustomCheckbox;
