import React from "react";

type ButtonsProps = {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonsProps> = ({ className, onClick, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
