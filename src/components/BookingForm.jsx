import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import BookingImage from '../assets/images/remove.png';
import RemoveIcon from '../assets/images/remove.png';

function BookingForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occasion: '',
    date: '',
    time: '',
    details: '',
    contact: '',
    decoType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass form data to the parent component
    // Reset form if needed
    setFormData({
      name: '',
      email: '',
      occasion: '',
      date: '',
      time: '',
      details: '',
      contact: '',
      decoType: '',
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-lg p-6 relative max-h-screen overflow-y-auto">
        {/* Optional: Include an image in the form */}
        <img src={BookingImage} alt="Booking" className="w-full h-32 object-cover rounded-t-lg mb-4" />

        <button 
          className="absolute top-4 right-4 text-blue-600 hover:text-gray-800"
          onClick={onClose}
          aria-label="Close Booking Form"
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Book Us Now</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Grouped Inputs Side by Side */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block text-blue-700">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-blue-700">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          {/* Group Date and Time Side by Side */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block text-blue-700">Date of Event</label>
              <input 
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-blue-700">Time of Event</label>
              <input 
                type="time" 
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          {/* Repeat similar structure for other input groups as needed */}
          {/* Example: Occasion and Decoration Type Side by Side */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block text-blue-700">Type of Occasion</label>
              <select 
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select an occasion</option>
                <option value="Wedding">Wedding Party</option>
                <option value="Birthday">Birthday</option>
                <option value="Photoshoot">Photoshoot</option>
                <option value="Naming Ceremony">Naming Ceremony</option>
                <option value="Baby Shower">Baby Shower</option>
                <option value="Church Decoration">Church Decoration</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-blue-700">Type of Decoration</label>
              <select 
                name="decoType"
                value={formData.decoType}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select decoration type</option>
                <option value="Fabric Works">Fabric Works</option>
                <option value="Balloon Decorations">Balloon Decorations</option>
                <option value="Flower Arts">Flower Arts</option>
              </select>
            </div>
          </div>

          {/* Details */}
          <div>
            <label className="block text-blue-700">Details</label>
            <textarea 
              name="details"
              value={formData.details}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
              rows="4"
            ></textarea>
          </div>
          
          {/* Contact */}
          <div>
            <label className="block text-blue-700">Contact Number</label>
            <input 
              type="tel" 
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          
          {/* Scroll to Top Button */}
          <div className="flex justify-end">
            <button 
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-4"
              aria-label="Scroll to Top"
            >
              <img src={RemoveIcon} alt="Scroll to Top" className="w-6 h-6" />
            </button>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button 
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded grmax-animate"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm; 