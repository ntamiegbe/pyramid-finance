import React from "react";
import cn from "classnames";

interface ButtonProps {
    disabled?: boolean;
    theme?: "primary" | "secondary";
    icon?: string | React.ReactNode;
    className?: string;
    children: string | React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    disabled,
    theme = "primary",
    icon = null,
    className,
    children,
}) => {
    const buttonTheme = (theme: string) => {
        const bgClass = theme === "primary" ? "bg-primary" : "bg-secondary";

        return `${bgClass}`;
    };

    return (
        <button
            disabled={disabled}
            className={cn(
                "flex items-center justify-center transition-all ease-in text-center gap-4 font-semibold disabled:cursor-not-allowed disabled:opacity-50 text-sm text-white rounded-[5px] py-4 w-2/4",
                buttonTheme(theme),
                className
            )}
        >
            {icon && typeof icon === "string" ? (
                <img src={icon} alt="Icon" className="mr-2" />
            ) : (
                <span className="mr-2">{icon}</span>
            )}
            {children}
        </button>
    );
};

export default Button;
