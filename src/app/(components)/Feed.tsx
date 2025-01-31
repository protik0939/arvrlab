'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Contacts from '../contacts/(components)/Contacts';
import Image from 'next/image';

export default function Feed() {

  // Motion variants for scroll-based animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      {/* Top Banner */}
      <div className="h-screen flex flex-col justify-center items-center lg:w-1/2 w-full p-6 pb-20 pt-32 shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl text-center font-bold mb-6"
          style={{
            borderImage: "linear-gradient(to right, transparent, white 50%, transparent) 1",
            borderImageSlice: 1
          }}>
          Welcome to the AR/VR & Game Development Lab
        </motion.h1>
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="text-center text-lg max-w-xl">
          Explore the future of immersive technologies and interactive gaming with cutting-edge research and development.
        </motion.h2>
      </div>





      <div
        className='bg-black/60'>
        {/* Subheader */}
        <div className="md:p-16 p-4 pt-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible" className='lg:p-16'>
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-3xl font-bold text-center mb-4 text-amber-200">
              Innovating Realities, Empowering Creativity
            </motion.h1>


            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible" className='w-full flex items-center justify-center py-5'>
              <Image src="/homepageImages/subheader.jpg" width={1000} height={1000} alt='Ar/Vr' className='w-full lg:max-w-3xl rounded-xl' />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-center text-lg max-w-3xl mx-auto text-white">
              Our lab focuses on the development of AR/VR applications and game technology that pushes the boundaries of entertainment, education, and beyond.
            </motion.p>
          </motion.div>
        </div>

        {/* About */}
        <div className="md:p-16 p-4 pt-20">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-4xl font-bold text-center mb-6 text-amber-200">
            Introduction
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-center text-lg max-w-3xl mx-auto text-white mb-12">
            The AR/VR & Game Development Lab at [Your Institution] is dedicated to fostering innovation and exploring the full potential of Augmented Reality, Virtual Reality, and interactive game development. Our team of passionate students, researchers, and developers work together to create groundbreaking experiences that immerse users in dynamic, virtual worlds.
          </motion.p>

          <div className='flex space-y-6 lg:space-y-0 lg:flex-row flex-col justify-center items-center'>

            {/* Mission */}
            <div>
              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                className="text-3xl font-bold text-center mb-6 text-amber-200">
                Mission
              </motion.h1>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible" className='w-full flex items-center justify-center py-5 p-3'>
                <Image src="/homepageImages/mission.jpg" width={1000} height={1000} alt='Ar/Vr' className='w-full lg:max-w-3xl rounded-xl' />
              </motion.div>
              <motion.ul
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                className="max-w-2xl mx-auto text-lg list-disc pl-8 space-y-4">
                <li>To develop AR and VR solutions that enhance learning, entertainment, and business applications.</li>
                <li>To equip students with hands-on experience in game development, creating engaging interactive experiences for various platforms.</li>
              </motion.ul>
            </div>

            {/* Vision */}
            <div>
              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                className="text-3xl font-bold text-center mb-6 text-amber-200">
                Vision
              </motion.h1>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible" className='w-full flex items-center justify-center py-5 p-3'>
                <Image src="/homepageImages/vission.jpg" width={1000} height={1000} alt='Ar/Vr' className='w-full lg:max-w-3xl rounded-xl' />
              </motion.div>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                className="text-center text-lg max-w-3xl mx-auto text-white mb-12">
                Be at the forefront of AR/VR and game development, contributing to the academic and practical understanding of immersive technologies, and preparing the next generation of developers for tomorrow’s digital landscape.
              </motion.p>

            </div>

          </div>


        </div>

        {/* Current Projects */}
        <div className="py-16 lg:p-16 p-4 pt-20">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-4xl font-bold text-center mb-6 text-amber-200">
            Current Projects
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-amber-100">AR-Based Education Tools</h2>
              <p className="text-lg text-white">
                Developing Augmented Reality applications for enhanced learning experiences in fields like anatomy, engineering, and history.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-amber-100">VR Simulation for Training</h2>
              <p className="text-lg text-white">
                Building virtual reality simulations for industries such as healthcare, aviation, and military training.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-amber-100">Game Development Studio</h2>
              <p className="text-lg text-white">
                Our lab acts as a game development studio where students collaborate on creating interactive games for PC, console, and mobile platforms.
              </p>
            </div>
          </motion.div>
        </div>

        
        {/* Current Projects */}
        <div className="py-16 lg:p-16 p-4 pt-20">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-4xl font-bold text-center mb-6 text-amber-200">
            Comments
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-amber-100">AR-Based Education Tools</h2>
              <p className="text-lg text-white">
                Developing Augmented Reality applications for enhanced learning experiences in fields like anatomy, engineering, and history.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-amber-100">VR Simulation for Training</h2>
              <p className="text-lg text-white">
                Building virtual reality simulations for industries such as healthcare, aviation, and military training.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-amber-100">Game Development Studio</h2>
              <p className="text-lg text-white">
                Our lab acts as a game development studio where students collaborate on creating interactive games for PC, console, and mobile platforms.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Contact */}
        <div className="py-16">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-4xl font-bold text-center mb-6 text-amber-200">
            Get In Touch
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-center text-lg max-w-2xl mx-auto text-white mb-12">
            Whether you are a student, industry partner, or someone passionate about AR/VR or game development, we’d love to connect with you. Reach out to us for more information on collaboration opportunities, internships, or general inquiries.
          </motion.p>
          <Contacts />
        </div>
      </div>
    </>
  )
}
