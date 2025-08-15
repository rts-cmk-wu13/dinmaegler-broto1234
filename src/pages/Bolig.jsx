import PropertySearch from "../components/PropertySearch";
import Lists from "../components/Lists";

export default function BoligLists() {  
  
  return (
    <section className="">
      <p className="text-3xl font-semibold py-8 bg-primary text-white text-center">Boliger til salg</p>
      <PropertySearch />
      <Lists component="HomeCrd" />
    </section>
  );
}
