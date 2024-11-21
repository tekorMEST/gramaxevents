import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function PricesPage() {
  const services = [
    { name: "Bridal Shower Deco", price: "GH₵ 2,000" },
    { name: "Naming Ceremony", price: "GH₵ 1,500" },
    { name: "Birthday", price: "GH₵ 1,200" },
    { name: "Picnic", price: "GH₵ 1,800" },
    { name: "Proposal Dinner", price: "GH₵ 2,500" },
    { name: "Bridal Room Deco", price: "GH₵ 2,200" },
    { name: "Engagement Deco", price: "GH₵ 2,000" },
    { name: "Wedding Deco", price: "GH₵ 5,000" },
    { name: "Fabric Works", price: "GH₵ 800" },
    { name: "Balloon Deco", price: "GH₵ 1,000" },
    { name: "Photoshoot", price: "GH₵ 1,500" },
    { name: "Engagement Wrapping", price: "GH₵ 900" },
    { name: "Church Deco", price: "GH₵ 3,000" },
    { name: "Flower Deco", price: "GH₵ 1,200" },
    { name: "Table Set Up", price: "GH₵ 1,800" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="mb-4">
        <Link to="/" className="flex items-center text-grmax-decor hover:text-grmax-decor-dark">
          <FaArrowLeft size={20} className="mr-2" />
          <span>Back to Home</span>
        </Link>
      </div>
      
      <h2 className="text-3xl font-bold text-center mb-8">Our Services Price List</h2>
      <div className="max-w-6xl mx-auto">
        <p className="text-center mb-8 text-gray-700">
          Prices are in Ghana Cedis (GH₵). Please note that prices may change due to increases in the cost of materials or distance. We also offer hiring services for some of our decorations.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Service</th>
                <th className="py-2 px-4 border-b">Price (GH₵)</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{service.name}</td>
                  <td className="py-2 px-4 border-b">{service.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-gray-600">
          * Prices are subject to change based on material costs and location. Please contact us for a detailed quote.
        </p>
      </div>
    </section>
  );
}

export default PricesPage; 