import { motion } from 'framer-motion'
import { HiDownload, HiMail } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

export default function HeroButtons() {
    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
    }
    return (
        <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mb-8"
        >
            <motion.a
                href="#contact"
                onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
            >
                <HiMail className="text-base" />
                Hire Me
            </motion.a>

            <motion.a
                href="https://github.com/G-Mustafa1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary"
            >
                <FaGithub className="text-base" />
                View GitHub
            </motion.a>

            <motion.a
                href="/cv.pdf"
                download="Ghulam_Mustafa_CV.pdf"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                      bg-gray-100 dark:bg-gray-800
                      text-gray-700 dark:text-gray-300
                      text-sm font-medium
                      hover:bg-gray-200 dark:hover:bg-gray-700
                      transition-all duration-300 hover:-translate-y-0.5"
            >
                <HiDownload className="text-base" />
                Resume
            </motion.a>
        </motion.div>
    )
}