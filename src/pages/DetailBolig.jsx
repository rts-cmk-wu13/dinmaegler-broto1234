import { useLoaderData } from 'react-router';
import PropertyDetailInfo from '../components/propertyDetails/PropertyDetailInfo';
import PropertyDetailKeyInfo from '../components/propertyDetails/PropertyDetailKeyInfo';
import PropertyDetailAgenInfo from '../components/propertyDetails/PropertyDetailAgenInfo';
import { IoIosHeartEmpty } from "react-icons/io";

const DetailBolig = () => {
  const homes = useLoaderData();

  return (
    <section className="relative">
      <div className="sm:h-100">
        <img src={homes.images[0].url} alt={homes.title}  className="w-full"/>
      </div>
      <div className="container">
        <PropertyDetailInfo />
        <PropertyDetailKeyInfo />
        <PropertyDetailAgenInfo />
      </div>
    </section>
  )
}

export default DetailBolig;
