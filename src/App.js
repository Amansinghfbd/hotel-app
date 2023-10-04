import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CityTabs from "./components/CityTabs";
import PropertyCard from "./components/PropertyCard";
import hotelsData from "./hotels.json";
import PropertyDetails from "./components/Propertydetails";

function App() {
  const cities = Array.from(new Set(hotelsData.map((hotel) => hotel.city)));
  const [activeCity, setActiveCity] = useState(cities[0]);
  const [displayCount, setDisplayCount] = useState(3);

  const propertiesToDisplay = hotelsData
    .filter((hotel) => hotel.city === activeCity)
    .slice(0, displayCount);

  const loadMoreProperties = () => {
   
    setDisplayCount(displayCount + 3);
  };

  return (
    <Router>
      <div className="bg-slate-100">
        <h1 className="text-5xl font-semibold flex justify-center">
          Featured Listed Property
        </h1>
        <br />
        <p className="flex justify-center">
          Real Estate can be Brought sold, leased, or rented, and can be a{" "}
          <br />
          valuable investement oppourtunity. the value of real estate can be ...
        </p>
        <CityTabs cities={cities} setActiveCity={setActiveCity} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="grid grid-cols-3">
                {propertiesToDisplay.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            }
          />
        

          <Route
            path="/property/:id"
            element={
              <div className=" flex justify-center items-center w-full">
              <div className="w-[35%] shadow-2xl rounded-2xl"><PropertyDetails  /></div>
                
              </div>
            }
          />
        </Routes>
        {displayCount < hotelsData.length && (
          <div className="flex justify-center">
            <button
              className="bg-blue-700 text-white px-4 py-2 mt-4 rounded-2xl "
              onClick={loadMoreProperties}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
