// import { useLoaderData  } from 'react-router';
import { BsTelephoneFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import SocialMedia from "./SocialMedia";

const AgentInfoCard = ({agentData}) => {
  //  console.log(agentData);

  return (
    <div className="sm:w-[25rem] lg:w-[28rem] sm:grid grid-cols-2 md:gap-8 items-center justify-between">
      <div className="w-[12rem] relative">
        <img src={agentData?.image?.url} alt={agentData?.name} />
        <SocialMedia />
      </div>
      <div className="py-4 space-y-2">
        <div className="">
          <p className="font-semibold">{agentData?.name}</p>
          <p className="text-[12px] text-gray-500 -mb-1">{agentData?.title}</p>
          <span className="border-1 inline-block w-10 text-borderLine"></span>
        </div>
        <p className="flex gap-2 items-center text-xs"><BsTelephoneFill /> {agentData?.phone}</p>
        <p className="flex gap-2 items-center text-xs"><FaPaperPlane /> {agentData?.email}</p>
      </div>
    </div>
  )
}
export default AgentInfoCard;