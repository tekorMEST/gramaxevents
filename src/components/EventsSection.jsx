import React from 'react';
import EventCard from './EventCard';

function EventsSection({ events }) {
  return (
    <section id="events" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Events</h2>
      <div className="flex flex-wrap justify-center">
        {events.map((event, index) => (
          <EventCard 
            key={index}
            title={event.title}
            date={event.date}
            description1={event.description}
            images={[event.image]}
          />
        ))}
      </div>
    </section>
  );
}

export default EventsSection; 