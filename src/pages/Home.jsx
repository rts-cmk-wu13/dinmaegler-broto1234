import DanskeHjem from "../components/danskeHjem/DanskeHjem";
import Hero from "../components/Hero";
import Nyhedsbrev from "../components/Nyhedsbrev";
import UdvalgteBoliger from "../components/UdvalgteBoliger";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <DanskeHjem />
      <UdvalgteBoliger />
      <Nyhedsbrev />
    </div>
  )
}
