import React from "react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

export const Login = (props) => {
let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth-token redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("You are Logged in Successfully","success" );
      navigate("/");
    } else {
      props.showAlert("Invalid Credentials","danger")
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Welcome to the MynoteBook - Login page :-</h1>
      <div className="form-group my-3">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          value={credentials.email}
          onChange={onChange}
          id="email"
          name="email"
          aria-describedby="emailHelp"
          placeholder="Enter your email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="password">Enter your password</label>
        <input
          type="password"
          className="form-control"
          value={credentials.password}
          onChange={onChange}
          id="password"
          name="password"
          placeholder="password"
        />
      </div>
      <button type="submit" className="btn btn-primary my-3">
        Submit
      </button>
    </form>
  );
};
export default Login;
