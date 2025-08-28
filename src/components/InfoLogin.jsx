import { Link, useLocation } from "react-router-dom";
import { FaRegPaperPlane } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import LoginLogout from "./LoginLogout";

export default function InfoLogin() {
  const location = useLocation();
  // console.log(location);

  return (
    <section className="bg-primary text-white">
      <div className="px-2 sm:container text-xs md:text-base flex gap-4 sm:justify-between items-center py-2">
        <div className="text-center sm:flex gap-4 py-2">
          <div className="flex gap-2 items-center">
            <FaRegPaperPlane />
            <span>4000@dinmaegler.com</span>
          </div>
          <div className="flex gap-2 items-center">
            <BsTelephoneFill />
            <span>+45 1234 5678</span>
          </div>
        </div>
        <LoginLogout />
      </div>      
    </section>
  )
}
