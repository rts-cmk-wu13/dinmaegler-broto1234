import { useLoaderData } from 'react-router';
import AgentInfoCard from '../components/AgentInfoCard';
import Contact from './Contact';
import ContactForm from '../components/ContactForm';
import Search from '../components/search/Search';
import Banner from '../components/Banner';


const DetailAgent = () => {
  const {detailAgent} = useLoaderData();
  // console.log(detailAgent);

  return (
    <section>
      <Banner bannerText="Kontakt en medarbejder" />
      <div className="container my-4 sm:my-16 sm:grid grid-cols-3 gap-4">
        <div className="sm:col-span-2 w-[16rem] sm:w-[25rem] lg:w-[28rem] p-4 border-1 border-borderLine">
          <AgentInfoCard agentData={detailAgent} />
          <div className="my-4">
            <p className="font-semibold -mb-3">Om {detailAgent.name}</p>
            <span className="border-1 inline-block w-10 text-black"></span>
            <p className="text-xs/6 text-justify">{detailAgent.description}</p>
          </div>
          <div className="mt-8 p-4 border-1 border-borderLine">
            <p className="font-semibold -mb-3">Kontakt {detailAgent.name}</p>
            <span className="border-1 inline-block w-10 text-black"></span>
            <ContactForm nPholder="Indtast navn" ePholder="Indtast email" emnePholder="Hvad drejer din henvendelse sig om?" bksPholder="Skriv din besked her..."  showNewsletter={false} />
          </div>
        </div>
        <div className="relative space-y-2">
          <Search hiddenSome={false} pHolder="Search" searchText="Search Property" />
          <div className="bg-primary px-6 py-4 text-white text-center space-y-2">
            <p className="text-xs mx-8">Find The Best Property For Rent Or Buy</p>
            <span className="border-1 inline-block w-10 text-white"></span>
            <p className="text-[12px]">Call Us Now</p>
            <p className="text-xs font-semibold">+45 12 34 56 78</p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default DetailAgent