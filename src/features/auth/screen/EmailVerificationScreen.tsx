import { AuthLayout } from '@src/shared/components'
import FormWrappper from '../components/FormWrappper'

import EmailVerification from '../components/EmailVerification'

const EmailVerificationScreen = () => {
    return (
        <AuthLayout>
            <FormWrappper>

                <EmailVerification />
            </FormWrappper>
        </AuthLayout>
    )
}

export default EmailVerificationScreen
