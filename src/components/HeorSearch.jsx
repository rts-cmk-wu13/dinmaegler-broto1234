import Button from "./Button";

export default function Search() {
  return (
    <section className="absolute inset-0 flex flex-col justify-center max-w-lg mx-auto">
        <h1 className="text-white text-2xl text-center font-bold">Søg efter din drømmebolig</h1>
        <div className="bg-white p-6 shadow-lg mt-4 space-y-2">
          <p className="font-semibold flex flex-col">Søg blandt 158 boliger til salg i 74 butikker <span className="border-2 inline-block w-8"></span></p>
          <p className="text-sm">Hvad skal din næste bolig indeholde</p>
          <div className="flex gap-2">
            <input type="text" placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende" className="border-2 border-gray-300 px-2 w-full placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-inputbg" />
            <Button to="#" name="Søg" txColor="text-white" bgColor="bg-primary" bdColor="border-primary"/>
          </div>
        </div>
      </section>
  )
}
