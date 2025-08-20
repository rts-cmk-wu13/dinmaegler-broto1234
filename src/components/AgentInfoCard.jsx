// import { useLoaderData  } from 'react-router';
import { BsTelephoneFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";

const AgentInfoCard = ({agentData}) => {
  // const homes = useLoaderData();
  //  homes.agent.
  // agent.
  console.log(agentData);

  return (
    <div className="w-[15rem] sm:w-[22rem] md:w-[27rem] sm:grid grid-cols-2 sm:gap-10 md:gap-8 items-center justify-between">
      <div className="w-[12rem]">
        <img src={agentData.image.url} alt={agentData.name} />
      </div>
      <div className="py-4 space-y-2">
        <div className="">
          <p className="font-semibold">{agentData.name}</p>
          <p className="text-xs -mb-1">{agentData.title}</p>
          <span className="border-1 inline-block w-10 text-borderLine"></span>
        </div>
        <p className="flex gap-2 items-center text-xs"><BsTelephoneFill /> {agentData.phone}</p>
        <p className="flex gap-2 items-center text-xs"><FaPaperPlane /> {agentData.email}</p>
      </div>
    </div>
  )
}

export default AgentInfoCard;