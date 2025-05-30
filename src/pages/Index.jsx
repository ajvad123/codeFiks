
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Courses from '../components/Courses';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CodefiksTimeline from '../components/CodefiksTimeline';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
       <About />
      <Courses />
      <CodefiksTimeline/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
