import { lazy } from "react";
interface RouteConfig {
  path: string;
  element: React.ReactNode;
  exact?: boolean;
}

// Lazy-loaded components
const LoginPage = lazy(() => import("../pages/auth/login/LoginPage"));
const RegisterPage = lazy(() => import("../pages/auth/register/RegisterPage"));

const CompanyInfoPage = lazy(
  () => import("../pages/auth/companyInfo/CompanyInfoPage")
);

const EmailVerificationPage = lazy(
  () => import("../pages/auth/emailVerification/EmailVerificationPage")
);
const ResetPasswordPage = lazy(
  () => import("../pages/auth/resetPassword/ResetPasswordPage")
);
const SecurityAuthenticationPage = lazy(
  () =>
    import("../pages/auth/securityAuthentication/SecurityAuthenticationPage")
);

export const routes: RouteConfig[] = [
  { path: "/", element: <LoginPage />, exact: true },
  { path: "/auth/login", element: <LoginPage /> },
  { path: "/auth/register", element: <RegisterPage /> },
  { path: "/auth/email-verification", element: <EmailVerificationPage /> },
  { path: "/auth/reset-password", element: <ResetPasswordPage /> },
  {
    path: "/auth/security-authentication",
    element: <SecurityAuthenticationPage />,
  },
  { path: "/auth/company-info", element: <CompanyInfoPage /> },
];
