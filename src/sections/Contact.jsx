import { motion } from 'framer-motion'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
}

const viewport = { once: true, amount: 0.15 }

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left: intro + details */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <span className="section-eyebrow">Contact</span>
            <h2 className="section-title max-w-md">Have a project in mind?</h2>
            <p className="mb-10 max-w-md text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
              Whether it’s an opportunity, a project or just a question, send me
              a message and I’ll get back to you.
            </p>

            <ContactInfo />
          </motion.div>

          {/* Right: form */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}