import { useLoaderData, Link } from 'react-router';
import { useState } from 'react';
import HomeCard from './cards/HomeCard.jsx';
import PropertySearch from './PropertySearch.jsx';
import HeartIcon from './HeartIcon.jsx';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const PAGE_SIZE = 3; // Number of homes per page
const STEP = 100000;
const MIN = 0;
const MAX = 12000000;

const BoligLists = ({ favoriteHomeIcon }) => {
  // Filter states
  const [selectedType, setSelectedType] = useState('All');
  // Price range states
  const [values, setValues] = useState([MIN, MAX]);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  
  const homes = useLoaderData();

  // Filtering logic
  const filteredHomes = homes?.filter(
    (home) =>
      (selectedType === 'All' || home.type === selectedType) &&
      home.price >= values[0] &&
    home.price <= values[1]
  );

  // Sort from lowest to highest price
  const sortedHomes = filteredHomes?.slice().sort((a, b) => a.price - b.price);

  // Pagination logic
  const totalPages = sortedHomes ? Math.ceil(sortedHomes.length / PAGE_SIZE) : 1;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedHomes = sortedHomes?.slice(startIndex, endIndex);

  return (
    <div className="bolig-list container py-8">
      <PropertySearch
        homes={homes}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        values={values}
        setValues={setValues}
        step={STEP}
        min={MIN}
        max={MAX}
      />
      {paginatedHomes?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-y-6">
            {paginatedHomes.map((home) => (
              <div key={home.id}>
                <HeartIcon home={home} favoriteHomeIcon={favoriteHomeIcon} boligStyle={true} />
                <HomeCard key={home.id} home={home} />
              </div>
            ))}
          </div>
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="w-70 sm:w-90 mx-auto flex justify-between items-center mt-8">
              <button
                className="flex items-center px-1 sm:px-2 py-1 rounded bg-primary text-white disabled:opacity-20
                disabled:cursor-not-allowed"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <MdKeyboardDoubleArrowLeft /><span className="-mt-1 ml-1">Prev</span>
              </button>
              <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx}
                    className={`text-white px-2 sm:px-3 py-0 sm:py-1 rounded-full ${currentPage === idx + 1 ? 'bg-indigo-900 font-semibold' : 'bg-primary/50'}`}
                    onClick={() => setCurrentPage(idx + 1)}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
              <button
                className="flex items-center px-1 sm:px-2 py-1 rounded bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <span className="-mt-1 mr-1">Next</span><MdKeyboardDoubleArrowRight />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="sm:flex flex-col justify-center sm:text-xl text-white sm:p-6 bg-primary sm:m-4">Ingen boliger til salg</p>
        </div>
      )}
    </div>
  );
};

export default BoligLists;