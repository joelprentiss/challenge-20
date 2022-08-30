import React, { useState } from 'react';
import NavTabs from './navbar';
import Home from './pages/home';
import About from './pages/about';
import Resume from './pages/resume';
import Contact from './pages/contact';
import '../css/styles.css'

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState('home');

   const renderPage = () => {
    if (currentPage === 'home') {
      return <Home />;
    }
    if (currentPage === 'about') {
      return <About />;
    }
    if (currentPage === 'resume') {
      return <Resume />;
    }
    if(currentPage === 'contact'){
      return <Contact/>
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
    </div>
  );
}

export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}