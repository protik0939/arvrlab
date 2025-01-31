'use client'
import React from 'react'
import VrHeadset from './VrHeadset'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", x: 50 }}
      animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-0 flex justify-center items-center overflow-hidden -z-20"
    >
      <VrHeadset />
    </motion.div>
  )
}
