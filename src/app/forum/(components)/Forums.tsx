'use client'
import { forumMembers } from '@/model/forumMemberApi'
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'

export default function Forums() {



    const textVariants = {
        hidden: { opacity: 0, y: 10, filter: "blur(10px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
    };


    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
        hover: { boxShadow: "0px 0px 20px rgba(255, 255, 0, 0.8)", background: "#000000", color: "#fde68a" } // Glowing effect on hover
    };

    return (
        <div className='pt-32 text-center'>
            <motion.h1
                variants={textVariants}
                initial="hidden"
                animate="show"
                className="text-4xl font-bold mb-6 border-b-2"
                style={{
                    borderImage: "linear-gradient(to right, transparent, white 50%, transparent) 1",
                    borderImageSlice: 1
                }}>
                Forum Members
            </motion.h1>
            <div className='w-full flex flex-wrap p-5 px-10 pb-20'>
                {
                    forumMembers.map((f) => (
                        <motion.div key={f.name} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 pb-4'
                            variants={cardVariants}
                            initial="hidden"
                            animate="show">
                            <motion.div className='w-full text-center rounded-xl'
                                variants={cardVariants}
                                initial="hidden"
                                animate="show"
                                whileHover="hover">
                                <Image src={f.imageUrl} width={500} height={500} className='w-full rounded-xl' alt={f.name} />
                                <div className='p-4'>
                                    {f.name}
                                    <br />
                                    {f.designation}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}
