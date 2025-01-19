import React, { useState } from 'react';
import p1 from '../images/20250119_164215.jpg';
import p2 from '../images/20250119_164226.jpg';
import p3 from '../images/20250119_164625.jpg';
import p4 from '../images/20250119_164630(0).jpg';
import p5 from '../images/20250119_164630.jpg';
import p6 from '../images/20250119_164635.jpg';
import p7 from '../images/20250119_164815.jpg';
import p8 from '../images/20250119_164843.jpg';
import p9 from '../images/20250119_165146.jpg';
import p10 from '../images/20250119_165151.jpg';
import p11 from '../images/20250119_165420.jpg';
import p12 from '../images/20250119_165430.jpg';
import p13 from '../images/20250119_165739.jpg';
import p14 from '../images/20250119_213500.jpg';
import p15 from '../images/20250119_213543.jpg';
import p16 from '../images/20250119_213520.jpg';
import p17 from '../images/20250119_213507.jpg';
import p18 from '../images/20250119_213356.jpg';
import p19 from '../images/20250119_213340.jpg';
import p20 from '../images/20250119_213329.jpg';
import p21 from '../images/20250119_213324.jpg';

const FotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Zustand für das ausgewählte Bild
  const sets = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
  ];

  const mocs = [
    p14,
    p15,
    p16,
    p17,
    p18,
    p19,
    p20,
    p21,
  ];

  // Funktion zum Schließen des modalen Overlays
  const closeModal = () => setSelectedImage(null);

  return (
    <section className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6">Fotoausstellung:</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {sets.map((set, index) => (
          <img
            key={index}
            src={set} // Direkt den Pfad verwenden
            alt={`Set ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-sm cursor-pointer"
            onClick={() => setSelectedImage(set)} // Direkt den Pfad setzen
          />
        ))}
      </div>

      {/* Modal-Overlay für das große Bild */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal} // Schließen bei Klick auf den Hintergrund
        >
          <div className="relative p-4">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90%] max-h-[80vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times; {/* Schließen-Button */}
            </button>
          </div>
        </div>
      )}

      {/* MOC's (My Own Creation) Galerie */}
      <h2 className="text-2xl font-bold mt-12 mb-6">MOC's (My Own Creation)</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {mocs.map((moc, index) => (
          <img
            key={index}
            src={moc}
            alt={`MOC ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-sm cursor-pointer"
            onClick={() => setSelectedImage(moc)} // Bild bei Klick setzen
          />
        ))}
      </div>
    </section>
  );
};

export default FotoGallery;
