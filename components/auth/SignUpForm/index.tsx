import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import Icon from "@/components/global/Icon";
import Checkbox from "@/components/global/Checkbox";

const SignUpForm = () => {
  return (
    <section className="w-full mx-auto">
      <div className="mb-14">
        <h1 className="text-[28px] leading-[39.2px] font-semibold text-dark mb-2">
          Create account
        </h1>

        <p className="text-sm text-secondary font-normal">
          For business, band, or celebrity.
        </p>
      </div>

      <form>
        <div className="grid gap-8 md:grid-cols-2 mb-4">
          <div>
            <Input name="first_name" label="First name" type="text" required />
          </div>
          <div>
            <Input name="last_name" label="Last name" type="text" required />
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 mb-4">
          <div>
            <Input
              name="email_or_phone_number"
              label="Email or Phone number"
              type="text"
              required
            />
          </div>
          <div>
            <Input
              name="date_of_birth"
              label="Date of birth (MM/DD/YY)"
              type="date"
              required
            />
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Input name="password" label="Password" type="password" required />
          </div>
          <div>
            <Input
              name="confirmPassword"
              label="Confirm password"
              type="password"
              required
            />
          </div>
        </div>
        <div className="space-y-3 my-8">
          <div className="flex items-center justify-between">
            <Checkbox
              label="Remember me"
              checked={true}
            />
            <a
              href="/"
              className="text-sm text-blueStroke font-normal hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <Checkbox
            label={
              <span>
                I agree to all the{" "}
                <a className="text-blueStroke hover:underline" href="/">Terms</a> and{" "}
                <a className="text-blueStroke hover:underline" href="/">Privacy policy</a>
              </span>
            }
            checked={true}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
          <Button type="submit">Create account</Button>
          <Button
            theme="secondary"
            icon={<Icon.GoogleIcon />}
            className="mt-4 md:mt-0"
          >
            Sign in with Google
          </Button>
        </div>
        <p className="text-sm text-secondary font-normal text-center mt-6">
          Don’t have an account?
          <a href="/" className="text-blueStroke ml-1 hover:underline">
            Log In
          </a>
        </p>
      </form>
    </section>
  );
};

export default SignUpForm;
