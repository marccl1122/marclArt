import { useState, ChangeEvent, FormEvent } from 'react'
import Layout from '../components/Layout'
import CyberText from '../components/ui/CyberText'
import GlowButton from '../components/ui/GlowButton'
import SectionDivider from '../components/ui/SectionDivider'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

type Errors = {
  name?: string
  email?: string
  subject?: string
  message?: string
  submit?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Errors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name as keyof Errors]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name as keyof Errors]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Errors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.length < 20) newErrors.message = 'Message must be at least 20 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
    }, 1200)
  }

  return (
    <Layout title="Contact | Marc Le">
      <div className="max-w-5xl mx-auto px-4 py-24">
        <div className="glass-card shadow-glow p-12 mb-16 text-center flex flex-col gap-4">
          <CyberText className="text-4xl mb-2 text-glow">CONTACT</CyberText>
          <p className="text-accent-cyan mb-2 max-w-2xl mx-auto text-lg">
            For inquiries about commissions, collaborations, or philosophical debates
          </p>
        </div>
        <SectionDivider />
        {submitSuccess ? (
          <div className="max-w-3xl mx-auto text-center py-12 glass-card shadow-glow flex flex-col gap-6">
            <CyberText className="text-2xl mb-4 text-glow">MESSAGE SENT</CyberText>
            <p className="text-accent-cyan mb-8 text-lg">
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
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto glass-card shadow-glow p-12 grid gap-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-accent-cyan mb-2 font-mono text-lg">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full rounded-xl bg-bg-glass border border-accent-cyan/30 p-4 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan text-lg ${errors.name ? 'border-red-500' : ''}`}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <div id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</div>}
              </div>
              <div>
                <label htmlFor="email" className="block text-accent-cyan mb-2 font-mono text-lg">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-xl bg-bg-glass border border-accent-cyan/30 p-4 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan text-lg ${errors.email ? 'border-red-500' : ''}`}
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <div id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</div>}
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-accent-cyan mb-2 font-mono text-lg">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full rounded-xl bg-bg-glass border border-accent-cyan/30 p-4 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan text-lg ${errors.subject ? 'border-red-500' : ''}`}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject && <div id="subject-error" className="text-red-500 text-xs mt-1">{errors.subject}</div>}
            </div>
            <div>
              <label htmlFor="message" className="block text-accent-cyan mb-2 font-mono text-lg">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`w-full rounded-xl bg-bg-glass border border-accent-cyan/30 p-4 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan text-lg ${errors.message ? 'border-red-500' : ''}`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && <div id="message-error" className="text-red-500 text-xs mt-1">{errors.message}</div>}
            </div>
            <GlowButton 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 text-lg ${isSubmitting ? 'opacity-70' : ''}`}
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
        <div className="max-w-3xl mx-auto mt-16 grid md:grid-cols-3 gap-8">
          <div className="glass-card shadow-glow border border-accent-cyan/30 rounded-2xl p-8 hover:scale-105 transition-transform duration-300 text-center flex flex-col gap-2">
            <h3 className="font-mono text-accent-cyan mb-2 text-lg">EMAIL</h3>
            <a href="mailto:contact@marcle.art" className="text-accent-blue hover:text-accent-cyan transition-colors text-lg">
              contact@marcle.art
            </a>
          </div>
          <div className="glass-card shadow-glow border border-accent-cyan/30 rounded-2xl p-8 hover:scale-105 transition-transform duration-300 text-center flex flex-col gap-2">
            <h3 className="font-mono text-accent-cyan mb-2 text-lg">SOCIAL</h3>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-accent-blue hover:text-accent-cyan transition-colors text-lg">Instagram</a>
              <a href="#" className="text-accent-blue hover:text-accent-cyan transition-colors text-lg">Twitter</a>
            </div>
          </div>
          <div className="glass-card shadow-glow border border-accent-cyan/30 rounded-2xl p-8 hover:scale-105 transition-transform duration-300 text-center flex flex-col gap-2">
            <h3 className="font-mono text-accent-cyan mb-2 text-lg">STUDIO VISITS</h3>
            <p className="text-accent-blue text-lg">
              By appointment only in Berlin
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}