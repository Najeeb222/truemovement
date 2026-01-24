import { AuthLayout } from '@src/shared/components'
import FormWrappper from '../components/FormWrappper'
import SetPasswordForm from '../components/SetPasswordForm'


const SetPasswordScreen = () => {
    return (
        <AuthLayout>
            <FormWrappper>

                <SetPasswordForm />
            </FormWrappper>
        </AuthLayout>
    )
}

export default SetPasswordScreen
