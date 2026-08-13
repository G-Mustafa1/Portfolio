import { motion } from 'framer-motion'
import { CONTACT_INFO, SOCIALS } from '../../data/contactData'

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">

      {/* Availability Card */}
      <div
        className="glass-card rounded-2xl p-5
        border border-green-200/40 dark:border-green-800/30"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="relative flex h-3 w-3">
            <span
              className="animate-ping absolute inline-flex h-full w-full
              rounded-full bg-green-400 opacity-75"
            />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
          </div>

          <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
            Available For Work
          </h3>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Currently available for Frontend & MERN Stack opportunities.
        </p>
      </div>

      {/* Contact Info */}
      {CONTACT_INFO.map((item, index) => {
        const Icon = item.icon

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`glass-card rounded-2xl p-4 flex items-start gap-4 border ${item.border}`}
          >
            <div
              className={`w-11 h-11 rounded-xl border flex items-center justify-center
              ${item.bg} ${item.border}`}
            >
              <Icon className={`${item.color} text-lg`} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                {item.label}
              </p>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold text-sm ${item.color}`}
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-semibold text-sm text-gray-800 dark:text-gray-100">
                  {item.value}
                </p>
              )}

              <p className="text-xs text-gray-400 mt-1">
                {item.desc}
              </p>
            </div>
          </motion.div>
        )
      })}

      {/* Social Links */}
      <div className="flex flex-col gap-3 pt-2">
        {SOCIALS.map((social, index) => {
          const Icon = social.icon

          return (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              whileHover={{ y: -2 }}
              className={`glass-card rounded-2xl p-4 flex items-center gap-3 border
              border-gray-200 dark:border-gray-700
              ${social.bg}`}
            >
              <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <Icon className={`text-lg ${social.color}`} />
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  {social.label}
                </p>

                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                  {social.username}
                </p>
              </div>
            </motion.a>
          )
        })}
      </div>
    </div>
  )
}