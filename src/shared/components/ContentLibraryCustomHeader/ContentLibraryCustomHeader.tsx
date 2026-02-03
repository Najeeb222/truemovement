import { Box, Stack, Typography } from "@mui/material";
import { ArrowLeftIcon, COLORS } from "@src/constant";
import { useNavigate } from "react-router";

type ContentLibraryCustomHeaderProps = {
  backTitle?: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

const ContentLibraryCustomHeader = ({
  subtitle,
  title,
  children,
  backTitle,
}: ContentLibraryCustomHeaderProps) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: COLORS.surface.white,
        px: { xs: 2, sm: 3, md: 4 },
        py: 2,
        borderBottom: `1px solid ${COLORS.natural[100]}`,
        flexWrap: "wrap",
        gap: 2,
        mt: { xs: 8, md: "0" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <Box
          onClick={() => navigate(-1)}
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <ArrowLeftIcon />
          <Typography variant="bodySmall" color={COLORS.text.primary}>
            Back to {backTitle}
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: COLORS.natural[100],
            width: "1px ",
            height: "24px",
          }}
        />

        <Stack direction="column">
          <Typography variant="heading5" color={COLORS.text.primary}>
            {title}
          </Typography>
          <Typography
            variant="bodySmallLight"
            color="textSecondary"
            sx={{ marginTop: 0 }}
          >
            {subtitle}
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          //   bgcolor: "red",
          width: { sm: "100%", lg: "auto" },
          //   mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ContentLibraryCustomHeader;
