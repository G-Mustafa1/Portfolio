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

export const CONTACT_INFO = [
    {
        icon: HiMail,
        label: 'Email',
        value: 'gmustufa1255@gmail.com',
        link: 'mailto:gmustufa1255@gmail.com',
        color: 'text-red-500',
        bg: 'bg-red-50 dark:bg-red-900/20',
        border: 'border-red-100 dark:border-red-800/30',
        desc: 'Drop me an email anytime',
    },
    {
        icon: HiLocationMarker,
        label: 'Location',
        value: 'Karachi, Sindh, Pakistan',
        link: 'https://maps.google.com/?q=Karachi,Pakistan',
        color: 'text-blue-500',
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-100 dark:border-blue-800/30',
        desc: 'Available on-site & hybrid',
    },
    {
        icon: HiClock,
        label: 'Availability',
        value: 'Open to Work',
        link: null,
        color: 'text-accent-500',
        color: 'text-accent-500',
        bg: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-100 dark:border-green-800/30',
        desc: 'Actively seeking opportunities',
    },
    {
        icon: HiChat,
        label: 'Response Time',
        value: 'Within 24 hours',
        link: null,
        color: 'text-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-100 dark:border-purple-800/30',
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
        color: 'hover:text-blue-600 dark:hover:text-blue-400',
        bg: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
        border: 'hover:border-blue-300 dark:hover:border-blue-700',
    },

    {
        icon: SiWhatsapp,
        label: 'WhatsApp',
        href: 'https://wa.me/923158965825',
        username: 'Chat on WhatsApp',
        color: 'hover:text-green-600 dark:hover:text-green-400',
        bg: 'hover:bg-green-50 dark:hover:bg-green-900/20',
        border: 'hover:border-green-300 dark:hover:border-green-700',
    },
]