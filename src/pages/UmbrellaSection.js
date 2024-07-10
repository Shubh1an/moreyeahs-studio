import { motion } from "framer-motion";
import TextComp from "../components/TextComp";
import UmbrellaIcon from "../layoutComponent/assets/icons/UmbrellaIcon";
import Bulblayer from "./Bulblayer";
import { CardLayer } from "./CardLayer";
import ScrollImg from "./ScrollImg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useEffect } from "react";
export default function UmbrellaSection() {
    const [ref, inView] = useInView();
    const [radius, setRadius] = useState('ellipse(70% 100% at 42.37% 104%)')
    // const ellips = ['ellipse(70% 100% at 42.37% 104%)', 'ellipse(80% 110% at 42.37% 104%)', 'ellipse(90% 120% at 42.37% 104%)', 'ellipse(95% 130% at 42.37% 104%)', 'ellipse(99% 140% at 45.37% 104%)', '']

    useEffect(() => {
        const maxScrollFor100 = 2000; // Y Scroll Point where the image should be 100% width
        const onScroll = () => {

            // Get the current scrollY point
            const sY = window.scrollY;
            console.log('sY-->', sY);

            // Get a padding percentage (we want 100% with 0 scroll and 0% with 250 or + scroll)
            const percent = 100 - (sY >= maxScrollFor100 ? 100 : sY / (maxScrollFor100 / 100));
            console.log("percent-->", percent);  //50---10
            if (50 >= percent && percent <= 40) {
                setRadius('ellipse(70% 100% at 42.37% 104%)')
                console.log("1st if")
            }
            if (40 >= percent && percent <= 30) {
                setRadius('ellipse(80% 110% at 42.37% 104%)')
                console.log("2nd if")

            }
            if (30 >= percent && percent <= 20) {
                setRadius('ellipse(90% 120% at 42.37% 104%)')
                console.log("3rd if")

            }
            if (20 >= percent && percent <= 10) {
                setRadius('ellipse(95% 130% at 42.37% 104%)')
                console.log("4 if")

            }
            if (10 >= percent && percent <= 0) {
                setRadius('ellipse(99% 140% at 45.37% 104%)')
                console.log("5 if")
            }
        }
        window.addEventListener('scroll',
            onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return (
        <>
            <motion.div className="bg_dark">
                <div style={{ height: "35rem" }} />
                <UmbrellaIcon />
                <motion.div ref={ref} className="container_umbrella" animate={{ clipPath: inView ? radius : "ellipse(70% 100% at 42.37% 104%)" }} 
                transition={{ duration: 0.2}}>
                    <div className="d-flex bg_light">
                        <motion.div
                            className="col-4 mt-5 textservice"
                            initial="initial"
                            animate="animate"
                        >
                            <TextComp
                                text="Our Valuable Services To
                                Help Grow Your Business &
                                Reach Heights"
                                size="2.9vw"
                                color="black"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
            <div className="bg_light">
                <CardLayer />
                <ScrollImg />
                <Bulblayer />
            </div>
        </>
    );
}
