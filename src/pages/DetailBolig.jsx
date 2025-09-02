import { useLoaderData } from 'react-router';
import PropertyDetailInfo from '../components/propertyDetails/PropertyDetailInfo';
import PropertyDetailKeyInfo from '../components/propertyDetails/PropertyDetailKeyInfo';
import PropertyDetailAgenInfo from '../components/propertyDetails/PropertyDetailAgenInfo';
import { IoIosHeartEmpty } from "react-icons/io";
// import { useAuth } from '../contexts/AuthContext';


const DetailBolig = () => {
  const homes = useLoaderData();
  // const { user, favorites, toggleFavorite } = useAuth();
  // console.log(homes.id);

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
    // <PropertyDetail />
  )
}

export default DetailBolig;
