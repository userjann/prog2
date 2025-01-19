import React from 'react';
import Videop from '../images/StarWars.mp4'

const videoPlayer = () => {
  return (
    <div className="p-8 bg-gray-100">
     
      
      <Videop 
        videoUrl="/videos/mein-video.mp4"  // Pfad zum lokal gespeicherten Video
        title="Mein tolles Video!"
      />
    </div>
  );
};

export default videoPlayer;
