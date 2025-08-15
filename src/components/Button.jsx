import { Link } from "react-router";

export default function Button({ to, name, txColor, bgColor, bdColor, icon }) {
  return (
    <Link to={to} className={`flex items-center text-center text-[10px] px-4 py-1 border-1 ${bgColor} ${txColor} ${bdColor}  hover:opacity-80 transition-all duration-300`}>
      {icon && <span className="inline-block mr-1">{icon}</span>}
      {name}
    </Link>
  )
}
