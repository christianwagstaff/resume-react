import React from "react";

const Login = () => {
  return (
    <main>
      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input type="email" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Login" />
      </form>
    </main>
  );
};

export default Login;
