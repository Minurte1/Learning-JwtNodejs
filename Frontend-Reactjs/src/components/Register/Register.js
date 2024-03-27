import React, { useEffect } from 'react';
import '../Register/register.scss' // Import CSS file
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import LogoFb from '../Login/image/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
    const history = useHistory();

    const LoginUser = () => {
        history.push('/login');
    }
    useEffect(()=>{
        axios.get("http://localhost:3003/api/test-api").then(data =>{
            console.log("Check data =>",data)
        })
    })
    return (
        <div className="wrap">
            <div className="container-fb">
                <div className="fb-thongtin">
                    <img src={LogoFb} className="fb" style={{ height: "100px", width: "300px" }} alt="Facebook logo" />
                    <p>Facebook helps you connect and share with the people in your life.</p>
                </div>
                <div className="form">
                    <div className=" form-register">
                        <form>
                            <input type="text" placeholder="Email address " className="input1" />
                            <input type="text" placeholder="Phone number" className="input1" />
                            <input type="text" placeholder="Username " className="input1" />
                            <input type="password" placeholder="Password" className="input2" />
                            <input type="password" placeholder="Re-Password" className="input2" />
                            <button type="submit" className="button">Đăng ký thành công</button>
                            <a href="">Forgotten password?</a>
                            <div className="thanhnang"></div>

                            <button type="submit" onClick={LoginUser} className="button1">Chuyển Sang Login</button>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    );
}

const RegisterFooter = () => {
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
                <div className="footer-a">
                    {/* Your language links */}
                </div>
                <div className="footer-a">
                    <a href="">Meta © 2024</a>
                </div>
            </div>
        </div>
    );
}

function Register() {

    return (
        <>
            <RegisterForm />
            <RegisterFooter />
        </>
    );
}

export default Register;
