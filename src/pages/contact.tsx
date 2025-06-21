import { useState } from 'react'
import Layout from '../components/Layout'
import CyberText from '../components/ui/CyberText'
import GlowButton from '../components/ui/GlowButton'
import SectionDivider from '../components/ui/SectionDivider'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      setErrors({
        submit: 'There was an error sending your message. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout title="Contact | Marc Le">
      <div className="container mx-auto px-6 py-20">
        <CyberText className="text-3xl mb-2">CONTACT</CyberText>
        <p className="text-gray-400 mb-12 max-w-2xl">
          For inquiries about commissions, collaborations, or philosophical debates
        </p>
        
        <SectionDivider />
        
        {submitSuccess ? (
          <div className="max-w-3xl mx-auto text-center py-12">
            <CyberText className="text-2xl mb-4">MESSAGE SENT</CyberText>
            <p className="text-gray-300 mb-8">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
            <GlowButton 
              onClick={() => setSubmitSuccess(false)}
              className="px-8 py-3"
            >
              SEND ANOTHER MESSAGE
            </GlowButton>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
                  NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-gray-800 border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-purple-900/30 focus:ring-purple-500'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-gray-800 border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-purple-900/30 focus:ring-purple-500'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm text-gray-400 mb-1">
                SUBJECT *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full bg-gray-800 border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 ${
                  errors.subject 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-purple-900/30 focus:ring-purple-500'
                }`}
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
                MESSAGE *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`w-full bg-gray-800 border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 ${
                  errors.message 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-purple-900/30 focus:ring-purple-500'
                }`}
                placeholder="Your message..."
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>
            
            {errors.submit && (
              <p className="text-red-400 text-sm">{errors.submit}</p>
            )}
            
            <GlowButton 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 ${isSubmitting ? 'opacity-70' : ''}`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  SENDING...
                </span>
              ) : (
                'SEND MESSAGE'
              )}
            </GlowButton>
          </form>
        )}
        
        <SectionDivider />
        
        <div className="max-w-3xl mx-auto mt-12">
          <CyberText className="text-xl mb-4">OTHER WAYS TO CONNECT</CyberText>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-purple-900/30 rounded-lg p-6 hover:border-purple-500/50 transition-colors">
              <h3 className="font-mono text-purple-400 mb-2">EMAIL</h3>
              <a href="mailto:contact@marcle.art" className="text-gray-300 hover:text-white transition-colors">
                contact@marcle.art
              </a>
            </div>
            <div className="border border-purple-900/30 rounded-lg p-6 hover:border-purple-500/50 transition-colors">
              <h3 className="font-mono text-purple-400 mb-2">SOCIAL</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
            <div className="border border-purple-900/30 rounded-lg p-6 hover:border-purple-500/50 transition-colors">
              <h3 className="font-mono text-purple-400 mb-2">STUDIO VISITS</h3>
              <p className="text-gray-300">
                By appointment only in Berlin
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}