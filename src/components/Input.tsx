import React from "react";

interface InputProp {
  label: string;
  type: string;
  placeholder: string;
  className: string;
}

const Input: React.FC<InputProp> = ({
  label,
  type,
  placeholder = "Enter a value",
  className = "",
  ...props
}) => {
  return (
    <>
      <label>{label}</label>
      <br />
      <input
        type={type}
        placeholder={placeholder}
        className={`p-2 text-center border-black ${className}`}
        {...props}
      />
    </>
  );
};

export default Input;
