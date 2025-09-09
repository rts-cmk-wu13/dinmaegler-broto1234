import { Link } from "react-router";
import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoSkype } from "react-icons/io5";

const SocialMedia = () => {
  return (
    <div className="w-24 px-1 py-2 flex justify-center gap-2 bg-primary absolute top-1/2">
      <Link to="#" className="text-white hover:text-gray-700"><IoLogoInstagram /></Link>
      <Link to="#" className="text-white hover:text-gray-700"><BiLogoLinkedin /></Link>
      <Link to="#" className="text-white hover:text-gray-700"><IoLogoSkype /></Link>
    </div>
  )
}

export default SocialMedia