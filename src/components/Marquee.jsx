import React from 'react'
import { motion } from 'framer-motion'

function Marquee() {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-5 relative overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x: "100%"}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[6.9vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-5 mb-[3.5vw] font-semibold'>
                we are ochi
                </motion.h1>
            <motion.h1 initial={{x: "100"}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[6.9vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-5 mb-[3.5vw] font-semibold'>
                we are ochi
                </motion.h1>
                <motion.h1 initial={{x: "100"}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[6.9vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-5 mb-[3.5vw] font-semibold'>
                we are ochi
                </motion.h1>
        </div>
    </div>
  )
}

export default Marquee