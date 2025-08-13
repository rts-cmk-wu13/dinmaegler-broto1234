import { Link } from "react-router";
import { mixData } from "../../data/mixData";
import Button from "./Button";
import HomeLists from "./home/HomeLists";

export default function UdvalgteBoliger() {
  return (
    <section className="sm:flex flex-col items-center justify-center gap-4 py-6 bg-bg01">
      <p className="font-bold text-2xl">{mixData[0].udvalgteTitle}</p>
      <p className="text-center text-cPara max-w-150">{mixData[0].udvalgtePara}</p>
      <HomeLists limit={4}/>
      <Button to="/bolig" name={mixData[0].udvalgteBtn} />
    </section>
  )
}
