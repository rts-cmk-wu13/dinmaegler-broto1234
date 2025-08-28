import { useFavorites } from '../contexts/FavoritesContext';
import { useLoaderData } from "react-router-dom";
import HomeCard from "../components/cards/HomeCard";
import Banner from "../components/Banner";

export default function Favoritter() {
  const homes = useLoaderData();
  const { favorites, toggleFavorite } = useFavorites();

  // Filter homes to only show favorites
  const favoriteHomes = homes.filter(home => favorites.includes(home.id));

  return (
    <section className="my-12">
      <Banner bannerText="Mine favoritboliger" />
      <div className="container my-8">
        {favoriteHomes.length === 0 ? (
          <p>Du har ingen favoritter endnu.</p>
        ) : (
          <div>
            {favoriteHomes.map((home) => (
              <HomeCard
                key={home.id}
                home={home}
                favoriteHomeIcon={true}
                favoriteCardStyle={true}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
