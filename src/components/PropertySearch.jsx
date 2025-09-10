import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Range } from 'react-range';

const PropertySearch = ({ homes, selectedType, setSelectedType, values, setValues, step, min, max }) => {
  // Get unique home types
  const uniqueTypes = ["All", ...new Set(homes.map(home => home.type))];

  const formatPrice = (value) => {
    return new Intl.NumberFormat('da-DK', {
      style: 'decimal',
      maximumFractionDigits: 0
    }).format(value) + ' kr.';
  };

  return (
    <div className="propety-search py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-lg font-semibold">
          <p className="flex flex-col">
            Søg efter dit drømmehus
            <span className="border-2 inline-block w-8"></span>
          </p>
        </div>
        <div className="my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
              <label className="block text-sm font-medium text-gray-700 mb-2">Ejendomstype</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  custom-select-arrow"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {uniqueTypes?.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div> 

            <div className="px-4">
              <p className="text-sm font-medium text-gray-700 mb-8">Pris-interval</p>
              <Range
                step={step}
                min={min}
                max={max}
                values={values}
                onChange={(vals) => setValues(vals)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="w-full mx-auto h-1 bg-gray-300 rounded-lg relative"
                    style={{ ...props.style}}
                  >
                    <div
                      className="absolute h-1 bg-gray-500 rounded-lg"
                      style={{
                        left: `${((values[0] - min) / (max - min)) * 100}%`,
                        width: `${((values[1] - values[0]) / (max - min)) * 100}%`,
                      }}
                    />
                    {children}
                  </div>
                )}
                renderThumb={({ props, index }) => {
                  const { key, ...restProps } = props;
                  const value = values[index];
                  const showLabel = value !== min && value !== max;
                  return (
                    <div
                      key={key}
                      {...restProps}
                      className="h-3 w-3 bg-gray-400 rounded-full focus:outline-none absolute top-0 flex items-center"
                      style={{ cursor: 'url(/cursors/custom-arrow.cur), auto' }}
                    >
                      {showLabel && (
                        <span
                          className="text-[12px] font-semibold"
                          style={{ position: 'absolute', top: '-20px', left: '-1.2rem', whiteSpace: 'nowrap' }}
                        >
                          {value.toLocaleString('da-DK')} kr.
                        </span>
                      )}
                    </div>
                  );
                }}
              />
              <div className="flex justify-between text-xs text-gray-600 mt-2 mb-6">
                <span>{min.toLocaleString('da-DK')} kr.</span>
                <span>{max.toLocaleString('da-DK')} kr.</span>
              </div>
            </div>

            {/* <div>
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
            </div> */}
          </div>
        </div>        
      </div>
    </div>
  );
};

export default PropertySearch;
