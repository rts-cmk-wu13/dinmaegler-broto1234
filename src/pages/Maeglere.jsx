
import AgentsLists from "../components/AgentsLists";
import Banner from "../components/Banner";

export default function MaeglereLists() {  
  // console.log(agents);
  // const homesToShow = limit ? homes.slice(0, limit) : homes;

  return (
    <section className="">
      <Banner bannerText="Medarbejdere i Roskilde" />
      <AgentsLists />
    </section>
  );
}
