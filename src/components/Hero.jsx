import hero from '../assets/hero.png';
import Search from './search/Search';

export default function Hero() {
  return (
    <section className="relative my-4">
      <img src={hero} alt="Hero" style={{ filter: 'brightness(0.5)' }} />
      <Search searchStyle="heroSection" hiddenSome={true} pHolder="Get homes by type, Ex. villa, Ejerlejlighed etc." searchText="Søg blandt 158 boliger til salg i 74 butikker" />
    </section>
  )
}
