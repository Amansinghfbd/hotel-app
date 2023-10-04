import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { PiBuildingsLight } from "react-icons/pi";
import { LiaBedSolid, LiaBathSolid } from "react-icons/lia";
import { BsArrowsMove } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const PropertyCard = ({ property }) => {
  return (
    <div className=" flex flex-col  justify-evenly bg-white border rounded-2xl p-4 m-2 shadow-2xl ">
     
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full  object-cover mb-2 rounded-2xl"
        />
        <div className=" text-blue-700 rounded-2xl  absolute top-3 left-3 bg-white p-2 font-semibold  cursor-pointer hover:bg-slate-200 ">
          For Rent
        </div>
        <div className=" text-blue-700 rounded-2xl  absolute top-3 right-3 bg-white p-2 cursor-pointer hover:bg-slate-200 hover:text-red-600">
          <AiOutlineHeart />
        </div>
      </div>
 
      <div className=" flex flex-col m-3">
        <div className="flex justify-start items-center gap-1">
          <div>
            <CiLocationOn className=" text-orange-900" />
          </div>

          <div>
            {" "}
            <p className="font-semibold">{property.address}</p>
          </div>
        </div>

        <div className="mt-3">
          <h2 className="text-xl font-semibold">{property.name}</h2>
        </div>

        <div className="flex justify-between m-3">
          <div className="flex flex-col ">
            <PiBuildingsLight className="font-medium" />
            <p className="font-medium">{property.totalRooms} Rooms</p>
          </div>

          <div className="flex flex-col">
            <LiaBedSolid />
            <p className="font-medium">{property.bedrooms} Bed</p>
          </div>

          <div className="flex flex-col">
            <LiaBathSolid />
            <p className="font-medium">{property.bathrooms} Bath</p>
          </div>

          <div className="flex flex-col">
            <BsArrowsMove />
            <p className="font-medium">{property.areaSqft} sqft</p>
          </div>
        </div>
      </div>

  
      <div className="flex justify-between items-center m-2">
        <p>
          <span className="text-blue-700 font-bold text-2xl">
            ${property.price}
          </span>
          <sub className=" text-xl">/month</sub>
        </p>

        <div className="text-white font-semibold px-4 py-2 mt-2 inline-block rounded-2xl bg-blue-700">
          <Link to={`/property/${property.id}`}>Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
