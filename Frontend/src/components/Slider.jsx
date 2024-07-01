import React, { useState, useEffect } from 'react';
import Image1 from '../assets/img1.jpg'; // Replace with your actual image paths
import Image2 from '../assets/img2.jpg';
import Image3 from '../assets/img3.jpg';

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [Image1, Image2, Image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval for slide duration (milliseconds)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex justify-center items-center h-screen "> {/* Add padding to prevent overlap */}
      <div className="w-3/4 p-10">
        <div className="relative h-96">
          <img
            src={images[activeIndex]}
            alt={`Slider Image ${activeIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 justify-center">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${index === activeIndex ? 'bg-red-500' : 'bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
