import React from "react";
import cn from "classnames";

interface ButtonProps {
    disabled?: boolean;
    theme?: "primary" | "secondary";
    icon?: string | React.ReactNode;
    className?: string;
    children: string | React.ReactNode;
    type?: "submit" | "button" | "reset";
}

const Button: React.FC<ButtonProps> = ({
    disabled,
    theme = "primary",
    icon = null,
    className,
    children,
    type = "button",
}) => {
    const buttonTheme = (theme: string) => {
        const bgClass = theme === "primary" ? "bg-primary" : "bg-secondary";

        return `${bgClass}`;
    };

    return (
        <button
            disabled={disabled}
            type={type}
            className={cn(
                "flex items-center justify-center gap-2 hover:bg-opacity-95 font-semibold text-sm text-white rounded-[5px] h-14 w-full",
                buttonTheme(theme),
                className
            )}
        >
            {icon && <span className="mr-2">{icon}</span>}
            <span>{children}</span>
        </button>
    );
};

export default Button;
