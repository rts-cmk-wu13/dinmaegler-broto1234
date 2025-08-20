
import logo from '../../assets/logo.svg';
import LogoCompo from '../LogoCompo';
import { mixData } from '../../../data/mixData';
import ContactLink from './ContactLink';
import QuickLink from './QuickLink';
// import Dms from './Dms';

export default function FooterLinks() {
  const { footerLogoText } = mixData[3];
  return (
    <div className="sm:container max-w-250">
      <LogoCompo />
      <p className="text-sm my-2 max-w-140">{footerLogoText}</p>
      <div className="max-w-140 mt-8 space-y-2 md:flex justify-between items-start">
        <ContactLink />
        <QuickLink />
      </div>
      
    </div>
  )
}
