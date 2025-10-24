import React, { useState, useEffect } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
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

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
  }

  return (
    <div style={sceneStyle}>
      <div style={containerStyle}>
        <h2 style={{
          fontSize: isMobile ? '2rem' : '2.5rem',
          fontWeight: '700',
          marginBottom: '2.5rem',
          letterSpacing: '-0.01em',
          textShadow: '0 0 30px rgba(255,255,255,0.3)'
        }}>
          Get in Touch
        </h2>
        <div style={{ maxWidth: '600px' }}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            style={{
              width: '100%',
              padding: '1rem',
              marginBottom: '1.5rem',
              background: '#111',
              border: '1px solid #333',
              color: '#fff',
              fontSize: '1rem',
              outline: 'none',
              boxShadow: '0 0 20px rgba(255,255,255,0.03)',
              transition: 'all 0.3s'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#666'
              e.target.style.boxShadow = '0 0 30px rgba(255,255,255,0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#333'
              e.target.style.boxShadow = '0 0 20px rgba(255,255,255,0.03)'
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            style={{
              width: '100%',
              padding: '1rem',
              marginBottom: '1.5rem',
              background: '#111',
              border: '1px solid #333',
              color: '#fff',
              fontSize: '1rem',
              outline: 'none',
              boxShadow: '0 0 20px rgba(255,255,255,0.03)',
              transition: 'all 0.3s'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#666'
              e.target.style.boxShadow = '0 0 30px rgba(255,255,255,0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#333'
              e.target.style.boxShadow = '0 0 20px rgba(255,255,255,0.03)'
            }}
          />
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            rows="6"
            style={{
              width: '100%',
              padding: '1rem',
              marginBottom: '1.5rem',
              background: '#111',
              border: '1px solid #333',
              color: '#fff',
              fontSize: '1rem',
              outline: 'none',
              resize: 'vertical',
              fontFamily: 'inherit',
              boxShadow: '0 0 20px rgba(255,255,255,0.03)',
              transition: 'all 0.3s'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#666'
              e.target.style.boxShadow = '0 0 30px rgba(255,255,255,0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#333'
              e.target.style.boxShadow = '0 0 20px rgba(255,255,255,0.03)'
            }}
          />
          <button
            onClick={handleSubmit}
            style={{
              padding: '1rem 2.5rem',
              background: '#fff',
              color: '#000',
              border: 'none',
              fontSize: '0.95rem',
              fontWeight: '600',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              transition: 'all 0.3s',
              boxShadow: '0 0 30px rgba(255,255,255,0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 0 40px rgba(255,255,255,0.4)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 0 30px rgba(255,255,255,0.2)'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact