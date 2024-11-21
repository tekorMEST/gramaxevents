import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import all your event images from src/assets/images/
import Pic1 from '../assets/images/pic1.jpeg';
import Pic2 from '../assets/images/pic2.jpeg';
import Pic3 from '../assets/images/pic3.jpeg';
import Pic4 from '../assets/images/pic4.jpeg';
import Pic5 from '../assets/images/pic5.jpeg';
import Pic6 from '../assets/images/pic6.jpeg';
import Pic7 from '../assets/images/pic7.jpeg';
import Pic8 from '../assets/images/pic8.jpeg';
import Pic9 from '../assets/images/pic9.jpeg';
import Pic10 from '../assets/images/pic10.jpeg';
import Pic11 from '../assets/images/pic11.jpeg';
import Pic12 from '../assets/images/pic12.jpeg';
import Pic13 from '../assets/images/pic13.jpeg';
import Pic14 from '../assets/images/pic14.jpeg';
import Pic15 from '../assets/images/pic15.jpeg';
import Pic16 from '../assets/images/pic16.jpeg';
import Pic17 from '../assets/images/pic17.jpeg';
import Pic18 from '../assets/images/pic18.jpeg';
import Pic19 from '../assets/images/pic19.jpeg';
import Pic20 from '../assets/images/pic20.jpeg';
import Pic21 from '../assets/images/pic21.jpeg';
import Pic22 from '../assets/images/pic22.jpeg';
import Pic23 from '../assets/images/pic23.jpeg';
import Pic24 from '../assets/images/pic24.jpeg';
import Pic25 from '../assets/images/pic25.jpeg';
import Pic26 from '../assets/images/pic26.jpeg';
import Pic27 from '../assets/images/pic27.jpeg';
import Pic28 from '../assets/images/pic28.jpeg';
import Pic29 from '../assets/images/pic29.jpeg';
import Pic30 from '../assets/images/pic30.jpeg';
import Pic31 from '../assets/images/pic31.jpeg';
import Pic32 from '../assets/images/pic32.jpeg';

const images = [
  Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8,
  Pic9, Pic10, Pic11, Pic12, Pic13, Pic14, Pic15, Pic16,
  Pic17, Pic18, Pic19, Pic20, Pic21, Pic22, Pic23, Pic24,
  Pic25, Pic26, Pic27, Pic28, Pic29, Pic30, Pic31, Pic32,
];

// Bind modal to your app element (important for accessibility)
Modal.setAppElement('#root');

function GalleryPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setCurrentImage(null);
    setModalIsOpen(false);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="mb-4">
        <Link to="/" className="flex items-center text-grmax-decor hover:text-grmax-decor-dark">
          <FaArrowLeft size={20} className="mr-2" />
          <span>Back to Home</span>
        </Link>
      </div>
      
      <h2 className="text-3xl font-bold text-center mb-8">Our Decorations Gallery</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img 
                src={image} 
                alt={`Decoration ${index + 1}`} 
                className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying the enlarged image */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Event Image"
        className="flex justify-center items-center h-full"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="relative">
          <button 
            onClick={closeModal} 
            className="absolute top-0 right-0 mt-2 mr-2 text-white text-2xl font-bold"
            aria-label="Close Modal"
          >
            &times;
          </button>
          {currentImage && (
            <img 
              src={currentImage} 
              alt="Enlarged Decoration" 
              className="max-w-full max-h-screen rounded-lg"
            />
          )}
        </div>
      </Modal>
    </section>
  );
}

export default GalleryPage; 