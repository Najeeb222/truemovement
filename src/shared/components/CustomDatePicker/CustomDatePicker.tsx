import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { Stack, Typography, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import dayjs, { Dayjs } from "dayjs";
import { COLORS } from "@src/constant";
import { FONTS } from "@src/styles/theme";

interface CustomDatePickerProps {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  showHelperText?: boolean;
  value?: string | Dayjs | null;
  onChange?: (date: string | null) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  name,
  label,
  placeholder = "mm/dd/yyyy",
  disabled,
  minDate,
  maxDate,
  showHelperText = true,
  value,
  onChange,
}) => {
  const methods = useFormContext();
  const control = methods ? methods.control : undefined;
  const [internalValue, setInternalValue] = React.useState<Dayjs | null>(null);

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

  const renderDatePicker = (field?: any, fieldState?: any) => {
    // Determine the value to display: prioritize prop > form field > internal state
    let resolvedValue: Dayjs | null = null;
    if (value !== undefined) {
      resolvedValue = value ? dayjs(value) : null;
    } else if (field?.value !== undefined) {
      resolvedValue = field.value ? dayjs(field.value) : null;
    } else {
      resolvedValue = internalValue;
    }

    return (
      <>
        <DatePicker
          {...field}
          value={resolvedValue}
          onChange={(date: Dayjs | null) => {
            const isoDate = date ? date.toISOString() : null;

            // If not controlled by form, update internal state
            if (!control && value === undefined) {
              setInternalValue(date);
            }

            field?.onChange?.(isoDate);
            onChange?.(isoDate);
          }}
          disabled={disabled}
          minDate={minDate}
          maxDate={maxDate}
          enableAccessibleFieldDOMStructure={false}
          slots={{
            textField: TextField,
          }}
          slotProps={{
            textField: {
              placeholder,
              error: !!fieldState?.error,
              sx: {
                ...calendarStyles,
                "& .MuiInputBase-root": {
                  padding: 0,
                  height: "48px",
                  borderRadius: "8px",
                  flexDirection: "row-reverse",
                  "& .MuiInputAdornment-root": {
                    // marginRight: "8px",
                    marginLeft: "0",
                  },
                },
              },
            },
          }}
        />

        {renderHelperText(fieldState?.error?.message)}
      </>
    );
  };

  return (
    <Stack gap={1} width="100%">
      {label && <Typography variant="bodyMedium">{label}</Typography>}

      {control ? (
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState }) =>
            renderDatePicker(field, fieldState)
          }
        />
      ) : (
        renderDatePicker()
      )}
    </Stack>
  );
};

export default CustomDatePicker;

// const calendarStyles = {
//   /**
//    * Month & Year label (e.g. "September 2026")
//    */
//   "& .MuiPickersCalendarHeader-label": {
//     fontFamily: FONTS.lexendDeca,

//     fontWeight: 400,

//     fontSize: 14,

//     color: COLORS.text.secondary,
//   },

//   /**
//    * Weekday labels (S M T W T F S)
//    */
//   "& .MuiDayCalendar-weekDayLabel": {
//     color: COLORS.text.tertiary,
//     fontWeight: 500,
//     fontFamily: FONTS.lexendDeca,
//     fontSize: "12px",
//     textAlign: "center",
//   },

//   /**
//    * Default day cell (all dates)
//    */
//   "& .MuiPickersDay-root": {
//     fontFamily: FONTS.lexendDeca,
//     width: "32px",
//     height: "32px",
//     borderRadius: "50%",
//     border: "none",
//     "&:hover": {
//       backgroundColor: COLORS.surface.borderBlack,
//     },
//   },

//   /**
//    * Selected day
//    */
//   "& .MuiPickersDay-root.Mui-selected": {
//     backgroundColor: "red",
//     "&:hover": {
//       backgroundColor: COLORS.secondary.dark,
//     },
//   },

//   /**
//    * Today (when NOT selected)
//    */
//   "& .MuiPickersDay-root.MuiPickersDay-today": {
//     backgroundColor: COLORS.secondary.main,
//     color: COLORS.surface.white,
//     width: "32px",
//     height: "32px",
//     borderRadius: "50%",
//     border: "none",
//     "&:hover": {
//       backgroundColor: COLORS.secondary.dark,
//     },
//   },

//   /**
//    * Fallback hover style
//    */
//   "& .MuiPickersDay-root:hover": {
//     backgroundColor: COLORS.primary.light,
//   },
// };

const calendarStyles = {
  /**
   * Month & Year label (e.g. "September 2026")
   */
  "& .MuiPickersCalendarHeader-label": {
    fontFamily: FONTS.lexendDeca,
    fontWeight: 400,
    fontSize: 14,
    color: COLORS.text.secondary,
  },

  /**
   * Weekday labels (S M T W T F S)
   */
  "& .MuiDayCalendar-weekDayLabel": {
    color: COLORS.text.tertiary,
    fontWeight: 500,
    fontFamily: FONTS.lexendDeca,
    fontSize: "12px",
    textAlign: "center",
  },

  /**
   * Default day cell
   */
  "& .MuiPickersDay-root": {
    fontFamily: FONTS.lexendDeca,
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    border: "none",
    color: COLORS.text.primary,
  },

  /**
   * ✅ Day hover (CUSTOMIZED)
   */
  "& .MuiPickersDay-root:hover": {
    backgroundColor: "transparent",
    color: COLORS.surface.black,
    border: "1px solid black",
  },

  /**
   * Selected day
   */
  "& .MuiPickersDay-root.Mui-selected": {
    backgroundColor: COLORS.secondary.main,
    color: COLORS.surface.white,
    "&:hover": {
      backgroundColor: COLORS.secondary.main,
    },
  },

  /**
   * Today (when NOT selected)
   */
  "& .MuiPickersDay-root.MuiPickersDay-today": {
    backgroundColor: COLORS.secondary.main,
    color: COLORS.surface.white,
    "&:hover": {
      backgroundColor: COLORS.secondary.main,
    },
  },

  /**
   * =========================
   * YEAR PICKER STYLES
   * =========================
   */

  "& .MuiPickersYear-yearButton": {
    fontFamily: FONTS.lexendDeca,
    borderRadius: "8px",
    color: COLORS.text.primary,
  },

  /* Year hover */
  "& .MuiPickersYear-yearButton:hover": {
    backgroundColor: COLORS.secondary.light,
    color: COLORS.surface.white,
  },
  "& .MuiPickersYear-yearButton.Mui-selected": {
    backgroundColor: `${COLORS.secondary.main} !important`,
    color: `${COLORS.surface.white} !important`,
    "&:hover": {
      backgroundColor: `${COLORS.secondary.dark} !important`,
    },
  },
  "& .MuiYearCalendar-root .MuiPickersYear-yearButton.Mui-selected": {
    backgroundColor: `${COLORS.secondary.main}`,
    color: `${COLORS.surface.white} !important`,
  },
};
