import React, { useState } from "react";
import "../Cart/css/CheckoutPage.css";
import ModalTemplate from "../UI/ModalTemplate";
import Login from "../Auth/Login";
import { useNavigate } from "react-router-dom";
import Register from "../Auth/Register";

const CheckoutPage = ({ cart }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  return (
    <div className='checkout_container'>
      <div className='discount_text'>
        <p className='grey'>Discounts</p>
        <p>Apply Discounts</p>
      </div>
      <div className='checkout_login'>
        <p>Log in to use your personal offers!</p>
        <div className='login_button'>
          <button onClick={() => setOpen(true)}> Log in</button>
          <ModalTemplate trigger={open} setTrigger={setOpen}>
            <Login setShowModal={setRegisterModal} setOpen={setOpen} />
          </ModalTemplate>
          <Register
            showModal={registerModal}
            setShowModal={setRegisterModal}
            setOpen={setOpen}
          />
        </div>
      </div>
      <hr></hr>
      <div className='price_info'>
        <p className='grey'>Order Value</p>
        <p>${cart.totalPrice.toFixed(2)}</p>
      </div>
      <div className='delivery_infopage'>
        <p className='grey'>Delivery</p>
        <p>Free</p>
      </div>
      <hr className='bolded' />
      <div className='checkout_total'>
        <p>Total</p>
        <p>${cart.totalPrice.toFixed(2)}</p>
      </div>
      <div className='checkout_continue'>
        <p>* Item prices exclude tax</p>
        <button className='checkout_continue'>Continue to checkout</button>
      </div>
      <div className='card_body'>
        <p className='card_text'>We accept</p>
        <div className='card_img'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/349/349228.png'
            alt=''
          />
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/free-mastercard-3521564-2944982.png'
            alt=''
          />
          <img
            src='     https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-1024.png'
            alt=''
          />

          <img
            className='paypal'
            src='https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png'
            alt=''
          />
        </div>
        <div className='returnpolicy'>
          <p className='grey'>
            Prices and shipping costs are not confirmed until you've reached
            checkout.
            <br />
            <span>
              30-day returns. Read more about our return and refund policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
