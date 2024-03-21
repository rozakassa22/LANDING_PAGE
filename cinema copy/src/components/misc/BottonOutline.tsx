// ButtonOutline.tsx
import React from 'react';

interface ButtonOutlineProps {
  children: React.ReactNode;
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({ children }) => {
  return (
    <button className="border rounded-full border-[#4285F4] text-[#4285F4] hover:bg-[#4285F4] hover:text-white p-2 px-6 transition duration-300 mr-10">
      {children}
    </button>
  );
};

export default ButtonOutline;