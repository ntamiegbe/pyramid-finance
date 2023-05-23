  import ellipse from '@/public/assets/images/Ellipse.png'
  import phoneImage from '@/public/assets/images/phones.png'
  import GoogleIcon from "@/public/assets/images/Google.png"
  import CapzullLogoIcon from "@/public/assets/icons/CapzulLogo.svg"
  import SignUpForm from '@/components/auth/SignUpForm'
  import Button from '@/components/global/Button'

  export default function Home() {
    return (
      <div className="flex items-center justify-center h-screen bg-primaryBg">
        <div className="bg-white w-3/4">
          <div className="flex">
            <div className="hidden md:flex w-2/5 blue-gradient p-10 flex-col items-center relative">
              <h1 className="text-[28px] leading-[42px] font-semibold text-center text-white mb-10">Social media shared today, tomorrow or by location</h1>
              <div className="relative p-5 m-7">
                <img src={ellipse.src} alt="Background" className="object-cover w-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={phoneImage.src} alt="Background" className="object-contain max-h-full max-w-full" />
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <div className="w-3 h-3 bg-white rounded-full mx-1"></div>
                <div className="w-3 h-3 bg-white rounded-full mx-1"></div>
                <div className="w-3 h-3 bg-white rounded-full mx-1"></div>
              </div>
            </div>
            <div className="w-3/5 p-14">
              <img src={CapzullLogoIcon.src} alt="Capzull Logo" />
              <SignUpForm />
              <div className="flex items-center justify-between space-x-4">
                <Button>Create account</Button>
                <Button theme='secondary' icon={GoogleIcon.src}>Sign in with Google</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
