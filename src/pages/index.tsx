import React from "react";
import ellipse from "@/public/assets/images/Ellipse.png";
import phoneImage from "@/public/assets/images/phones.png";
import SignUpForm from "@/components/auth/SignUpForm";
import Icon from "@/components/global/Icon";
import Carousel from "@/components/auth/Carousel";

export default function Home() {
  const phoneImages = [
    { src: phoneImage.src, alt: "Phone 1" },
    { src: phoneImage.src, alt: "Phone 2" },
    { src: phoneImage.src, alt: "Phone 3" },
  ];

  return (
    <div className="h-screen bg-white flex flex-col md:flex-row">
      <div className="hidden md:flex w-2/5 blue-gradient p-20 flex-col items-center relative">
        <h1 className="text-2xl md:text-4xl leading-[42px] font-semibold text-center text-white mb-10">
          Social media shared today, tomorrow or by location
        </h1>
        <div className="relative p-10">
          <img src={ellipse.src} alt="Background" className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Carousel images={phoneImages} />
          </div>
        </div>
      </div>
      <div className="flex-1 p-8 md:p-20">
        <div className="max-w-4xl mx-auto flex-col items-center justify-center">
          <Icon.CapzullLogoIcon className="mb-14" />
          <div className="w-full">
            <SignUpForm />
          </div>
          <div className="hidden md:flex items-center space-x-3 mt-24">
            <Icon.GooglePlayIcon />
            <Icon.AppStoreIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
