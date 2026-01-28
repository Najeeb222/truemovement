import { Box, Divider, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import { COLORS } from "@src/constant";
import { CustomButton, CustomTextField } from "@src/shared/components";
import { FormProvider, useForm } from "react-hook-form";

const AccountSecurity = () => {
  const methods = useForm();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm")); // mobile
  const isMd = useMediaQuery(theme.breakpoints.down("md")); // tablet

  return (
    <Box
      sx={{
        border: `1px solid ${COLORS.natural[100]}`,
        borderRadius: "14px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <FormProvider {...methods}>
        {/* Header */}
        <Box
          padding={{
            xs: "16px",
            sm: "20px",
            md: "24px",
          }}
          borderBottom={`1px solid ${COLORS.natural[100]}`}
        >
          <Typography variant={ "bodyMeduiemLight"} color={COLORS.text.primary}>
            Account Security
          </Typography>
        </Box>

        {/* Content */}
        <Stack
          gap={{
            xs: "16px",
            sm: "20px",
            md: "24px",
          }}
          padding={{
            xs: "16px",
            sm: "20px",
            md: "24px",
          }}
        >
          {/* Email Section */}
          <Stack gap={{ xs: "16px", sm: "20px", md: "24px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography variant={"bodySmall"} color={COLORS.text.primary}>
                Email Address
              </Typography>
              <Typography variant={"bodySmallLight"}>
                Your current sign-in email address
              </Typography>

              <Stack
                direction={isSm ? "column" : "row"}
                sx={{
                  gap: "12px",
                  maxWidth: "100%",
                  flexWrap: "wrap",
                }}
              >
                <CustomTextField
                  placeholder="current email"
                  type="email"
                  name="email"
                  width={isSm?"100%":'519px'}
                />
                <CustomButton
                  title="Edit Email"
                  background={COLORS.primary.main}
                  active={true}
                  variant="outlined"
                  width={isSm ? "100%" : "123px"}
                />
              </Stack>
            </Box>
          </Stack>

          <Divider orientation="horizontal" />

          {/* Password Section */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Typography variant={ "bodySmall"} color={COLORS.text.primary}>
                Password
              </Typography>
              <Typography variant={ "bodySmallLight"}>
                Update your password to keep your account secure
              </Typography>
            </Box>
            <CustomButton
              title="Reset Password"
              background={COLORS.primary.main}
              active={true}
              variant="outlined"
              width={isSm ? "100%" : "192px"}
            />
          </Box>

          <Divider orientation="horizontal" />

          {/* Sign Out Section */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Typography variant={ "bodySmall"} color={COLORS.text.primary}>
                Sign Out
              </Typography>
              <Typography variant={ "bodySmallLight"}>
                End your current session and return to login
              </Typography>
            </Box>
            <CustomButton
              title="Log out"
              background={COLORS.error.button}
              active={true}
              variant="outlined"
              width={isSm ? "100%" : "192px"}
            />
          </Box>
        </Stack>
      </FormProvider>
    </Box>
  );
};

export default AccountSecurity;
