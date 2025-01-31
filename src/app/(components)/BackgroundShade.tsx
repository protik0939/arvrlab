'use client'
import React from 'react';
import './BackgroundShade.css';

export default function BackgroundShade() {
    return (
        <div className="fixed w-full h-screen flex text-white -z-50">
            <div className='h-full w-full overflow-hidden'>
                <div className='top-left' />
                <div className='bottom-right' />
            </div>
        </div>
    );
}
