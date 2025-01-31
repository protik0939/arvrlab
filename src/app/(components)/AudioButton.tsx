"use client";

import React, { useState, useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

export default function AudioButton() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div className="justify-center items-center">
            <button
                onClick={toggleAudio}
                className={`z-[100] aspect-square fixed bottom-5 right-5 px-6 py-3 text-sm text-amber-200 font-semibold rounded-full transition-all bg-black ${isPlaying ? "animate-[spin_10s_ease-in-out_infinite]" : "animate-none"
                    } hover:opacity-80 shadow-lg`}
            >
                {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            {/* Hidden Audio Element */}
            <audio ref={audioRef} src="/musicbg.mp3" loop>
                <track kind="captions" src="/musicbg.mp3" label="No Captions Available" />
            </audio>
        </div>
    );
}
