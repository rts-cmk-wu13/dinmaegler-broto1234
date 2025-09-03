import { useState } from 'react';
import {NavLink} from 'react-router';
import { navLinks } from '../../data/navName';
import LogoCompo from './LogoCompo';
import { FiX } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

export default function LogoMenu() {

  const [open, setOpen] = useState(false);
  
  return (
    <section className="py-4 sm:container relative">
      <div className="mx-4 sm:mx-0 flex justify-between items-center text-xs md:text-base">
        <LogoCompo />
          <div>
            <nav className="hidden sm:flex gap-4">
              {navLinks.map((item) => (
                <NavLink key={item.id} to={`/${item.href}`} className="text-primary hover:text-secondary">
                  {item.name}
                </NavLink>
              ))}
            </nav>
            {/* Mobile Button */}
            <button
              className="sm:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setOpen(!open)}
            >
              {open ? <FiX size={24} /> : <RxHamburgerMenu size={24} />}
            </button>
          </div>
      </div>
      {/* mobile menu */}
        {open && (
          <div className="sm:hidden absolute w-full bg-white shadow-md">
            <nav className="px-4 py-3 space-y-4">
              {navLinks.map((item) => (
                <NavLink 
                  key={item.id} 
                  to={`/${item.href}`} 
                  className="block text-primary hover:text-secondary" 
                  onClick={() => setOpen(false)}>
                    {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
    </section>
  )
}
