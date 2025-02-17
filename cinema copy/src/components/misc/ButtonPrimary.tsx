import React, { ReactNode } from "react";

interface ButtonPrimaryProps {
  children: ReactNode;
  addClass?: string; // Marked as optional since you might not always want to add extra classes
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ children, addClass = "" }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-[#4285F4] hover:shadow-orange-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;