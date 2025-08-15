import { mixData } from "../../../data/mixData"
import Button from "../Button";
import { PiGooglePlayLogoFill } from "react-icons/pi";
import { GrApple } from "react-icons/gr";

export default function UpdateLeft() {
  const { title, para,  linkOne, linkTwo, btnOne, btnTwo } = mixData[2];

  return (
    <div  className="max-w-70 mx-auto space-y-2 text-white">
        <p className="max-w-36 font-semibold">{title}</p>
        <p className="text-[10px]">{para}</p>
        <div className="flex gap-1">
          <Button
           to={linkOne}
           name={btnOne}
           target="_blank"
           txColor="text-primary" bgColor="bg-white" bdColor="border-primary"
           icon={<PiGooglePlayLogoFill />}
          />
          <Button
           to={linkTwo}
           name={btnTwo}
           target="_blank"
           txColor="text-white" bgColor="bg-transparent" bdColor="border-white"
           icon={<GrApple />}
          />
        </div>
      </div>
  )
}
