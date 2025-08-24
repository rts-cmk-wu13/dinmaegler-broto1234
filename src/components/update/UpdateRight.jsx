import updateImgOne from "../../assets/updateImgOne.png";
import updateImgTwo from "../../assets/updateImgTwo.png";

export default function UpdateRight() {
  return (
    <div className="w-[250px] sm:w-[400px] mx-auto">
      <div className="relative flex items-center">
        <div className="w-30 z-1">
          <img src={updateImgOne} alt="update image one" />
        </div>
        <div className="w-30 absolute right-0 sm:right-30">
          <img src={updateImgTwo} alt="update image two" />
        </div>
      </div>
    </div>
  )
}
