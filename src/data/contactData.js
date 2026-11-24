import {
    HiMail,
    HiLocationMarker,
    HiClock,
    HiChat,
} from 'react-icons/hi'
import {
    FaGithub,
    FaLinkedinIn,
} from 'react-icons/fa'
import { SiWhatsapp } from 'react-icons/si'

export const CONTACT_INFO = [
    {
        icon: HiMail,
        label: 'Email',
        value: 'gmustufa1255@gmail.com',
        link: 'mailto:gmustufa1255@gmail.com',
        color: 'text-primary-700 dark:text-primary-300',
        bg: 'bg-primary-50 dark:bg-primary-900/25',
        border: 'border-primary-200 dark:border-primary-800/60',
        desc: 'Drop me an email anytime',
    },
    {
        icon: HiLocationMarker,
        label: 'Location',
        value: 'Karachi, Sindh, Pakistan',
        link: 'https://maps.google.com/?q=Karachi,Pakistan',
        color: 'text-primary-700 dark:text-primary-300',
        bg: 'bg-primary-50 dark:bg-primary-900/25',
        border: 'border-primary-200 dark:border-primary-800/60',
        desc: 'Available on-site & hybrid',
    },
    {
        icon: HiClock,
        label: 'Availability',
        value: 'Open to Work',
        link: null,
        color: 'text-primary-700 dark:text-primary-300',
        bg: 'bg-primary-50 dark:bg-primary-900/25',
        border: 'border-primary-200 dark:border-primary-800/60',
        desc: 'Actively seeking opportunities',
    },
    {
        icon: HiChat,
        label: 'Response Time',
        value: 'Within 24 hours',
        link: null,
        color: 'text-primary-700 dark:text-primary-300',
        bg: 'bg-primary-50 dark:bg-primary-900/25',
        border: 'border-primary-200 dark:border-primary-800/60',
        desc: 'I reply to all messages',
    },
]

export const SOCIALS = [
    {
        icon: FaGithub,
        label: 'GitHub',
        href: 'https://github.com/G-Mustafa1',
        username: '@G-Mustafa1',
        color: 'hover:text-gray-900 dark:hover:text-white',
        bg: 'hover:bg-gray-100 dark:hover:bg-gray-800',
        border: 'hover:border-gray-400 dark:hover:border-gray-500',
    },

    {
        icon: FaLinkedinIn,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ghulam-mustufa',
        username: 'ghulam-mustufa',
        color: 'hover:text-primary-700 dark:hover:text-primary-300',
        bg: 'hover:bg-primary-50 dark:hover:bg-primary-900/30',
        border: 'hover:border-primary-300 dark:hover:border-primary-700',
    },

    {
        icon: SiWhatsapp,
        label: 'WhatsApp',
        href: 'https://wa.me/923158965825',
        username: 'Chat on WhatsApp',
        color: 'hover:text-primary-700 dark:hover:text-primary-300',
        bg: 'hover:bg-primary-50 dark:hover:bg-primary-900/30',
        border: 'hover:border-primary-300 dark:hover:border-primary-700',
    },
]