import { FaRegPaperPlane } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";

export default function InfoLogin() {
  return (
    <section className="bg-primary text-white">
      <div className="px-2 sm:container text-xs md:text-base flex justify-between items-center py-2">
        <div className="flex gap-2 items-center">
          <FaRegPaperPlane />
          <span>4000@dinmaegler.com</span>
        </div>
        <div className="flex gap-2 items-center">
          <LuUserRound />
          <span>Log ind</span>
        </div>
      </div>      
    </section>
  )
}
