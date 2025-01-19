import React from 'react';
import video from '../images/StarWars.mp4'; // Pfad zum Video im `src/assets` Ordner

const VideoPlayer = ({ videoUrl, title }) => {
  return (
    <div className="video-container">
      <h1>{title}</h1>
      <video controls className="w-full h-auto rounded-lg shadow-lg">
        <source src={videoUrl} type="video/mp4" />
        Dein Browser unterstützt dieses Videoformat nicht.
      </video>
    </div>
  );
};

const VideoPage = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Video-Seite</h1>
      {/* Das importierte Video verwenden */}
      <VideoPlayer videoUrl={video} title="Lego Star Wars Stop Motion inspiriert von Star Wars Episode III Rache der Sith" />
    </div>
  );
};

export default VideoPage;
