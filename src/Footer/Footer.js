import React from 'react';
import './Footer.css';
import Swiggy from './swiggywhite.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <img src={Swiggy}  alt="Swiggy Logo" className="footer-logo" /><h4 style={{fontWeight:'700'}}>Swiggy</h4>
            
                <p>© 2024 Bundl Technologies Pvt. Ltd</p>
            </div>
            <div className="footer-section">
                <h4>Company</h4>
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Swiggy One</li>
                    <li>Swiggy Instamart</li>
                    <li>Swiggy Genie</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Contact us</h4>
                <ul>
                    <li>Help & Support</li>
                    <li>Partner with us</li>
                    <li>Ride with us</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Legal</h4>
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                    <li>Investor Relations</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>We deliver to:</h4>
                <ul>
                    <li>Bangalore</li>
                    <li>Gurgaon</li>
                    <li>Hyderabad</li>
                    <li>Delhi</li>
                    <li>Mumbai</li>
                    <li>Pune</li>
                </ul>
                <select>
                    <option>589 cities</option>
                </select>
            </div>
        </footer>
    );
};

export default Footer;
