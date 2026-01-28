import { Checkbox, Stack, Typography } from "@mui/material";
import { COLORS, ROUTES } from "@src/constant";
import { CustomButton, CustomTextField } from "@src/shared/components";
import { FONT_WEIGHTS, FONTS } from "@src/styles/theme";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";

interface SignInFormData {
  email: string;
  password: string;
  remember: boolean;
}

const SignInForm = () => {
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);

  const methods = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
    mode: "onChange", // Validate on every change
  });

  const { watch, formState } = methods;
  const { isValid } = formState;

  // Watch all form fields
  const formValues = watch();

  // Check if form is valid and all required fields are filled
  useEffect(() => {
    const { email, password } = formValues;
    const isFilled = email.trim() !== "" && password.trim() !== "";
    setIsFormValid(isFilled && isValid);
  }, [formValues, isValid]);

  const handleSubmit = (data: SignInFormData) => {
    console.log("Form submitted:", data);
    navigate(ROUTES.resetPassword);
  };

  return (
    <div>
      <Stack direction={"column"} mb={'26px'}>
        <Typography variant="heading5">
          Sign In
        </Typography>
        <Typography variant="bodyMeduiemLight">
          Enter your credentials to access the admin portal
        </Typography>
      </Stack>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <Stack gap={'16px'}>
            <CustomTextField
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              // required
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
            // error={!!errors.email}
            // helperText={errors.email?.message}
            />

            <CustomTextField
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
            // required
            // rules={{
            //   required: "Password is required",
            //   minLength: {
            //     value: 6,
            //     message: "Password must be at least 6 characters",
            //   },
            // }}
            // error={!!errors.password}
            // helperText={errors.password?.message}
            />

            <Link
              to={ROUTES.resetPassword}
              style={{
                fontFamily: FONTS.lexendDeca,
                fontWeight: FONT_WEIGHTS.light,
                fontSize: "14px",
                color: COLORS.text.secondary,
                textDecoration: 'none',
                textAlign: 'end'
              }}
            >
              Forgot password?
            </Link>

            <Stack gap={'8px'} direction={'row'} alignItems={"center"}>
              <Checkbox
                {...methods.register("remember")}
                sx={{
                  color: isFormValid ? COLORS.primary.main : COLORS.natural[100],
                  '&.Mui-checked': {
                    color: isFormValid ? COLORS.primary.main : COLORS.natural[100],
                  },
                }}
              />
              <Typography variant="labal">
                Remember me for 30 days
              </Typography>
            </Stack>

            <CustomButton
              type="submit"
              title="Sign In"
              fullWidth
              active={isFormValid}
              background={isFormValid ? COLORS.primary.main : undefined}
              textColor={isFormValid ? COLORS.text.primary : undefined}
              width={'100%'}
            />
          </Stack>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignInForm;