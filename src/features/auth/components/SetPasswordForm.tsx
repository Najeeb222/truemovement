import { Stack, Typography } from "@mui/material";
import { WestOutlined } from "@mui/icons-material";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { COLORS, ROUTES } from "@src/constant";
import { CustomButton, CustomTextField } from "@src/shared/components";
import { useNavigate } from "react-router";
import RuleItem from "./RuleItem";

interface FormData {
  password: string;
  confirmPassword: string;
}

const SetPasswordForm = () => {
  const navigate = useNavigate();
  const methods = useForm<FormData>({
    mode: "onChange",
  });

  const {
    watch,
    formState: { isValid },
  } = methods;

  const password = watch("password") || "";

  // ✅ Password Rules
  const rules = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
  };

  const passedCount = Object.values(rules).filter(Boolean).length;
  const strengthPercent = (passedCount / 4) * 100;

  const allValid = Object.values(rules).every(Boolean) && isValid;

  const onSubmit = (data: FormData) => {
    console.log("Reset Password Data:", data);
    navigate(ROUTES.emailVerification);
  };

  return (
    <div>
      <Stack mb="26px">
        <Typography variant="heading5">Reset Password</Typography>
        <Typography variant="bodyMeduiemLight">
          Enter the new password
        </Typography>
      </Stack>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack gap="16px">

            {/* Password */}
            <CustomTextField
              name="password"
              label="Password"
              type="password"
              placeholder="Enter new password"
              rules={{
                required: "Password is required",
              }}
            />

            {/* Strength Progress Bar */}
            <Stack
              sx={{
                width: "398px",
                height: "6px",
                borderRadius: "10px",
                backgroundColor: "#E5E7EB",
                overflow: "hidden",
              }}
            >
              <Stack
                sx={{
                  height: "100%",
                  width: `${strengthPercent}%`,
                  transition: "all 0.3s ease",
                  borderRadius: "10px",
                  backgroundColor: COLORS.text.primary
                  // strengthPercent < 50
                  //   ? "#EF4444"
                  //   : strengthPercent < 75
                  //     ? "#F59E0B"
                  //     : "#22C55E",
                }}
              />
            </Stack>

            {/* Password Rules */}
            <Stack gap="6px" pl="4px">
              <RuleItem label="At least 8 characters" valid={rules.length} />
              <RuleItem label="One uppercase letter" valid={rules.upper} />
              <RuleItem label="One lowercase letter" valid={rules.lower} />
              <RuleItem label="One number" valid={rules.number} />
            </Stack>

            {/* Confirm Password */}
            <CustomTextField
              name="confirmPassword"
              label="Re-enter Password"
              type="password"
              placeholder="Re-enter password"
              rules={{
                required: "Confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              }}
            />

            {/* Submit */}
            <CustomButton
              title="Reset Password"
              fullWidth
              active={allValid}
              background={allValid ? COLORS.primary.main : undefined}
              textColor={allValid ? COLORS.text.primary : undefined}
              onClick={() => methods.handleSubmit(onSubmit)()}
            />

            {/* Back */}
            <CustomButton
              startIcon={<WestOutlined />}
              title="Back to Sign In"
              fullWidth
              active={true}
              background={"transparent"}
              textColor={COLORS.text.primary}
              variant="contained"
              onClick={() => navigate(ROUTES.resetPassword)}
            />

          </Stack>
        </form>
      </FormProvider>
    </div>
  );
};

export default SetPasswordForm;
