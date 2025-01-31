"use client";

import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

export function MyFooter() {
    return (
        <footer className="bg-black/80 backdrop-blur-lg text-amber-200 py-10 border-t-2 border-amber-200"
            style={{
                borderImage: "linear-gradient(to right, transparent, white 50%, transparent) 1",
                borderImageSlice: 1
            }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo & Description */}
                    <div className="flex flex-col justify-between">
                        <div className="flex space-x-2">
                            <Image src='/arvrlablogo.svg' height={50} width={50} alt="Arvr Logo" className="w-10" />
                            <Image src='/CSE_Dept_Logo.svg' height={50} width={50} alt="Arvr Logo" className="w-10" />
                            <Image src='/diuuplogo.svg' height={50} width={50} alt="Arvr Logo" className="w-32" />
                        </div>
                        <h2 className="text-2xl font-bold text-white pt-4">AR/VR DIU</h2>
                        <p className="mt-2 text-white">
                            Bringing immersive experiences to life at Daffodil International University.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <Link href="/" className="text-white hover:text-amber-200">Home</Link>
                        <Link href="/about" className="text-white hover:text-amber-200">About</Link>
                        <Link href="/achievements" className="text-white hover:text-amber-200">Achievements</Link>
                        <Link href="/contacts" className="text-white hover:text-amber-200">Contact</Link>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                        <div className="mt-3 flex space-x-4">
                            <Link href="#" className="text-white hover:text-amber-200 text-2xl">
                                <BsFacebook />
                            </Link>
                            <Link href="#" className="text-white hover:text-amber-200 text-2xl">
                                <BsInstagram />
                            </Link>
                            <Link href="#" className="text-white hover:text-amber-200 text-2xl">
                                <BsTwitter />
                            </Link>
                            <Link href="#" className="text-white hover:text-amber-200 text-2xl">
                                <BsGithub />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 border-t border-amber-200 pt-5 text-center text-white text-sm"
                    style={{
                        borderImage: "linear-gradient(to right, transparent, white 50%, transparent) 1",
                        borderImageSlice: 1
                    }}>
                    &copy; {new Date().getFullYear()} AR/VR DIU. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
