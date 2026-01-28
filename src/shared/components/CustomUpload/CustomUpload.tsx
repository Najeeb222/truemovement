import React, { useRef, useState } from "react";
import { Controller, useFormContext, type RegisterOptions } from "react-hook-form";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography, Stack, IconButton, Fade } from "@mui/material";
import { COLORS, UploadIcon } from "@src/constant";
import { FONTS } from "@src/styles/theme";

type UploadType = "image" | "video";

interface CustomUploadProps {
  name: string;
  label?: string;
  width?: string;
  height?: string;
  rules?: RegisterOptions;
  showHelperText?: boolean;
  maxSizeMB?: number;
  type?: UploadType;
}

const IMAGE_TYPES = ["image/jpeg", "image/png"];
const VIDEO_TYPES = ["video/mp4", "video/quicktime", "video/x-msvideo"];

const CustomUpload: React.FC<CustomUploadProps> = ({
  name,
  label,
  width,
  height,
  rules,
  showHelperText = true,
  maxSizeMB = 20,
  type = "image",
}) => {
  const { control } = useFormContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const acceptedTypes = type === "image" ? IMAGE_TYPES : VIDEO_TYPES;

  const acceptAttr =
    type === "image"
      ? "image/jpeg,image/png"
      : "video/mp4,video/quicktime,video/x-msvideo";

  const renderHelperText = (errorMessage?: string) => {
    if (!showHelperText || !errorMessage) return null;

    return (
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <HighlightOffOutlinedIcon sx={{ color: COLORS.error.main, width: 12, height: 12 }} />
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

  const validateFile = (file: File) => {
    if (!acceptedTypes.includes(file.type)) {
      alert(
        type === "image"
          ? "Only JPEG or PNG images are allowed"
          : "Only MP4, MOV or AVI videos are allowed"
      );
      return false;
    }

    if ((file.size ?? 0) > maxSizeMB * 1024 * 1024) {
      alert(`File size must be less than ${maxSizeMB}MB`);
      return false;
    }

    return true;
  };

  return (
    <Stack
      width={{ md: width, sm: width, xs: "100%" }}
      sx={{
        border: `1px solid ${COLORS.natural[100]}`,
        gap: "30px",
        padding: "24px",
        borderRadius: "14px",
      }}
    >
      {label && (
        <Typography variant="bodyMeduiemLight" color={COLORS.text.primary}>
          {label}
        </Typography>
      )}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => {
          const file: File | null = field.value || null;

          const fileSizeMB =
            file && typeof file.size === "number"
              ? (file.size / 1024 / 1024).toFixed(2)
              : "0.00";

          return (
            <>
              {/* Hidden input */}
              <input
                ref={inputRef}
                type="file"
                hidden
                accept={acceptAttr}
                onChange={(e) => {
                  const selected = e.target.files?.[0];
                  if (!selected) return;
                  if (!validateFile(selected)) return;
                  field.onChange(selected);
                }}
              />

              <Box sx={{ position: "relative" }}>
                {/* ================= EMPTY STATE ================= */}
                <Fade in={!file} timeout={300} easing="ease-out" unmountOnExit>
                  <Box
                    onClick={() => inputRef.current?.click()}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragOver(false);

                      const dropped = e.dataTransfer.files?.[0];
                      if (!dropped) return;
                      if (!validateFile(dropped)) return;

                      field.onChange(dropped);
                    }}
                    sx={{
                      height,
                      border: `2px solid ${COLORS.gray.silverGray}`,
                      borderRadius: "6px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "12px",
                      cursor: "pointer",
                      transition: "all 300ms ease-out",
                      padding: "50px",
                      background: dragOver ? COLORS.gray.bg : "transparent",
                    }}
                  >
                    <Box
                      sx={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "50%",
                        background: COLORS.primary.light,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <UploadIcon />
                    </Box>

                    <Typography variant="bodyMedium">
                      Click to upload or drag and drop
                    </Typography>

                    <Typography variant="bodySmallLight">
                      {type === "image" ? "JPEG or PNG" : "MP4, MOV or AVI"}
                    </Typography>
                  </Box>
                </Fade>

                {/* ================= FILE STATE ================= */}
                <Fade in={!!file} timeout={300} easing="ease-out" unmountOnExit>
                  <Box
                    sx={{
                      p: 2,
                      border: `1px solid ${COLORS.surface.borderBlack}`,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: COLORS.gray.bg,
                      transition: "all 300ms ease-out",
                    }}
                  >
                    <Stack direction="row" gap="12px" alignItems="center">
                      <Box
                        sx={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "4px",
                          background: COLORS.primary.main,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <UploadIcon color={COLORS.surface.black} />
                      </Box>

                      <Stack direction="column">
                        <Typography variant="bodyMeduiemLight" color={COLORS.text.primary}>
                          {file?.name}
                        </Typography>
                        <Typography variant="bodySmallLight">
                          {fileSizeMB} MB
                        </Typography>
                      </Stack>
                    </Stack>

                    <IconButton
                      size="small"
                      sx={{ color: COLORS.surface.black }}
                      onClick={() => {
                        field.onChange(null);
                        if (inputRef.current) inputRef.current.value = "";
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Fade>
              </Box>

              {renderHelperText(fieldState.error?.message?.toString())}
            </>
          );
        }}
      />
    </Stack>
  );
};

export default CustomUpload;
