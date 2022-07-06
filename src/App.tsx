/* eslint-disable react/no-unused-state */
import React from "react";
import Button from "./components/Button";
import Section from "./components/Section";

interface AppState {
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
}

interface AppProps {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
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
            <Button text="GENERATE" isSubmit />
          </form>
        ) : (
          <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phoneNumber}</p>
            <p>{school}</p>
            <p>{titleOfStudy}</p>
            <p>{dateOfStudy}</p>
            <p>{work}</p>
            <p>{title}</p>
            <p>{tasks}</p>
            <Button
              handleClick={() =>
                this.setState((prevState) => ({
                  fillingForm: !prevState.fillingForm,
                }))
              }
              text="EDIT"
              isSubmit={false}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
