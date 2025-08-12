import { mixData } from "../../data/mixData";
import Button from "./Button";

export default function UdvalgteBoliger() {
  return (
    <section className="sm:flex flex-col items-center justify-center gap-4 my-6">
      <p className="font-bold text-2xl">{mixData[0].udvalgteTitle}</p>
      <p className="text-center text-cPara w-150">{mixData[0].udvalgtePara}</p>
      <Button name={mixData[0].udvalgteBtn} />
    </section>
  )
}
