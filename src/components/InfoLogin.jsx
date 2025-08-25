import { Link, useLocation } from "react-router";
import { FaRegPaperPlane } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import Logout from "./Logout";

export default function InfoLogin() {
  const location = useLocation();
  // console.log(location);

  return (
    <section className="bg-primary text-white">
      <div className="px-2 sm:container text-xs md:text-base flex justify-between items-center py-2">
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <FaRegPaperPlane />
            <span>4000@dinmaegler.com</span>
          </div>
          <div className="flex gap-2 items-center">
            <BsTelephoneFill />
            <span>+45 1234 5678</span>
          </div>
        </div>
        <Logout />
        {/* {location.pathname !== "/login" && (
          <>
            <div className="">
              <span><Logout /></span>
            </div>
          </>
        )} */}
        {/* <Link to="/login" className="flex gap-2 items-center">
          <LuUserRound />
          <span>Log ind</span>
        </Link> */}
      </div>      
    </section>
  )
}
