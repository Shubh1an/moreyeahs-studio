import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';
import OFF_Bulb from "../layoutComponent/assets/images/OffBulb30.png";
import ON_Bulb from "../layoutComponent/assets/images/OnBulb30.png";

// function useParallax(value, distance) {
//   return useTransform(value, [2.72, 0], [-distance, distance - 500]);
// }

export default function Bulblayer() {
  // const carouselRef = useRef(null)
  const inputRef = useRef();
  // const [yPosition, setYPosition] = useState()
  const [blink, setBlink] = useState(false)
  // const { scrollY } = useScroll({
  //   target: carouselRef,
  //   offset: ["start end", "end end"]
  // });
  const [ref1, inView1] = useInView()
  const [ref2, inView2] = useInView()

  // const scrollHandler = _ => {
  //   setYPosition(inputRef.current.getBoundingClientRect().y)
  // };

  useEffect(() => {
    if (inView2) {
      setBlink(true)
      setTimeout(() => {
        setBlink(false)
      }, 1000);
    }
    // window.addEventListener("scroll", scrollHandler, true);
    return () => {
      // window.removeEventListener("scroll", scrollHandler, true);
    };
  }, [inView2]);

 
  return (
    <>
      <div id="rr" ref={inputRef} className="parallax-home" style={{  background: `${(inView2) ? 'black' : ""}` }}>
        <div >
          <div className="d-flex align-items-center text-start  text-dark wait-div " >
            <div className="col-sm-6 col-md-3 col-lg-3  col-xl-3 pe-0 my-0">
              <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.6 }}
              >
                <motion.p className="heading1" style={{ color: `${(inView2) ? 'white' : ""}` }}>
                  WAIT!
                </motion.p>
              </motion.div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 ">
              <motion.div className="">
                <div className="line_text" style={{ color: `${(inView2) ? 'white' : "black"}` }}>SCROLL TO LIGHT YOUR KNOWLEDGE BULB </div>
                <div className="line" style={{ background: `${(inView2) ? 'white' : ""}` }}></div>
              </motion.div>
            </div>
            <div style={{ paddingTop: "6.3%" }} className="col-sm-6 col-md-3 col-lg-3  col-xl-3 my-0 ">
              <motion.div
                className="d-flex justify-content-end"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.6 }}
              >
                <motion.p className="heading2" style={{ color: `${(inView2) ? 'white' : ""}` }}>
                  WE STILL
                </motion.p>
              </motion.div>
              <div className=" text-end align-item-start my-0" >
                <motion.div
                  className=""
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  <motion.p className="heading2 my-0" style={{ color: `${(inView2) ? 'white' : ""}` }}>
                    HAVE MORE
                  </motion.p>
                </motion.div>
              </div>
            </div>

          </div>
          <div className="divisionBulb">
            <motion.img style={{
              width: "100%",
              height: "100%",
            }} src={!inView2 ? OFF_Bulb : ON_Bulb} alt="" />
            <motion.svg ref={ref2}
              className={blink ? 'blink Svgglow' : 'Svgglow'}
              viewBox="0 0 1178 1178"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              opacity={inView1 ? '1' : '0'}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
            >
              <path
                style={{ mixBlendMode: "screen" }}
                d="M1005.28 1005.1C1235.08 775.331 1235.08 402.802 1005.28 173.033C775.48 -56.7357 402.897 -56.7356 173.094 173.033C-56.7083 402.802 -56.7083 775.33 173.094 1005.1C402.897 1234.87 775.48 1234.87 1005.28 1005.1Z"
                fill="url(#paint0_radial_420_1318)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_420_1318"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(589.195 589.069) rotate(180) scale(588.446 588.36)"
                >
                  <stop stopColor="#F5FF71" />
                  <stop offset="0.17" stopColor="#C4CC5A" />
                  <stop offset="0.47" stopColor="#717534" />
                  <stop offset="0.72" stopColor="#343618" />
                  <stop offset="0.91" stopColor="#0E0E06" />
                  <stop offset="1" />
                </radialGradient>
              </defs>
            </motion.svg>

          </div>
        </div>
        <div className="text-start ps-5 d-flex flex-column bg_dark thanks-div" >
          <div className="hlight mt-5 pt-5">
            <p className="" >Thanks for</p>
          </div>
          <div className="">
            <p className="hlight1" >lightning</p>
          </div>

          <div className="hlight3 ">
            <p className="" > your knowledge </p>
            <p className="hlight1" ref={ref1}>bulb</p>
          </div>
        </div>

      </div >


    </>
  );
}
