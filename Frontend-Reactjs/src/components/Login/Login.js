import React, { useState } from 'react';
import '../Login/Login.scss'; // Import CSS file
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import LogoFb from './image/logo.svg';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LoginUser } from '../../service/UserService';
const LoginForm = () => {
  const navigate = useNavigate();
  const [valueLogin, setvalueLogin] = useState('');
  const [password, setPassword] = useState('');
  const [objectCheckInput, setObjectCheckInput] = useState('');
  const defaultValidInput = {
    isValueLogin: true,
    isPassword: true,
  };
  console.log('=>> check pass and login =>>', valueLogin, password);
  const handleCreateUser = () => {
    navigate('/register');
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    setObjectCheckInput(defaultValidInput);
    if (!valueLogin) {
      setObjectCheckInput({ ...defaultValidInput, isValueLogin: false });
      toast.error('Please enter your email address or phone number');
      return;
    }
    if (!password) {
      setObjectCheckInput({ ...defaultValidInput, isValuePassword: false });
      toast.error('Please enter your password');
      return;
    }

    await LoginUser(valueLogin, password);
  };
  return (
    <div className="wrap">
      <div className="container-fb">
        <div className="fb-thongtin">
          <img
            src={LogoFb}
            className="fb"
            style={{ height: '100px', width: '300px' }}
            alt="Facebook logo"
          />
          <p>
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="form">
          <div className="form-login">
            <form>
              <input
                type="text"
                placeholder="Email address or phone number"
                className={
                  objectCheckInput.isValueLogin
                    ? 'form-control input1'
                    : 'form-control input1 is-invalid'
                }
                value={valueLogin}
                onChange={(event) => setvalueLogin(event.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                className={
                  objectCheckInput.isPassword
                    ? 'form-control input2'
                    : 'form-control input2 is-invalid'
                }
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <button type="submit" className="button" onClick={handleLogin}>
                Log in
              </button>
              <a href="">Forgotten password?</a>
              <div className="thanhnang"></div>
              <button
                type="submit"
                onClick={handleCreateUser}
                className="button1"
              >
                Create new account
              </button>
            </form>
          </div>
          <a className="create"> Create a Page</a>{' '}
          <span>for a celebrity, brand or business.</span>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerall">
        <div className="footer-a">
          <a href="">English (UK)</a>
          <a href="">Tiếng Việt</a>
          <a href="">中文(台灣)</a>
          <a href="">한국어</a>
          <a href="">日本語</a>
          <a href="">Français (France)</a>
          <a href="">ภาษาไทย</a>
          <a href="">Español</a>
          <a href="">Português (Brasil)</a>
          <a href="">Deutsch</a>
          <a href="">Italiano</a>
        </div>
        <div className="footer-hr"></div>
        <div className="footer-a">{/* Your language links */}</div>
        <div className="footer-a">
          <a href="">Meta © 2024</a>
        </div>
      </div>
    </div>
  );
};

function Login() {
  return (
    <>
      <LoginForm />
      <Footer />
    </>
  );
}

export default Login;
