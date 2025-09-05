import { useLoaderData } from "react-router";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

const ThumbTab = () => {
  const homes = useLoaderData();

  return (
    <TabGroup className="">      
      <TabPanels className="">
        <TabPanel className=""><div className="h-80 w-[50rem]"><img src={homes?.images[0].url} alt="houseOne" className="w-full"/></div></TabPanel>
        <TabPanel className=""><div className="h-80 w-[50rem]"><img src={homes?.images[1].url} alt="houseTwo" className="w-full"/></div></TabPanel>
        <TabPanel className=""><div className="h-80 w-[50rem]"><img src={homes?.images[2].url} alt="houseThree" className="w-full"/></div></TabPanel>
      </TabPanels>
      <TabList className="flex gap-2 justify-center sm:justify-between mt-1">
        <Tab className="w-20 sm:w-60"><img src={homes?.images[0].url} alt="houseOne" /></Tab>
        <Tab className="w-20 sm:w-60"><img src={homes?.images[1].url} alt="houseTwo" /></Tab>
        <Tab className="w-20 sm:w-60"><img src={homes?.images[2].url} alt="houseThree" /></Tab>
      </TabList>
    </TabGroup>
  )
}

export default ThumbTab