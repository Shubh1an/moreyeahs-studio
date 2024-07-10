import React from 'react'
import {
    motion,
    AnimatePresence,
    useTransform,
    useScroll
} from "framer-motion";

export default function TextComp({ text, size, color }) {
    const [isComplete, setIsComplete] = React.useState(false);
    const { scrollYProgress } = useScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.3], [0, 2]);
    const textStyle = {
        fontSize: size,
        color: color,
        marginTop: "5rem",
        fontFamily: 'Gilroy-Medium'
    }
    React.useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);
    return (
        <AnimatePresence>
            <motion.p style={textStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: isComplete ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
            >
                {text}
            </motion.p>
        </AnimatePresence>
    )
}
