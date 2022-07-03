import React from "react";
import Button from "./Button";

interface FormProps {
  toggleFormStatus: () => void;
}

class Form extends React.Component<FormProps> {
  constructor(props: FormProps) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: any) {
    const { toggleFormStatus } = this.props;
    e.preventDefault();
    toggleFormStatus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Button isSubmit text="SUBMIT" />
      </form>
    );
  }
}

export default Form;
