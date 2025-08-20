import { useLoaderData } from "react-router";

const PropertyDetailKey = ({ pkey }) => {
  const homes = useLoaderData();

  return (
    <div className="grid grid-cols-2">
      <div className="font-semibold capitalize">{pkey}:</div>
      <div className="">{homes[pkey] !== undefined && homes[pkey] !== null && homes[pkey] !== "" ? homes[pkey] : "-"}</div>
    </div>
  )
}

export default PropertyDetailKey