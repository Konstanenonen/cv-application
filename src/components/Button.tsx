import React from "react";

interface ButtonProps {
  isSubmit: boolean;
  text: string;
  handleClick: () => void;
}

function Button({ isSubmit, text, handleClick }: ButtonProps) {
  return (
    <button onClick={handleClick} type={isSubmit ? "submit" : "button"}>
      {text}
    </button>
  );
}

export default Button;
