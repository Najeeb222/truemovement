import { Box, Grid } from "@mui/material";
import { COLORS } from "@src/constant";
import type React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid container>
      <Grid size={{ md: 6, sm: 6, xs: 12 }} sx={{ position: "relative" }}>
        <Box
          component={"img"}
          src="assets/images/authPic.svg"
          alt="auth"
          sx={{
            height: "100vh",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            background: COLORS.gradients.mainGradient,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          component={"div"}
        />
        <Box
          component={"img"}
          src="assets/images/logo.svg"
          alt="logo"
          sx={{

            position: "absolute",
            // top: "50%",
            bottom: "8%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: '400px',
            height: '129px'
          }}
        />
      </Grid>
      <Grid
        size={{ md: 6, sm: 6, xs: 12 }}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
