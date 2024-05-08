// import React from 'react'
// import Button from "./components/Button"
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Collaboration from './components/Collaboration'
import Footer from './components/Footer'
import Roadmap from './components/Roadmap'
import Pricing from './components/Pricing'
import Services from './components/Services'
import ButtonGradient from "../public/assets/svg/ButtonGradient"
import Header from './components/Header'
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;