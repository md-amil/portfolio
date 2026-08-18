import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SelectedWork from './components/SelectedWork';
import Toolkit from './components/Toolkit';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Toolkit />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
