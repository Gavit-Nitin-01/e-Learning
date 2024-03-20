
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <header>
                <nav className="navbar">
                    <img className="logo" src="images/logo-elearning.png" alt="logo" />

                    <label htmlFor="check" id="checkbtn"><i className="fa-solid fa-bars"></i></label>
                    <input type="checkbox" id="check" name="check" />
                    <ul className="links">
                        <label htmlFor="check" id="checkbtn"><i className="fa fa-xmark"></i></label>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/">about</Link></li>
                        <li><Link to="/">services</Link></li>
                        <li><Link to="/">gallery</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                        <li><Link to="/" id="lgin" hidden>Login</Link></li>
                    </ul>

                </nav>
            </header>
        </>
    )
}
