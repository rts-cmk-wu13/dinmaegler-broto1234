import { useLoaderData } from 'react-router';
import AgentInfoCard from '../components/AgentInfoCard';

const DetailAgent = () => {
  const agents = useLoaderData();
  console.log(agents);

  return (
    <section>
      <p className="text-3xl font-semibold py-8 bg-primary text-white text-center">Kontakt en medarbejder</p>
      <div className="sm:container py-14">
        <div className="w-[16rem] sm:w-[23rem] md:w-[28rem] p-4 border-1 border-borderLine">
          <AgentInfoCard agentData={agents} />
          <div className="my-4">
            <p className="font-semibold -mb-3">Om {agents.name}</p>
            <span className="border-1 inline-block w-10 text-black"></span>
            <p className="text-xs/6 text-justify">{agents.description}</p>
          </div>
        </div>
        <div>
        </div>

        <div></div>
      </div>
    </section>
  )
}

export default DetailAgent