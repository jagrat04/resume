import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero'


const App = () => {
  return (
    <div>
      {/* Sticky Header */}
      <Header />

      {/* Hero Section */}
      <Hero />
    </div>
  );
};

export default App
