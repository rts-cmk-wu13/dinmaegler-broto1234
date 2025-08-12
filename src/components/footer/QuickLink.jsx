import { NavLink } from 'react-router';
import { quickLinks } from '../../../data/footerLinks';


export default function QuickLink() {
  return (
    <div className="max-w-96 pl-14">
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <div className="space-y-2">
        {quickLinks.map(link => (
          <div key={link.id} className="">
            <NavLink key={link.id} to={`/${link.href}`} className="text-primary hover:text-secondary">
                {link.name}
              </NavLink>
          </div>
        ))}
        <div className="">
          <NavLink to="/about" className="text-primary hover:text-secondary">
            Log ind / bliv bruger
          </NavLink>
        </div>
      </div>
      <p className="mt-8 text-cPara">Medlem af <br /> <NavLink to="https://toldst.dk/erhverv/toldsystemer/dms" target="_blank" className="font-bold text-4xl">DMS</NavLink> <br /> Dansk Mægler Sammenslutning</p>
    </div>
  )
}
