
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import Singup from '../Singup/Singup';


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
                        {!localStorage.getItem('token') ? <li><Link to="/">home</Link></li> : <li><Link to="/course">course</Link></li>}
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/services">services</Link></li>
                        <li><Link to="/gallery">gallery</Link></li>
                        <li><Link to="/contact">contact</Link></li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                            <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">Settings</a></li>
                                <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#!">Logout</a></li>
                            </ul>
                        </li>
                        
                        {!localStorage.getItem('token') ? <div className="d-flex">
                            <Singup />

                        </div> : <button onClick={handleLogout} className='btn btn-primary mx-2'>Logout</button>}
                    </ul>
                </nav>

            </header>

        </>
    )
}
