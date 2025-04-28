import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import bg from './assets/bg.png'
import Work from './components/Work'
import About from './components/About'
import Review from './components/Review'
import Choose from './components/Choose'
import Plans from './components/Plans'
import Advance from './components/Advance'
import Coaching from './components/Coaching'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-[1500px] mx-auto">
        <Header />
        <Hero />
        <Work />
      </div>
      <About />
      <Review />
      <Choose />
      <Plans />
      <Advance />
      <Coaching />
      <Contact />
      <Footer />
    </div>
  )
}

export default App