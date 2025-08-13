import { Link } from "react-router";

export default function Button({ name, to }) {
  return (
    <Link to={to} className="bg-inputbg text-white w-26 text-center text-sm p-2">
      {name}
    </Link>
  )
}
