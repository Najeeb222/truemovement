import { AuthLayout } from '@src/shared/components'
import FormWrappper from '../components/FormWrappper'
import ResetPasswordForm from '../components/ResetPasswordForm'

const ResetPasswordScreen = () => {
    return (
        <AuthLayout>
            <FormWrappper>

                <ResetPasswordForm />
            </FormWrappper>
        </AuthLayout>
    )
}

export default ResetPasswordScreen
