import React, { useState, useCallback } from "react";
import {
  Controller,
  useFormContext,
  type RegisterOptions,
} from "react-hook-form";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import {
  TextField,
  Typography,
  InputAdornment,
  Stack,
} from "@mui/material";
import { COLORS } from "@src/constant";
import { FONTS } from "@src/styles/theme";

interface CustomTextFieldProps {
  name: string;
  label?: string;
  type: string;
  width?: string;
  height?: string;
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
  readOnly?: boolean;
  maxLength?: number;
  disabled?: boolean;
  placeholder: string;
  description?: string;
  autoComplete?: string;
  defaultValue?: string;
  rules?: RegisterOptions;
  showHelperText?: boolean;
  isSearch?: boolean;
  allowOnly?: "numeric" | "alphabetic" | "alphanumeric" | "decimal";
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onFocus?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  endAdornment?: React.ReactNode;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  name,
  type,
  rules,
  label,
  width,
  height,
  onBlur,
  minRows,
  maxRows,
  onFocus,
  disabled,
  multiline = false,
  maxLength,
  allowOnly,
  placeholder,
  defaultValue,
  autoComplete,
  readOnly = false,
  showHelperText = true,
  isSearch = false,
  endAdornment,
  ...props
}) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      const patterns = {
        numeric: /[^0-9]/g,
        decimal: /[^0-9.]/g,
        alphabetic: /[^a-zA-Z]/g,
        alphanumeric: /[^a-zA-Z0-9]/g,
      };

      if (allowOnly && patterns[allowOnly]) {
        e.target.value = value.replace(patterns[allowOnly], "");
      }

      if (maxLength && e.target.value.length > maxLength) {
        e.target.value = e.target.value.slice(0, maxLength);
      }
    },
    [allowOnly, maxLength],
  );

  const renderLabel = () => (
    <Typography variant="bodyMedium">{label}</Typography>
  );

  const renderHelperText = (errorMessage?: string) => {
    if (!showHelperText || !errorMessage) return null;

    return (
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <HighlightOffOutlinedIcon
          sx={{ color: COLORS.error.main, width: 12, height: 12 }}
        />
        <Typography
          sx={{
            fontFamily: FONTS.lexendDeca,
            fontSize: "12px",
            letterSpacing: ".6px",
            color: COLORS.error.main,
          }}
        >
          {errorMessage}
        </Typography>
      </Stack>
    );
  };

  return (
    <Stack width={{ xs: "100%", sm: width, md: width }} gap={1}>
      {label && renderLabel()}

      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => (
          <>
            <TextField
              {...field}
              {...props}
              fullWidth
              disabled={disabled}
              placeholder={placeholder}
              multiline={multiline}
              minRows={minRows}
              maxRows={maxRows}
              type={showPassword ? "text" : type}
              error={!!fieldState.error}
              inputProps={{
                maxLength,
                onInput: handleInputChange,
              }}
              InputProps={{
                readOnly,
                autoComplete,
                startAdornment: isSearch ? (
                  <InputAdornment position="start">
                    <img
                      src="/assets/icons/searchIcon.svg"
                      alt="search"
                      style={{ width: 24, height: 24, marginLeft: 8 }}
                    />
                  </InputAdornment>
                ) : undefined,
                endAdornment: endAdornment || <div />,
              }}
              sx={{
                "& .MuiInputBase-root": {
                  height: multiline ? "auto" : height || "48px",
                  borderRadius: "8px",
                  padding:0
                },

                "& .MuiInputBase-input": {
                  padding: multiline ? "8px 14px" : "0 14px",
                },

                "& .MuiInputBase-inputMultiline": {
                  padding:  "8px 14px",
                },
              }}
              onBlur={(event) => {
                field.onBlur();
                onBlur?.(event);
              }}
              onFocus={onFocus}
            />

            {renderHelperText(fieldState.error?.message)}
          </>
        )}
      />
    </Stack>
  );
};

export default CustomTextField;
