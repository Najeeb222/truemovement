import { useState } from "react";
import {
  Controller,
  useFormContext,
  type RegisterOptions,
} from "react-hook-form";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Typography,
  Stack,
  Paper,
  ClickAwayListener,
} from "@mui/material";
import { COLORS } from "@src/constant";
import { FONTS } from "@src/styles/theme";

interface SelectOption {
  value: string | number;
  label: string;
}

interface CustomSelectProps {
  name: string;
  label?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: string | number;
  rules?: RegisterOptions;
  showHelperText?: boolean;
  options: SelectOption[];
  onChange?: (value: string | number) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  rules,
  label,
  width,
  height = "44px",
  disabled,
  placeholder = "Select",
  defaultValue,
  showHelperText = true,
  options,
  onChange,
}) => {
  const methods = useFormContext();
  const control = methods ? methods.control : undefined;
  const [open, setOpen] = useState(false);

  // Error UI
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
            fontWeight: 300,
            fontSize: "12px",
            color: COLORS.error.main,
          }}
        >
          {errorMessage}
        </Typography>
      </Stack>
    );
  };

  const renderSelect = (field?: any, fieldState?: any) => {
    const value = field?.value ?? defaultValue ?? "";
    const selected = options.find((o) => o.value === value);

    return (
      <>
        {/* WRAPPER */}
        <Box sx={{ position: "relative" }}>
          {/* SELECT FIELD */}
          <Box
            onClick={() => !disabled && setOpen((p) => !p)}
            sx={{
              height,
              border: `1px solid ${COLORS.surface.borderBlack}`,
              borderRadius: "4px",
              px: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              background: COLORS.surface.LightFieldNav,
              boxShadow: "0px 2px 4px -2px #0000001A",
            }}
          >
            <Typography
              variant="bodySmallLight"
              sx={{ color: COLORS.text.primary, padding: "6px 8px" }}
            >
              {selected?.label || placeholder}
            </Typography>

            <KeyboardArrowDownIcon />
          </Box>

          {/* DROPDOWN */}
          {open && (
            <ClickAwayListener onClickAway={() => setOpen(false)}>
              <Paper
                sx={{
                  position: "absolute",
                  top: "calc(100% + 4px)",
                  left: 0,
                  width: "100%",
                  zIndex: 1300,
                  border: `1px solid ${COLORS.surface.borderBlack}`,
                  borderRadius: "6px",
                  boxShadow: `0px 4px 6px -1px ${COLORS.surface.borderBlack}}`,
                  background: COLORS.surface.white,
                  overflow: "hidden",
                }}
              >
                {options.map((option) => {
                  const isSelected = option.value === value;

                  return (
                    <Box
                      key={option.value}
                      onClick={() => {
                        field?.onChange?.(option.value);
                        onChange?.(option.value);
                        setOpen(false);
                      }}
                      sx={{
                        p: "6px 8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        "&:hover": { background: COLORS.natural[100] },
                      }}
                    >
                      <Typography
                        variant="bodySmallLight"
                        color={COLORS.text.primary}
                      >
                        {option.label}
                      </Typography>

                      {isSelected && (
                        <CheckIcon
                          sx={{ color: COLORS.natural.blackMain, fontSize: 18 }}
                        />
                      )}
                    </Box>
                  );
                })}
              </Paper>
            </ClickAwayListener>
          )}
        </Box>

        {renderHelperText(fieldState?.error?.message?.toString())}
      </>
    );
  };

  return (
    <Stack width={{ md: width, sm: width, xs: "100%" }} gap={1}>
      {label && <Typography variant="bodyMedium">{label}</Typography>}

      {control ? (
        <Controller
          name={name}
          defaultValue={defaultValue || ""}
          control={control}
          rules={rules}
          render={({ field, fieldState }) => renderSelect(field, fieldState)}
        />
      ) : (
        renderSelect()
      )}
    </Stack>
  );
};

export default CustomSelect;
