import React from "react";
import Button from "./Button";
import Section from "./Section";
import Cv from "./Cv";

interface CvGeneratorState {
  fillingForm: boolean;
  name: string;
  email: string;
  phoneNumber: string;
  school: string;
  titleOfStudy: string;
  dateOfStudy: string;
  work: string;
  title: string;
  tasks: string;
  workDuration: string;
}

interface CvGeneratorProps {}

class CvGenerator extends React.Component<CvGeneratorProps, CvGeneratorState> {
  constructor(props: CvGeneratorProps) {
    super(props);

    this.state = {
      fillingForm: true,
      name: "",
      email: "",
      phoneNumber: "",
      school: "",
      titleOfStudy: "",
      dateOfStudy: "",
      work: "",
      title: "",
      tasks: "",
      workDuration: "",
    };

    this.toggleFormStatus = this.toggleFormStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: any) {
    e.preventDefault();
    this.toggleFormStatus();
  }

  toggleFormStatus() {
    this.setState((prevState) => ({
      fillingForm: !prevState.fillingForm,
    }));
  }

  render() {
    const { fillingForm } = this.state;
    const {
      name,
      email,
      phoneNumber,
      school,
      titleOfStudy,
      dateOfStudy,
      work,
      title,
      tasks,
      workDuration,
    } = this.state;

    return (
      <div>
        {fillingForm ? (
          <form onSubmit={this.handleSubmit}>
            <Section
              handleChange={(e: any) => this.setState({ name: e.target.value })}
              value={name}
              label="Name"
              input="name"
            />
            <Section
              handleChange={(e: any) =>
                this.setState({ email: e.target.value })
              }
              value={email}
              label="Email"
              input="email"
            />
            <Section
              handleChange={(e: any) =>
                this.setState({ phoneNumber: e.target.value })
              }
              value={phoneNumber}
              label="Phone number"
              input="phoneNumber"
            />
            <Section
              handleChange={(e: any) =>
                this.setState({ school: e.target.value })
              }
              value={school}
              label="School"
              input="school"
            />
            <Section
              handleChange={(e: any) =>
                this.setState({ titleOfStudy: e.target.value })
              }
              value={titleOfStudy}
              label="Title of Study"
              input="titleOfStudy"
            />
            <Section
              handleChange={(e: any) =>
                this.setState({ dateOfStudy: e.target.value })
              }
              value={dateOfStudy}
              label="Date of Study"
              input="dateOfStudy"
            />
            <Section
              handleChange={(e: any) => this.setState({ work: e.target.value })}
              value={work}
              label="Company name"
              input="work"
            />
            <Section
              handleChange={(e: any) =>
                this.setState({ title: e.target.value })
              }
              value={title}
              label="Work title"
              input="title"
            />
            <Section
              handleChange={(e: any) =>
                this.setState({ tasks: e.target.value })
              }
              value={tasks}
              label="Work tasks"
              input="tasks"
            />
            <Section
              handleChange={(e: any) =>
                this.setState({ workDuration: e.target.value })
              }
              value={workDuration}
              label="Work duration"
              input="workDuration"
            />
            <Button text="GENERATE" isSubmit />
          </form>
        ) : (
          <>
            <Cv
              name={name}
              email={email}
              phoneNumber={phoneNumber}
              school={school}
              titleOfStudy={titleOfStudy}
              dateOfStudy={dateOfStudy}
              work={work}
              title={title}
              tasks={tasks}
              workDuration={workDuration}
            />
            <Button
              handleClick={() =>
                this.setState((prevState) => ({
                  fillingForm: !prevState.fillingForm,
                }))
              }
              text="EDIT"
              isSubmit={false}
            />
          </>
        )}
      </div>
    );
  }
}

export default CvGenerator;