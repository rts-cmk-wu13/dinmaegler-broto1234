import HomeCard from "../cards/HomeCard.jsx";
import HeroInput from "./HeroInput";


export default function Search() {

  return (
    <section className="absolute inset-0 flex flex-col justify-center max-w-lg mx-auto">
        <h1 className="text-white text-2xl text-center font-bold">Søg efter din drømmebolig</h1>
        <div className="bg-white p-6 shadow-lg mt-20 space-y-2">
          <p className="font-semibold flex flex-col">Søg blandt 158 boliger til salg i 74 butikker <span className="border-2 inline-block w-8"></span></p>
          <p className="text-sm">Hvad skal din næste bolig indeholde</p>
          <HeroInput />
        </div>
      </section>
  )
}
