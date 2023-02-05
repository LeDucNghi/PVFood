import AuthPage from "./AuthPage";
import LoginForm from "features/auth/components/LoginForm";
import { withErrorBoundary } from "react-error-boundary";

function Login() {
  return (
    <AuthPage
      title="Login"
      smUpContent="Don’t have an account?"
      smUpRouteText="Get started"
      smUpRoute="/register"
      mdUpContent="Hi, Welcome Back"
      contentTitle="Sign in to PV Food"
      contentSub="Enter your details below."
    >
      <LoginForm />
    </AuthPage>
  );
}

const Error = ({ error }) => {
  console.log("🚀 ~ file: Login.jsx:23 ~ Error ~ error", error);
  return <div>{error.message}</div>;
};

export default withErrorBoundary(Login, {
  FallbackComponent: Error,
});
