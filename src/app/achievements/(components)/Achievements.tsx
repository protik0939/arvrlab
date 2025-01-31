'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { achievements } from '@/model/forumMemberApi';
import Image from 'next/image';

export default function Achievements() {

  // Parent container animation (stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }, // Stagger each child animation by 0.3s
    },
  };

  // Individual item animation (fade in & slide up)
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: "easeOut" }
    }
  };



  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 pb-20 pt-32 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold mb-6 border-b-2"
        style={{
          borderImage: "linear-gradient(to right, transparent, white 50%, transparent) 1",
          borderImageSlice: 1
        }}>
        Achievements
      </motion.h1>
      <motion.div
        className='w-full p-5 lg:px-10 px-2'
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {
          achievements.map((ac) => (
            <motion.div key={ac.title} className='flex sml:flex-col w-full py-4'
              variants={itemVariants} >
              <Image src={ac.imagesUrl[0]} alt={ac.title} width={500} height={500} className='big:w-1/3 sml:w-full big:rounded-l-xl sml:rounded-t-xl border-2 border-white big:border-r-0 sml:border-b-0' />
              <div className='big:w-2/3 sml:w-full flex flex-col big:p-10 sml:p-4 border-2 border-white big:rounded-r-xl sml:rounded-b-xl big:border-l-0 sml:border-t-0 bg-black/20 backdrop-blur-xl'>
                <h1 className='text-2xl'>
                  {ac.title}
                </h1>
                <p className='text-sm pt-5' style={{ whiteSpace: "pre-wrap" }}>
                  {ac.description}
                </p>
              </div>
            </motion.div>
          ))
        }
      </motion.div>
    </div>
  )
}
