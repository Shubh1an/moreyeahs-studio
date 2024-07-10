import { motion } from "framer-motion";
import React from "react";
import footerlogo from "../layoutComponent/assets/images/MOREYEAHSSTUDIO.png";
import arrowicon from "../layoutComponent/assets/images/Vector.png";
export default function FooterSection() {
  const placeholderText = {
    type: "paragraph",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt scelerisque nisl. Sed tincidunt bibendum erat, id viverra diam dictum iaculis. Curabitur ante mi, vestibulum nec risus quis, ornare porta ex.",
    color: "black",
  };
  return (
    <>
      <div className="flex">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="footer1"
        >
          <div className="col-lg-4"></div>
          <motion.div
            className="footerhead1 col-lg-10 col-md-12 col-xs-12 text-dark"
            initial={{ opacity: 0 }}
            transition={{ bounce: 2, duration: 1.2 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            Let's Reach Some Untouchable Heights
          </motion.div>

          <motion.p
            className="footerp col-lg-10 col-md-12 col-xs-12 text-dark"
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            {placeholderText.text}
          </motion.p>


          <motion.div className="col-md-4 col-lg-4 col-sm-6  m-3">
            <motion.button
              className="btn btn-dark text-light rounded-pill m-1 p-1"
              whileHover={{ scale: 0.8 }}
            >
              <span className="mediumbtn m-4">
                HIRE US TODAY! <img src={arrowicon} style={{ width: "15%" }} alt="" />
              </span>
            </motion.button>
          </motion.div>
          <div className="footer">
            <div className="row m-5">
              <div className="col-4">
                <img
                  src={footerlogo}
                  alt="footerlogo"
                  width={"auto"}
                  height="auto"
                  className="inline-block"
                  // style={{ display: "inline-block" }}
                />
              </div>
              <div className="col-4 d-flex flex-row-reverse text-dark text-end">
                <li className="navbar-link linkfooter">WORK</li>
                <li className="navbar-link linkfooter">BLOG</li>
                <li className="navbar-link linkfooter">SERVICE</li>

              </div>
              <div className="col-4 text-center ">
                <a href="/">
                  <li className="text-dark">CONTACT</li>
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </>
  );
}
