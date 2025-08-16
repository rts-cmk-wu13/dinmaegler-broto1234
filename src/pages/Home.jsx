// import { useLoaderData } from "react-router";
import DanskeHjem from "../components/danskeHjem/DanskeHjem";
import Hero from "../components/hero/Hero";
import Nyhedsbrev from "../components/Nyhedsbrev";
// import UdvalgteBoliger from "../components/HomeBoligAgent";
import HomeBoligAgent from "../components/HomeBoligAgent";
import {mixData} from "../../data/mixData";
import Update from "../components/update/Update";

export default function Home() {
  // const {homes, agents} = useLoaderData();

  return (
    <div className="">
      <Hero />
      <DanskeHjem />
      <HomeBoligAgent limit={4} categoryName={mixData[0]} component="HomeCrd" />
      <Nyhedsbrev />
      <HomeBoligAgent limit={3} categoryName={mixData[1]} component="AgentsCrd" />
      <Update />
    </div>
  )
}
