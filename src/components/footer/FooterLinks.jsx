import logo from '../../assets/logo.svg';
import LogoCompo from '../LogoCompo';
import { mixData } from '../../../data/mixData';
import ContactLink from './ContactLink';
import QuickLink from './QuickLink';
const { footerLogoText } = mixData[3];

export default function FooterLinks() {
  return (
    <div className="pt-8"
      style={{
      background: "linear-gradient(to bottom, #F8F8F8 0%, #F8F8F8 70%, #FFFFFF 70%, #FFFFFF 100%)"
      }}>
      <div className="container">
        <LogoCompo />
        <p className="text-sm my-2 max-w-140">{footerLogoText}</p>
        <div className="max-w-140 mt-8 space-y-2 md:flex justify-between items-start">
          <ContactLink fConText={true} />
          <QuickLink />
        </div>      
      </div>
    </div>
  )
}
