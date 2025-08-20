import { useLoaderData } from 'react-router';
import AgentInfoCard from '../AgentInfoCard';

const PropertyDetailAgenInfo = () => {
  const homes = useLoaderData();

  return (
    <div className="sm:grid grid-cols-2 gap-2 md:gap-6">
      <div className="">
        <p className="font-semibold mb-4">Beskrivelse</p>
        <p className="text-xs/6">{homes.agent.description}</p>
      </div>
      <div className="">
        <p className="font-semibold mb-4">Ansvarlig mægler</p>
        <div className="w-[23rem] md:w-[28rem] p-2 border-1 border-borderLine">
          <AgentInfoCard agentData={homes.agent} />
        </div>
      </div>
    </div>
  )
}

export default PropertyDetailAgenInfo