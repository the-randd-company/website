import React, { useState, useEffect } from 'react'
import signature from '../assets/Signature.png'

const Navbar = ({ currentScene, setCurrentScene, totalScenes }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const sceneNames = ['Home', 'About', 'Apps', 'Contact']

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '1.5rem 1.5rem' : '2rem 3rem',
      zIndex: 1000,
      mixBlendMode: 'difference'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? '0.5rem' : '1rem',
        fontSize: isMobile ? '1.2rem' : '1.5rem',
        fontWeight: '700',
        color: 'white',
        letterSpacing: '0.15em',
        textShadow: '0 0 20px rgba(255,255,255,0.5)'
      }}>
        RANDD
        {/* Wrap image in a div to isolate it from blend mode */}
        <div style={{ mixBlendMode: 'normal' }}>
          <img 
            src={signature}
            alt="Signature"
            style={{
              height: '2.5rem',
              width: 'auto',
              filter: 'brightness(0) invert(1)', // Makes it pure white
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', gap: isMobile ? '0.8rem' : '2.5rem' }}>
        {sceneNames.map((name, index) => (
          <button
            key={index}
            onClick={() => setCurrentScene(index)}
            style={{
              background: 'none',
              border: 'none',
              color: currentScene === index ? '#fff' : '#666',
              cursor: 'pointer',
              fontSize: isMobile ? '0.7rem' : '0.9rem',
              fontWeight: currentScene === index ? '600' : '400',
              padding: '0.5rem 0',
              transition: 'all 0.3s',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              textShadow: currentScene === index ? '0 0 15px rgba(255,255,255,0.6)' : 'none'
            }}
          >
            {name}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar