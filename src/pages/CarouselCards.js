import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import img5 from "../layoutComponent/assets/images/image5.png";
import VideoPlayer from "./VideoSection";
export default function CarouselCards() {
  const [width, setWidth] = useState();
  const carousel = useRef();

 
    useEffect(() => {
        const paddingRigth = 100;
        const { scrollWidth, offsetWidth } = carousel.current;
        setWidth(scrollWidth - offsetWidth + paddingRigth);
    }, []);

    return (
        <>
            <motion.div ref={carousel} className="carousel bg_dark parallax-home mt-5">
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="inner-carousel"
                >
                    {[...Array(10).keys()].map((item, key) => (
                        <motion.div className="card bg_dark me-5 ms-5 " style={{ minWidth: "22vw" }} key={key}>
                            <img src={img5} className="card-img-top" alt="..." style={{ cursor: 'default' }} />
                            <div className="card-body text-light">
                                <h5 className="card-title Gilroy-SemiBold ">Blog Title</h5>
                                <p className="card-text text-light Gilroy-Light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt scelerisque nisl. Sed tincidunt bibendum erat, id viverra diam dictum iaculis. Curabitur ante mi, vestibulum nec risus quis, ornare porta ex. Nullam tincidunt enim in mi fermentum ultricies. Nulla dignissim a sapien convallis rhoncus. Maecenas posuere mi vitae eleifend lacinia.</p>
                            </div>
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>
            <VideoPlayer/>
            <motion.div className="m-5 p-5 ">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0 }}
                    transition={{ bounce: 2, duration: 1 }}
                    style={{ fontSize: "6vw" }} className="text-center ">Looks so Good on the Outside, It'll Make You Feel Good Inside</motion.p>
            </motion.div>
        </>
    )
}
