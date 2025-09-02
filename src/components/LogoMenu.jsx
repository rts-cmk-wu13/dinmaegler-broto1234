import {NavLink} from 'react-router';
import { navItems } from '../../data/navName';
import LogoCompo from './LogoCompo';

export default function LogoMenu() {
  
  return (
    <section className="py-4 container sm:flex  justify-between items-center text-xs md:text-base">
      <LogoCompo />
      <nav className="sm:flex gap-4">
          {navItems.map((item) => (
            <NavLink key={item.id} to={`/${item.href}`} className="text-primary hover:text-secondary">
              {item.name}
            </NavLink>
          ))}
          {/* <NavLink to="bolig" className="text-primary hover:text-secondary"> Boliger til salg</NavLink>
          <NavLink to="maeglere" className="text-primary hover:text-secondary"> Mæglere</NavLink>
          <NavLink to="users" className="text-primary hover:text-secondary"> Mine favoritter</NavLink>
          <NavLink to="kontakt" className="text-primary hover:text-secondary"> kontakt</NavLink> */}

      </nav>
    </section>
  )
}
