import React, { useState } from "react";

interface CheckboxProps {
    label?: React.ReactNode; 
    checked?: boolean; 
    onChange?: (checked: boolean) => void; 
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
    const [isChecked, setIsChecked] = useState(checked || false);

    const handleCheckboxChange = () => {
        const newChecked = !isChecked; // Toggle the checked state
        setIsChecked(newChecked); // Update the checked state in the component's state
        if (onChange) {
            onChange(newChecked); // Call the onChange callback function with the new checked state
        }
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
