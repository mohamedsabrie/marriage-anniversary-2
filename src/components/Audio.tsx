"use client";

import Image from "next/image";
// components/AudioPlayer.tsx
import { useEffect, useRef, useState } from "react";
import SoundIcon from "/public/sound.svg";
const AudioPlayer: React.FC = () => {
  const audioRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      <audio className="h-100" autoPlay ref={audioRef}>
        <source src="/perfect.mp3" />
      </audio>

      <div
        onClick={handlePlay}
        className="h-10 w-10  cursor-pointer fixed bottom-3 right-3  z-10 "
      >
        <Image src={SoundIcon} alt="sound-icon" fill />
      </div>
    </>
  );
};

export default AudioPlayer;
