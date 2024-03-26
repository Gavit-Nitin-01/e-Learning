
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import './Sing.css'
import { Button } from 'bootstrap';


export default function Singup() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleClick() {
        const loginText = document.querySelector(".title-text .login");
        const loginForm = document.querySelector("form.login");
        const loginBtn = document.querySelector("label.login");
        const signupBtn = document.querySelector("label.signup");
        const signupLink = document.querySelector("form .signup-link a");

        signupBtn.onclick = (() => {
            loginForm.style.marginLeft = "-50%";
            loginText.style.marginLeft = "-50%";
        });
        loginBtn.onclick = (() => {
            loginForm.style.marginLeft = "0%";
            loginText.style.marginLeft = "0%";
        });
        signupLink.onclick = (() => {
            signupBtn.click();
            return false;
        });
    }

    //student registration 
    const [credentials, setCredentials] = useState({ name: "",phone:"", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name,phone, email, password } = credentials;
        const response = await fetch("http://localhost:4000/api/student/createstd", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name,phone, email, password })
        });
        const json = await response.json();
        console.log(json)
        localStorage.setItem('token', json.authtoken)
        alert("Registration Successfuly")
        navigate('/admin');

    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    //studetn login 
    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/student/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            alert('Login Successfuly');
            navigate('/course');
        } else {
            alert('invalid details');
        }
    }
    const handleAdmin = () =>{
        navigate('/admin');
    }

    return (
        <>
            <button type="button" class="singup-btn " onClick={handleShow}>SignUp</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                </Modal.Header>
                <div>
                    <div className="wrapper ">
                        <div className="title-text">
                            <div className="title login">Login Form</div>
                            <div className="title signup">Signup Form</div>
                        </div>
                        <div className="form-container">
                            <div className="slide-controls">
                                <input type="radio" name="slide" id="login" checked />
                                <input type="radio" name="slide" id="signup" />
                                <label htmlFor="login" onClick={handleClick} className="slide login">Login</label>
                                <label htmlFor="signup" onClick={handleClick} className="slide signup">Signup</label>
                                <div className="slider-tab"></div>
                            </div>
                            <div className="form-inner">
                                <form action="#" onClick={handleClick} onSubmit={handleLogin} className="login">
                                    <div className="field">
                                        <input type="email"  value={credentials.email} onChange={onChange} name='email' placeholder="Email Address" required />
                                    </div>
                                    <div className="field">
                                        <input type="password"  value={credentials.email} onChange={onChange} name='password' placeholder="Password" required />
                                    </div>
                                    <div className="pass-link"><Link to="" onClick={handleAdmin}>Admin Login</Link></div>
                                    <div className="pass-link"><a href="#">Forgot password?</a></div>
                                    <div className="field btn">
                                        <div className="btn-layer"></div>
                                        <input type="submit" value="Login" />
                                    </div>
                                    <div className="signup-link">Not a member? <a href="">Signup now</a></div>
                                </form>
                                <form onClick={handleClick} onSubmit={handleSubmit} className="signup">
                                    <div className="field">
                                        <input type="text" name='name' onChange={onChange} placeholder="Enter Name" minLength={3} required />
                                    </div>
                                    <div className="field">
                                        <input type="numbers" name='phone' onChange={onChange} placeholder="Phone Number" minLength={10} required />
                                    </div>
                                    <div className="field">
                                        <input type="email" name='email' onChange={onChange} placeholder="Email Address" required />
                                    </div>
                                    <div className="field">
                                        <input type="password" name='password' onChange={onChange} placeholder="Password" minLength={6} required />
                                    </div>
                                    <div className="field">
                                        <input type="password" name='cpass' onChange={onChange} placeholder="Confirm password" minLength={6} required />
                                    </div>
                                    <div className="field btn"> 
                                        <div className="btn-layer"></div>
                                        <input type="submit" value="Signup" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>


        </>
    )
}
