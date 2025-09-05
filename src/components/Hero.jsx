import { useState, useEffect } from "react";
import hero from '../assets/hero.png';
import Search from './search/Search';

export default function Hero() {
  
  const [hideImage, setHideImage] = useState(window.innerWidth >= 769);

  useEffect(() => {
    const handleResize = () => {
      setHideImage(window.innerWidth >= 769);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
     className="relative my-4 h-auto xs:h-[15rem] sm:h-[30rem] flex justify-center items-center"
     style={{
      backgroundImage: hideImage ? `url(${hero})` : "none",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      {/* Dark overlay */}
      {hideImage && <div className="absolute inset-0 bg-black/50"></div>}
      {/* Content above overlay */}
      <div className="relative z-10 w-full flex justify-center">
        <Search
          searchStyle="heroSection"
          hiddenSome={true}
          pHolder="Get homes by type, Ex. villa, Ejerlejlighed etc."
          searchText="Søg blandt 158 boliger til salg i 74 butikker"
        />
      </div>
    </section>
  )
}
