import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import {
    HiMail,
    HiPaperAirplane,
    HiXCircle,
    HiCode,
    HiChat,
} from 'react-icons/hi'

import toast from 'react-hot-toast'

import { sendEmail } from '../../utils/email'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [errors, setErrors] = useState({})
    const [sending, setSending] = useState(false)

    // Handle Change
    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value,
        })

        setErrors({
            ...errors,
            [name]: '',
        })
    }

    // Submit
    const handleSubmit = async (e) => {
        e.preventDefault()

        const validate = () => {
            const newErrors = {}

            if (!formData.name.trim()) {
                newErrors.name = 'Name is required'
            }

            if (!formData.email.trim()) {
                newErrors.email = 'Email is required'
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = 'Enter a valid email'
            }

            if (!formData.subject.trim()) {
                newErrors.subject = 'Subject is required'
            }

            if (!formData.message.trim()) {
                newErrors.message = 'Message is required'
            } else if (formData.message.trim().length < 20) {
                newErrors.message = 'Minimum 20 characters required'
            }

            return newErrors
        }

        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        try {
            setSending(true)

            await sendEmail(formData)

            toast.success('Message sent successfully!')

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            })

            setErrors({})
        } catch (error) {
            console.log(error)
            toast.error('Failed to send message')
        } finally {
            setSending(false)
        }
    }

    // Input Classes
    const inputClass = (error) => `
    w-full px-4 py-3 rounded-xl text-sm
    bg-gray-50 dark:bg-gray-800/60
    border outline-none transition-all duration-300
    text-gray-800 dark:text-gray-200
    placeholder:text-gray-400 dark:placeholder:text-gray-500
    ${error
            ? 'border-red-400 focus:ring-2 focus:ring-red-500/20'
            : 'border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500'
        }
  `

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="glass-card rounded-3xl p-6 sm:p-8">

                {/* Header */}
                <div className="mb-7">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                        Send Message
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Fill out the form and I’ll get back to you soon.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-5">

                        {/* Name */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                                Full Name
                            </label>

                            <div className="relative">
                                <HiCode className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`${inputClass(errors.name)} pl-11`}
                                />
                            </div>

                            <AnimatePresence>
                                {errors.name && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="text-red-500 text-xs mt-1 flex items-center gap-1"
                                    >
                                        <HiXCircle />
                                        {errors.name}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                                Email Address
                            </label>

                            <div className="relative">
                                <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`${inputClass(errors.email)} pl-11`}
                                />
                            </div>

                            <AnimatePresence>
                                {errors.email && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="text-red-500 text-xs mt-1 flex items-center gap-1"
                                    >
                                        <HiXCircle />
                                        {errors.email}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                            Subject
                        </label>

                        <div className="relative">
                            <HiChat className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                            <input
                                type="text"
                                name="subject"
                                placeholder="Project Inquiry"
                                value={formData.subject}
                                onChange={handleChange}
                                className={`${inputClass(errors.subject)} pl-11`}
                            />
                        </div>

                        <AnimatePresence>
                            {errors.subject && (
                                <motion.p
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-red-500 text-xs mt-1 flex items-center gap-1"
                                >
                                    <HiXCircle />
                                    {errors.subject}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                            Message
                        </label>

                        <textarea
                            rows={6}
                            name="message"
                            placeholder="Write your message here..."
                            value={formData.message}
                            onChange={handleChange}
                            className={`${inputClass(errors.message)} resize-none`}
                        />

                        <AnimatePresence>
                            {errors.message && (
                                <motion.p
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-red-500 text-xs mt-1 flex items-center gap-1"
                                >
                                    <HiXCircle />
                                    {errors.message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Button */}
                    <motion.button
                        type="submit"
                        disabled={sending}
                        whileHover={!sending ? { scale: 1.02 } : {}}
                        whileTap={!sending ? { scale: 0.98 } : {}}
                        className={`w-full py-4 rounded-2xl font-semibold text-white
            flex items-center justify-center gap-3 transition-all duration-300
            ${sending
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-primary-500 to-accent-500 hover:to-accent-600 hover:from-primary-600 shadow-xl shadow-primary-500/20'
                            }`}
                    >
                        {sending ? (
                            'Sending...'
                        ) : (
                            <>
                                <HiPaperAirplane className="rotate-90 text-lg" />
                                Send Message
                            </>
                        )}
                    </motion.button>

                </form>
            </div>
        </motion.div>
    )
}