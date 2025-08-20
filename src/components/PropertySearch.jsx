import { useState } from 'react';
import { useLoaderData } from 'react-router';

const PropertySearch = ({
  homes,
  selectedType,
  setSelectedType,
  price,
  setPrice,
}) => {
  // Get unique home types
  const uniqueTypes = ["All", ...new Set(homes.map(home => home.type))];

  const formatPrice = (value) => {
    return new Intl.NumberFormat('da-DK', {
      style: 'decimal',
      maximumFractionDigits: 0
    }).format(value) + ' kr.';
  };


  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-lg font-semibold">
          <p className="flex flex-col">
            Søg efter dit drømmehus
            <span className="border-2 inline-block w-8"></span>
          </p>
        </div>

        <div className="my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ejendomstype</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {uniqueTypes?.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pris-interval</label>
              <div className="">
                <div className="relative"> 
                  {price < 12000000 && (
                    <span className="absolute -top-3 right-2 text-sm font-semibold text-gray-500">{formatPrice(price)}</span>
                  )}
                  <input
                    type="range"
                    min={0}
                    max={12000000}
                    // step={100000}
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full h-[2px] bg-gray-500 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-400"
                  />                
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{formatPrice(0)}</span>
                <span>{formatPrice(12000000)}</span>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default PropertySearch;
