import React from "react";
import Button from "./components/Button";

class App extends React.Component<{}, { fillingForm: boolean }> {
  constructor(props: any) {
    super(props);

    this.state = {
      fillingForm: true,
    };
  }

  render() {
    const { fillingForm } = this.state;

    return (
      <div>
        {fillingForm ? (
          <form>
            <Button
              handleClick={() =>
                this.setState((prevState) => ({
                  fillingForm: !prevState.fillingForm,
                }))
              }
              text="CREATE CV"
              isSubmit={false}
            />
          </form>
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
