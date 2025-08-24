// import PropertySearch from "../components/PropertySearch";
import Lists from "../components/Lists";
import BoligLists from "../components/BoligLists";
import Banner from "../components/Banner";

export default function Boliger() {

  return (
    <section className="bg-gray-50 ">
      {/* <p className="text-3xl font-semibold py-8 bg-primary text-white text-center">Boliger til salg</p> */}
      <Banner bannerText="Boliger til salg" />
      <BoligLists />
    </section>
  );
}
