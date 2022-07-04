import React from "react";

interface FormSectionProps {
  title: string;
  firstLabel: string;
  firstInput: string;
  secondLabel: string;
  secondInput: string;
  thirdLabel: string;
  thirdInput: string;
}

interface FormSectionState {
  firstValue: string;
  secondValue: string;
  thirdValue: string;
}

class FormSection extends React.Component<FormSectionProps, FormSectionState> {
  constructor(props: FormSectionProps) {
    super(props);

    this.state = {
      firstValue: "",
      secondValue: "",
      thirdValue: "",
    };
  }

  render() {
    const {
      title,
      firstLabel,
      firstInput,
      secondLabel,
      secondInput,
      thirdLabel,
      thirdInput,
    } = this.props;

    const { firstValue, secondValue, thirdValue } = this.state;

    return (
      <div>
        <h3>{title}</h3>
        <label htmlFor={firstInput}>{firstLabel}</label>
        <input
          onChange={(e) =>
            this.setState({
              firstValue: e.target.value,
            })
          }
          value={firstValue}
          type="text"
          id={firstInput}
          name={firstInput}
        />
        <label htmlFor={secondInput}>{secondLabel}</label>
        <input
          onChange={(e) =>
            this.setState({
              secondValue: e.target.value,
            })
          }
          value={secondValue}
          type="text"
          id={secondInput}
          name={secondInput}
        />
        <label htmlFor={thirdInput}>{thirdLabel}</label>
        <input
          onChange={(e) =>
            this.setState({
              thirdValue: e.target.value,
            })
          }
          value={thirdValue}
          type="text"
          id={thirdInput}
          name={thirdInput}
        />
      </div>
    );
  }
}

export default FormSection;
