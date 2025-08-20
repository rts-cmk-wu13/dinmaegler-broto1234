import { useLoaderData } from 'react-router';

import PropertyDetailInfo from '../components/propertyDetails/PropertyDetailInfo';
import PropertyDetailKeyInfo from '../components/propertyDetails/PropertyDetailKeyInfo';
import PropertyDetailAgenInfo from '../components/propertyDetails/PropertyDetailAgenInfo';

const DetailBolig = () => {
  const homes = useLoaderData();

  return (
    <section>
      <div className="h-125">
        <img src={homes.images[0].url} alt={homes.title}  className="w-full"/>
      </div>
      <div className="sm:container">
        <PropertyDetailInfo />
        <PropertyDetailKeyInfo />
        <PropertyDetailAgenInfo />
      </div>
    </section>
    // <PropertyDetail />
  )
}

export default DetailBolig;
