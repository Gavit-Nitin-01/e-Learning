
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Sing.css'
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


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
               SignUp
            </Button>

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
                                <form action="#" onClick={handleClick} className="login">
                                    <div className="field">
                                        <input type="text" placeholder="Email Address" required />
                                    </div>
                                    <div className="field">
                                        <input type="password" placeholder="Password" required />
                                    </div>
                                    <div className="pass-link"><a href="#">Forgot password?</a></div>
                                    <div className="field btn">
                                        <div className="btn-layer"></div>
                                        <input type="submit" value="Login" />
                                    </div>
                                    <div className="signup-link">Not a member? <a href="">Signup now</a></div>
                                </form>
                                <form action="#" onClick={handleClick} className="signup">
                                    <div className="field">
                                        <input type="text" placeholder="Enter Name" required />
                                    </div>
                                    <div className="field">
                                        <input type="email" placeholder="Email Address" required />
                                    </div>
                                    <div className="field">
                                        <input type="numbers" placeholder="Phone Number" required />
                                    </div>
                                    <div className="field">
                                        <input type="password" placeholder="Password" required />
                                    </div>
                                    <div className="field">
                                        <input type="password" placeholder="Confirm password" required />
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
