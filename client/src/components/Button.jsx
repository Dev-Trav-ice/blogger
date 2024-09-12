import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) => {
  const baseStyles =
    "px-4 py-2 font-semibold text-white rounded focus:outline-none focus:ring focus:ring-opacity-75 transition ease-in-out duration-150";

  const variantStyles = {
    primary: "bg-black hover:bg-black/90 focus:ring-black/50",
    secondary: "bg-gray-500 hover:bg-gray-700 focus:ring-gray-300",
    success: "bg-green-500 hover:bg-green-700 focus:ring-green-300",
    danger: "bg-red-500 hover:bg-red-700 focus:ring-red-300",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${disabledStyles}`}
    >
      {children}
    </button>
  );
};

export default Button;
