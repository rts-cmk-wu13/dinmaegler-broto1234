// import { useLoaderData } from "react-router";
import { Link } from "react-router";
import { mixData } from "../../data/mixData";
import Button from "./Button";
import Lists from "./Lists";

export default function HomeBoligAgent({ limit, categoryName, component, favoriteHomeIcon }) {

  return (
    <section className="text-center sm:flex flex-col items-center justify-center gap-4 py-6 bg-bg01">
      <p className="font-bold text-2xl">{categoryName.title}</p>
      <p className="text-center text-cPara max-w-140">{categoryName.para}</p>
      {/* <Lists limit={4} category={categoryName.homes} /> */}
      <Lists limit={limit} component={component} favoriteHomeIcon={favoriteHomeIcon} />
      <Button to={categoryName.to} name={categoryName.btn} txColor="text-white" bgColor="bg-primary"  bdColor="border-primary"/>
    </section>
  )
}
