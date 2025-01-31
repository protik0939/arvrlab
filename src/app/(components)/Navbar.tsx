'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import arvrLogo from '../../../public/arvrlablogo.svg';
import { BiSolidChevronUpSquare } from "react-icons/bi";

export default function Navbar() {
    const pathname = usePathname();
    const [toggle, setToggle] = useState<boolean>(false); // Set initial state based on pathname
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    const closeSideBar = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setToggle(false);
            }
        }
        if (toggle) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [toggle]);

    const navLinks: { title: string; path: string }[] = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Achievements', path: '/achievements' },
        { title: 'Forum', path: '/forum' },
        { title: 'Contact', path: '/contacts' },
        { title: 'Join Us', path: '/joinus' },
    ];

    return (
        <>
            <div className='fixed z-50 px-4 flex w-full justify-between items-center'>
                <Link className='z-50' href={'/'}>
                    <Image src={arvrLogo} alt='Arvr DIU' height={100} width={100} className='w-20 rounded-3xl' />
                </Link>

                <div className={`z-50 top-0 p-2 flex flex-col items-end transition-all lg:w-[70%]  ease-in-out`}>
                    <ol className="flex justify-between lg:space-x-4 text-xl lg:bg-black/25 lg:w-[650px] p-5 px-8w-auto rounded-2xl lg:border-2 lg:border-amber-200 lg:backdrop-blur-lg">
                        {navLinks.map((n) => {
                            const isActive = pathname === n.path;
                            return (
                                <Link key={n.title} href={n.path} className='hidden lg:block'>
                                    <button>
                                        <li className={`hover:border-y-2 group transition-all ease-in-out ${isActive ? 'border-y-2 border-amber-200 font-bold' : ''}`}>
                                            <h1 className={` ${isActive ? 'text-amber-200' : ''}`}>
                                                {n.title}
                                            </h1>
                                        </li>
                                    </button>
                                </Link>
                            );
                        })}
                        <button className='group lg:hidden block w-full justify-center items-center' onClick={closeSideBar}>
                            <BiSolidChevronUpSquare className={`text-5xl transition-transform duration-300 group-hover:text-amber-200 group-hover:scale-105 ${toggle ? 'rotate-0' : 'rotate-180'}`} />
                        </button>
                    </ol>
                </div>
            </div>

            <div ref={sidebarRef} className={`z-50 p-2 px-5 flex flex-col`}>
                <ol className={`flex z-50 flex-col fixed right-5 transition-all ease-in-out space-y-4 ${toggle ? 'top-[90px]' : '-top-96'} text-2xl bg-black/25 p-10 rounded-2xl border-2 border-amber-200 backdrop-blur-lg`}>
                    {navLinks.map((n) => {
                        const isActive = pathname === n.path;
                        return (
                            <Link key={n.title} href={n.path}>
                                <button onClick={closeSideBar}>
                                    <li className={`hover:border-l-8 group transition-all ease-in-out ${isActive ? 'border-l-8 border-amber-200 font-bold' : ''}`}>
                                        <h1 className={`group-hover:ml-3 ${isActive ? 'ml-3 text-amber-200' : ''}`}>
                                            {n.title}
                                        </h1>
                                    </li>
                                </button>
                            </Link>
                        );
                    })}
                </ol>
            </div>
        </>
    );
}
