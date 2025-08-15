import { useState } from "react";

export default function SearchDreamHouse() {
  const [priceRange, setPriceRange] = useState([0, 12000000]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Title */}
      <div className="text-lg font-semibold">
        <p className="flex flex-col">Søg efter dit drømmehus<span className="border-2 inline-block w-8"></span></p>
      </div>

      {/* Form layout */}
      <div className=" mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Ejendomstype */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ejendomstype
          </label>
          <select className="w-full border border-gray-300 rounded-xs p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Ejendomstype</option>
            <option>Villa</option>
            <option>Lejlighed</option>
            <option>Rækkehus</option>
          </select>
        </div>

        {/* Price range */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Pris-interval
          </span>
          <span className="text-sm text-gray-500 min-w-[60px] text-right">
            {priceRange[0].toLocaleString("da-DK")} kr.
          </span>
          <input
            type="range"
            min="0"
            max="12000000"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="flex-1"
          />
          {/* <input
            type="range"
            min="0"
            max="12000000"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="flex-1"
          /> */}
          <span className="text-sm text-gray-500 min-w-[90px]">
            {priceRange[1].toLocaleString("da-DK")} kr.
          </span>
        </div>
        {/* <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pris-interval
          </label>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              {priceRange[0].toLocaleString("da-DK")} kr.
            </span>
            <input
              type="range"
              min="0"
              max="12000000"
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([Number(e.target.value), priceRange[1]])
              }
              className="flex-1"
            />
            <input
              type="range"
              min="0"
              max="12000000"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className="flex-1"
            />
            <span className="text-sm text-gray-500">
              {priceRange[1].toLocaleString("da-DK")} kr.
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
