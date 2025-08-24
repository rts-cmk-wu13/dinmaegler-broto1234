import { useLoaderData } from "react-router";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

const ThumbTab = () => {
  const homes = useLoaderData();

  return (
    <TabGroup>      
      <TabPanels>
        <TabPanel><img src={homes?.images[0].url} alt="houseOne" /></TabPanel>
        <TabPanel><img src={homes?.images[1].url} alt="houseTwo" /></TabPanel>
        <TabPanel><img src={homes?.images[2].url} alt="houseThree" /></TabPanel>
      </TabPanels>
      <TabList className="flex gap-2 justify-center sm:justify-between">
        <Tab className="w-12 xs:w-30 sm:w-60"><img src={homes?.images[0].url} alt="houseOne" /></Tab>
        <Tab className="w-12 xs:w-30 sm:w-60"><img src={homes?.images[1].url} alt="houseTwo" /></Tab>
        <Tab className="w-12 xs:w-30 sm:w-60"><img src={homes?.images[2].url} alt="houseThree" /></Tab>
      </TabList>
    </TabGroup>
  )
}

export default ThumbTab