
import React, { useState } from 'react';

const CityTabs = ({ cities, setActiveCity }) => {
  const [activeTab, setActiveTab] = useState(cities[0]);

  const handleTabClick = (city) => {
    setActiveTab(city);
    setActiveCity(city);
  };

  return (
    <div className="flex justify-left space-x-4 mt-4 font-bold">
      {cities.map((city) => (
        <button
          key={city}
          className={`px-4 py-2 rounded-2xl ${activeTab === city ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleTabClick(city)}
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default CityTabs;
