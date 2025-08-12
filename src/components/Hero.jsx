import hero from '../assets/hero.png';
import Search from './Search';

export default function Hero() {
  return (
    <section className="relative my-4">
      <img src={hero} alt="Hero" style={{ filter: 'brightness(0.5)' }} />
      <Search />
    </section>
  )
}
