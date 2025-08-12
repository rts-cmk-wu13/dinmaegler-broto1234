import {NavLink} from 'react-router';
import logo from '../assets/logo.svg';

export default function LogoCompo() {
  return (
    <div>
        <NavLink to="/">
          <img src={logo} alt="logo" width={200} height={200} />
        </NavLink>
      </div>
  )
}
