import React from "react";

interface TextProps {
    children: React.ReactNode;
    variant?: "large" | "medium" | "small";
    className?: string;
}
export const Text: React.FC<TextProps> = ({ children, variant = "small",className }) => {
    const sizeClasses = {
        large: "font-[Mongule] text-md md:text-xl",
        medium: "text-xs md:text-base",
        small: "text-sm md:text-base",
    };
    return <p className={`${sizeClasses[variant]} ${className}`}>{children}</p>;
}
