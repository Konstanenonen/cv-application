/* eslint-disable react/prefer-stateless-function */
import React from "react";
import CvGenerator from "./components/CvGenerator";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <CvGenerator />
        <Footer />
      </div>
    );
  }
}

export default App;
