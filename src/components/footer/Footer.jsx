import FooterLinks from './FooterLinks';

export default function Footer() {
  return (
    <footer className="">
      <FooterLinks />
      <p className="bg-primary text-center text-sm text-white py-2">Coded By <span className="font-bold">Satyobroto Talukder</span> &copy; {new Date().getFullYear()}</p>
    </footer> 
  )
}
