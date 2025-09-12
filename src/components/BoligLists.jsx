import { useLoaderData, Link } from 'react-router';
import { useState } from 'react';
import PropertySearch from './PropertySearch.jsx';
import PaginatedHomes from './PaginatedHomes.jsx';

const PAGE_SIZE = 3; // Number of homes per page
const STEP = 50000;
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
      <PaginatedHomes
        paginatedHomes={paginatedHomes}
        favoriteHomeIcon={favoriteHomeIcon}
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default BoligLists;