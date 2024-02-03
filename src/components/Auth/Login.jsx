import React, { useState } from "react";
import { login } from "./store/authSlice";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ showModal, setShowModal, setOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleBtnChange = () => {
    setShowModal(true);
    setOpen(false);
  };

  return (
    <div className='popup_container'>
      <div className='popup_text'>
        <h1>Sign in</h1>
        <p>
          Become a Member — don’t miss out on rewards, perks, invitation to
          events and contests.
        </p>
      </div>
      <div className='popup_input'>
        <div className='email_input'>
          <label type='text' name='email'>
            Email<span>*</span>
          </label>
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='password_input'>
          <label type='text' name='email'>
            Password<span>*</span>
          </label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className='popup_actiontext'>
        <div className='popup_remember'>
          <input type='checkbox' />
          <p>Remember me</p>
        </div>
        Forgot password?
      </div>
      <div className='popup_button'>
        <button className='login_btn' onClick={() => login(email, password)}>
          Login
        </button>
        <button onClick={handleBtnChange}>Become a member</button>
      </div>
      <p className='footer_text'>Loyalty program info</p>
    </div>
  );
};

export default Login;
