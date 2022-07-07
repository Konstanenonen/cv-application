/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React from "react";

interface SectionProps {
  label: string;
  input: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class Section extends React.Component<SectionProps> {
  render() {
    const { label, input, value, handleChange } = this.props;

    return (
      <div>
        <label htmlFor={input}>{label}</label>
        <input
          onChange={handleChange}
          value={value}
          type="text"
          id={input}
          name={input}
        />
      </div>
    );
  }
}

export default Section;
