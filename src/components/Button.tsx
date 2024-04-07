import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  children: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`bg-black text-white hover:text-black bg-gray-600 p-4 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
