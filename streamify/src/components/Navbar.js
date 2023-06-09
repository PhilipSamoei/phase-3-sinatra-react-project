import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Css/Navbar.css'

function Navbar() {
  return (
    <nav>
      <h2>STREAM<span className='ify'>IFY</span></h2>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/movies">MOVIE LIST</Link>
        </li>
        <li>
          <Link to="/mymovies">MY MOVIES</Link>
        </li>
        <li>
          <Link to="/signup" className='sign'>SIGN UP</Link>
        </li>
        <li>
          <Link to="/login" className='sign'>LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
