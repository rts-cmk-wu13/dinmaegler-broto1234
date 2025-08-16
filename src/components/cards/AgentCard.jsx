import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { energyColors } from '../../../data/eneryColor';
import Dot from '../Dot';

export default function AgentCard({ agent }) {

//  console.log(agent);

  return (
    <div className="shadow-md rounded-sm overflow-hidden">  
      <div className="w-full h-36 sm:h-44 lg:h-80">
        <img src={agent.image.url} alt={agent.title} className="w-full" />
      </div> 
      <div className="flex flex-col items-center py-4 space-y-1">
        <p className="text-base font-semibold">{agent.name}</p>
        <p className="text-xs/3">{agent.postalcode} {agent.title}</p>
        <div className="flex items-center gap-2">  
          <MdEmail size={14} className="text-black" />
          <FaLinkedinIn size={14} className="text-black" />
        </div>         
      </div>
     
    </div>
  )
}
