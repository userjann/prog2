import React, { useState } from 'react';
import imageplace from '../images/placeholder.png';

const FotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Zustand für das ausgewählte Bild
  const sets = Array(20).fill({ image: imageplace }); // 20 Platzhalter-Bilder

  // Funktion zum Schließen des modalen Overlays
  const closeModal = () => setSelectedImage(null);

  return (
    <section className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6">Fotoausstellung:</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {sets.map((set, index) => (
          <img
            key={index}
            src={set.image}
            alt={`Set ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-sm cursor-pointer"
            onClick={() => setSelectedImage(set.image)} // Bild bei Klick setzen
          />
        ))}
      </div>

      {/* Modal-Overlay für das große Bild */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal} // Schließen bei Klick auf den Hintergrund
        >
          <div className="relative p-10">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-full rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times; {/* Schließen-Button */}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FotoGallery;
