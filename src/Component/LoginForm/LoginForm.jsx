/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './LoginForm.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import logoBanner from './asset/bg-logo-banner.jpg';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigaTo = useNavigate();

  const handelGoogle = () => {
    window.open('http://localhost:5000/api/v1/auth/google', '_self');
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gửi yêu cầu đăng nhập đến API
    axios
      .post('http://localhost:5000/api/v1/auth/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        // Xử lý phản hồi thành công
        navigaTo('/dashboard');
      })
      .catch((error) => {
        // Xử lý lỗi
        alert('that bai');
      });
  };
  return (
    <div className="wrapper">
      <div className="Logo-banner-login">
        <img src={logoBanner} alt="bg-login" />
        <div className="Footer-Div flex">
          <span className="text">Dont have account ? </span>
          <Link to={'/register'}>
            <button className="btn-succes">Sign</button>
          </Link>
        </div>
      </div>

      <div className="loginform-rememberpas">
        <form action="" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="email"
              name="email"
              id="id-email"
              placeholder="email"
              value={email}
              onChange={handleEmailChange}
              required
              autoComplete="current-email"
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              id="id-password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
              required
              autoComplete="current-password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="remember-forgot">
          <label htmlFor="remember">
            <input type="checkbox" name="" id="" />
            Rememberme
          </label>
          <a href="#">Forgot password</a>
        </div>
        <div className="label-hoac">hoặc</div>
        <div className="button-method-loggin">
          <button className="btn-method google-button" onClick={handelGoogle}>
            Google
          </button>
          <button className="btn-method x-button">X</button>
          <button className="btn-method facebook-button">Facebook</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
