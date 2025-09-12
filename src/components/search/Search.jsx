import SearchInput from "./SearchInput.jsx";

export default function Search({ searchStyle, hiddenSome, pHolder, searchText }) {

  return (
    <section className="search flex flex-col justify-center max-w-lg mx-auto">
        {hiddenSome && (
          <p className="text-black sm:text-white sm:text-2xl text-center font-bold">Søg efter din drømmebolig</p>
        )}
        <div className={`p-6 shadow-lg space-y-2 ${searchStyle === "heroSection" ? "bg-white sm:mt-8" : "bg-agentSrcColor"}`}>
          <p className="sm:text-xl font-semibold flex flex-col">{searchText}<span className={`${searchStyle === "heroSection" ? "border-2 inline-block w-8" : "border-1 inline-block w-full text-borderLine my-1"}`}></span></p>
          {hiddenSome && (
            <p className="text-xs text-gray-500">Skriv din søgning herunder</p>
          )}
          <SearchInput hiddenSome={hiddenSome} pHolder={pHolder} />
        </div>
      </section>
  )
}
