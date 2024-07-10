import { motion } from "framer-motion";
import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Banner from "../layoutComponent/assets/images/Banner.png";
import imgrec from "../layoutComponent/assets/images/Rectangle.png";
import Buttonlayer from "./Buttonlayer";
import Texthome from "./Texthome";
import UmbrellaSection from "./UmbrellaSection";
export default function Home() {
  const [hover, setHover] = useState({ opacity: 0.8 });
  const placeholderText = {
    type: "paragraph",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut nisl faucibus, ultrices ligula quis, tempus arcu. Curabitur sed tristique",
  };
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.0025,
      },
    },
  };
  return (
    <section className="container-bg">
      <div className="d-flex">
        <Col xs={1} md={1} sm={1} lg={1}></Col>
        <Col xs={12} md={2} sm={2} lg={2}>
          <motion.div initial="hidden" animate={"visible"} variants={container}>
            <motion.img src={imgrec} width={"auto"} height="auto" />
            <div>
              <motion.span
                animate={{
                  color: ["#FFFFE0", "#FFFF00", "#FFFF00"],
                }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
                className="headbanner"
              >
                Moreyeahs Studio
              </motion.span>
              &nbsp;
              <motion.span initial={{ opacity: 0 }} animate={{ y: 0, easeOut: [0.455, 0.03, 0.515, 0.955], opacity: 1 }} className="parabanner"
                transition={{ ease: "easeOut", duration: 1 }}>{placeholderText.text}</motion.span>
            </div>
          </motion.div>
        </Col>
        <Col xs={2} md={2} sm={2} lg={3}></Col>
        <Col xs={12} md={4} sm={4} lg={4} className="setindex">
          <motion.div initial="initial" animate="animate" className="container">
            <motion.img
              src={Banner}
              alt="Snow"
              className="Bannerimg"
              animate={{
                rotate: [0, 0, -20],
              }}
              onHoverStart={(e) => {
                setHover({ opacity: 0.3 });
              }}
              onHoverEnd={(e) => {
                setHover({ opacity: 0.8 });
              }}
              transition={{
                duration: 1,
              }}
              whileHover={{ scale: 1.2, cursor: "pointer" }}
              viewport={{ once: true }}
            />
            <Texthome hover={hover} />
          </motion.div>
        </Col>

      </div>
      <div className="d-flex">
        <motion.p
          className=" pride"
          animate={{
            color: ["#FFFFFF", "#FFFF00", "#FFFF00"],
          }}
          transition={{ duration: 2, repeat: 2, repeatDelay: 1 }}
        >
          With Pride
        </motion.p>
      </div>
      <Buttonlayer />
      <UmbrellaSection /> 

    </section>


  );
}
