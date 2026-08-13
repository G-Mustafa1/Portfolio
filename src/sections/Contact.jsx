import { motion } from 'framer-motion'
import { HiMail } from 'react-icons/hi'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'


export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-max">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-primary-50 dark:bg-primary-900/30
            border border-primary-200 dark:border-primary-800/40
            text-primary-600 dark:text-primary-400
            text-sm font-medium mb-4"
          >
            <HiMail />
            Get In Touch
          </span>

          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>

          <p className="section-subtitle">
            Have a project or opportunity? Feel free to contact me anytime.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-8">

          <div className="lg:col-span-2">
            < ContactInfo/>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}