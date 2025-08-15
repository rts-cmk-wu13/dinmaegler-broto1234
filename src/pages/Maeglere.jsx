import { useLoaderData } from "react-router";
import Lists from "../components/Lists";

export default function MaeglereLists() {  
  // const agents = useLoaderData();
  // console.log(agents);
  // const homesToShow = limit ? homes.slice(0, limit) : homes;

  return (
    <section className="">
      <p className="text-3xl font-semibold py-8 bg-primary text-white text-center">Mæglere</p>
      <Lists component="AgentsCrd" />
    </section>
  );
}
