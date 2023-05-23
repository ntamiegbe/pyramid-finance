import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface InputProps {
    label?: string;
    type: string;
    placeholder?: string;
    name: string;
    required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, name, required }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const isPasswordType = type === "password";

    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    name={name}
                    id={name}
                    required={required}
                    className="w-full px-4 py-2 border border-stroke rounded-[5px] focus:outline-none focus:ring-[1px] focus:ring-blueStroke focus:border-none"
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
