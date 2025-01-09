import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">Adobe</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/marketing">Marketing & Commerce</Link></li>
          <li><Link to="/support">Help & Support</Link></li>
        </ul>
      </nav>
      <button className="sign-in">Sign In</button>
    </header>
  );
}

export default Header;
