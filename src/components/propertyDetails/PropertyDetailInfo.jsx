import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from "react";
import { useLoaderData } from "react-router";
import { PiMountainsThin } from "react-icons/pi";
import { IoLayersOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const PropertyDetailInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const homes = useLoaderData();
  console.log(homes);
  const tabsList = [
    <img src={homes.images[0].url} alt="" />,
    <img src={homes.floorplan.url} alt="floorplan" />,
    <iframe
      width="760"
      height="600"
      frameBorder="0"
      style={{ border: 0 }}
      src={`https://www.google.com/maps?q=${homes.lat},${homes.long}&z=15&output=embed`}
      allowFullScreen
      title="Map"
    />,
    <p>Favorite</p>
  ];

  return (
    <div className="sm:flex justify-between items-center gap-4 border-b-1 border-gray-300 pb-3 my-6">
      <div className="flex flex-col text-sm font-semibold">{homes.adress1} <span>{homes.postalcode} {homes.city}</span>
      </div>
      <div>
        <div  className="flex gap-4 text-2xl">
          <button onClick={() => {setIsOpen(true); setActiveTab(0);}}><PiMountainsThin /></button>
          <button onClick={() => {setIsOpen(true); setActiveTab(1);}}><IoLayersOutline /></button>
          <button onClick={() => {setIsOpen(true); setActiveTab(2);}}><CiLocationOn /></button>
          <button onClick={() => {setIsOpen(true); setActiveTab(3);}}><CiHeart /></button>
        </div>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/97 bg-opacity-90" aria-hidden="true" />
          <div className="fixed inset-0 items-center justify-center">
            <DialogPanel className="w-1/2 h-[75%] mx-auto mt-22 text-white flex flex-col justify-center items-center">
              {tabsList[activeTab]}
              <div className="flex gap-4 text-2xl mt-4 ml-6">
                <button onClick={() => setActiveTab(0)}><PiMountainsThin className="text-white" /></button>
                <button onClick={() => setActiveTab(1)}><IoLayersOutline className="text-white" /></button>
                <button onClick={() => setActiveTab(2)}><CiLocationOn className="text-white" /></button>
                <button onClick={() => setActiveTab(3)}><CiHeart className="text-white" /></button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
      <div className="font-semibold">
        kr. {homes.price}
      </div>
    </div>
  )
}

export default PropertyDetailInfo