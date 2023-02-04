import { FormButton } from "../components/FormButton.tsx";
import { Input } from "../components/Input.tsx";
import { Link } from "../components/Link.tsx";

type Props = {
  mode?: "In" | "Up";
  error?: string | null;
};

export default function AuthForm({ mode, error }: Props) {
  const signIn = {
    title: "Sign In",
    href: "/sign-in",
    text: "Have an account?",
  };

  const signUp = {
    title: "Create account",
    href: "/sign-up",
    text: "No account?",
  };

  const buttProps = mode == "In" ? signIn : signUp;
  const footProps = mode == "In" ? signUp : signIn;

  return (
    <div class="w-full h-full flex flex-col items-center justify-center">
      <form
        class="w-full max-w-xs bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4"
        method="POST"
      >
        <div class="w-full h-fitflex flex-col items-center justify-center space-y-4">
          <Input
            autofocus
            type="email"
            name="email"
          />
          <Input
            type="password"
            name="password"
          />
        </div>

        <div class="flex flex-col items-center justify-center space-y-4">
          <FormButton
            type="submit"
            formAction={"/api" + buttProps.href}
            class="!mt-8"
          >
            {buttProps.title}
          </FormButton>
          <div class="w-full text-center text-gray-500 text-xs">
            Forgot password?
          </div>
        </div>
      </form>
    </div>
  );
}
