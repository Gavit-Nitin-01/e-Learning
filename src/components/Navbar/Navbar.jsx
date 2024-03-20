
import { Link, useNavigate } from 'react-router-dom'

import './Navbar.css'
import { useRef } from 'react';
import Login from '../Login/Login';

export default function Navbar() {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/")
    }

    return (
        <>
            <header>
                <nav className="navbar">
                    <img className="logo" src="images/logo-elearning.png" alt="logo" />

                    <label htmlFor="check" id="checkbtn"><i className="fa-solid fa-bars"></i></label>
                    <input type="checkbox" id="check" name="check" />
                    <ul className="links">
                        <label htmlFor="check" id="checkbtn"><i className="fa fa-xmark"></i></label>
                        {/* <li><Link to="/">home</Link></li> */}
                        {!localStorage.getItem('token') ? <li><Link to="/">home</Link></li> : <li><Link to="/course">course</Link></li>}
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/services">services</Link></li>
                        <li><Link to="/gallery">gallery</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                        {/* {localStorage.getItem('token') ? <li><Link to="/" id="lgin" hidden>Login</Link></li> : <li><Link to="/" id="lgin" hidden>Logout</Link></li>} */}
                        {!localStorage.getItem('token') ? <div className="d-flex">
                            <Login />
                            <Link type="button" to="/signup" className="btn btn-primary mx-2">SignUp</Link>
                        </div> : <button onClick={handleLogout} className='btn btn-primary mx-2'>Logout</button>}
                    </ul>

                </nav>

            </header>

        </>
    )
}
