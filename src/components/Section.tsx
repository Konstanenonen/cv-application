/* eslint-disable react/static-property-placement */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import "../styles/Section.css";

interface SectionProps {
  label: string;
  input: string;
  value: string;
  type?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class Section extends React.Component<SectionProps> {
  static defaultProps = {
    type: "text",
  };

  render() {
    const { label, input, value, type, handleChange } = this.props;

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
}

export default Section;
