import { motion } from "framer-motion";

import { Themevariant } from "../layoutComponent/assets/variant";

export default function Texthome(props) {
  return (
    <motion.p className="centered" style={{ opacity: props.hover.opacity,color: 'white' }} variants={Themevariant().imgVariants4(props?.hover)} transition={{
      duration: 1.5,
    }}>DISPLAY</motion.p>
  );
}

