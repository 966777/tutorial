import React from 'react';
import "./footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-section">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className="footer-section">
                <h3>Contact Us</h3>
                <p>Email: support@example.com</p>
                <p>Phone: +1 123-456-7890</p>
            </div>

            <div className="footer-section">
                <h3>Subscribe to Newsletter</h3>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact</label>
                    <input type="text" id="contact" placeholder="Enter your contact" />
                </div>
                <button className="submit-button">Submit</button>
            </div>
        </div>
    );
}

export default Footer;
