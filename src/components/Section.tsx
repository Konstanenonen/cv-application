/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/Section.css";

interface SectionProps {
  label: string;
  input: string;
  value: string;
  type?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Section({ label, input, value, type, handleChange }: SectionProps) {
  return (
    <div className="section">
      <label htmlFor={input}>{label}</label>
      <input
        onChange={handleChange}
        value={value}
        type={type}
        id={input}
        name={input}
      />
    </div>
  );
}

Section.defaultProps = {
  type: "text",
};

export default Section;
