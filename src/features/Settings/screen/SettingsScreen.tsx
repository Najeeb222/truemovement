import { CustomPageHeader } from "@src/shared/components"
import AppLayout from "@src/shared/components/AppLayout/AppLayout"
import AccountSecurity from "../components/AccountSecurity"


const SettingsScreen = () => {
    return (
        <AppLayout>
            <CustomPageHeader title="Settings" subtitle="Manage your account security and authentication" />
            <AccountSecurity />
        </AppLayout>
    )
}

export default SettingsScreen
