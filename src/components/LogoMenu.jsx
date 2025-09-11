import { useState, Fragment } from 'react';
import {NavLink} from 'react-router';
import { navLinks } from '../../data/navName';
import LogoCompo from './LogoCompo';
import { FiX } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAuth } from '../contexts/AuthContext';

export default function LogoMenu() {

  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  
  return (
    <section className="logomenu py-4 sm:container relative">
      <div className="mx-4 sm:mx-0 flex justify-between items-center text-xs md:text-base">
        <LogoCompo />
          <div>
            <nav className="hidden sm:flex gap-4">
              {navLinks.map((item, idx) => (
                <Fragment key={item.id}>
                  <NavLink to={`/${item.href}`} className="text-primary hover:text-secondary">
                    {item.name}
                  </NavLink>
                  {/* Show Mine favoritter after the second item (idx === 1) */}
                  {idx === 1 && user && (
                    <NavLink to={`/favoritter`} className="text-primary hover:text-secondary">
                      Mine favoritter
                    </NavLink>
                  )}
                </Fragment>
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
          <div className="sm:hidden absolute w-full bg-white shadow-md z-30">
            <nav className="px-4 py-12 space-y-6">
              {navLinks.map((item, idx) => (
                <Fragment key={item.id}>
                  <NavLink to={`/${item.href}`}
                   className="block text-primary hover:text-secondary"
                   onClick={() => setOpen(false)}>
                    {item.name}
                  </NavLink>
                  {/* Show Mine favoritter after the second item (idx === 1) */}
                  {idx === 1 && user && (
                    <NavLink to={`/favoritter`} className="block text-primary hover:text-secondary onClick={() => setOpen(false)}">
                      Mine favoritter
                    </NavLink>
                  )}
                </Fragment>
              ))}
            </nav>
          </div>
        )}
    </section>
  )
}
