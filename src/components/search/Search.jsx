// import HomeCard from "../cards/HomeCard.jsx";
import SearchInput from "./SearchInput.jsx";


export default function Search({ searchStyle, hiddenSome, pHolder, searchText }) {

  return (
    <section className={`flex flex-col justify-center max-w-lg mx-auto ${searchStyle === "heroSection" ? "" : ""}`}>
      {/* <section className="flex flex-col justify-center max-w-lg mx-auto"> */}
        {hiddenSome && (
          <p className="text-black sm:text-white sm:text-2xl text-center font-bold">Søg efter din drømmebolig</p>
        )}
        <div className={`bg-white p-6 shadow-lg space-y-2 ${searchStyle === "heroSection" ? "sm:mt-8" : ""}`}>
          <p className="sm:text-xl font-semibold flex flex-col">{searchText}<span className="border-2 inline-block w-8"></span></p>
          {hiddenSome && (
            <p className="text-xs text-gray-500">Skriv din søgning herunder</p>
          )}
          {/* <SearchInput searchHidden={hiddenSome} pHolder="Search" /> */}
          <SearchInput hiddenSome={hiddenSome} pHolder={pHolder} />
        </div>
      </section>
  )
}
