import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiMail,
  HiLocationMarker,
  HiPhone,
  HiPaperAirplane,
  HiCheckCircle,
  HiXCircle,
  HiCode,
  HiClock,
  HiChat,
} from 'react-icons/hi'
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'
import { SiWhatsapp } from 'react-icons/si'
import toast from 'react-hot-toast'

// ── Contact info data ──────────────────────────────────────────────────────
const CONTACT_INFO = [
  {
    icon:    HiMail,
    label:   'Email',
    value:   'gmustufa1255@gmail.com',
    link:    'mailto:gmustufa1255@gmail.com',
    color:   'text-red-500',
    bg:      'bg-red-50 dark:bg-red-900/20',
    border:  'border-red-100 dark:border-red-800/30',
    desc:    'Drop me an email anytime',
  },
  {
    icon:    HiLocationMarker,
    label:   'Location',
    value:   'Karachi, Sindh, Pakistan',
    link:    'https://maps.google.com/?q=Karachi,Pakistan',
    color:   'text-blue-500',
    bg:      'bg-blue-50 dark:bg-blue-900/20',
    border:  'border-blue-100 dark:border-blue-800/30',
    desc:    'Available on-site & hybrid',
  },
  {
    icon:    HiClock,
    label:   'Availability',
    value:   'Open to Work',
    link:    null,
    color:   'text-accent-500',
    bg:      'bg-green-50 dark:bg-green-900/20',
    border:  'border-green-100 dark:border-green-800/30',
    desc:    'Actively seeking opportunities',
  },
  {
    icon:    HiChat,
    label:   'Response Time',
    value:   'Within 24 hours',
    link:    null,
    color:   'text-purple-500',
    bg:      'bg-purple-50 dark:bg-purple-900/20',
    border:  'border-purple-100 dark:border-purple-800/30',
    desc:    'I reply to all messages',
  },
]

const SOCIALS = [
  {
    icon:    FaGithub,
    label:   'GitHub',
    href:    'https://github.com/G-Mustafa1',
    color:   'hover:text-gray-900 dark:hover:text-white',
    bg:      'hover:bg-gray-100 dark:hover:bg-gray-800',
    border:  'hover:border-gray-400 dark:hover:border-gray-500',
    username: '@G-Mustafa1',
  },
  {
    icon:    FaLinkedinIn,
    label:   'LinkedIn',
    href:    'https://www.linkedin.com/in/ghulam-mustufa-',
    color:   'hover:text-blue-600 dark:hover:text-blue-400',
    bg:      'hover:bg-blue-50 dark:hover:bg-blue-900/20',
    border:  'hover:border-blue-300 dark:hover:border-blue-700',
    username: 'ghulam-mustufa-',
  },
  {
    icon:    SiWhatsapp,
    label:   'WhatsApp',
    href:    'https://wa.me/923000000000',
    color:   'hover:text-green-600 dark:hover:text-green-400',
    bg:      'hover:bg-green-50 dark:hover:bg-green-900/20',
    border:  'hover:border-green-300 dark:hover:border-green-700',
    username: 'Chat on WhatsApp',
  },
]

function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required,
  rows,
  icon: Icon,
}) {
  const isTextarea = type === 'textarea'
  const baseClass = `w-full px-4 py-3 rounded-xl text-sm
    bg-gray-50 dark:bg-gray-800/60
    border transition-all duration-200 outline-none
    text-gray-800 dark:text-gray-200
    placeholder:text-gray-400 dark:placeholder:text-gray-600
    ${error
      ? 'border-red-400 dark:border-red-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
      : 'border-gray-200 dark:border-gray-700 focus:border-primary-400 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20'
    }
    ${Icon ? 'pl-11' : ''}`

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1">
        {label}
        {required && <span className="text-red-400 text-xs">*</span>}
      </label>

      <div className="relative">
        {Icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none z-10">
            <Icon className={`text-base transition-colors duration-200
              ${error
                ? 'text-red-400'
                : 'text-gray-400 dark:text-gray-500'
              }`}
            />
          </div>
        )}

        {isTextarea ? (
          <textarea
            name={name}
            rows={rows || 5}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${baseClass} resize-none`}
            style={{ paddingLeft: Icon ? '2.75rem' : '1rem', paddingTop: '0.75rem' }}
          />
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={baseClass}
          />
        )}
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -4 }}
            className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1"
          >
            <HiXCircle className="text-sm flex-shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

function ContactCard({ item, index }) {
  const Icon = item.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={`glass-card rounded-2xl p-4 flex items-start gap-4
        border ${item.border}
        hover:shadow-md transition-all duration-300`}
    >
      <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.border}
        border flex items-center justify-center flex-shrink-0`}>
        <Icon className={`${item.color} text-lg`} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs text-gray-400 dark:text-gray-500 uppercase
          tracking-wide font-medium mb-0.5">
          {item.label}
        </p>
        {item.link ? (
          <a
            href={item.link}
            target={item.link.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className={`text-sm font-semibold ${item.color}
              hover:underline truncate block transition-colors duration-200`}
          >
            {item.value}
          </a>
        ) : (
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">
            {item.value}
          </p>
        )}
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
          {item.desc}
        </p>
      </div>
    </motion.div>
  )
}

// ── Social button ──────────────────────────────────────────────────────────
function SocialButton({ social, index }) {
  const Icon = social.icon
  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -3, scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.97 }}
      className={`flex items-center gap-3 p-4 rounded-2xl
        glass-card
        border border-gray-200 dark:border-gray-700
        ${social.bg} ${social.border} ${social.color}
        text-gray-600 dark:text-gray-400
        transition-all duration-300 group`}
    >
      <div className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800
        flex items-center justify-center flex-shrink-0
        group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-lg" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">
          {social.label}
        </p>
        <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">
          {social.username}
        </p>
      </div>
    </motion.a>
  )
}

// ── Form validation ────────────────────────────────────────────────────────
function validate(fields) {
  const errs = {}
  if (!fields.name.trim())
    errs.name = 'Name is required.'
  if (!fields.email.trim())
    errs.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errs.email = 'Please enter a valid email address.'
  if (!fields.subject.trim())
    errs.subject = 'Subject is required.'
  if (!fields.message.trim())
    errs.message = 'Message is required.'
  else if (fields.message.trim().length < 20)
    errs.message = 'Message must be at least 20 characters.'
  return errs
}


// ── Main Contact ───────────────────────────────────────────────────────────
const INITIAL_FORM = {
  name:    '',
  email:   '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [form,     setForm]     = useState(INITIAL_FORM)
  const [errors,   setErrors]   = useState({})
  const [sending,  setSending]  = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setSending(true)

    const sendPromise = fetch('http://localhost:5000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then(async (res) => {
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Failed to send message')
      return data
    })

    toast.promise(sendPromise, {
      loading: 'Sending your message...',
      success: (data) => {
        setForm(INITIAL_FORM)
        setErrors({})
        setSending(false)
        return data.message || 'Message sent! I\'ll get back to you soon.'
      },
      error: (err) => {
        setSending(false)
        return err.message || 'Could not send message. Please try again.'
      },
    })
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-primary-50 dark:bg-primary-900/30
            border border-primary-200 dark:border-primary-800/50
            text-primary-600 dark:text-primary-400
            text-sm font-medium mb-4">
            <HiMail className="text-base" />
            Get In Touch
          </span>
          <h2 className="section-title">
            Let's{' '}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hello? I'd love to hear
            from you. I'm currently open to new opportunities.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

          {/* ── Left panel (2/5) ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-5
                border border-green-200/50 dark:border-green-800/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full
                    rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3
                    bg-accent-500" />
                </div>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                  Available for Work
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                I'm actively seeking front-end & MERN stack opportunities in{' '}
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Karachi
                </span>{' '}
                — on-site or hybrid. Let's build something amazing together!
              </p>
            </motion.div>

            {/* Contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {CONTACT_INFO.map((item, i) => (
                <ContactCard key={item.label} item={item} index={i} />
              ))}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-xs text-gray-400 dark:text-gray-500
                uppercase tracking-widest font-medium mb-3 px-1">
                Connect with me
              </p>
              <div className="flex flex-col gap-2">
                {SOCIALS.map((s, i) => (
                  <SocialButton key={s.label} social={s} index={i} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right panel — Contact form (3/5) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 h-full">

              {/* Form header */}
              <div className="mb-7">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1.5">
                  Send me a message
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Fill out the form below and I'll reply within 24 hours.
                  All fields marked{' '}
                  <span className="text-red-400">*</span>{' '}
                  are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    label="Full Name"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                    icon={HiCode}
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                    icon={HiMail}
                  />
                </div>

                {/* Subject */}
                <FormField
                  label="Subject"
                  name="subject"
                  placeholder="Project Inquiry / Job Opportunity / Just saying hi..."
                  value={form.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  required
                  icon={HiChat}
                />

                {/* Message */}
                <FormField
                  label="Message"
                  name="message"
                  type="textarea"
                  placeholder="Tell me about your project, idea, or opportunity. The more details, the better!"
                  value={form.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                  rows={6}
                />

                {/* Character count */}
                <div className="flex justify-end -mt-3">
                  <span className={`text-xs font-mono transition-colors duration-200
                    ${form.message.length < 20
                      ? 'text-gray-400 dark:text-gray-600'
                      : 'text-accent-500 dark:text-accent-400'
                    }`}>
                    {form.message.length} chars
                    {form.message.length > 0 && form.message.length < 20 &&
                      ` (${20 - form.message.length} more needed)`
                    }
                  </span>
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={!sending ? { scale: 1.02, y: -1 } : {}}
                  whileTap={!sending  ? { scale: 0.98 }         : {}}
                  className={`w-full flex items-center justify-center gap-3
                    py-4 rounded-2xl font-semibold text-sm
                    transition-all duration-300
                    ${sending
                      ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                      : `bg-gradient-to-r from-primary-500 to-purple-600
                         hover:from-primary-600 hover:to-purple-700
                         text-white shadow-xl shadow-primary-500/25
                         hover:shadow-2xl hover:shadow-primary-500/30`
                    }`}
                >
                  <AnimatePresence mode="wait">
                    {sending ? (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{    opacity: 0, y: -8 }}
                        className="flex items-center gap-3"
                      >
                        {/* Spinner */}
                        <svg
                          className="animate-spin h-4 w-4 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12" cy="12" r="10"
                            stroke="currentColor" strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending your message...
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{    opacity: 0, y: -8 }}
                        className="flex items-center gap-3"
                      >
                        <HiPaperAirplane className="text-base rotate-90" />
                        Send Message
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Footer note */}
                <p className="text-xs text-center text-gray-400 dark:text-gray-600">
                  By sending a message, you agree that I may use your contact
                  info to respond. No spam — ever.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}