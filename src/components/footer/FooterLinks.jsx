
import logo from '../../assets/logo.svg';
import LogoCompo from '../LogoCompo';
import { mixData } from '../../../data/mixData';
import ContactLink from './ContactLink';
import QuickLink from './QuickLink';

export default function FooterLinks() {
  return (
    <div className="container">
      <LogoCompo />
      <p className="text-sm my-2 max-w-140">{mixData[0].footerLogoText}</p>
      <div className="my-12 space-y-2 sm:grid grid-cols-2 gap-4">
        <ContactLink />
        <QuickLink />
      </div>
      
    </div>
  )
}
