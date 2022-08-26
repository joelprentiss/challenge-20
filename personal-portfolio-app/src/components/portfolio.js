import React, { useState } from 'react';
import NavTabs from './navbar';
import Home from './pages/home';
import About from './pages/about';
import Resume from './pages/resume';
import Contact from './pages/contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('home');

  // TODO: Add a comment describing the functionality of this method; renders whatever page to render that is selected
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
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props, nav tabs set the pages to render */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line, render page function is called */}
      {renderPage()}
    </div>
  );
}

export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}