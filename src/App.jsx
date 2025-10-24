import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './scenes/Home'
import About from './scenes/About'
import Apps from './scenes/Apps'
import Contact from './scenes/Contact'

function App() {
  const [currentScene, setCurrentScene] = useState(0)
  const [scrollAccumulator, setScrollAccumulator] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const totalScenes = 4

  useEffect(() => {
    let scrollTimeout
    let touchStartY = 0
    let touchEndY = 0
    const threshold = 150
    const touchThreshold = 50

    const handleWheel = (e) => {
      e.preventDefault()
      
      if (isTransitioning) return
      
      setScrollAccumulator(prev => {
        const newAccum = prev + e.deltaY
        
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          setScrollAccumulator(0)
        }, 200)
        
        if (Math.abs(newAccum) >= threshold) {
          const delta = Math.sign(newAccum)
          const nextScene = Math.max(0, Math.min(currentScene + delta, totalScenes - 1))
          
          if (nextScene !== currentScene) {
            setIsTransitioning(true)
            setCurrentScene(nextScene)
            setTimeout(() => setIsTransitioning(false), 700)
          }
          
          return 0
        }
        
        return newAccum
      })
    }

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchMove = (e) => {
      if (isTransitioning) return
      touchEndY = e.touches[0].clientY
    }

    const handleTouchEnd = () => {
      if (isTransitioning) return
      
      const diff = touchStartY - touchEndY
      
      if (Math.abs(diff) > touchThreshold) {
        const delta = diff > 0 ? 1 : -1
        const nextScene = Math.max(0, Math.min(currentScene + delta, totalScenes - 1))
        
        if (nextScene !== currentScene) {
          setIsTransitioning(true)
          setCurrentScene(nextScene)
          setTimeout(() => setIsTransitioning(false), 700)
        }
      }
      
      touchStartY = 0
      touchEndY = 0
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      clearTimeout(scrollTimeout)
    }
  }, [currentScene, isTransitioning])

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: '#000',
      color: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <Navbar currentScene={currentScene} setCurrentScene={setCurrentScene} totalScenes={totalScenes} />
      
      <div style={{
        position: 'relative',
        top: `calc(${currentScene * -100}vh + ${Math.min(Math.abs(scrollAccumulator) / 150, 1) * (scrollAccumulator > 0 ? -5 : 5)}vh)`,
        width: '100%',
        transition: isTransitioning ? 'top 0.7s cubic-bezier(0.4, 0, 0.2, 1)' : 'top 0.1s ease-out'
      }}>
        <Home />
        <About />
        <Apps />
        <Contact />
      </div>
    </div>
  )
}

export default App