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
            <Button text="GENERATE CV" isSubmit />
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
              text="BACK TO FORM"
              isSubmit={false}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
