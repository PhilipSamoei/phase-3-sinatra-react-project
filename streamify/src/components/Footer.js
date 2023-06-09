import React from 'react';
import '../Css/Footer.css';
import 'bootstrap';

function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <h3 style={{ fontSize: '70px',textAlign:'center' }}>Streamify</h3>
        <ul className="list">
          <li className="list-inline-item"><a href="#">Home</a></li>
          <li className="list-inline-item"><a href="#">Services</a></li>
          <li className="list-inline-item"><a href="#">About</a></li>
          <li className="list-inline-item"><a href="#">Terms</a></li>
          <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
        </ul>
        <p className="list">Streamify © 2023</p>
      </footer>
    </div>
  );
}

export default Footer;
