import React from "react";

type ButtonType = "submit" | "reset" | "button" | undefined;

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', onClick, type, disabled }) => {
  return (
    <button
    className={`bg-blue-500 shadow-md text-white rounded-3xl hover:bg-blue-800 px-6 py-2 ${className}`}
    onClick={onClick}
    type={type}
    disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
