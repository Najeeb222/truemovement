import React, { useState, useCallback } from "react";
import {
  Controller,
  useFormContext,
  type RegisterOptions,
} from "react-hook-form";
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
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
  multiline?: any;
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
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
  ) => void;
  onFocus?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
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
  multiline,
  maxLength,
  allowOnly,
  description,
  placeholder,
  defaultValue,
  autoComplete,
  readOnly = false,
  showHelperText = true,
  isSearch = false,
  endAdornment,
  ...props
}) => {
  const { control, formState } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
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

  // Label
  const renderLabel = () => (
    <Typography variant="bodyMedium">
      {label}
    </Typography>
  );

  // Helper Text (Error Message)
  const renderHelperText = (errorMessage?: string) => {
    if (!showHelperText || !errorMessage) return null;

    return (
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <HighlightOffOutlinedIcon
          sx={{
            color: COLORS.error.main,
            width: 12,
            height: 12,
          }}
        />
        <Typography
          sx={{
            fontFamily: FONTS.lexendDeca,
            fontWeight: 300,
            fontStyle: "Light",
            letterSpacing: '.6px',
            fontSize: '12px',
            color: COLORS.error.main,
          }}
        >
          {errorMessage}
        </Typography>
      </Stack>
    );
  };

  // Main Component
  return (
    <Stack 
      width={{ md: width, sm: width, xs: "100%" }} 
      gap={1} // This provides 8px gap (theme spacing 1 = 8px)
    >
      {label && renderLabel()}
      
      <Controller
        name={name}
        defaultValue={defaultValue}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <TextField
              variant="outlined"
              disabled={disabled}
              {...field}
              placeholder={placeholder || ""}
              {...props}
              defaultValue={defaultValue || ""}
              fullWidth
              multiline={multiline}
              minRows={minRows}
              maxRows={maxRows}
              error={!!fieldState.error}
              sx={{
                "& .MuiInputBase-root": {
                  height: height || "inherit",
                  padding: 0,
                  border: 'none'
                },
              }}
              type={showPassword ? "text" : type}
              inputProps={{
                maxLength,
                onInput: handleInputChange,
              }}
              InputProps={{
                startAdornment: isSearch ? (
                  <InputAdornment position="start">
                    <img 
                      src="/assets/icons/searchIcon.svg" 
                      alt="search" 
                      style={{ width: 24, height: 24,
                        marginLeft: 8 
                        
                       }}
                    />
                  </InputAdornment>
                ) : undefined,
                endAdornment: endAdornment ? endAdornment : <div />,
                readOnly,
                autoComplete,
              }}
              onBlur={(event) => {
                field.onBlur();
                onBlur?.(event);
              }}
              onFocus={onFocus}
            />
            
            {/* Error message rendered separately with proper spacing */}
            {renderHelperText(fieldState.error?.message?.toString())}
          </>
        )}
      />
    </Stack>
  );
};

export default CustomTextField;