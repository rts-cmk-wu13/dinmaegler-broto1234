
import AgentsLists from "../components/AgentsLists";

export default function MaeglereLists() {  
  // console.log(agents);
  // const homesToShow = limit ? homes.slice(0, limit) : homes;

  return (
    <section className="">
      <p className="text-3xl font-semibold py-8 bg-primary text-white text-center">Mæglere</p>
      <AgentsLists />
    </section>
  );
}
