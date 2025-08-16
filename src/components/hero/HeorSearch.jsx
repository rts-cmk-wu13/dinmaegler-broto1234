import { useState } from "react";
import { useLoaderData } from "react-router";
import Button from "../Button";
import HomeCard from "../cards/HomeCard.jsx";


export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const searchData = useLoaderData();
  const homesData = searchData.homes;
  // console.log(searchData.homes);

  // const filteredHomes = searchData.homes.filter(itm =>
  //   itm.type.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="absolute inset-0 flex flex-col justify-center max-w-lg mx-auto">
        <h1 className="text-white text-2xl text-center font-bold">Søg efter din drømmebolig</h1>
        <div className="bg-white p-6 shadow-lg mt-20 space-y-2">
          <p className="font-semibold flex flex-col">Søg blandt 158 boliger til salg i 74 butikker <span className="border-2 inline-block w-8"></span></p>
          <p className="text-sm">Hvad skal din næste bolig indeholde</p>
          <div>
            <div className="flex gap-2">
              <input
              type="text"
              placeholder="Get homes by type, Ex. villa, Ejerlejlighed etc." className="border-2 border-gray-300 px-2 w-full placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-inputbg" 
              onChange={handleChange}
              />
              <Button to="#" name="Søg" txColor="text-white" bgColor="bg-primary" bdColor="border-primary"/>
            </div>
            <div className="absolute xs:top-[20rem] bg-primary max-h-80 overflow-y-auto">              
              {homesData && homesData.filter(itm =>
              searchTerm.trim() !== "" && (
                itm.type.toLowerCase().includes(searchTerm.toLowerCase()) 
                // ||
                // String(itm.price).includes(searchTerm.replace(/[^\d]/g, "")) ||
                // itm.city.toLowerCase().includes(searchTerm.toLowerCase())
              )
                ).map(itm => (
                <div key={itm.id} onClick={() => setSearchTerm('')} className="flex items-center text-white gap-2 p-2 hover:bg-gray-100 cursor-pointer">
                  <div className="w-14 h-14">
                    <img src={itm.images[0].url} alt={itm.title} className="w-full" />
                  </div> 
                  <div className="mx-4 py-2 border-b-2 border-borderLine">
                    <p className="text-xs font-semibold">{itm.adress1}, {itm.postalcode} {itm.city}</p>
                    <p className="flex items-center gap-4 text-xs">
                      <span className="font-semibold text-indigo-400">{itm.type}</span>
                      <span><span className="font-semibold">Price: </span>{itm.price.toLocaleString('en-US').replace(/,/g, '.')} kr.</span>
                      <span><span className="font-semibold">Ejerudgift: </span>{itm.netto.toLocaleString('en-US').replace(/,/g, '.')} kr.</span>
                    </p>
                  </div>
                  {/* {itm.type} */}
                  {/* <HomeCard key={itm.id} home={itm} style={{ cursor: 'pointer', maxWidth: '50px' }} /> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}
