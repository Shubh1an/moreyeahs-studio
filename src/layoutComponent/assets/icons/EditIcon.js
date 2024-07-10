import React from 'react'
import { motion } from 'framer-motion'

export default function EditIcon() {
    return (
        <motion.svg
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 22.1901V26.7501C0.5 27.1701 0.83 27.5001 1.25 27.5001H5.81C6.005 27.5001 6.2 27.4251 6.335 27.2751L22.715 10.9101L17.09 5.28509L0.725 21.6501C0.575 21.8001 0.5 21.9801 0.5 22.1901ZM27.065 6.56009C27.65 5.97509 27.65 5.03009 27.065 4.44509L23.555 0.935088C22.97 0.350088 22.025 0.350088 21.44 0.935088L18.695 3.68009L24.32 9.30509L27.065 6.56009V6.56009Z" fill="white" />
        </motion.svg>

    )
}
