import { detailHomeKeysFirstClm, detailHomeKeysSecondClm, detailHomeKeysThirdClm } from '../../../data/detaiHomeKeys';
import PropertyDetailKey from './PropertyDetailKey';

const PropertyDetailKeyInfo = () => {
  return (
    <div className="my-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="">
            {detailHomeKeysFirstClm.map((key) => (
              <PropertyDetailKey key={key} pkey={key} />
            ))}
          </div>
          <div className="">
            {detailHomeKeysSecondClm.map((key) => (
              <PropertyDetailKey key={key} pkey={key} />
            ))}
          </div>
          <div className="">
            {detailHomeKeysThirdClm.map((key) => (
              <PropertyDetailKey key={key} pkey={key} />
            ))}
          </div>
        </div>
  )
}

export default PropertyDetailKeyInfo