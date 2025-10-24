import React, { useState, useEffect } from 'react'
import Doggo from '../assets/Rufftp.png'
import GitHubIcon from '../assets/GitHubIcon.png'

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
          Applications
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '2rem' : '3rem',
          alignItems: isMobile ? 'center' : 'flex-start',
          marginBottom: '3rem'
        }}>
          <img 
            src={Doggo}
            alt="Doggo Client Logo"
            style={{
              width: isMobile ? '200px' : '240px',
              height: isMobile ? '200px' : '240px',
              background: '#111111ff',
              border: '1px solid #333',
              borderRadius: '8px',
              boxShadow: '0 0 40px rgba(255,255,255,0.05)',
              flexShrink: 0,
              objectFit: 'cover'
            }}
          />
          <div style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              marginBottom: '1rem'
            }}>
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '1.8rem',
                fontWeight: '600',
                letterSpacing: '-0.01em',
                textShadow: '0 0 20px rgba(255,255,255,0.2)',
                margin: 0
              }}>
                Doggo 
                <span style={{
                  fontSize: '0.7rem', 
                  marginLeft: '0.5rem',
                  color: '#888',
                  fontStyle: 'italic'
                }}>
                  sftp client
                </span>
              </h3>
              <a 
                href="https://github.com/the-randd-company/SFTPClient" 
                style={{
                  color: '#335',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center'
                }}
                title="View on GitHub"
              >
                {/* Using GitHub's octicon SVG */}
                <svg 
                  width={isMobile ? '24' : '28'} 
                  height={isMobile ? '24' : '28'} 
                  viewBox="0 0 16 16" 
                  fill="#555"
                  style={{ transition: 'transform 0.2s ease' }}
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
            <p style={{
              fontSize: isMobile ? '0.95rem' : '1.05rem',
              color: '#aaa',
              lineHeight: '1.7',
              marginBottom: '1rem'
            }}>
              A modern, cross-platform SFTP client built with React and Electron that redefines 
              file transfer workflows. Experience seamless server management with an intuitive 
              tab-based interface designed for productivity.
            </p>
            <p style={{
              fontSize: isMobile ? '0.95rem' : '1.05rem',
              color: '#aaa',
              lineHeight: '1.7',
              marginBottom: '1rem'
            }}>
              Built to address the limitations of traditional clients, it offers enhanced 
              performance, a clean user experience, and powerful features for both casual 
              users and professionals.
            </p>
            <p style={{
              fontSize: isMobile ? '0.56rem' : '0.7rem',
              color: '#aaa',
              lineHeight: '1.7'
            }}>
              The project embraces open collaboration through its source-available model, 
              welcoming community contributions while maintaining flexibility for future 
              development paths.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apps