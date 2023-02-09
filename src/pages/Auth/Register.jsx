import AuthPage from "./AuthPage";
import RegisterForm from "features/auth/components/RegisterForm";

export default function Register() {
  return (
    <AuthPage
      title="Register"
      smUpContent="Already have an account?"
      smUpRouteText="Login"
      smUpRoute="/login"
      mdUpContent="Sign up to receive many attractive gifts"
      contentTitle=" Get started."
      // contentSub="Free forever. No credit card needed."
    >
      <RegisterForm />
    </AuthPage>
  );
}
