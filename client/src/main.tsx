// import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'

// Lenis inertia scroll
import Lenis from '@studio-freight/lenis'

function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      touchMultiplier: 2,
      infinite: false,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => {
      lenis.destroy()
    }
  }, [])
  return children as any
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <LenisProvider>
      <App />
    </LenisProvider>
  </BrowserRouter>,
) 