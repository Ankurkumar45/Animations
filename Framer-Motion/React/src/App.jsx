import React from 'react'
import { motion } from 'framer-motion';

function App() {
  return (
    <>
      <div>
        <motion.div id='box'
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        dragElastic={0.5}
        whileHover={{ scale: 1.1, rotate: 90, borderRadius: "20%", cursor: "pointer" }}
        whileTap={{ scale: 0.9, rotate: -90, borderRadius: "50%" }}
          // initial={{ x: 0, y: 0, rotate: 0, scale: 1 }}
          // animate={{
          //   x: 1000,
          //   y: 200,
          //   rotate: 360,
          //   scale: 1.5
          // }}
          // transition={{
          //   duration: 2,
          //   delay: 0.5,
          //   ease: "easeInOut",
          //   repeat: Infinity,
          //   repeatType: "reverse",
            
          // }}
        >

        </motion.div>
      </div>
    </>
  )
}

export default App
