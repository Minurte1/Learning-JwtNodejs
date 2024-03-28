import React, { useEffect, useState } from 'react';
import '../Register/register.scss' // Import CSS file
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import LogoFb from '../Login/image/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
const RegisterForm = () => {
    const history = useHistory();
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");
const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
const [confirmPassword,setconfirmPassword] = useState("");
const [objectCheckInput, setObjectCheckInput] = useState({
    isValidEmail:true,
    isValidPhone:true,
    isValidPassword:true,
    isValidConfirmPassword:true
});
    const LoginUser = () => {
        history.push('/login');
    }

    const  isValidEmail=(email)=> {
        // Sử dụng regular expression để kiểm tra định dạng email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const  isValidPhone=(phone)=> {
        // Sử dụng regular expression để kiểm tra định dạng email
        const vietnamesePhoneNumberRegex = /^(0[1-9])+([0-9]{8,9})\b/;
        return vietnamesePhoneNumberRegex.test(phone);
    }
    const isValiInput =() =>{
        if(!email){
            toast.error("Địa chỉ Email của bạn bị rỗng !")
            return false;
        }
      
        if (!isValidEmail(email)) { 
            toast.error("Email không hợp lệ");
           return false;
        }
        if (!isValidPhone(phone)) {  
            toast.error("Số điện thoại này không phải số điện thoại Việt Nam !!");
            return false;
        }
         
        if(!phone){
            toast.error("Số điện thoại của bạn bị rỗng !")
            return false;
        }
        if(!username){
            toast.error("Tên người dùng của bạn bị rỗng !")
            return false;
        }
        if(!password){
            toast.error("Password của bạn bị rỗng !")
            return false;
        }
        if(!confirmPassword){
            toast.error("Re-Password của bạn bị rỗng !")
            return false;
        }
    }
    const handleRegister=(event)=>{
        event.preventDefault();
      const userData = {email,phone,username,password,confirmPassword};
      console.log("checkdataform =>",userData)
      if(isValiInput()==false){
        return;
      }else{
        toast.success("Bạn đã đăng ký thành công")
      }
      
    }
    useEffect(()=>{
        // axios.get("http://localhost:3003/api/test-api").then(data =>{
        //     console.log("Check data =>",data)
        // })
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
                            <input type="text" name='email' value={email} onChange={(event) =>setEmail(event.target.value)} placeholder="Email address " className="input1 is-invalid" />
                            <input type="text" value={phone} onChange={(event) =>setPhone(event.target.value)} placeholder="Phone number" className="input1" />
                            <input type="text" value={username}onChange={(event) =>setUsername(event.target.value)} placeholder="Username " className="input1" />
                            <input type="password" value={password} onChange={(event) =>setPassword(event.target.value)} placeholder="Password" className="input2" />
                            <input type="password" value={confirmPassword} onChange={(event) =>setconfirmPassword(event.target.value)} placeholder="Re-Password" className="input2" />
                            <button  onClick={handleRegister} className="button">Đăng ký thành công</button>
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
