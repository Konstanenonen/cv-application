import React from "react";
import CvGenerator from "./components/CvGenerator";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <CvGenerator />
      <Footer />
    </div>
  );
}

export default App;
