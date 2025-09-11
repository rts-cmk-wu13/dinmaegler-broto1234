import { Link } from 'react-router-dom'; // <-- Fix import!
import { energyColors } from '../../../data/eneryColor';
import Dot from '../Dot';
import { useFavorites } from '../../contexts/FavoritesContext';
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import Button from '../Button';

export default function HomeCard({ home, favoriteHomeIcon = true, favoriteCardStyle }) {
  const { favorites, toggleFavorite } = useFavorites();
  const bgColor = energyColors[home.energylabel] || "#e0e0e0";
  // const isFavorite = favorites.includes(home.id);

  return (
    <div className={`home-card relative shadow-md rounded-sm overflow-hidden cursor-pointer hover:scale-101 hover:shadow-lg transition-all ${favoriteCardStyle ? 'my-6' : ''}`}>
      <Link to={`/homes/${home.id}`} className={`${favoriteCardStyle ? 'grid grid-cols-5 p-2 border-2 border-borderLine' : ''}`}>
        <div className={`${favoriteCardStyle ? 'w-25 h-20' : 'w-full h-36 sm:h-44 lg:h-80'}`}>
          <img src={home.images[0].url} alt={home.title} className="w-full" />
        </div>
        <div className={`flex flex-col items-start space-y-1 py-2 border-b-2 border-borderLine ${favoriteCardStyle ? 'col-span-2 border-none mx-2' : 'mx-4'}`}>
          <p className="text-base font-semibold">{home.adress1}</p>
          <p className="text-sm">{home.postalcode} {home.city}</p>
          <p className="flex items-center gap-1">
            <span className="font-semibold">{home.type}</span>
            <Dot />
            <span className={`${favoriteCardStyle ? 'flex text-[1rem]' : ''}`}>
              <span className={`${favoriteCardStyle ? 'mr-1' : ''}`}>Ejerudgift : </span>
              <span>{home.netto.toLocaleString('en-US').replace(/,/g, '.')} kr.</span>
            </span>
          </p>
        </div>
        <div className={`flex justify-between py-2 ${favoriteCardStyle ? 'col-span-2 items-start' : 'items-center px-4'}`}>
          <div className="flex gap-2 text-sm">
            <div>
              <p className="px-2 py-0.5 text-white rounded" style={{ backgroundColor: bgColor }}>
                {home.energylabel}
              </p>
            </div>
            <p className="flex items-center gap-1">{home.rooms} værelser <Dot /> {home.livingspace} m²</p>
          </div>
          <p className="text-sm font-semibold">kr. {home.price.toLocaleString('en-US').replace(/,/g, '.')}</p>
        </div>
        {favoriteCardStyle && (
          <div className="col-span-1 col-end-6">
            <button
              onClick={e => {
                e.preventDefault();
                toggleFavorite(home.id);
              }}
              className="text-white text-xs px-2 py-3 bg-primary cursor-pointer"
            >
              Fjern fra favoritter
            </button>
          </div>
        )}
      </Link>
    </div>
  );
}