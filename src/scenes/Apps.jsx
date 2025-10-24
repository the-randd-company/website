import React from 'react'

const Apps = () => {
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
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '3rem',
          letterSpacing: '-0.01em',
          textShadow: '0 0 30px rgba(255,255,255,0.3)'
        }}>
          Apps
        </h2>
        <div style={{
          display: 'flex',
          gap: '3rem',
          alignItems: 'flex-start',
          marginBottom: '3rem'
        }}>
          <div style={{
            width: '240px',
            height: '240px',
            background: '#111',
            border: '1px solid #333',
            boxShadow: '0 0 40px rgba(255,255,255,0.05)',
            flexShrink: 0
          }} />
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '600',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
              textShadow: '0 0 20px rgba(255,255,255,0.2)'
            }}>
              Project Title
            </h3>
            <p style={{
              fontSize: '1.05rem',
              color: '#aaa',
              lineHeight: '1.7',
              marginBottom: '1rem'
            }}>
              A brief description of this application, its purpose, the technologies used, 
              and the problems it solves. This space showcases the thoughtful approach taken 
              in creating meaningful digital experiences.
            </p>
            <p style={{
              fontSize: '1.05rem',
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