import './App.css'
import Projects from './components/Projects'
import Landing from './components/Landing'
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    const GA_ID = import.meta.env.VITE_GA_ID;
    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_ID);
  }, []);

  return (
    <>
      <Landing />
      <Projects />
    </>
  )
}

export default App
