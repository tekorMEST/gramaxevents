import React from 'react';
import { FaTshirt, FaBirthdayCake, FaSpa, FaGift, FaHeart } from 'react-icons/fa'; // Added FaGift, FaHeart
import { Link } from 'react-router-dom'; // Added Link

function Services() {
  const occasions = [
    { name: "Wedding Parties", price: "$500" },
    { name: "Birthday", price: "$300" },
    { name: "Photoshoot", price: "$400" },
    { name: "Naming Ceremony", price: "$350" },
    { name: "Baby Shower", price: "$250" },
    { name: "Church Decoration", price: "$600" },
  ];

  const decoTypes = [
    { name: "Fabric Works", icon: <FaTshirt size={24} /> },
    { name: "Balloon Decorations", icon: <FaBirthdayCake size={24} /> },
    { name: "Flower Arts", icon: <FaSpa size={24} /> },
    { name: "Gift Wrapping", icon: <FaGift size={24} /> }, // Added Gift Wrapping
    { name: "Bouquet", icon: <FaHeart size={24} /> }, // Added Bouquet
    { name: "Engagement Wrapping", icon: <FaGift size={24} /> }, // Added Engagement Wrapping
    { name: "Bridal Fan", icon: <FaHeart size={24} /> }, // Added Bridal Fan
    { name: "Engagement Souvenirs", icon: <FaGift size={24} /> }, // Added Engagement Souvenirs
    // Add more types as needed
  ];

  return (
    <section className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Decoration Services</h2>
      <div className="max-w-6xl mx-auto">
        {/* Types of Decorations */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-grmax-decor">Types of Decorations We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {decoTypes.map((deco, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded shadow hover:bg-grmax-decor hover:text-white transition-colors duration-300">
                <div className="bg-grmax-decor text-white p-3 rounded-full mr-4">
                  {deco.icon}
                </div>
                <span className="text-lg font-medium">{deco.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/prices" className="text-grmax-decor font-semibold hover:underline">
              View Detailed Price List
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services; 