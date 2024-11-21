import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import EventCard from './components/EventCard';
import Welcome from './components/Welcome';
import Carousel from './components/Carousel';
import Services from './components/Services';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryPage from './components/GalleryPage';
import PricesPage from './components/PricesPage';

// Import images for events
import Pic1 from './assets/images/flower.jpeg';
import Pic2 from './assets/images/Backdrop.jpeg';
import Pic3 from './assets/images/pic3.jpeg';
import Pic4 from './assets/images/Gift.jpeg';
import Pic5 from './assets/images/Bridal.jpeg';
// ... import the rest of your images up to Pic32 ...

function App() {
  const [isBooking, setIsBooking] = useState(false);

  const handleBookNow = () => {
    setIsBooking(true);
  };

  const handleCloseForm = () => {
    setIsBooking(false);
  };

  const handleSubmit = (formData) => {
    console.log('Form Submitted:', formData);
    setIsBooking(false);
    // Here, you can add code to send the form data to a backend service or service provider
  };

  const handleSetActiveSection = (section) => {
    // Implement smooth scrolling or navigation logic here
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const events = [
    {
      title: "Bouquet Training",
      date: "June 20, 2024",
      description: "Enhance your skills in bouquet with our expert-led training sessions.",
      image: Pic1,
    },
    {
      title: "Fabric Workshop",
      date: "Ongoing",
      description: "Join our Fabric Workshop to master the art of fabric decoration for various occasions.",
      image: Pic2,
    },
    {
      title: "Balloon Decoration Workshop",
      date: "Ongoing",
      description: "Join our Balloon Decoration Workshop to master the art of balloon arrangements.",
      image: Pic3,
    },
    {
      title: "Engagement Wrapping Training",
      date: "August 10, 2024",
      description: "Learn the intricacies of wrapping styles and arrangement in our comprehensive seminar.",
      image: Pic4,
    },
    {
      title: "Bridal Fan Training",
      date: "December 10, 2024",
      description: "Learn the intricacies of bridal fan styles and arrangement in our comprehensive seminar.",
      image: Pic5,
    },
    // ... up to Pic32 ...
  ];

  return (
    <Router>
      <div className="App">
        <Header onBookNow={handleBookNow} />
        
        {/* Render BookingForm outside of Routes to ensure it overlays all pages */}
        {isBooking && (
          <BookingForm 
            onClose={handleCloseForm} 
            onSubmit={handleSubmit} 
          />
        )}
        
        <Routes>
          <Route path="/" element={<Home events={events} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/prices" element={<PricesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
