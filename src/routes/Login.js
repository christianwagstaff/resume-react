import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/form.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submitLogin = async (e) => {
    if (!username || !password) {
      return;
    }
    e.preventDefault();
    try {
      const response = await fetch(
        `https://whispering-springs-24965.herokuapp.com/users/login`,
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      const data = await response.json();
      localStorage.setItem("jwt", data.token);
      navigate("/editor");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={submitLogin}>
        <label className="flex-column">
          Email:
          <input
            type="email"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label className="flex-column">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Login" className="btn right" />
      </form>
    </main>
  );
};

export default Login;
