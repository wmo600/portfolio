import { useRef } from 'react';

export default function useSound(src) {
  const soundRef = useRef(null);

  if (!soundRef.current) {
    soundRef.current = new Audio(src);
    soundRef.current.volume = 0.2; // softer sound
  }

  const play = () => {
    // rewind and play
    soundRef.current.currentTime = 0;
    soundRef.current.play();
  };

  return play;
}

//unused