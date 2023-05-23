import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

// Define the props interface for the Input component
interface InputProps {
    label?: string; 
    type: string; 
    placeholder?: string; 
    name: string; 
    required?: boolean; 
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, name, required }) => {
    const [showPassword, setShowPassword] = useState(false); 

    const isPasswordType = type === "password"; 

    // Event handler for toggling password visibility
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    // Determine the input type based on whether it's a password and if it should be shown
    const inputType = isPasswordType && showPassword ? "text" : type;

    return (
        <div>
            {label && <label htmlFor={name} className="text-sm text-secondary font-normal">{label}</label>}
            <div className="relative">
                <input
                    type={inputType}
                    placeholder={placeholder}
                    name={name}
                    id={name}
                    required={required}
                    className="w-full px-4 h-14 mt-2 border border-stroke rounded-[5px] focus:outline-none focus:ring-[1px] focus:ring-blueStroke focus:border-none"
                />
                {isPasswordType && (
                    <button
                        type="button"
                        onClick={handleTogglePassword}
                        className="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-500 cursor-pointer"
                    >
                        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Input;
