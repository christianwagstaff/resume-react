import React from "react";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./stylesheets/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
