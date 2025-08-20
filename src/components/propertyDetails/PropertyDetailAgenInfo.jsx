import { useLoaderData } from 'react-router';
import { BsTelephoneFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";

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
        <div className="w-[28rem] grid grid-cols-2 p-2 border-1 border-borderLine">
          <div className="">
            <img src={homes.agent.image.url} alt={homes.agent.name} />
          </div>
          <div className="p-4 space-y-2">
            <div className="">
              <p className="font-semibold">{homes.agent.name}</p>
              <p className="text-xs -mb-1">{homes.agent.title}</p>
              <span className="border-1 inline-block w-10 text-borderLine"></span>
            </div>
            <p className="flex gap-2 items-center text-xs"><BsTelephoneFill /> {homes.agent.phone}</p>
            <p className="flex gap-2 items-center text-xs"><FaPaperPlane /> {homes.agent.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetailAgenInfo