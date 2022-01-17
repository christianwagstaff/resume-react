import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./stylesheets/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Contact />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
