import React from 'react';
import '../css/styles.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('home')}
          className={currentPage !== 'home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('about')}
          className={currentPage !== 'about' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('contact')}
          className={currentPage !== 'contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
        </li>
        <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('resume')}
          className={currentPage !== 'resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
