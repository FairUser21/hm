import React, { useState } from "react";
import { register } from "./store/authSlice";
import ModalTemplate from "../UI/ModalTemplate";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { Widgets } from "@mui/icons-material";

const Register = ({ showModal, setShowModal, setOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleButtonChange = () => {
    setOpen(true);
    setShowModal(false);
  };
  return (
    <ModalTemplate
      sx={{ width: "100%", height: "700px", overflow: "scroll" }}
      trigger={showModal}
      setTrigger={setShowModal}
    >
      <div className='register_container'>
        <div className='popup_text'>
          <h1>Become a member</h1>
          <p>
            Become a Member — don’t miss out on rewards, perks, invitation to
            events and contests.
          </p>
        </div>
        <div className='register_inputs'>
          <div className='registerEmail_input'>
            <label type='email' name='email'>
              Email<span>*</span>
            </label>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='registerPassword_input'>
            <label type='password' name='password'>
              Create a password<span>*</span>
            </label>
            <input
              type='text'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='registerDate_input'>
            <label type='text' name='date'>
              Date of birth<span>*</span>
            </label>
            <input
              type='date'
              id='dateInput'
              name='dateInput'
              value={selectedDate}
              onChange={handleDateChange}
              placeholder='YYYY-MM-DD'
            />
          </div>
        </div>

        <div className='register_email-me'>
          <input type='checkbox' />
          <p>
            Yes, email me offers, style updates, and special invites to sales
            and events. <br />
            <br />
            H&M will send you information regarding your bonus points and other
            information regarding your membership, unless you opt-out from such
            messages by changing your profile settings,contacting customer
            service, or clicking the unsubscribe link in the bottom of our
            emails.
          </p>
        </div>
        <div className='register_terms'>
          <p>
            By clicking ‘Become a member’, I agree to the H&M Loyalty program
            Terms and conditions.
          </p>
          <p>
            To give you the full membership experience, we will process your
            personal data in accordance with the H&M's Privacy Notice.
          </p>
        </div>
        <div className='register_buttons'>
          <button
            className='register-btn'
            onClick={() => register(email, password)}
          >
            Become a member
          </button>
          <button className='signin-btn' onClick={handleButtonChange}>
            Sign in
          </button>
        </div>
      </div>
    </ModalTemplate>
  );
};

export default Register;
