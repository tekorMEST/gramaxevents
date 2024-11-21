import React from 'react';
import WelcomeImage from '../assets/images/welcomeimage.jpg';  

function Welcome() {
  return (
    <section className="bg-white text-orange-500 py-28 px-6 text-center">
      <img src={WelcomeImage} alt="Welcome" className="mx-auto mb-6 w-32 h-32 object-cover rounded-full border-4 border-white" /> {/* Display welcome image */}
      <h2 className="text-4xl font-bold mb-4">Welcome to Gramax Events</h2>
      <p className="text-lg">
        Join us for an unforgettable experience filled with amazing events,
        networking opportunities, and much more. Let's make your events
        memorable together!
      </p>
    </section>
  );
}

export default Welcome; 