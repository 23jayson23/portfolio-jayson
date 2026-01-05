import React from "react";

interface TextProps {
    children: React.ReactNode;
    variant?: "large" | "medium" | "small";
    className?: string;
}
export const Text: React.FC<TextProps> = ({ children, variant = "small",className }) => {
    const sizeClasses = {
        large: "font-[freedom] text-7xl md:text-9xl ",
        medium: "text-md",
        small: "text-sm md:text-base",
    };
    return <p className={`${sizeClasses[variant]} ${className}`}>{children}</p>;
}
