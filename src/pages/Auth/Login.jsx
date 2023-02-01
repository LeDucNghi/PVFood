import AuthPage from "./AuthPage";
import LoginForm from "features/users/auth/components/LoginForm";

export default function Login() {
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
