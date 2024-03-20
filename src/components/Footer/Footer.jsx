
import { Link } from 'react-router-dom'
import './Footer.css'
export default function Footer() {
    return (
        <>
            <footer>
                <div className="foot-links">
                    <ul className="terms1">
                        <li><Link to="/">Business</Link></li>
                        <li><Link to="/">Teach on e-Learning</Link></li>
                        <li><Link to="/">Get the app</Link></li>
                        <li><Link to="/">About us</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                    </ul>
                    <ul className="terms2">
                        <li><Link to="/">Careers</Link></li>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">Help and Support</Link></li>
                        <li><Link to="/">Affiliate</Link></li>
                        <li><Link to="/">Investors</Link></li>
                    </ul>

                    <div className="lng">
                        <button> <i className="fa-solid fa-globe"></i> ENGLISH</button>
                    </div>
                </div>
                <div className="copy-right">
                    <div className="social-media">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div>
                        <p>Copyright © 2024 e-learning.com</p>
                    </div>
                </div>

            </footer>
        </>
    )
}
