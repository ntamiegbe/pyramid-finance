import React, { useState } from "react";

interface CheckboxProps {
    label?: React.ReactNode; 
    checked?: boolean; 
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className="flex items-center">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mr-2"
            />
            <span className="text-sm text-secondary font-normal">{label}</span>
        </label>
    );
};

export default Checkbox;
