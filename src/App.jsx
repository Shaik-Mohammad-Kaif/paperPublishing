import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Workflow />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
