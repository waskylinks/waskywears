import React from "react";
import '../styles/Footer.css'
 /* import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedIn, FaPinterestP} from 'react-icons/fa'; */

export default function Footer () {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/*Brand selection */}
        <div className="footer-brand">
          <h2>Wasky Wears</h2>
          <p>
            Not just clothing. Wearable art inspired by you.
          </p>
        </div>
        {/*Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Collection">Collection</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </div>

          {/* Contact info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            Email: waskywears@gmail.com
          </p>
          <p>
            Phone: +2349061614369
          </p>
          <p>
            Address: Kaduna, Nigeria
          </p>
        </div>

          {/* Social Links 
          
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              >
                <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              >
                <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              >
                <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              >
                <FaLinkedIn />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              >
                <FaPinterestP />
            </a>
          </div>
        </div> */}
      </div>

      <div className="footer-bottom">
          <small>
            © {new Date().getFullYear()} Wasky Wears.
            All rights reserved.
          </small>
      </div>
    </footer>
  )
}