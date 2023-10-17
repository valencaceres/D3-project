import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div className="pt-32">
    <SignIn path="/sign-in" />
  </div>
)

export default SignInPage;