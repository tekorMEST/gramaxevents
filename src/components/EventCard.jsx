import React, { useState } from 'react';
import PropTypes from 'prop-types';

function EventCard({ title, date, description1, description2, images = [] }) {
  console.log('Images prop:', images);
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="relative">
        <img 
          src={images[current]} 
          alt={`${title} Image ${current + 1}`} 
          className="w-full h-48 object-cover" 
        />
        {length > 1 && (
          <>
            <button 
              onClick={prevSlide} 
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-r"
            >
              &#10094;
            </button>
            <button 
              onClick={nextSlide} 
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-l"
            >
              &#10095;
            </button>
          </>
        )}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">{description1}</p>
        <p className="text-gray-700 text-base">{description2}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {date}
        </span>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description1: PropTypes.string,
  description2: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
};

export default EventCard; 