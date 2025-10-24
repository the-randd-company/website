import React, { useState, useEffect } from 'react'

const Apps = () => {
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
          marginBottom: '3rem',
          letterSpacing: '-0.01em',
          textShadow: '0 0 30px rgba(255,255,255,0.3)'
        }}>
          Apps
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '2rem' : '3rem',
          alignItems: isMobile ? 'center' : 'flex-start',
          marginBottom: '3rem'
        }}>
          <div style={{
            width: isMobile ? '200px' : '240px',
            height: isMobile ? '200px' : '240px',
            background: '#111',
            border: '1px solid #333',
            boxShadow: '0 0 40px rgba(255,255,255,0.05)',
            flexShrink: 0
          }} />
          <div style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
            <h3 style={{
              fontSize: isMobile ? '1.5rem' : '1.8rem',
              fontWeight: '600',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
              textShadow: '0 0 20px rgba(255,255,255,0.2)'
            }}>
              Project Title
            </h3>
            <p style={{
              fontSize: isMobile ? '0.95rem' : '1.05rem',
              color: '#aaa',
              lineHeight: '1.7',
              marginBottom: '1rem'
            }}>
              A brief description of this application, its purpose, the technologies used, 
              and the problems it solves. This space showcases the thoughtful approach taken 
              in creating meaningful digital experiences.
            </p>
            <p style={{
              fontSize: isMobile ? '0.95rem' : '1.05rem',
              color: '#aaa',
              lineHeight: '1.7'
            }}>
              Additional details can be added here, allowing the content to expand naturally 
              while maintaining the minimum viewport height. This ensures flexibility for 
              projects with varying levels of complexity and documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apps