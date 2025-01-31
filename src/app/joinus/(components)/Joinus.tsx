'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Joinus() {
  const targetDate = new Date("2025-05-01T00:00:00").getTime(); // Target Date in milliseconds
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function calculateTimeLeft() {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    // Update time immediately and then every second
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [targetDate]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: 'easeOut' }}
      className="min-h-screen flex flex-col justify-center items-center text-white p-6"
    >
      {/* Animated Title */}
      <motion.h1 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-center mb-6"
      >
        Next Recruitment will start from{" "}
        <span className="text-amber-200">1-5-2025</span> <br />
        <span className="text-sm text-gray-400">(Summer Semester)</span>
      </motion.h1>

      {/* Countdown Timer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.5 }}
        className="flex space-x-4 text-center text-2xl md:text-3xl font-semibold"
      >
        <div className="p-4 bg-black/40 backdrop-blur-xl rounded-xl border border-amber-200 w-20 md:w-24">
          <span className="text-amber-200">{timeLeft.days}</span>
          <p className="text-sm md:text-base text-gray-400">Days</p>
        </div>
        <div className="p-4 bg-black/40 backdrop-blur-xl rounded-xl border border-amber-200 w-20 md:w-24">
          <span className="text-green-400">{timeLeft.hours}</span>
          <p className="text-sm md:text-base text-gray-400">Hours</p>
        </div>
        <div className="p-4 bg-black/40 backdrop-blur-xl rounded-xl border border-amber-200 w-20 md:w-24">
          <span className="text-yellow-400">{timeLeft.minutes}</span>
          <p className="text-sm md:text-base text-gray-400">Minutes</p>
        </div>
        <div className="p-4 bg-black/40 backdrop-blur-xl rounded-xl border border-amber-200 w-20 md:w-24">
          <span className="text-red-400">{timeLeft.seconds}</span>
          <p className="text-sm md:text-base text-gray-400">Seconds</p>
        </div>
      </motion.div>

      {/* Join Us Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }}
        className="mt-6 bg-amber-200 text-black px-6 py-3 rounded-xl text-lg font-semibold transition"
      >
        Stay Tuned!
      </motion.button>

    </motion.div>
  );
}
