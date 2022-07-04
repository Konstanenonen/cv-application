import React from "react";
import Button from "./components/Button";
import { UserInformation } from "./interfaces";

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
          <Button
            handleClick={() =>
              this.setState((prevState) => ({
                fillingForm: !prevState.fillingForm,
              }))
            }
            text="GO TO CV"
            isSubmit={false}
          />
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
