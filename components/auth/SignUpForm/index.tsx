import Button from "@/components/global/Button";
// import Checkbox from "@/components/global/Checkbox";
import Input from "@/components/global/Input";
import Icon from "@/components/global/Icon";
import Checkbox from "@/components/global/Checkbox";

const SignUpForm = () => {

  return (
    <section className='w-full mx-auto'>
      <div className='w-full space-y-6'>
        <h1 className='text-[28px] font-medium text-tc-title'>
          Let’s get started
        </h1>

        <p className='text-sm text-tc-secondary font-medium'>
          Or use your email to sign up:
        </p>

        <form
          onSubmit={() => { }}
          className='w-full space-y-5'>
          <div className='w-full xl:flex justify-between xl:space-x-5 max-xl:space-y-5'>
            <Input
              name='first_name'
              label='First name'
              placeholder='First name'
              type="text"
              required
            />
            <Input
              name='last_name'
              label='Last name'
              placeholder='Last name'
              type="text"
              required
            />
          </div>
          <div className="w-full xl:flex justify-between xl:space-x-5 max-xl:space-y-5">
            <Input
              name='phone_number'
              label='Email or Phone number'
              placeholder='Phone number'
              type='tel'
              required
            />
            <Input
              name='date_of_birth'
              label='Date of birth'
              placeholder='Date of birth'
              type='date'
              required
            />
          </div>
          <div className="w-full xl:flex justify-between xl:space-x-5 max-xl:space-y-5">
            <Input
              name='password'
              label='Password'
              placeholder='password'
              type='password'
              required
            />
            <Input
              name='confirmPassword'
              label='Confirm password'
              placeholder='password'
              type='password'
              required
            />
          </div>
          <div className='space-y-3'>
            <Checkbox
              label="I agree to the terms and conditions"
              checked={true}
              onChange={(checked) => console.log("Checkbox checked:", checked)}
            />
            <Checkbox
              label="I agree to the terms and conditions"
              checked={true}
              onChange={(checked) => console.log("Checkbox checked:", checked)}
            />
          </div>
          <div className="flex items-center justify-between space-x-4">
            <Button>Create account</Button>
            <Button theme='secondary' icon={<Icon.GoogleIcon />}>Sign in with Google</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpForm;
