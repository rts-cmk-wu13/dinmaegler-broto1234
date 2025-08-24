// import HomeCard from "../cards/HomeCard.jsx";
import SearchInput from "./SearchInput.jsx";


export default function Search({ searchStyle, hiddenSome, pHolder, searchText }) {

  return (
    <section className={`flex flex-col justify-center max-w-lg mx-auto ${searchStyle === "heroSection" ? "absolute inset-0" : ""}`}>
      {/* <section className="flex flex-col justify-center max-w-lg mx-auto"> */}
        {hiddenSome && (
          <h1 className="text-white text-2xl text-center font-bold">Søg efter din drømmebolig</h1>
        )}
        <div className={`bg-white p-6 shadow-lg space-y-2 ${searchStyle === "heroSection" ? "mt-8" : ""}`}>
          <p className="font-semibold flex flex-col">{searchText}<span className="border-2 inline-block w-8"></span></p>
          {hiddenSome && (
            <p className="text-xs text-gray-500">Skriv din søgning herunder</p>
          )}
          {/* <SearchInput searchHidden={hiddenSome} pHolder="Search" /> */}
          <SearchInput hiddenSome={hiddenSome} pHolder={pHolder} />
        </div>
      </section>
  )
}
