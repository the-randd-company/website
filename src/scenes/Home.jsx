import React, { useState, useEffect } from 'react'

const FadingWords = () => {
  const words = [
    'experiences',
    'interfaces',
    'solutions',
    'products',
    'applications',
    'systems',
    'platforms',
    'tools'
  ]
  const [currentWord, setCurrentWord] = useState(0)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0)
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length)
        setOpacity(1)
      }, 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span style={{
      opacity,
      transition: 'opacity 0.5s',
      textShadow: '0 0 30px rgba(255,255,255,0.4)'
    }}>
      {words[currentWord]}
    </span>
  )
}

const Home = () => {
  const sceneStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8rem 3rem 3rem 3rem'
  }

  const containerStyle = {
    maxWidth: '900px',
    width: '100%'
  }

  return (
    <div style={sceneStyle}>
      <div style={containerStyle}>
        <h1 style={{
          fontSize: '4.5rem',
          fontWeight: '700',
          marginBottom: '1.5rem',
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          textShadow: '0 0 40px rgba(255,255,255,0.3)'
        }}>
          Roman Rand
        </h1>
        <p style={{
          fontSize: '1.3rem',
          color: '#999',
          lineHeight: '1.6',
          maxWidth: '700px'
        }}>
          Building <FadingWords />
        </p>
      </div>
    </div>
  )
}

export default Home