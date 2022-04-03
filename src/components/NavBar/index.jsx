import React from 'react'
/** Styles */
import styles from './styles.module.css';
/** React Router */
import { Link } from 'react-router-dom';

import { useLocation } from "react-router-dom";


const NavBar = () => {

  const location = useLocation();

  console.log(location);


  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>Home</Link>
        {
          location.pathname === "/About" ? (
            <>
              <Link to="/About/about-author" className={styles.link}>About Author</Link>
              <Link to="/About" className={styles.link}>About App</Link>
            </>
          ) : (
            <Link to="/About" className={styles.link}>About Us</Link>
          )
        }
      </div>
    </nav>
  )
}

export default NavBar;