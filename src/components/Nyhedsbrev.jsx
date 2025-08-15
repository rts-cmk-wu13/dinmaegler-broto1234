import building from "../assets/building.png";
import { FaArrowRight } from "react-icons/fa6";

export default function Nyhedsbrev() {
  return (
    <section className="py-12 md:py-18 text-white relative" style={{
        backgroundImage: `url(${building})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} >
        <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#162A41",
          opacity: 0.9,
          zIndex: 0,
        }}
      ></div>
      <div className="container text-center space-y-2 sm:space-y-0 sm:grid grid-cols-2 gap-2 items-center relative z-10">
        <p className="text-xs md:text-sm lg:text-xl max-w-90">Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet</p>
        <div className="flex max-w-md rounded-sm bg-white px-3 py-2">
          <input 
            type="email"
             placeholder="Indtast din email adresse" 
             className="min-w-0 flex-auto  text-sm text-cPara outline-0 outline-offset-0 outline-primary" 
             />
          <button type="submit" className="cursor-pointer"><FaArrowRight style={{ color: "#455463" }} /></button>
        </div>                
    </div>
    </section>
  )
}
