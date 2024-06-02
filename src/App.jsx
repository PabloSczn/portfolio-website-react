import React, { useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';

const App = () => {
  useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
      offset: 70,
      easing: 'easeInOutCubic',
      updateURL: true, // Update the URL hash on scroll
      popstate: true // Animate scrolling with browser back/forward
    });
  }, []);
  
  return (
    <main>
        <Navbar/>
        <Header/>
        <About/>
        <Portfolio/>
        { /*<Testimonials/>*/}
        <Contact/>
        <Footer/>
        <FloatingNav/>
    </main>
  );
}

export default App;
