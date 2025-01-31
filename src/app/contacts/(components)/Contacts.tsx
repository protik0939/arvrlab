'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contacts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen flex flex-col justify-center items-center text-white p-6 pt-32"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl font-bold mb-10 border-b-2 pb-2"
        style={{
          borderImage: "linear-gradient(to right, transparent, white 50%, transparent) 1",
          borderImageSlice: 1
        }}
      >
        Contact Us
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-black/30 backdrop-blur-xl p-6 rounded-xl border border-amber-200"
        >
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-4">Feel free to reach out through any of the following methods.</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaPhone className="text-blue-400" />
              <span>+123 456 7890</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-red-400" />
              <span>contact@yourwebsite.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-green-400" />
              <span>Daffodil International University, Birulia, Dhaka.</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-blue-500"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-300"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-600"><FaLinkedin size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-300"><FaGithub size={24} /></a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-black/30 backdrop-blur-xl p-6 rounded-xl border border-amber-200"
        >
          <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 bg-transparent text-white rounded-xl border border-white focus:outline-none focus:ring-2 focus:ring-amber-200" />
            <input type="email" placeholder="Your Email" className="w-full p-3 bg-transparent text-white rounded-xl border border-white focus:outline-none focus:ring-2 focus:ring-amber-200" />
            <textarea rows={4} placeholder="Your Message" className="w-full p-3 bg-transparent text-white rounded-xl border border-white focus:outline-none focus:ring-2 focus:ring-amber-200"></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-amber-200 hover:bg-white text-black hover:text-black py-2 rounded-xl transition-all ease-in-out"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

      </div>

      {/* Google Maps Embed */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-10 mb-20 w-full max-w-4xl h-64 rounded-lg overflow-hidden"
      >
        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.591428340663!2d90.32015919999999!3d23.876895599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ada2664e21%3A0x3c872fd17bc11ddb!2sDaffodil%20International%20University!5e1!3m2!1sen!2sbd!4v1738271560163!5m2!1sen!2sbd"
          loading="lazy"
        ></iframe>
      </motion.div>

    </motion.div>
  )
}
