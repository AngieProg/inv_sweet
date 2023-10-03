import { useState, useRef } from "react";
import { musicPausa } from "../assets/images";
import { musicPlay } from "../assets/images";
import { cancion } from "../assets/music";

const Song = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef();
   
    const handlePlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
      };
    
      const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
      };

      const handlePlayPause = () => {
        if (isPlaying) {
          handlePause();
        } else {
          handlePlay();
        }
    };

    return (
  
        <div>
            <img 
                src={isPlaying ? musicPausa : musicPlay} 
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={handlePlayPause}  
            />
            <audio ref={audioRef} src={cancion}/>
        </div>       
    )
}

export default Song
