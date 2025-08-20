import { useLoaderData, Link } from 'react-router';
import { useState } from 'react';
import HomeCard from './cards/HomeCard.jsx';
import PropertySearch from './PropertySearch.jsx';

const BoligLists = () => {
  const homes = useLoaderData();

  // Filter states
  const [selectedType, setSelectedType] = useState('All');
  const [price, setPrice] = useState(12000000);

  // Filtering logic
  const filteredHomes = homes?.filter(
    (home) =>
      (selectedType === 'All' || home.type === selectedType) &&
      home.price <= price
  );

  // Sort from lowest to highest price
  const sortedHomes = filteredHomes?.slice().sort((a, b) => a.price - b.price);

  return (
    <div className="container pb-14">
      <div>
          <div>
            <PropertySearch
              homes={homes}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              price={price}
              setPrice={setPrice}
              />
              {sortedHomes?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-y-6">
              {sortedHomes?.map((home) => (
                <HomeCard key={home.id} home={home} />
              ))}
            </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="sm:flex flex-col justify-center sm:text-xl text-white sm:p-6 bg-primary sm:m-4">Ingen boliger til salg</p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default BoligLists;