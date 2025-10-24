import React, { useState, useEffect } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields' })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Using Formspree - replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/xeorydll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New contact from ${formData.name}`
        }),
      })

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyle = {
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
        
        {submitStatus && (
          <div style={{
            padding: '1rem',
            marginBottom: '2rem',
            background: submitStatus.type === 'success' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
            border: `1px solid ${submitStatus.type === 'success' ? '#4caf50' : '#f44336'}`,
            color: submitStatus.type === 'success' ? '#4caf50' : '#f44336',
            borderRadius: '4px'
          }}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            style={inputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = '#666'
              e.target.style.boxShadow = '0 0 30px rgba(255,255,255,0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#333'
              e.target.style.boxShadow = '0 0 20px rgba(255,255,255,0.03)'
            }}
            disabled={isSubmitting}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            style={inputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = '#666'
              e.target.style.boxShadow = '0 0 30px rgba(255,255,255,0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#333'
              e.target.style.boxShadow = '0 0 20px rgba(255,255,255,0.03)'
            }}
            disabled={isSubmitting}
          />
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            rows="6"
            style={{
              ...inputStyle,
              resize: 'vertical',
              fontFamily: 'inherit',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#666'
              e.target.style.boxShadow = '0 0 30px rgba(255,255,255,0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#333'
              e.target.style.boxShadow = '0 0 20px rgba(255,255,255,0.03)'
            }}
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: '1rem 2.5rem',
              background: isSubmitting ? '#666' : '#fff',
              color: '#000',
              border: 'none',
              fontSize: '0.95rem',
              fontWeight: '600',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              transition: 'all 0.3s',
              boxShadow: '0 0 30px rgba(255,255,255,0.2)',
              opacity: isSubmitting ? 0.7 : 1
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.target.style.boxShadow = '0 0 40px rgba(255,255,255,0.4)'
                e.target.style.transform = 'translateY(-2px)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) {
                e.target.style.boxShadow = '0 0 30px rgba(255,255,255,0.2)'
                e.target.style.transform = 'translateY(0)'
              }
            }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Alternative contact method */}
        <div style={{ 
          marginTop: '3rem', 
          paddingTop: '2rem', 
          borderTop: '1px solid #333',
          textAlign: 'center'
        }}>
          <p style={{ color: '#666', marginBottom: '1rem' }}>
            Please email me directly if interested in hire:
          </p>
          <a 
            href="mailto:randd.github@gmail.com"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.1rem',
              borderBottom: '1px solid #666',
              paddingBottom: '2px',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderBottomColor = '#fff'
              e.target.style.textShadow = '0 0 20px rgba(255,255,255,0.5)'
            }}
            onMouseLeave={(e) => {
              e.target.style.borderBottomColor = '#666'
              e.target.style.textShadow = 'none'
            }}
          >
            rmnrand@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact