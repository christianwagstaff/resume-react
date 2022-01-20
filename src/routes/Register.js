import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../stylesheets/form.css";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const submitLogin = async (e) => {
    if (!username || !password) {
      return;
    }
    e.preventDefault();
    try {
      const response = await fetch(
        `https://whispering-springs-24965.herokuapp.com/users/register`,
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            register_password: registerPassword,
          }),
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
      <div className="flex-horizontal">
        <Link to="/login">Login</Link>
        <h1>Register</h1>
      </div>
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
        <label className="flex-column">
          Registration Code:
          <input
            type="password"
            name="register_password"
            value={registerPassword}
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Register" className="btn right" />
      </form>
    </main>
  );
};

export default Register;
