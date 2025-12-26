import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Methodology from '../components/landing/Methodology';
import Features from '../components/landing/Features';
import Reviews from '../components/landing/Reviews';
import Footer from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-emerald-200">
      <Navbar />
      <Hero />
      <Methodology />
      <Features />
      <Reviews />
      <Footer />
    </div>
  );
}
