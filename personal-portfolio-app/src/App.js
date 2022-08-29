import React from 'react';
import NavTabs from './components/navbar'; 
import About from './components/pages/about';
import Home from './components/pages/home';
import Contact from './components/pages/contact';

function App() {
    return (
      <div className='nav-tabs'>
        <NavTabs/>
        <About/>
        <Home/>
        <Contact/>

      

      </div>
    )
  }

  export default App;