import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Editor from "./routes/Editor";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./stylesheets/app.css";
import Login from "./routes/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
