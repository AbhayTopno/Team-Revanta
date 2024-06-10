import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Achievements from './components/Achievements'
import HeroSlider from './components/HeroSlider'
import WorkPortfolio from './components/WorkPortfolio'
import SponsorUs from './components/SponsorUs'
import CaptainVoice from './components/CaptainVoice'
import GetInTouch from './components/GetinTouch'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="">
          <Navbar />
          <Welcome />
          <Achievements/>
          <HeroSlider/>
          <WorkPortfolio/>
          <SponsorUs/>
          <CaptainVoice/>
          <GetInTouch/>
          <Footer/>
        </div>
    </>
  )
}

export default App
