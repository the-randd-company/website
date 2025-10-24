import React, { useState, useEffect } from 'react'

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const sceneStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isMobile ? '6rem 1.5rem 3rem 1.5rem' : '8rem 3rem 3rem 3rem'
  }

  const containerStyle = {
    maxWidth: '900px',
    width: '100%'
  }

  return (
    <div style={sceneStyle}>
      <div style={containerStyle}>
        <h2 style={{
          fontSize: isMobile ? '2rem' : '2.5rem',
          fontWeight: '700',
          marginBottom: '2rem',
          letterSpacing: '-0.01em',
          textShadow: '0 0 30px rgba(255,255,255,0.3)'
        }}>
          About RANDD
        </h2>
        <div style={{ maxWidth: '700px' }}>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.1rem',
            color: '#ccc',
            lineHeight: '1.8',
            marginBottom: '1.5rem'
          }}>
            What started as a childhood fascination with lua code has evolved into a personal studio 
            dedicated to meaningful creation. RANDD represents over a decade of exploration, learning, 
            and building from the early experiments of Roman Rand at age 8 to refined production applications today.
          </p>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.1rem',
            color: '#ccc',
            lineHeight: '1.8'
          }}>
            The mission? Create beautiful, engaging, and meaningful applications that solve 
            real problems. Every project is an opportunity to craft experiences that are not just 
            functional, but delightful! RANDD sees design and engineering converge with purpose.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About