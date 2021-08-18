import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="enter your email" />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="enter your password" />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton"><Link className="link" to="/register">Register</Link></button>
    </div>
  );
}
