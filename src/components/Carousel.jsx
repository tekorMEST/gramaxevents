import React, { useState, useEffect } from 'react';
import Event1 from '../assets/images/pic1.jpeg';
import Event2 from '../assets/images/pic2.jpeg';
import Event3 from '../assets/images/pic3.jpeg';
// Import more images as needed

const images = [
  Event1,
  Event2,
  Event3,
  // Add more imported images here
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1));
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [length]);

  return (
    <section className="relative w-full h-64 xs:h-96">
      {images.map((image, index) => (
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
          key={index}
        >
          <img src={image} alt={`Event ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </section>
  );
}

export default Carousel; 