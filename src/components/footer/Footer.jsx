// import Dms from './Dms';
import FooterLinks from './FooterLinks';

export default function Footer() {
  return (
    <footer className="pt-10 bg-[linear-gradient(to_bottom,_var(--color-bg01)_70%,_#ffffff_70%)]">
      <FooterLinks />
      {/* <Dms /> */}
      <p className="bg-primary text-center text-sm text-white py-2">Coded By <span className="font-bold">Satyobroto Talukder</span> &copy; 2025</p>
    </footer> 
  )
}
