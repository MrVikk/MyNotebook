import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUp = (props) => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name:"", email: "", password: "", confpassword: ""  });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      let { name, email, password } = credentials;
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success){
        // Save the auth-token redirect
        console.log("why")
        localStorage.setItem("token", json.authtoken);
        navigate("/");
        props.showAlert("Your account created Successfully","success");
      } else{
        props.showAlert("Invalid Credentials","danger");
      }}
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  return (
    <div className='container my-3 '>
        <h1> Enter your Details here for SignUp :-</h1>
    <form onSubmit={handleSubmit}>
  <div className="form-group my-3">
    <label htmlFor="name">Enter Name</label>
    <input type="text" className="form-control my-0.5" id="name" name='name' onChange={onChange}aria-describedby="emailHelp" placeholder="Enter name"/>
    </div>
  <div className="form-group my-3">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group my-3">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" name='password' onChange={onChange} minLength={5}placeholder="Password"/>
  </div>
  <div className="form-group my-3">
    <label htmlFor="confpassword">Confirm Password</label>
    <input type="password" className="form-control" id="confpassword" name='confpassword' onChange={onChange} minLength={5} placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}
