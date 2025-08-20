import { useLoaderData } from "react-router";
import AgentCard from "./cards/AgentCard";

const AgentsLists = () => {
  const agents = useLoaderData();
  return (
    <div className="container py-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-y-6">
      {agents?.map(agent => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  )
}

export default AgentsLists