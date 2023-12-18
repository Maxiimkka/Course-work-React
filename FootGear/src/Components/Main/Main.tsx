import React from "react"
import snks from '../../assets/img/snks.png'
import adidas from '../../assets/img/adidas.jpg'
import nike from '../../assets/img/nike.webp'
import puma from '../../assets/img/puma.png'
import { motion } from "framer-motion";


const Brends: React.FC = () => {
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