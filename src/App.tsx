import React from "react";
import Button from "./components/Button";
import { UserInformation } from "./interfaces";
import Section from "./components/Section";

interface AppState {
  fillingForm: boolean;
  userInformation: UserInformation;
  education: {
    school: string;
    titleOfStudy: string;
    dateOfStudy: string;
  };
  work: {
    company: string;
    title: string;
    tasks: string;
  };
}

interface AppProps {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      fillingForm: true,
      userInformation: {
        name: "",
        email: "",
        phoneNumber: "",
      },
      education: {
        school: "",
        titleOfStudy: "",
        dateOfStudy: "",
      },
      work: {
        company: "",
        title: "",
        tasks: "",
      },
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
    const { fillingForm, userInformation, education, work } = this.state;

    return (
      <div>
        {fillingForm ? (
          <form onSubmit={this.handleSubmit}>
            <Section />
            <Button text="GENERATE CV" isSubmit />
          </form>
        ) : (
          <div>
            <Button
              handleClick={() =>
                this.setState((prevState) => ({
                  fillingForm: !prevState.fillingForm,
                }))
              }
              text="BACK TO FORM"
              isSubmit={false}
            />
            <p>{userInformation.name}</p>
            <p>{education.school}</p>
            <p>{work.company}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
