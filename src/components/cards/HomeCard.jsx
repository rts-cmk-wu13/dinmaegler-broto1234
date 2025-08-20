import { Link } from 'react-router';
import { energyColors } from '../../../data/eneryColor';
import Dot from '../Dot';
import { IoIosHeartEmpty } from "react-icons/io";

export default function HomeCard({ home }) {
  // console.log(home);
  
  const bgColor = energyColors[home.energylabel] || "#e0e0e0";

  return (
    <div  className="relative shadow-md rounded-sm overflow-hidden cursor-pointer hover:scale-101 hover:shadow-lg transition-all" >   
      <button className="absolute top-2 right-2 p-2 bg-white rounded-full"><IoIosHeartEmpty className=""/></button>  
      <Link to={`/homes/${home.id}`}>
        <div className="w-full h-36 sm:h-44 lg:h-80">
          <img src={home.images[0].url} alt={home.title} className="w-full" />
        </div> 
        <div className="space-y-2 mx-4 py-2 border-b-2 border-borderLine">
          <p className="text-base font-semibold">{home.adress1}</p>
          <p className="text-sm">{home.postalcode} {home.city}</p>
          <p className="flex items-center gap-1"><span className="font-semibold">{home.type}</span> <Dot />
          Ejerudgift: {home.netto.toLocaleString('en-US').replace(/,/g, '.')} kr.</p>
        </div>
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex gap-2 text-sm">
            <div>
              <p className="px-2 py-0.5 text-white rounded"
                style={{ backgroundColor: bgColor }}>
                  {home.energylabel}
              </p>
            </div>
            <p className="flex items-center gap-1">{home.rooms} værelser <Dot /> {home.livingspace} m²</p>
          </div>
          <p className="text-sm font-semibold">kr. {home.price.toLocaleString('en-US').replace(/,/g, '.')}</p>
        </div>
      </Link>
    </div>
  )
}
