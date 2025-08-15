import updateImgOne from "../../assets/updateImgOne.png";
import updateImgTwo from "../../assets/updateImgTwo.png";

export default function UpdateRight() {
  return (
    <div className="w-[400px] mx-auto">
      <div className="relative flex items-center">
        <div className="w-30 z-40">
          <img src={updateImgOne} alt="update image one" />
        </div>
        <div className="w-30 absolute right-30 z-30">
          <img src={updateImgTwo} alt="update image two" />
        </div>
      </div>
    </div>
  )
}
