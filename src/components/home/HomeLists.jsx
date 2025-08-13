import { useLoaderData } from "react-router";
import HomeCard from "./HomeCard.jsx";

export default function HomeLists({ limit }) {
  const homes = useLoaderData();
  console.log(homes);
  const homesToShow = limit ? homes.slice(0, limit) : homes;

  return (
    <div className="container my-6 space-y-4 sm:space-y-0 sm:grid grid-cols-2 gap-4">
        {homesToShow.map((home) => (
          <div key={home.id}  className="max-w-80 rounded-md overflow-hidden shadow-lg">
            <HomeCard home={home} />
          </div>
        ))}
      </div>
  )
}
