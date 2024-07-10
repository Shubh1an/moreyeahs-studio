import React from 'react'
import { motion } from 'framer-motion'

import { WifiFairIcon } from '../layoutComponent/assets/icons/SvgIcons';

const containerVariants = {
    initial: {},
    animate: {},
}

export default function Buttonlayer() {
    const authors = ['Company 1', 'Company 2', 'Company 2', 'Company 1', 'Company 2', 'Company 2'];
    const Variants = {
        initial: { y: -1000 },
        animate: { y: 100 },
        transition: {
            type: "tween",
            duration: 1,
            delay: 0.4
        },
    };
    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            <motion.div variants={Variants} className='d-flex' transition={{ type: "tween",duration: 0.4,delay: 0.5}}>
                {authors.map((author, i) => {
                    return (
                        <motion.div className='col text-center'
                            whileHover={{ scale: 1.3, color: '#f8e112', originX: 0 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            key={i} >
                            <span className="fs-4"><WifiFairIcon stroke="#f8e112" />{author}</span>
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    )
}
