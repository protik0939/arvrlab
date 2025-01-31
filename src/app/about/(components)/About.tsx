'use client'
import React from 'react';
import { motion } from 'framer-motion';
import aImg from '../../../../public/aboutpageimage.png'
import Image from 'next/image';

export default function About() {
    const lines = [
        "The AR/VR and Game Development Lab of Daffodil International University is a dedicated space for students and researchers to explore and experiment with cutting-edge technologies related to augmented and virtual reality and game development.",
        "In this lab, students can develop their skills in a variety of areas related to AR/VR and game development, such as 3D modeling and animation, game design, programming, and user interface design.",
        "They may also have access to specialized software tools, such as Unity and Unreal Engine, which are commonly used in the industry.",
        "The lab may be used for a variety of purposes, including coursework, research projects, and extracurricular activities.",
        "Students may work individually or in teams to create their own games or virtual environments and may have the opportunity to showcase their projects at events and competitions.",
        "The AR/VR and Game Development Lab is typically staffed by experienced advisors, faculty, and instructor who can provide guidance and assistance to students as they work on their projects.",
        "They may also offer workshops and training sessions to help students learn new skills and techniques.",
        "Overall, the AR/VR and Game Development Lab is an exciting and dynamic environment where students can explore emerging technologies and develop the skills they need to succeed in the rapidly evolving fields of game development and virtual reality."
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 10, filter: "blur(10px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-6 pb-20 pt-32 text-white">
            <motion.h1
                variants={textVariants}
                initial="hidden"
                animate="show"
                className="text-4xl font-bold mb-6 border-b-2"
                style={{
                    borderImage: "linear-gradient(to right, transparent, white 50%, transparent) 1",
                    borderImageSlice: 1
                }}>
                About AR/VR Lab DIU
            </motion.h1>
            <motion.h1
                variants={textVariants}
                initial="hidden"
                animate="show"
                className="text-4xl font-bold mb-6">
                <Image src={aImg} alt="Bring your imagination in your life" width={500} height={500} className='max-w-1/2 w-full rounded-2xl'/>
            </motion.h1>
            <motion.div
                className="space-y-4 text-lg max-w-2xl border-transparent"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {lines.map((line, index) => (
                    <motion.p key={index} variants={textVariants} className="leading-relaxed">
                        {line}
                    </motion.p>
                ))}
            </motion.div>
        </div>
    );
}
