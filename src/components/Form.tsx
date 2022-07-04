import React from "react";
import Button from "./Button";
import FormSection from "./FormSection";

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
        <FormSection
          title="Personal information"
          firstLabel="Name"
          firstInput="name"
          secondLabel="Email"
          secondInput="email"
          thirdLabel="Phone number"
          thirdInput="phoneNumber"
        />
        <FormSection
          title="Education"
          firstLabel="School Name"
          firstInput="schoolName"
          secondLabel="Title of Study"
          secondInput="titleOfStudy"
          thirdLabel="Date of Study"
          thirdInput="dateOfStudy"
        />
        <FormSection
          title="Work experience"
          firstLabel="Company Name"
          firstInput="companyName"
          secondLabel="Position Title"
          secondInput="positionTitle"
          thirdLabel="Main tasks"
          thirdInput="mainTasks"
        />
        <Button isSubmit text="SUBMIT" />
      </form>
    );
  }
}

export default Form;
