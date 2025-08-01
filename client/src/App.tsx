import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bojus from './pages/Bojus'
import ScrollToTop from './ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import Curatedexperiences from './pages/Curatedexperiences'
import Everestlodge from './pages/Everestlodge'
import Chitwan from './pages/Chitwan'

const App: React.FC = () => {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bojus" element={<Bojus />} />
        <Route path="/Curatedexperiences" element={<Curatedexperiences />} />
        <Route path= "/everestlodge" element={<Everestlodge/>} />
        <Route path="/chitwan" element ={<Chitwan/>} />
      </Routes>
    </>
  )
}

export default App 