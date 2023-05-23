import React, { useState } from "react";
import Icon from "@/components/global/Icon";

// Define the props interface for the Carousel component
interface CarouselProps {
    images: { src: string; alt: string }[]; 
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    // Define state for the active image index
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleImageChange = (index: number) => {
        setActiveImageIndex(index); // Update the active image index when an image is clicked
    };

    return (
        <div className="relative p-5 m-7 flex-grow">
            {/* Display the currently active image */}
            <img src={images[activeImageIndex].src} alt={images[activeImageIndex].alt} className="object-contain max-h-full max-w-full p-16" />

            {/* Render the dot indicators for each image */}
            <div className="flex items-center justify-center space-x-3 mt-4 absolute bottom-5 left-0 right-0">
                {images.map((_, index) => (
                    <div key={index} onClick={() => handleImageChange(index)} className="cursor-pointer">
                        {index === activeImageIndex ? <Icon.ActiveSliderDotIcon /> : <Icon.SliderDotIcon />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
