import { ROUTES } from "@constant";
import { ResetPasswordContainer, SignInContainer } from "@src/features";
import EmailVerificationContainer from "@src/features/auth/containers/EmailVerificationContainer";
import SetPasswordContainer from "@src/features/auth/containers/SetPasswordContainer";

import { Route, Routes as RouterRoutes, } from "react-router";
// import {
//   AuthContainer,
//   ReportsContainer,
//   DashboardContainer,
//   CustomersContainer,
//   ProvidersContainer,
//   CreatePasswordContainer,
// } from "@features";

function Routes() {
  return (
    <RouterRoutes>
      {/* <Route path="/" element={<Navigate to={ROUTES.login} replace />} /> */}
      {/* <Route path={ROUTES.login} element={<AuthContainer />} /> */}
      {/* <Route
        path={ROUTES.resetPassword}
        element={<CreatePasswordContainer />}
      /> */}
      <Route path={"/"} element={<SignInContainer />} />
      <Route path={ROUTES.resetPassword} element={<ResetPasswordContainer />} />
      <Route path={ROUTES.emailVerification} element={<EmailVerificationContainer />} />
      <Route path={ROUTES.setPassword} element={<SetPasswordContainer />} />
      {/* <Route path={ROUTES.customers} element={<CustomersContainer />} /> */}
      {/* <Route path={ROUTES.providers} element={<ProvidersContainer />} /> */}
      {/* <Route path={ROUTES.reports} element={<ReportsContainer />} /> */}
      {/* 
          Consolidated verifyLogin and forgotPassword routes into AuthContainer.
          If we want to keep SEO friendly URLs or deep linking, we could use sub-routes 
          or pass the mode via URL params, but for now we're using internal state 
          as requested.
      */}
    </RouterRoutes>
  );
}

export default Routes;
