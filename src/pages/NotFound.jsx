import Button from "../components/Button";
import noFount from "../assets/notFound.png"

export default function NotFound() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-notFoundColor01 space-y-6 py-16">
        <img src={noFount} alt="Not Found" className="w-1/2 mx-auto"/>
        <p className="text-2xl font-semibold text-center">Du er havnet på en side som ikke findes!</p>
        <Button to="/" name="Tilbage til forsiden" txColor="text-white" bgColor="bg-primary" bdColor="border-primary"/>
      </div>
    </div>
  )
}
