/* eslint-disable react/prefer-stateless-function */
import React from "react";
import CvGenerator from "./components/CvGenerator";
import NavBar from "./components/NavBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <CvGenerator />
      </div>
    );
  }
}

export default App;
