import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React from 'react';

import img1 from '../layoutComponent/assets/images/begig.png';
import img2 from '../layoutComponent/assets/images/crackerjack.png';
import img from '../layoutComponent/assets/images/projectImg.png';
import { V1, V2 } from "../layoutComponent/assets/variant";

function useParallax(value, distance) {
    return useTransform(value, [0.7, 0], [-distance, distance]);
}

export default function ScrollImg() {
    const { scrollYProgress } = useScroll();
    const y = useParallax(scrollYProgress, 800);
    const physics = { damping: 8, mass: 1.5, stiffness: 20 } 
    const spring = useSpring(y, physics)

    return (
        <>
            <div style={{ position: "relative"}} className="content">
                <div className="text-dark img-card work"  >
                    <motion.div
                        className="card-container"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.6 }}>
                        <motion.p className='text-center work_txt textCss' variants={V1()}>WORK</motion.p>
                        <motion.p className='text-start container textCss1' variants={V2()}>THAT MAKES US BLUSH</motion.p>
                    </motion.div>
                </div>

                <div style={{width:"100%"}} className="img_container " >
                    <div className="d-flex w-100 justify-content-start ">
                        <motion.div className="ms-1 me-auto ps-5" style={{ y: spring,marginLeft:"5%",marginRight:"auto" }}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.7 }}>
                            <motion.img  src={img2} alt="" className='responsive img' />
                        </motion.div>
                    </div>

                    <div className="d-flex w-100 justify-content-end ">
                        <motion.div className="ms-auto me-1 pe-5" style={{ y: spring,}}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.7 }}>
                            <motion.img  src={img1} alt="" className='responsive img ' />
                        </motion.div>
                    </div>

                    <div className="d-flex w-100 justify-content-start ">
                        <motion.div className="ms-1 me-auto ps-5" style={{ y: spring }}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.7 }}>
                            <motion.img  src={img} alt="" className='responsive img' />
                        </motion.div>
                    </div>

                </div>

            </div>
        </>
    )
}
