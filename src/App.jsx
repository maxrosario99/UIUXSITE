import React from 'react'
import Button from "./components/Button"
import Hero from './components/design/Hero'
import Benefits from './components/design/Benefits'
import Collaboration from './components/design/Collaboration'
import Footer from './components/Footer'
import Roadmap from './components/design/Roadmap'
import Pricing from './components/design/Pricing'
import Services from './components/design/Services'
import ButtonGradient from "../public/assets/svg/ButtonGradient"
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