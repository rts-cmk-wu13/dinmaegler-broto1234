// import { BsTelephone } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export const contactLinks = [
  {id: 1, name: 'Ring til os', info: '+45 1234 5678', Image: BsTelephoneFill },
  {id: 2, name: 'Send en mail', info: '4000@dinmaegler.com', Image: FaPaperPlane },
  {id: 3, name: 'Butik', info: 'Stændertorvet 78, 4000 Roskilde', Image: IoLocationSharp }
]

export const quickLinks = [
  {id: 1, name: 'Boliger til salg', href: 'bolig'},
  {id: 2, name: 'Mæglere', href: 'maeglere'},
  {id: 3, name: 'Mine favoritter', href: 'favoritter'},
  {id: 4, name: 'Kontakt os', href: 'kontakt'}
];
