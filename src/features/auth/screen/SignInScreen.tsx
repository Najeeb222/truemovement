import { AuthLayout } from '@src/shared/components'

import SignInForm from '../components/SignInForm'
import FormWrappper from '../components/FormWrappper'

const SignInScreen = () => {
    return (
        <AuthLayout>
            <FormWrappper>

                <SignInForm />
            </FormWrappper>
        </AuthLayout>
    )
}

export default SignInScreen
