import { useLoaderData } from "react-router";
import AgentCard from "./cards/AgentCard.jsx";
import HomeCard from "./cards/HomeCard.jsx";

export default function Lists({ limit, component, favoriteHomeIcon }) {
  const combinedLoader = useLoaderData();
  // Support both array and object loader returns
  const homes = Array.isArray(combinedLoader)
    ? combinedLoader
    : combinedLoader.homes || [];
  const agents = Array.isArray(combinedLoader)
    ? combinedLoader
    : combinedLoader.agents || [];
    
  // randomize homes array
  function shuffleArray(array) {
    return array.slice().sort(() => Math.random() - 0.5);
  }
  const shuffledHomes = shuffleArray(homes);
  const homesToShow = limit ? shuffledHomes.slice(0, limit) : shuffledHomes;
  const agentsToShow = limit ? agents.slice(0, limit) : agents;

  return (
    <div className={`container my-12 space-y-4 sm:space-y-0 sm:grid grid-cols-2 gap-4 ${component === "AgentsCrd" ? "sm:grid-cols-3" : ""}`}>
      {component === "HomeCrd" &&
        homesToShow.map((home) => (
          <HomeCard key={home.id} home={home} favoriteHomeIcon={favoriteHomeIcon} />
        ))}
      {component === "AgentsCrd" &&
        agentsToShow.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
    </div>
  );
}