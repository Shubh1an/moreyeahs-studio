import { motion } from "framer-motion";
import React from 'react';
import MegaphoneSvg from '../layoutComponent/assets/images/svgs/MegaphoneSvg';
import AnimationSvg from '../layoutComponent/assets/images/svgs/animationSvg';
import VideoSvg from '../layoutComponent/assets/images/svgs/videoCameraSvg';
import VectorSvg from '../layoutComponent/assets/images/svgs/vectorSvg';

const cardVariants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 50,
        rotate: [0, -10, 10, 0],
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const services = [
    { iconName:<MegaphoneSvg/>, title: "Marketing", features: ["SEO", "SMO", "PPC", "Email"] },
    { iconName:<VectorSvg/>, title: "Designing", features: ["Graphic Designing", "UI UX Designing", "Branding", "Product Designing"] },
    { iconName:<VideoSvg/> , title: "Video Marketing", features: ["Motion Graphics", "Explainer Video", "Advertisement", "Whiteboard"] },
    { iconName: <AnimationSvg/>, title: "Animation", features: ["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"] },
]

export function CardLayer() {   
    return (
        <div className="containcard" style={{paddingTop:"7%"}}>
            <div style={{gap:"5%",paddingRight:'7%'}} className="d-flex justify-content-start cardrow">
                {/* {Array.from({ length: 4 }, (i) => { */}
                {services.map((service, i) => {


                    return (
                        <>
                            <motion.div className="card_content"
                                // style={{ flexBasis: "500px", maxWidth: "27.688rem", width: "90%" }}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.6 }}
                                key={i}
                            >
                                <motion.div variants={cardVariants} className="card text-white bg_dark" style={{ paddingBlock: "10% 15%", paddingInline: "8%" }} key={i}>
                                    {/* <div className="card-header"><EditIcon /></div> */}
                                    <div className="card-header">{service.iconName}</div>
                                    <div className="card-body">
                                        <h5 className="card-title">{service.title}</h5>
                                        <ul style={{marginBlock:"5%"}}>
                                            {
                                                service.features.map((feature, i) => {
                                                    return (
                                                        <li style={{marginBlock:"10%"}}>-{feature}</li>
                                                    )
                                                })
                                            }


                                        </ul>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </>
                    )
                })}
            </div >
        </div>
    )
}

