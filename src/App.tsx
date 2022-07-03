import React from "react";
import Button from "./components/Button";
import Form from "./components/Form";

interface AppState {
  fillingForm: boolean;
}

interface AppProps {}

class App extends React.Component<{}, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      fillingForm: true,
    };

    this.toggleFormStatus = this.toggleFormStatus.bind(this);
  }

  toggleFormStatus() {
    this.setState((prevState) => ({
      fillingForm: !prevState.fillingForm,
    }));
  }

  render() {
    const { fillingForm } = this.state;

    return (
      <div>
        {fillingForm ? (
          <Form toggleFormStatus={this.toggleFormStatus} />
        ) : (
          <Button
            handleClick={() =>
              this.setState((prevState) => ({
                fillingForm: !prevState.fillingForm,
              }))
            }
            text="BACK TO FORM"
            isSubmit={false}
          />
        )}
      </div>
    );
  }
}

export default App;
