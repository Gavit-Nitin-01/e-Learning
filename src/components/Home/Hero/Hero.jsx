import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
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
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="hero">
                {!localStorage.getItem('token') ? <section className="hero-containt">
                    <h1>Welcome to e-Learning</h1>
                    <p>e-Learning is optimized for learning and training. Examples might be simplified to improve
                        reading
                        and learning.
                        Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot
                        warrant
                        full correctness
                        of all content. </p>
                    <button>Let's Start</button>
                </section> : <div className="login-nextpg" style={{ textAlign: 'center', margin: '10px' }}>

                    <button>sign up</button>
                </div>}
                {!localStorage.getItem('token') ? <section className="login-detials">
                    <p>Already have an account?</p>
                    <form action="" onSubmit={handleSubmit}>

                        <div className="login-input">
                            <label htmlFor="email">Email</label><br />
                            <span><i className="fa-solid fa-user"></i></span>
                            <input type="email" value={credentials.email} onChange={onChange} name="email" id="email" />

                        </div>
                        <div className="login-input">
                            <label htmlFor="Password">Password</label><br />
                            <span><i className="fa-solid fa-lock"></i></span>
                            <input type="Password" value={credentials.password} onChange={onChange} name="password" id="Password" />

                        </div>
                        <div className="login-btn">
                            <button>Login</button>
                        </div>
                        <div className="login-nextpg">
                            <a href="/">Forgotten your username or password?</a><br />
                            <button>sign up</button>
                        </div>
                    </form>
                </section> : ""}
            </div>
        </>
    )
}
