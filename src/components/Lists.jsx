import { useLoaderData } from "react-router";
import AgentCard from "./cards/AgentCard.jsx";
import HomeCard from "./cards/HomeCard.jsx";

export default function Lists({ limit, component }) {
  const combinedLoader = useLoaderData();
  // Support both array and object loader returns
  const homes = Array.isArray(combinedLoader)
    ? combinedLoader
    : combinedLoader.homes || [];
  const agents = Array.isArray(combinedLoader)
    ? combinedLoader
    : combinedLoader.agents || [];
  const homesToShow = limit ? homes.slice(0, limit) : homes;
  const agentsToShow = limit ? agents.slice(0, limit) : agents;

  return (
    <div className="container my-12 space-y-4 sm:space-y-0 sm:grid grid-cols-2 gap-4">
      {component === "HomeCrd" &&
        homesToShow.map((home) => (
          <HomeCard key={home.id} home={home} />
        ))}
      {component === "AgentsCrd" &&
        agentsToShow.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
    </div>
  );
}