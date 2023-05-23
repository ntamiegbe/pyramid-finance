import ellipse from '@/public/assets/images/Ellipse.png'
import phoneImage from '@/public/assets/images/phones.png'
import SignUpForm from '@/components/auth/SignUpForm'
import Button from '@/components/global/Button'
import Icon from '@/components/global/Icon'

export default function Home() {
  return (
    <div className="h-screen bg-white flex">
      <div className="hidden md:flex w-2/5 blue-gradient p-20 flex-col items-center relative">
        <h1 className="text-[28px] leading-[42px] font-semibold text-center text-white mb-10">Social media shared today, tomorrow or by location</h1>
        <div className="relative p-5 m-7 flex-grow">
          <img src={ellipse.src} alt="Background" className="object-cover w-full h-full" />
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
      <div className="w-3/5 p-20">
          <Icon.CapzullLogoIcon />
          <SignUpForm />
          
      </div>
    </div>
  )
}
