import { useLoaderData } from 'react-router';

import PropertyDetailInfo from '../components/propertyDetails/PropertyDetailInfo';
import PropertyDetailKeyInfo from '../components/propertyDetails/PropertyDetailKeyInfo';
import PropertyDetailAgenInfo from '../components/propertyDetails/PropertyDetailAgenInfo';
import { IoIosHeartEmpty } from "react-icons/io";


const DetailBolig = () => {
  const homes = useLoaderData();

  return (
    <section className="relative">
      <button className="absolute top-6 right-6 p-2 bg-white rounded-full">
        <IoIosHeartEmpty className=""/>
      </button>
      <div className="sm:h-100">
        <img src={homes.images[0].url} alt={homes.title}  className="w-full"/>
      </div>
      <div className="container">
        <PropertyDetailInfo />
        <PropertyDetailKeyInfo />
        <PropertyDetailAgenInfo />
      </div>
    </section>
    // <PropertyDetail />
  )
}

export default DetailBolig;
