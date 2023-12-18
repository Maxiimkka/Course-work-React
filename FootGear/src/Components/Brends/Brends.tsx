import React from "react"
import snks from '../../assets/img/snks.png'
import adidas from '../../assets/img/adidas.jpg'
import nike from '../../assets/img/nike.webp'
import puma from '../../assets/img/puma.png'
import { motion } from "framer-motion";


const Brends: React.FC = () => {

    const textAnimation = {
        hidden: {
            x: -50,
            opacity: 0
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * .4 }
        }),
    }
    const fetureAnimation = {
        hidden: {
            y: -50,
            opacity: 0
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * .7 }
        }),
    }

    return (
        <div className="Box">
            <div className='imgBox'>
                <motion.img src={snks} alt='img.jpg' initial="hidden" whileInView="visible" custom={1} variants={textAnimation} viewport={{ once: true }} />
                <motion.p style={{ color: 'black' }} initial="hidden" whileInView="visible" custom={1} variants={textAnimation} viewport={{ once: true }}>FootGear - is the perfect place for true sneaker connoisseurs, where style and comfort meet to create a unique look. We offer a wide selection of the most fashionable and up-to-date models from leading brands, so you can express your individuality through footwear.</motion.p>
            </div>
            <div className='brendsBox'>
                <motion.div initial="hidden" whileInView="visible" custom={1} variants={fetureAnimation} viewport={{ once: true }}>
                    <motion.img src={adidas} alt="adidas" whileHover={{ scale: 1.1 }} />
                    <motion.img src={nike} alt="nike" whileHover={{ scale: 1.1 }} />
                    <motion.img src={puma} alt="puma" whileHover={{ scale: 1.1 }} />
                </motion.div>
            </div>
        </div>
    )
}
export default Brends