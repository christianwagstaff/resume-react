import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import HomePage from "./routes/HomePage";
import Editor from "./routes/Editor";
import Header from "./components/Header";
import EditorHeader from "./components/EditorHeader";
import Footer from "./components/Footer";
import "./stylesheets/app.css";
import Login from "./routes/Login";
import Logout from "./routes/Logout";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router basename="/resume-react">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="*" element={<Login />} />
          </Route>
          <Route path="/editor" element={<EditorLayout />}>
            <Route
              index
              element={
                <PrivateRoute>
                  <Editor />
                </PrivateRoute>
              }
            ></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const EditorLayout = () => {
  return (
    <div className="App">
      <EditorHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
