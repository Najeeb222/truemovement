import {
  Dialog,
  DialogTitle,
  DialogContent,
  // DialogActions,
  IconButton,
  Typography,
  // Box,
  Stack,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { COLORS } from "@src/constant";
// import { CustomButton } from "@src/shared/components";

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;

  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

const CustomModal = ({
  open,
  onClose,
  title,
  subtitle,
  children,
  //   primaryAction,
  //   secondaryAction,
  maxWidth = "sm",
}: CustomModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={maxWidth}
      PaperProps={{
        sx: {
          borderRadius: "10px",
          padding: "24px",
        },
      }}
    >
      <DialogTitle
        sx={{
          m: 0,
          //   p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Stack gap={"8px"} direction={"column"}>
          <Typography variant="heading2">{title}</Typography>
          {subtitle && (
            <Typography variant="bodySmallLight" color={COLORS.text.secondary}>
              {subtitle}
            </Typography>
          )}
        </Stack>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: COLORS.text.secondary,
            mt: -3,
            mr: -1,
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: 2, mt:'16px' }}>{children}</DialogContent>
    </Dialog>
  );
};

export default CustomModal;
