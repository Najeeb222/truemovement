import { WestOutlined } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material'
import { COLORS, ROUTES } from '@src/constant';
import { CustomButton, CustomTextField } from '@src/shared/components';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {  useNavigate } from 'react-router';

interface SignInFormData {
    email: string;

}
const ResetPasswordForm = () => {



    const navigate = useNavigate();
    const [isFormValid, setIsFormValid] = useState(false);

    const methods = useForm<SignInFormData>({
        defaultValues: {
            email: "",

        },
        mode: "onChange", // Validate on every change
    });

    const { watch, formState } = methods;
    const { isValid } = formState;

    // Watch all form fields
    const formValues = watch();

    // Check if form is valid and all required fields are filled
    useEffect(() => {
        const { email, } = formValues;
        const isFilled = email.trim() !== "";
        setIsFormValid(isFilled && isValid);
    }, [formValues, isValid]);

    const handleSubmit = (data: SignInFormData) => {
        console.log("Form submitted:", data);
        navigate(ROUTES.resetPassword);
    };
    // const navigate = useNavigate();
    // const methods = useForm()

    return (
        <div>
            <Stack direction={"column"} mb={'26px'}>
                
                <Typography variant="heading5">
                    Reset Password
                </Typography>
                <Typography variant="bodyMeduiemLight">
                    Enter your email address and we'll send you a link to reset your password                </Typography>
            </Stack>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleSubmit)}>
                    <Stack gap={'18px'}>
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



                        {/* <Stack gap={'8px'} direction={'row'} alignItems={"center"}>
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
                        </Stack> */}

                        <CustomButton
                            // type="submit"
                            title="Sign In"
                            width={'100%'}
                            active={isFormValid}

                            background={isFormValid ? COLORS.primary.main : undefined}
                            textColor={isFormValid ? COLORS.text.primary : undefined}
                            onClick={() => navigate(ROUTES.emailVerification)}
                        />
                        <CustomButton
                            startIcon={<WestOutlined />}
                            title="Back to Sign In"
                            fullWidth
                            active={true}
                            background={'transparent'}
                            textColor={COLORS.text.primary}
                            variant='contained'
                            width={'100%'}

                        />
                    </Stack>
                </form>
            </FormProvider>
        </div>
    )
}

export default ResetPasswordForm
