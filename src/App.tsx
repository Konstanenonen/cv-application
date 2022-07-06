/* eslint-disable react/prefer-stateless-function */
import React from "react";
import CvGenerator from "./components/CvGenerator";

class App extends React.Component {
  render() {
    return (
      <div>
        <CvGenerator />
      </div>
    );
  }
}

export default App;
