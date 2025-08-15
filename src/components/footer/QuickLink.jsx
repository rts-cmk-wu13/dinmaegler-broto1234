import { NavLink } from 'react-router';
import { quickLinks } from '../../../data/footerLinks';
import Dms from './Dms';


export default function QuickLink() {
  return (
    <div className="w-46">
      <p className="text-lg font-semibold">Quick Links</p>
      <div className="">
        {quickLinks.map(link => (
          <div key={link.id} className="">
            <NavLink key={link.id} to={`/${link.href}`} className="text-xs md:text-md text-primary hover:text-secondary">
                {link.name}
              </NavLink>
          </div>
        ))}
        <div className="">
          <NavLink to="/about" className="text-xs md:text-md text-primary hover:text-secondary">
            Log ind / bliv bruger
          </NavLink>
        </div>
        <Dms />
      </div>
    </div>
  )
}
