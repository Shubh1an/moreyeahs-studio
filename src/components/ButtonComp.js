import React from "react";
import { motion } from "framer-motion";

export default function ButtonComp(props) {
  const { Title, color } = props;

  const boxButton = {
    width: "100px",
    height: "40px",
    borderRadius: "25px",
    background: color,
    cursor: "pointer",
    color: "black",
    // transform: " translate(1700%, -100%)",
  };

  return (
    <motion.button className="rounded-pill me-2" type="button"
       style={boxButton}
    //   whileHover={{ scale: 0.2 }}
    //   whileTap={{ scale: 0.9 }}
    //   transition={{ type: "spring" }}
    >
      {Title}
    </motion.button>
  );
}
