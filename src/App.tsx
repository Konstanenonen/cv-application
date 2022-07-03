/* eslint-disable react/prefer-stateless-function */
import React from "react";

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
      <div>{fillingForm ? <h1>Still on form</h1> : <h1>CV ready</h1>}</div>
    );
  }
}

export default App;
