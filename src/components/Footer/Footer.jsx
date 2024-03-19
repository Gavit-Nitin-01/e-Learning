
import './Footer.css'
export default function Footer() {
    return (
        <>
            <footer>
                <div className="foot-links">
                    <ul className="terms1">
                        <li><a href="/">Business</a></li>
                        <li><a href="/">Teach on e-Learning</a></li>
                        <li><a href="/">Get the app</a></li>
                        <li><a href="/">About us</a></li>
                        <li><a href="/">Contact us</a></li>
                    </ul>
                    <ul className="terms2">
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Help and Support</a></li>
                        <li><a href="/">Affiliate</a></li>
                        <li><a href="/">Investors</a></li>
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
