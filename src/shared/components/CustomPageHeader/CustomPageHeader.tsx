import { Box, Stack, Typography } from "@mui/material";

type CustomPageHeaderProps = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

const CustomPageHeader = ({
  subtitle,
  title,
  children,
}: CustomPageHeaderProps) => {
  return (
    <Box
      sx={{
        // bgcolor: "red",
        // margin: "200px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: { xs: "start", sm: "center" },

        py: 2,
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Stack
        direction="column"
        spacing={"8px"}
        sx={{ flex: { xs: "1 1 100%", sm: "1" } }}
      >
        <Typography variant="heading2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="bodyMeduiemLight" color="textSecondary">
          {subtitle}
        </Typography>
      </Stack>
      <Box
        sx={{
          width: { xs: "100%", sm: "auto" },
          display: "flex",
          justifyContent: { xs: "start", sm: "end" },
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CustomPageHeader;
