import React from 'react';
import Welcome from './Welcome';
import Carousel from './Carousel';
import Services from './Services';
import Gallery from './Gallery';
import EventsSection from './EventsSection';

function Home({ events }) {
  return (
    <div>
      <Welcome />
      <Carousel />
      <Services />
      <Gallery />
      <EventsSection events={events} />
    </div>
  );
}

export default Home; 