import React from 'react';
import '../css/styles.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li class="nav-item mx-0 mx-lg-1">
        <a
          href="#home"
          onClick={() => handlePageChange('home')}
          className={currentPage !== 'home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li class="nav-item mx-0 mx-lg-1">
        <a
          href="#about"
          onClick={() => handlePageChange('about')}
          className={currentPage !== 'about' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      
      <li class="nav-item mx-0 mx-lg-1">
        <a
          href="#contact"
          onClick={() => handlePageChange('contact')}
          className={currentPage !== 'contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
        </li>
        <li class="nav-item mx-0 mx-lg-1">
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
