import { useRef, useState } from 'react'
import { HiPaperAirplane, HiXCircle } from 'react-icons/hi'
import toast from 'react-hot-toast'

import { sendEmail } from '../../utils/email'

const INITIAL = { name: '', email: '', subject: '', message: '' }
const FIELD_ORDER = ['name', 'email', 'subject', 'message']
const MIN_MESSAGE = 20

function validate(data) {
    const errors = {}

    if (!data.name.trim()) errors.name = 'Name is required'

    if (!data.email.trim()) {
        errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = 'Enter a valid email'
    }

    if (!data.subject.trim()) errors.subject = 'Subject is required'

    if (!data.message.trim()) {
        errors.message = 'Message is required'
    } else if (data.message.trim().length < MIN_MESSAGE) {
        errors.message = `Minimum ${MIN_MESSAGE} characters required`
    }

    return errors
}

const inputBase =
    'w-full rounded-lg border bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors duration-200 placeholder:text-[var(--text-muted)] focus-visible:ring-[3px]'

const inputClass = (hasError) =>
    `${inputBase} ${
        hasError
            ? 'border-red-500 focus-visible:ring-red-500/25'
            : 'border-[var(--border)] hover:border-[var(--text-muted)] focus:border-[var(--accent)] focus-visible:ring-[color-mix(in_srgb,var(--accent)_25%,transparent)]'
    }`

function Field({ id, label, error, hint, children }) {
    return (
        <div>
            <div className="mb-2 flex items-baseline justify-between gap-3">
                <label htmlFor={id} className="text-sm font-medium text-[var(--text-primary)]">
                    {label}
                </label>
                {hint}
            </div>

            {children}

            {error && (
                <p
                    id={`${id}-error`}
                    role="alert"
                    className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400"
                >
                    <HiXCircle aria-hidden="true" />
                    {error}
                </p>
            )}
        </div>
    )
}

export default function ContactForm() {
    const [formData, setFormData] = useState(INITIAL)
    const [errors, setErrors] = useState({})
    const [sending, setSending] = useState(false)
    const [honeypot, setHoneypot] = useState('')
    const formRef = useRef(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => (prev[name] ? { ...prev, [name]: '' } : prev))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (sending) return

        const validationErrors = validate(formData)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            const firstInvalid = FIELD_ORDER.find((key) => validationErrors[key])
            formRef.current?.elements[firstInvalid]?.focus()
            return
        }

        // Honeypot spam protection
        if (honeypot) {
            toast.success('Message sent successfully!')
            setFormData(INITIAL)
            return
        }

        try {
            setSending(true)

            await sendEmail({
                name: formData.name.trim(),
                email: formData.email.trim(),
                subject: formData.subject.trim(),
                message: formData.message.trim(),
            })

            toast.success('Message sent successfully!')
            setFormData(INITIAL)
            setErrors({})
        } catch (error) {
            console.error(error)
            toast.error('Failed to send. Please try again or email me directly.')
        } finally {
            setSending(false)
        }
    }

    const describe = (name) => (errors[name] ? `${name}-error` : undefined)
    const messageLength = formData.message.trim().length

    return (
        <div className="glass-card p-6 sm:p-8">
            {/* Header */}
            <div className="mb-7">
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    Send a message
                </h3>
                <p className="mt-1.5 text-sm text-[var(--text-secondary)]">
                    Fill out the form and I’ll get back to you soon.
                </p>
            </div>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                aria-busy={sending}
                className="relative space-y-5"
            >
                {/* Honeypot: insaan ko nazar nahi aata */}
                <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
                    <label htmlFor="website">Website</label>
                    <input
                        id="website"
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                    />
                </div>

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="name" label="Full name" error={errors.name}>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            autoComplete="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={describe('name')}
                            className={inputClass(errors.name)}
                        />
                    </Field>

                    <Field id="email" label="Email address" error={errors.email}>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={describe('email')}
                            className={inputClass(errors.email)}
                        />
                    </Field>
                </div>

                {/* Subject */}
                <Field id="subject" label="Subject" error={errors.subject}>
                    <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Project inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.subject)}
                        aria-describedby={describe('subject')}
                        className={inputClass(errors.subject)}
                    />
                </Field>

                {/* Message */}
                <Field
                    id="message"
                    label="Message"
                    error={errors.message}
                    hint={
                        <span
                            className={`font-mono text-[11px] ${
                                messageLength >= MIN_MESSAGE
                                    ? 'text-[var(--accent)]'
                                    : 'text-[var(--text-muted)]'
                            }`}
                        >
                            {messageLength >= MIN_MESSAGE
                                ? `${messageLength} chars`
                                : `${messageLength}/${MIN_MESSAGE} min`}
                        </span>
                    }
                >
                    <textarea
                        id="message"
                        rows={6}
                        name="message"
                        placeholder="Tell me about your project or opportunity..."
                        value={formData.message}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={describe('message')}
                        className={`${inputClass(errors.message)} min-h-36 resize-none`}
                    />
                </Field>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {sending ? (
                        <>
                            <span
                                aria-hidden="true"
                                className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                            />
                            Sending...
                        </>
                    ) : (
                        <>
                            <HiPaperAirplane aria-hidden="true" className="rotate-90 text-base" />
                            Send message
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}