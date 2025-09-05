// import PropertySearch from "../components/PropertySearch";
import Lists from "../components/Lists";
import BoligLists from "../components/BoligLists.jsx";
import Banner from "../components/Banner";

export default function Boliger() {

  return (
    <section className="bg-gray-50 mb-6">
      <Banner bannerText="Boliger til salg" />
      <BoligLists />
    </section>
  );
}
